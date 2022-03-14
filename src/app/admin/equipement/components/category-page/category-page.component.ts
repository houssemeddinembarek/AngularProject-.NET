import { EquipementCategory } from './../../models/equipementCategory-model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EquipementService } from '../../services/equipement.service';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  @Input() EquipementCategory;
  @Output() EquipementCategorySubmit = new EventEmitter<any>();
  @Output() DeleteSubmit = new EventEmitter<any>();
  @Output() UpdateSubmit = new EventEmitter<any>();
  closeResult: string;
  

  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult =reason;
    });
  }

  ngOnInit(): void {
  }

  AddEquipementCategory(){
    const ref = this.modalService.open(CategoryFormComponent)
    ref.result.then(res=>{
      this.EquipementCategorySubmit.emit(new EquipementCategory(res))
    })
  }
  DeleteEquipementCategory(id){
    let modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.result.then(res => {
      this.DeleteSubmit.emit(id)
    }, (reason) => { })
  }

  UpdateEquipementCategory(item){
    const ref=this.modalService.open(CategoryFormComponent)
    ref.componentInstance.Category=item;
    ref.result.then(res=>{
      this.UpdateSubmit.emit(res)
    },reason => {})
  }
}
