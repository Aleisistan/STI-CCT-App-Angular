import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { OrderListComponent } from '../order-list/order-list.component';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, NgFor, RouterOutlet, UserListComponent, OrderListComponent, AboutUsComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
