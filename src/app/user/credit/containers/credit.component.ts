import { Component, OnInit } from '@angular/core';
import { CreditService } from '../services/credit.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  Credits:any;
  constructor(private service:CreditService) { }

  ngOnInit(): void {
    this.service.CreditSubject.asObservable().subscribe(res=>{
      this.Credits = res;
    })
    this.service.GetCredit();
  }

  DeleteSubmitted(id){
    this.service.DeleteCredit(id);
  }

  AddCreditSubmitted(data){
    this.service.AddCredit(data);
  }

  UpdateCreditSubmitted(data){
    this.service.UpdateCredit(data);
  }

  SearchByNameSubmitted(data){
    if(data.length<1){
      this.service.GetCredit();
    }else{
      this.service.SearchByName(data);
    }
  }

  SearchByPhoneSubmitted(data){
    if(data.length<1){
      this.service.GetCredit();
    }else{
      this.service.SearchByPhone(data);
    }
  }

  PayedSubmitted(data){
    this.service.PayedCredit(data);
  }

}
