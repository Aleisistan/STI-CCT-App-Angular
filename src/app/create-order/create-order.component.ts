import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { OrderListComponent } from '../order-list/order-list.component';
import { StiDataService } from '../sti-data.service';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'create-order',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, RouterModule, RouterOutlet, UserListComponent, OrderListComponent],
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.scss'
})

export class CreateOrderComponent implements OnInit{
  users: any[] = [];  // Lista de usuarios
  selectedUserId: string = '';  // ID de usuario seleccionado
  username: any;
  selectedPriority: any;
  description: any;
  description2: any;
 

  constructor(private StiDataService: StiDataService, private router: Router) { }
  ngOnInit(): void {
    this.StiDataService.getAllUsers().subscribe(users => this.users = users);

}
onSelectUserId(event: Event): void {
  this.selectedUserId = (event.target as HTMLSelectElement).value;
  // Realiza cualquier acción adicional que necesites
}
onSubmit(): void {
  const orderData = { 
  userId: this.selectedUserId,
  name: this.username,
  priority: this.selectedPriority,
  description: this.description,
  description2: this.description2,
  isActive: 'true'

 };
  this.StiDataService.createOrder(orderData).subscribe(
    response => {
      console.log('Orden Creada:', response);
      alert("Orden creada con exito");
      // Redirige al componente order-list tras crear la orden
      //this.router.navigate(['/order-list']);
    },
    error => console.error('Error creando la orden:', error));
    alert("Error al crear la orden. Por favor, inténtelo de nuevo.");
  }


  
  
orderData(orderData: any) {
    throw new Error('Method not implemented.');
  };

  
}
 

