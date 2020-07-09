import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {
  @Output() personalData: EventEmitter<any> = new EventEmitter();
  identity: string;

  constructor() { }

  ngOnInit(): void {
  }
  submitData(value) {
    localStorage.setItem('user', JSON.stringify(value));
    this.personalData.emit(value);
  }
  selectIdentity(value) {
    if (value === 'Aadhaar Card') {
      this.identity = 'aadhaar'
    } else if (value === 'PAN Card') {
      this.identity = 'pan';
    } else {
      this.identity = 'passport';
    }
  }

}
