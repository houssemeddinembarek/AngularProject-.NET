import { ReceiptComponent } from './../receipt/receipt.component';
import { UpdateFormComponent } from './../update-form/update-form.component';
import { FixRequest } from './../../models/fixrequest-model';
import { FixrequestFormComponent } from './../fixrequest-form/fixrequest-form.component';
import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fixrequest-page',
  templateUrl: './fixrequest-page.component.html',
  styleUrls: ['./fixrequest-page.component.scss']
})
export class FixrequestPageComponent implements OnInit {

  @Input() FixRequests: any[];
  @Input() Categories: any;
  @Output() FixRequestSubmit = new EventEmitter<any>();
  @Output() DeleteFixRequestSubmit = new EventEmitter<any>();
  @Output() UpdateFixRequestSubmit = new EventEmitter<any>();
  @Output() DateSubmit = new EventEmitter<any>();
  @Output() SearchSubmit = new EventEmitter<any>();
  @Output() FilterSubmitted = new EventEmitter<any>();
  filters: any[] = [];
  SelectedDate: any;
  emittedDate: any;
  Page = 0;
  code = "";
  name = "";
  number = "";
  selectedFilter = 1;
  constructor(private modalService: NgbModal) { }

  

  ngOnInit(): void {

  }

  AddFixRequest() {
    const ref = this.modalService.open(FixrequestFormComponent)
    ref.componentInstance.Categories = this.Categories
    ref.result.then(res => {
      this.FixRequestSubmit.emit(new FixRequest(res))
    })
  }

  DeleteFixRequest(id) {
    this.DeleteFixRequestSubmit.emit(id)
  }

  UpdateFixRequest(item) {
    let fixRequest = Object.assign({}, item);

    const ref = this.modalService.open(UpdateFormComponent);
    ref.componentInstance.UpdateFixRequest = fixRequest;
    ref.componentInstance.Categories = this.Categories;
    ref.result.then(res => {
      this.UpdateFixRequestSubmit.emit(res)
    }, reason => { })
  }
  ChangeStatus(field: string, item: any) {
    item[field] = !item[field]
    this.UpdateFixRequestSubmit.emit(item)
  }

  OpenReceipt(item) {
    const ref = this.modalService.open(ReceiptComponent)
    const receipt = Object.assign({}, item);
    ref.componentInstance.Receipt = receipt;
    ref.result.then(res => {
      this.UpdateFixRequestSubmit.emit(res);
     })
  }
  UpdateListing($event, item) {
    this.selectedFilter = item;
    let filterData = {
      pageId: this.Page,
      date: null,
      filter: this.selectedFilter
    }
    if (this.SelectedDate) {
      filterData.date = this.SelectedDate.year + '-' + this.SelectedDate.month + '-' + this.SelectedDate.day;
    }
    this.FilterSubmitted.emit(filterData)
  }
  performSearch() {
    if (this.emittedDate == null) {
      let filter = {
        pageId: this.Page,
        date: null
      }
      this.DateSubmit.emit(filter);
    }

  }

  onDateSelect(value) {
    this.SelectedDate = value;
    let filterData = {
      date: this.SelectedDate.year + '-' + this.SelectedDate.month + '-' + this.SelectedDate.day,
      pageId: this.Page,
      filter: this.selectedFilter
    }
    this.DateSubmit.emit(filterData)
  }

  NextPage() {
    this.Page = this.Page + 1;
    let filterData = {
      pageId: this.Page,
      date: null,
      filter: this.selectedFilter

    }
    if (this.SelectedDate) {
      filterData.date = this.SelectedDate.year + '-' + this.SelectedDate.month + '-' + this.SelectedDate.day;
    }
    this.DateSubmit.emit(filterData)
  }

  PreviousPage() {
    this.Page = this.Page - 1
    let filter = {
      pageId: this.Page,
      date: null,
      filter: this.selectedFilter
    }
    if (this.SelectedDate) {
      filter.date = this.SelectedDate.year + '-' + this.SelectedDate.month + '-' + this.SelectedDate.day;
    }
    this.DateSubmit.emit(filter)
  }

  SearchByCode(data) {
    this.code = data.target.value
    this.SearchSubmit.emit({field:"code",value:this.code});
  }
  SearchByName(data) {
    this.name = data.target.value
    this.SearchSubmit.emit({field:"name",value:this.name})
  }
  SearchByNumber(data) {
    this.number = data.target.value
    this.SearchSubmit.emit({field:"number",value:this.number})
  }
}
