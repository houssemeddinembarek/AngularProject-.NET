import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../services/income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  IncomeData: any;

  constructor(private service: IncomeService) { }

  ngOnInit(): void {
    this.service.IncomeSubject.asObservable().subscribe(res => {
      this.IncomeData = res;
    })
    this.service.GetIncomeData({});
  }

  DateSubmitted(data) {
    this.service.GetIncomeData(data);
    this.service.IncomeSubject.asObservable().subscribe(res => {
      this.IncomeData = res;
    })
  }

  UpdateSubmitted(data) {
    this.service.UpdateIncomeData(data);
  }

}
