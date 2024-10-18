import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './user';

 
@Component({
  selector: 'user-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  selectedUserId: number | null = null;  // Variable para almacenar el ID seleccionado
  selectedUser: any = null;  // Variable para almacenar los datos del usuario seleccionado
  users: User[] = 
  [{
    id: -1,
    name: "Alejandro Toloza",
    institute: "Isistan",
    mail: "aletoloza@gmail.com",
    cel: 154692609,
    claro:true,
  },
     {
      id:2,
      name: "pato Lucas Toloza",
      institute: "NIEM",
      mail: "aletoloza@gmail.com",
      cel: 154692609,
      claro: true
       },
       {
        id:3,
        name: "Carlos Gonzales",
        institute: "Civetan",
        mail: "aletoloza@gmail.com",
        cel: 154692609,
        claro: true
         },
         {
          id:4,
          name: "Alejandra Perez",
          institute: "Cificen",
          mail: "aletoloza@gmail.com",
          cel: 154692609,
          claro: true
          },
          ]            
onSelectUserId: any;
constructor() {}
  ngOnInit(): void {

  }
    // Función que se ejecuta cuando se selecciona un usuario
  onSelectUser() {
    // Buscamos el usuario en la lista que coincide con el ID seleccionado
    this.selectedUser = this.users.find(user => user.id === this.selectedUserId);
  }
}
