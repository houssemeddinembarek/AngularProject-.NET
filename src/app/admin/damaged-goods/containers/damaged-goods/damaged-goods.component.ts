import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DamagedGoodsService } from '../../services/damaged-goods.service';

@Component({
  selector: 'app-damaged-goods',
  templateUrl: './damaged-goods.component.html',
  styleUrls: ['./damaged-goods.component.scss']
})
export class DamagedGoodsComponent implements OnInit {

  dGoods:any[] = [];
  constructor(private damagedGoodsService:DamagedGoodsService) { }

  ngOnInit(): void {
    this.damagedGoodsService.DamagedGoodsSubject.asObservable().subscribe(res => {
      this.dGoods = res;
    });
    this.damagedGoodsService.GetDamagedGoods();
  }
  
  DeleteRecord(id) {
    this.damagedGoodsService.DeleteDamagedGood(id);
  }
  AddDamagedGoodRecord(data) {
    this.damagedGoodsService.AddDamagedGood(data)
  }
  UpdateDamagedGoodsSubmitted(data) {}


}
