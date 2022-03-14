import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prod-details-modal',
  templateUrl: './prod-details-modal.component.html',
  styleUrls: ['./prod-details-modal.component.scss']
})
export class ProdDetailsModalComponent implements OnInit {

  @Input() ProdDetails: any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.ProdDetails);

  }

  Submit() {
    this.activeModal.close()
  }
}
