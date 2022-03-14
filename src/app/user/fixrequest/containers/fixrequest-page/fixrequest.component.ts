import { EquipementService } from './../../../../admin/equipement/services/equipement.service';
import { FixRequest } from './../../../../shared/models/fixrequest-model';
import { FixrequestService } from './../../services/fixrequest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixrequest',
  templateUrl: './fixrequest.component.html',
  styleUrls: ['./fixrequest.component.scss']
})
export class FixrequestComponent implements OnInit {

  FixRequests:any[];
  Categories:any;

  constructor(private service:FixrequestService, private CategoryService:EquipementService) { }

  ngOnInit(): void {
    this.service.FixRequestSubject.asObservable().subscribe(res=>{
      this.FixRequests = res
    })
    this.service.GetFixRequest({pageId:1,filter:1})
    this.CategoryService.EquipementCategorySubject.asObservable().subscribe(res=>{
      this.Categories = res
    })
    this.CategoryService.GetEquipementCategory()
  }

  FixRequestSubmitted(data:FixRequest){
    this.service.AddFixRequest(data)
  }

  DeleteFixRequestSubmitted(id){
    this.service.DeleteFixRequest(id)
  }

  UpdateFixRequestSubmitted(data){
    this.service.UpdateFixRequest(data)
  }

  DateSubmitted(data){
    this.service.GetFixRequest(data)

  }

  SearchSubmitted(data){
    if(data.length<1){
      this.service.GetFixRequest({})
    }else{
    this.service.GetFixRequestByCode(data.toUpperCase())
    }
  }

}
