import { Component, OnInit } from '@angular/core';
import { ElementComponent } from '../element/element.component';
import { Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  data: String[] = new Array();
  value = ""



  constructor() { }
  myMethod() {

    if (this.value == "") {
      alert("Column name invalid ");
    } else {
      this.data.push(this.value);
      this.value = "";
    }





  }


  ngOnInit() {
  }


}
