import { Component, OnInit } from '@angular/core';

import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './newbooks.component.html',
  styleUrls: ['./newbooks.component.css']
})
export class NewBooksComponent implements OnInit {

  newbooks:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getNewBooks();
  }

  getNewBooks() {
    this.newbooks = [];
    this.rest.getNewBooks().subscribe((data: any[]) => {
      //sätt nocoverimage om coverurl = null
      for (var index=0;index<data.length;index++) {
        if (data[index].coverurl == null){
          data[index].coverurl = "https://secure.syndetics.com/index.aspx?isbn="+ this.randomstring() + "/lc.gif&client=primo&type=unbound&imagelinking=1"
        }
      }
      this.newbooks = data;
    });
  }

  randomstring() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  }

}
