import { Component, Input, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {
  @ViewChild('PageToPrint') pdfTable: ElementRef;

  @Input() Receipt;
  Total = 0;
  constructor(public modal:NgbActiveModal) { }

  ngOnInit(): void {
    this.Total = this.Receipt.price - this.Receipt.advance - this.Receipt.discount
  }
  ChangeStatus(item) {
    this.Receipt[item] = !this.Receipt[item];
  }
  Save(){
    this.modal.close(this.Receipt);
  }
  // PrintReciept(){

  // }
  
}
