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
    this.rest.getNewBooks().subscribe((data: {}) => {
      console.log(data);
      this.newbooks = data;
    });
  }

}
