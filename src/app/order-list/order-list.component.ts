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
    orders: Order[] = []; /*
      {
        id: 1,
        name: "Alejandro Toloza",
        priority: "high",
        description: "no enciende notebook",
        description2: "se me rompio cargador",
        isActive: true,
        username: null
      },
      {
        id: 2,
        name: "Alejandro Martinez",
        priority: "medium",
        description: "no enciende notebook",
        description2: "se me rompio cargador",
        isActive: true,
        username: null
      },
      {
        id: 3,
        name: "Alejandro Gonzalez",
        priority: "PREVENTIVE",
        description: "no enciende notebook",
        description2: "se me rompio cargador",
        isActive: true,
        username: null
      },
      {
        id: 4,
        name: "Alejandro Toloza",
        priority: "PLANNEDhigh",
        description: "no enciende notebook",
        description2: "se me rompio cargador",
        isActive: true,
        username: null
      }]*/
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
  