import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExperienceComponent } from './experience/experience.component';

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
  wholeData: any;
  constructor(
    private modalService: NgbModal
  ) {}

  toggleForm() {
    this.togglePersonalForm = !this.togglePersonalForm
  }
  showPersonalData(value) {
    this.personalData = value;
    this.togglePersonalForm = !this.togglePersonalForm;
  }
  showUserDetail() {
    this.userDetail = !this.userDetail;
  }
  openFormModal() {
    const modalRef = this.modalService.open(ExperienceComponent);
    modalRef.componentInstance.data = this.personalData;
    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      console.log('Received Entry : ', receivedEntry)
      this.wholeData = receivedEntry;
    })
  }
}
