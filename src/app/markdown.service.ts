import {Injectable} from '@angular/core';
import {Remarkable} from 'remarkable';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  constructor() {
  }

  isOpen(token) {
    return /_open$/.test(token.type);
  }

  isClose(token) {
    return /_close$/.test(token.type);
  }

  toType(token) {
    return token.type.replace(/_open$/, '');
  }

  last(stack, nodes) {
    return stack.length ? stack[stack.length - 1] : nodes[nodes.length - 1];
  }

  collapse(str, options, inline = false) {

    const md = new Remarkable(options);
    let tokens = [];
    if (inline) {
      md.inline.parse(str, {}, {}, tokens);
    } else {
      tokens = md.parse(str, md);
    }

    const node = {
      type: 'root',
      nodes: []
    };
    const nodes = [node];
    const stack = [];
    const len = tokens.length;
    let idx = -1;

    while (++idx < len) {
      const tok = tokens[idx];
      const prev = this.last(stack, nodes);

      if (this.isOpen(tok)) {
        const token = {
          type: this.toType(tok),
          nodes: [tok]
        };
        prev.nodes.push(token);
        stack.push(token);
      } else if (this.isClose(tok)) {
        const parent = stack.pop();
        parent.nodes.push(tok);
      } else {
        prev.nodes.push(tok);
      }
    }

    return node;
  }

  extractInline(nodes, quickInline) {
    const inlineNode = nodes.find(n => n.type === 'inline');
    if (inlineNode) {
      if (quickInline) {
        return inlineNode.content;
      }
      const extracted = this.collapse(inlineNode.content, {}, true);
      return {
        type: 'inline', content: extracted.nodes.map(inline => {
          if (inline.nodes) {
            if (inline.type === 'link') {
              return {
                type: 'link',
                url: inline.nodes[0].href,
                text: inline.nodes[1].content,
              };
            }
            return {type: inline.type, content: inline.nodes[1].content};
          }
          return {type: inline.type, content: inline.content};
        })
      };
    }
    return nodes.filter(node => node.nodes).flatMap(node => this.extractInline(node.nodes, quickInline));
  }

  extract(nodes, quickInline = false) {
    return nodes.map(node => {

      if (['bullet_list', 'ordered_list'].includes(node.type)) {
        return {type: 'list', content: this.extract(node.nodes.filter(n => n.type === 'list_item')).flat()};
      }
      if (node.type === 'list_item') {
        return this.extract(node.nodes.filter(n => ['paragraph', 'bullet_list', 'ordered_list'].includes(n.type)));
      }
      if (node.type === 'table') {
        return {
          type: 'table',
          columns: this.extract(node.nodes.find(n => n.type === 'thead').nodes.filter(head => head.type === 'tr'), true).flat(),
          rows: this.extract(node.nodes.find(n => n.type === 'tbody').nodes.filter(head => head.type === 'tr'), true)
        };
      }

      if (node.type === 'heading') {
        return {type: node.type, level: node.nodes[0].hLevel, content: node.nodes[1].content};
      }

      if (node.nodes) {
        return this.extractInline(node.nodes, quickInline);
      }


      return node;
    });
  }

  toJson(data) {
    const output = this.collapse(data, {});
    return this.extract(output.nodes);
  }
}
