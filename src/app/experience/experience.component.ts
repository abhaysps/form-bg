import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() public data;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  technicalSkills: any[] = [];
  skillValue = {
    skill: ''
  };
  experience = {
    month: '',
    year: ''
  }
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    if (!this.data.email) {
      this.data.email = 'N/A'
    }
  }
  submit() {
    let completeData = {
      data: this.data,
      skill: this.technicalSkills,
      month: +this.experience.month,
      year: +this.experience.year
    }
    this.passEntry.emit(completeData)
    this.activeModal.dismiss();
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  addSkill() {
    this.technicalSkills.push(this.skillValue.skill)
    this.skillValue.skill = '';
    this.technicalSkills = [...new Set(this.technicalSkills)]; 
    console.log('arrSkill : ', this.technicalSkills)
  }

}
