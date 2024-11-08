import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from 'express';
import { OrderListComponent } from '../order-list/order-list.component';
import { StiDataService } from '../sti-data.service';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'create-user',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, RouterModule, RouterOutlet, UserListComponent, OrderListComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  id: number | undefined;
  name!: string;
  institute!: string;
  mail!: string;
  cel!: number;
  selectedUserId: any;
  username: any;

  constructor(private StiDataService: StiDataService, private router: Router) { }
  ngOnInit(): void {

  }
  onSubmit(): void {
    const userData = {
      id: this.selectedUserId,
      name: this.name,
      institute: this.institute,
      mail: this.mail,
      cel: this.cel,
      isActive: 'true'
    }

    this.StiDataService.createUser(userData).subscribe(
      response => {
        //console.log('Orden Creada:', response);
        alert("Orden creada con exito");
        // Redirige al componente order-list tras crear la orden
        //this.router.navigate(['/order-list']);
      },
      error => console.error('Error creando la orden:', error));
  }


}

