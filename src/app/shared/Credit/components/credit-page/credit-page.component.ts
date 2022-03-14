import { AddCreditFormComponent } from './../add-credit-form/add-credit-form.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Credit } from 'src/app/shared/models/credit-model';

@Component({
  selector: 'app-credit-page',
  templateUrl: './credit-page.component.html',
  styleUrls: ['./credit-page.component.scss']
})
export class CreditPageComponent implements OnInit {


  @Input() Credits: any[];

  @Output() DeleteSubmit = new EventEmitter<any>();
  @Output() AddCreditSubmit = new EventEmitter<any>();
  @Output() UpdateCreditSubmit = new EventEmitter<any>();
  @Output() SearchByNameSubmit = new EventEmitter<any>();
  @Output() SearchByPhoneSubmit = new EventEmitter<any>();
  @Output() PayedSubmit = new EventEmitter<any>();


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  AddCredit() {
    const ref = this.modalService.open(AddCreditFormComponent);
    ref.result.then(res => {
      this.AddCreditSubmit.emit(new Credit(res));
    })
  }

  SearchByName(data) {
    this.SearchByNameSubmit.emit(data.target.value);
  }

  SearchByPhone(data) {
    this.SearchByPhoneSubmit.emit(data.target.value);
  }

  Delete(id) {
    this.DeleteSubmit.emit(id)
  }

  Update(item) {
    const ref = this.modalService.open(AddCreditFormComponent);
    ref.componentInstance.CreditToUpdate = item;
    ref.result.then(res => {
      this.UpdateCreditSubmit.emit(res);
    })
  }

  Payed(id) {
    this.PayedSubmit.emit(id);
  }
  get CreditSum() {
    if (this.Credits && this.Credits.length == 1) {
      return this.Credits[0].creditAmount;
    }
    else {
      return this.Credits && this.Credits.length != 0 && this.Credits.reduce((a, b) => a + b.creditAmount,0);
    }
  }
}
