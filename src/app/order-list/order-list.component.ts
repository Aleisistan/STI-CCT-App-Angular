import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StiDataService } from '../sti-data.service';
import { Order } from './order';

@Component({
  selector: 'order-list',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent  implements OnInit {
    orders: Order[] = []; 

order: any;
selectedOrderId: any;
  constructor(private StiDataService: StiDataService){}
    ngOnInit(): void {
      this.StiDataService.getAllOrders().subscribe(orders => {this.orders = orders; 
        console.log(orders)
      } );
      //this.StiDataService.getAll().subscribe (orders => this.orders = orders);
    }
}
  