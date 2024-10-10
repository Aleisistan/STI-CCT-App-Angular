import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderListComponent } from "./order-list/order-list.component";
import { UserListComponent } from "./user-list/user-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, OrderListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Servicio Técnico de Informática CCT Tandil';
}
