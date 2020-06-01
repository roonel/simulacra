import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {ContentService} from '../../content.service';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Router} from '@angular/router';
import {VehicleFilter} from '../vehicle-filter';
import {Vehicle} from '../../data-model/vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private contentService: ContentService, private route: ActivatedRoute, private router: Router) {
  }

  columnsToDisplay: string[] = ['name', 'source'];
  dataSource: MatTableDataSource<Vehicle>;
  selected: Vehicle;
  bookSources: string[];

  ngOnInit() {
    const data = this.contentService.getVehicleList();
    this.bookSources = [...new Set(data.map(d => d.source.book))];
    this.dataSource = new MatTableDataSource<Vehicle>(data);
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (d: Vehicle, filterString: string) => {
      if (!filterString) {
        return true;
      }
      let pred = true;
      const filter: VehicleFilter = JSON.parse(filterString);
      if (filter.name) {
        pred =
          pred && d.name.toLowerCase().includes(filter.name.toLowerCase());
      }
      if (pred && filter.sources && filter.sources.length > 0) {
        pred = pred && filter.sources.includes(d.source.book);
      }
      return pred;
    };

    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        const id = paramMap.get('id');
        this.selected = this.dataSource.data.find(s => s.id === id);
      } else if (this.dataSource.data.length > 0) {
        this.select(this.dataSource.data[0]);
      }
    });
  }

  select(row: Vehicle) {
    this.router.navigate(['vehicle-list', row.id]);
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter;
  }

}
