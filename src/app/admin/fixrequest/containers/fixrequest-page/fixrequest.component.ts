import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EquipementService } from 'src/app/admin/equipement/services/equipement.service';
import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';
import { FixRequest } from 'src/app/shared/models/fixrequest-model';
import { FixrequestService } from '../../services/fixrequest.service';

@Component({
  selector: 'app-fixrequest',
  templateUrl: './fixrequest.component.html',
  styleUrls: ['./fixrequest.component.scss']
})
export class FixrequestComponent implements OnInit {

  FixRequests:any[];
  Categories:any;
  addedFixReceipt:any = null;
  @ViewChild('trigger') triggerButton:ElementRef<HTMLButtonElement>;
  constructor(private service:FixrequestService, private CategoryService:EquipementService,private modalService:NgbModal) { }

  ngOnInit(): void {
    this.service.FixRequestSubject.asObservable().subscribe(res=>{
      this.FixRequests = res;
    })
    this.service.GetFixRequest({pageId:1,filter:1})
    this.CategoryService.EquipementCategorySubject.asObservable().subscribe(res=>{
      this.Categories = res
    })
    this.CategoryService.GetEquipementCategory()
  }
  
  FixRequestSubmitted(data:FixRequest){
    this.service.AddFixRequest(data).subscribe(res=>{
    this.addedFixReceipt = res;
    setTimeout(() => {
      this.triggerButton.nativeElement.click();
    }, 500);
    })
  }

  DeleteFixRequestSubmitted(id){
    let modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.result.then(res => {
      this.service.DeleteFixRequest(id)
    }, (reason) => { })
  }

  UpdateFixRequestSubmitted(data){
    this.service.UpdateFixRequest(data).subscribe(res=>{

      })

  }

  DateSubmitted(data){
    this.service.GetFixRequest(data);
    this.service.FixRequestSubject.asObservable().subscribe(res=>{
      this.FixRequests = res;
    })
  }

  SearchSubmitted(data){
    if(data && data.value.length<1){
      this.service.GetFixRequest({})
    }else{
    this.service.SearchFixRequests(data);
    }
  }
  Print(){
    console.log("ssss");
    
  }
}

