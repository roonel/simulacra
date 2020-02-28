import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {Ancestry} from '../../data-model/ancestry';
import {MatTableDataSource} from '@angular/material/table';
import {ContentService} from '../../content.service';
import {MatSort} from '@angular/material/sort';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ancestry-list',
  templateUrl: './ancestry-list.component.html',
  styleUrls: ['./ancestry-list.component.css']
})
export class AncestryListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private contentService: ContentService, private route: ActivatedRoute, private router: Router) { }

  columnsToDisplay: string[] = ['name', 'source'];
  dataSource: MatTableDataSource<Ancestry>;
  selection: SelectionModel<Ancestry>;

  ngOnInit() {
    const data = this.contentService.getAncestryList();
    this.dataSource = new MatTableDataSource<Ancestry>(data);
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (d: Ancestry, filterString: string) => {
      if (!filterString) {
        return true;
      }
      return d.name.toLowerCase().includes(filterString.toLowerCase());
    };

    this.selection = new SelectionModel<Ancestry>(false, null);
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        const id = paramMap.get('id');
        this.selection.select(this.dataSource.data.find(s => s.name === id));
      }
    });
  }

  select(row: Ancestry) {
    this.router.navigate(['ancestry-list', row.name ]);
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter;
  }

}
