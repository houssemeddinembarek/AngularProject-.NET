import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DamagedGoodDataFormComponent } from 'src/app/admin/damaged-goods/components/damaged-good-data-form/damaged-good-data-form.component';
import { Product } from 'src/app/admin/products/models/product-model';
import { ProductService } from 'src/app/admin/products/services/product.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-damaged-goods-list',
  templateUrl: './damaged-goods-list.component.html',
  styleUrls: ['./damaged-goods-list.component.scss']
})
export class DamagedGoodsListComponent implements OnInit {

  @Input() damagedGoods:any[] = [];
  products:Product[] = [];
  @Output() DeleteSubmitted = new EventEmitter<any>();
  @Output() AddDamagedGoodsSubmitted = new EventEmitter<any>();
  @Output() UpdateDamagedGoodsSubmitted = new EventEmitter<any>();
  constructor(
    private modalService: NgbModal,
    private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.productSubject.asObservable().subscribe(res => {
      this.products = res;
    })
    this.productService.getProducts();
  }
  Delete(id){
    let modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.result.then(res => {
      this.DeleteSubmitted.emit(id);
    }, (reason) => { })  }
  AddRecord(){
    const modalRef = this.modalService.open(DamagedGoodDataFormComponent);
    modalRef.componentInstance.products = this.products;
    modalRef.result.then((res)=> {
      this.AddDamagedGoodsSubmitted.emit(res);
    },(reason)=> {})
  }
  UpdateDamagedGoods(data){
    this.UpdateDamagedGoodsSubmitted.emit(data);
  }

}
