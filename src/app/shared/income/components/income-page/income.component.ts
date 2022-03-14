import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-income-shared',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  SelectedDate: any;
  emittedDate: any;
  Page = 0;

  @Output() DateSubmit = new EventEmitter<any>();
  @Output() UpdateSubmit = new EventEmitter<any>();
  @Input() IncomeData;
  DataToUpdate: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content)
  }

  SetItem(item) {
    this.DataToUpdate = item;
  }

  Update() {
    this.UpdateSubmit.emit(this.DataToUpdate)
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
    this.DateSubmit.emit(filter)
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

    let date = {
      date: this.SelectedDate.year + '-' + this.SelectedDate.month + '-' + this.SelectedDate.day,
      pageId: this.Page
    }
    this.DateSubmit.emit(date)
  }
}
