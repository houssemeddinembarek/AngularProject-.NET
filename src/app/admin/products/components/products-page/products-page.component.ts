import { Product } from './../../models/product-model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  StockToUpdate: any;
  closeResult = '';

  @Output() SearchSubmit = new EventEmitter<any>()
  @Output() prodSubmit = new EventEmitter<any>()
  @Output() prodDelete = new EventEmitter<any>()
  @Output() prodUpdated = new EventEmitter<any>()
  @Output() UpdateStockSubmit = new EventEmitter<any>();
  @Output() SearByCategory = new EventEmitter<any>();

  @Input() products;
  @Input() categories: any[] = [];


  constructor(private formBuilder: FormBuilder, private modalService: NgbModal) { }
  SearchByCategory(category: any) {
    this.SearByCategory.emit(category)

  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = reason;
    });
  }




  ngOnInit(): void {
  }



  deleteSubmit(id) {
    let modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.result.then(res => {
      this.prodDelete.emit(id);
    }, (reason) => { })
  }

  AddProduct() {
    const ref = this.modalService.open(ProductFormComponent)
    ref.result.then(res => {
      this.prodSubmit.emit(new Product(res))
    })
  }
  UpdateProd(item) {
    const ref = this.modalService.open(ProductFormComponent)
    ref.componentInstance.product = item;
    ref.result.then(res => {
      this.prodUpdated.emit(res)
    }, reason => { })
  }

  SetItem(item) {
    this.StockToUpdate = item;
  }

  UpdateStock() {
    this.UpdateStockSubmit.emit(this.StockToUpdate)
  }

  Search(data) {
    this.SearchSubmit.emit({ "queryString": data.target.value })
  }
}
