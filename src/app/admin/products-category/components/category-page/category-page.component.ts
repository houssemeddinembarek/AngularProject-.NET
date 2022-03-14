import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'src/app/shared/components/confirm-modal/confirm-modal.component';
import { category } from '../../models/category-model';
import { CategoryFormComponent } from '../category-form/category-form.component';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  @Output() CategorySubmit=new EventEmitter<any>();
  @Output() DeleteSubmit=new EventEmitter<any>();
  @Input() Data;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  AddCategory(){
    const ref=this.modalService.open(CategoryFormComponent)
    ref.result.then(res=>{
      this.CategorySubmit.emit(new category(res))
    })
  }

  DeleteCategory(id){
    let modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.result.then(res => {
      this.DeleteSubmit.emit(id)
    }, (reason) => { })
  }
}
