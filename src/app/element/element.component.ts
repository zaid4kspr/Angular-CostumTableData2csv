import { Component, OnInit, Input } from '@angular/core';

import { AddComponent } from '../add/add.component'
import { Data } from '../data';
@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Input() value: String[]
  @Input() data: String[]

  i: number = 0;
  j: number = 0;
  items: String[] = [];
  tableData: Array<Array<String>> = [];


  delete(ch: String) {
    let index = this.data.indexOf(ch);
    this.data.splice(index, 1);

    let lengthh = this.tableData.length
    let b = 0;
    for (b = 0; b < lengthh; b++) {
      this.tableData[b].splice(index, 1)
    }
  }


  verif(): boolean {
    let vb: boolean;
    vb = false;
    for (let a = 0; a < this.items.length; a++) {
      if (this.items[a] == "") {
        vb = true;
      }
    }
    return vb;
  }


  sendToC3() {
    if (this.verif()) {
      alert("verifiez les champs vides");
    }
    else {
      let tableInter: String[] = [];
      for (let a = 0; a < this.items.length; a++) {
        if (this.items[a] != "") {
          tableInter[a] = this.items[a];
        }
        else {
          tableInter[a] = "";
        }
      }


      this.tableData.push(tableInter);

      for (let x = 0; x < this.tableData.length; x++) {

        if (this.tableData[x].length < tableInter.length) {
          for (let c = 0; c <= (tableInter.length - this.tableData[x].length); c++) { this.tableData[x].push(""); }

        }
      }



      for (this.i = 0; this.i < this.data.length; this.i++) {
        this.items[this.i] = "";
      }

    }
  }

  constructor() { }

  ngOnInit() {
  }

}
