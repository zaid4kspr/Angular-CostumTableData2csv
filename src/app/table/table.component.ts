import { Component, OnInit, Input } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data: String[];
  @Input() items: String[];
  @Input() tableData: Array<Array<String>>;


  deleteRow(tab: Array<String>) {
    let index = this.tableData.indexOf(tab);
    console.log(index);
    this.tableData.splice(index, 1)

  }


  export() {

    new Angular2Csv(this.tableData, 'MyFile');

  }


  constructor() { }

  ngOnInit() {
  }

}
