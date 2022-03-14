import { ProdDetailsModalComponent } from './../prod-details-modal/prod-details-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PurchaseFormComponent } from './../purchase-form/purchase-form.component';
import { Component, Input, OnInit, EventEmitter, Output, OnChanges } from '@angular/core';
import { Purchase } from 'src/app/shared/models/pruchase-model';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.component.html',
  styleUrls: ['./seller-page.component.scss']
})
export class SellerPageComponent implements OnInit {

  placeholder = 'Search Products...';
  ProdDetails: any;
  ProductNameList: any[] = [];
  @Input() Purchases: any[];
  @Input() Products: any[];
  @Input() ProdCategory: any[];
  selectedProduct: any;
  @Output() PurchaseSubmit = new EventEmitter<any>();
  @Output() UpdateSubmit = new EventEmitter<any>();
  @Output() DeleteSubmit = new EventEmitter<any>();
  @Output() DateSubmit = new EventEmitter<any>();
  @Output() ProductReturned = new EventEmitter<any>();

  PurchaseToUpdate: any;
  constructor(private modalService: NgbModal) { }




  SelectedDate: any;
  emittedDate: any;
  Page = 0;

  performSearch() {

    if (this.emittedDate == null) {
      let filter = {
        pageId: this.Page,
        date: null
      }
      this.DateSubmit.emit(filter);
    }

  }
  ngOnInit(): void {

  }

  AddPurchase() {
    const ref = this.modalService.open(PurchaseFormComponent)
    ref.componentInstance.ProdCategory = this.ProdCategory
    ref.componentInstance.Products = this.Products
    ref.result.then(res => {
      this.PurchaseSubmit.emit(new Purchase(res))
    })
  }

  DeletePurchase(id) {
    this.DeleteSubmit.emit(id)
  }
  ReturnProduct(purchase:any) {
    this.ProductReturned.emit(purchase);
  }
  onDateSelect(value) {
    this.SelectedDate = value;

    let date = {
      date: this.SelectedDate.year + '-' + this.SelectedDate.month + '-' + this.SelectedDate.day,
      pageId: this.Page
    }
    this.DateSubmit.emit(date)
  }

  NextPage() {
    this.Page = this.Page + 1;
    let filter = {
      pageId: this.Page,
      date: null
    }
    if (this.SelectedDate) {
      filter.date = this.SelectedDate.year + '-' + this.SelectedDate.month + '-' + this.SelectedDate.day;
    }
    this.DateSubmit.emit(filter)
  }

  PreviousPage() {
    this.Page = this.Page - 1
    let filter = {
      pageId: this.Page,
      date: null
    }
    if (this.SelectedDate) {
      filter.date = this.SelectedDate.year + '-' + this.SelectedDate.month + '-' + this.SelectedDate.day;
    }
    this.DateSubmit.emit(filter);
  }

  SearchProductByName() {
    if (this.selectedProduct != null) {
      let query = this.Products;
      query = query.filter(q => q.id == this.selectedProduct);
      this.ProdDetails = query[0];

      const ref = this.modalService.open(ProdDetailsModalComponent);
      ref.componentInstance.ProdDetails = this.ProdDetails;
    }
  }

  open(content) {
    this.modalService.open(content)
  }

  SetItem(item) {
    this.PurchaseToUpdate = item;
  }

  Update() {
    this.UpdateSubmit.emit(this.PurchaseToUpdate)
  }

  get Sales() {
    return this.Purchases.reduce((a, b) => a + (b.quantity * b.originalPrice), 0);
  }
  get Revenue() {
    return this.Purchases.reduce((a, b) => a + (b.quantity * b.income), 0) - this.Sales;
  }

}
