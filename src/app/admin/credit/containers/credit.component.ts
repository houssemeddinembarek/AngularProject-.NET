import { CreditService } from './../services/credit.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {
  Credits: any[];
  constructor(private service: CreditService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.service.CreditSubject.asObservable().subscribe(res => {
      this.Credits = res;
    })
    this.service.GetCredit();
  }

  DeleteSubmitted(id) {
    let modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.result.then(res => {
      this.service.DeleteCredit(id);
    }, (reason) => { })
  }

  AddCreditSubmitted(data) {
    this.service.AddCredit(data);
  }

  UpdateCreditSubmitted(data) {
    this.service.UpdateCredit(data);
  }

  SearchByNameSubmitted(data) {
    if (data.length < 1) {
      this.service.GetCredit();
    } else {
      this.service.SearchByName(data);
    }
  }

  SearchByPhoneSubmitted(data) {
    if (data.length < 1) {
      this.service.GetCredit();
    } else {
      this.service.SearchByPhone(data);
    }
  }

  PayedSubmitted(data) {
    this.service.PayedCredit(data);
  }
}
