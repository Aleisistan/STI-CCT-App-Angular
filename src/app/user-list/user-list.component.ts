import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StiDataService } from '../sti-data.service';
import { User } from './user';

@Component({
  selector: 'user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  selectedUserId: number | null = null;  // Variable para almacenar el ID seleccionado
  selectedUser: any = null;  // Variable para almacenar los datos del usuario seleccionado
  users: User[] = [];

  onSelectUserId: any;
  constructor(private StiDataService: StiDataService) { }
  ngOnInit(): void {
    this.StiDataService.getAllUsers().subscribe(users => this.users = users);

  }
  borrar(id: number) {
    if (confirm("esta seguro de borrar??")) {
      this.StiDataService.deleteUser(id).subscribe(_ => this.StiDataService.getAllUsers().subscribe(users => this.users = users));
    }


  }
}
