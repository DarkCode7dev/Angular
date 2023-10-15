import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@Component({
  selector: 'app-matTableSortSearchPaging',
  templateUrl: './matTableSortSearchPaging.component.html',
  styleUrls: ['./matTableSortSearchPaging.component.css']
})
export class MatTableSortSearchPagingComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['columnName']; // Add more column names as needed
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // Sample data, replace it with your actual data
  data = [
    { columnName: 'Value 1' },
    { columnName: 'Value 2' },
    { columnName: 'Value 1' },
    { columnName: 'Value 2' },
    { columnName: 'Value 1' },
    { columnName: 'Value 2' },
    { columnName: 'Value 1' },
    { columnName: 'Value 2' },
    // Add more rows as needed
  ];

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data, filter: string) => {
      const searchText = filter.toLowerCase();
      return data.columnName.toLowerCase().includes(searchText);
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}