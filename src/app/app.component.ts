import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-bg';
  togglePersonalForm: boolean;
  personalData: any;
  userDetail: boolean;

  toggleForm() {
    this.togglePersonalForm = !this.togglePersonalForm
  }
  showPersonalData(value) {
    console.log('VALUE RENDERED : ', value)
    this.personalData = value;
    this.togglePersonalForm = !this.togglePersonalForm;
  }
  showUserDetail() {
    this.userDetail = !this.userDetail;
  }
}
