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
  orderData: any = {
    userId: '',
    product: '',
    quantity: 1 };
SelectUserId: any;

  constructor(private StiDataService: StiDataService, private router: Router) { }
  ngOnInit(): void {
    this.StiDataService.getAllUsers().subscribe(users => this.users = users);

}
onSelectUserId(event: Event): void {
  this.selectedUserId = (event.target as HTMLSelectElement).value;
  // Realiza cualquier acción adicional que necesites
}
onSubmit(): void {
  this.StiDataService.createOrder(this.orderData).subscribe({
    next: () => {
      // Redirige al componente order-list tras crear la orden
      this.router.navigate(['/order-list']);
    },
    error: (err) => console.error('Error creando la orden:', err)
  });

}
}
