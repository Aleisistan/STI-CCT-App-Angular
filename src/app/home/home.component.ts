import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
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
  constructor(private router: Router) { }

  setHighPriority(): void {
    sessionStorage.setItem('selectedPriority', 'Alta');
    alert("Prioridad seleccionada: Alta");
  }
  setIntermediatePriority(): void {
    sessionStorage.setItem('selectedPriority', 'Intermedia');
    alert("Prioridad seleccionada: Intermedia");
  }
  setPlannedPriority(): void {
    sessionStorage.setItem('selectedPriority', 'Planeada');
    alert("Prioridad seleccionada: Planeada");
  }
  setPreventivePriority(): void {
    sessionStorage.setItem('selectedPriority', 'Preventiva');
    alert("Prioridad seleccionada: Preventiva");
  }
  setStanPriority(): void {
    sessionStorage.setItem('selectedPriority', 'Stan');
    alert("Prioridad seleccionada: STAN");
  }
}

