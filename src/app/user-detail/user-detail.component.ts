import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  fetchedUser: any;
  @Input() wholeData: any;
  constructor() { }

  ngOnInit(): void {
    this.fetchedUser = localStorage.getItem('user');
    this.fetchedUser = JSON.parse(this.fetchedUser)
    console.log('Inputted data along with experience : ', this.wholeData)
    this.fetchedUser = this.wholeData;
  }
}
