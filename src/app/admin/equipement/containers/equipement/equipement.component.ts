import { Component, OnInit } from '@angular/core';
import { EquipementService } from '../../services/equipement.service';

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.scss']
})
export class EquipementComponent implements OnInit {

  Equipement:any
  constructor(private service:EquipementService) { }

  ngOnInit(): void {
    this.service.EquipementCategorySubject.asObservable().subscribe(res=>{
      this.Equipement=res
    })
    this.service.GetEquipementCategory()
  }

  EquipementCategorySubmitted(value){
    this.service.AddEquipementCategory(value)
  }

  DeleteSubmitted(id){
    this.service.DeleteEquipementCategory(id)
  }

  UpdateSubmitted(item){
    this.service.UpdateEquipementCategory(item)
  }
}
