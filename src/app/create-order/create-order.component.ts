import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
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
  selectedPriority: string = '';
  description: any;
  description2: any;
prioridadSeleccionada: string | null = null;
mostrarBotonPrioridad: boolean = false;
  mostrarAdvertencia: boolean = false; // Controla si se muestra la advertenci
 mostrarBotonIrHome: boolean = false; // Nueva variable para mostrar el botón de ir a Home
  
  constructor(private StiDataService: StiDataService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.StiDataService.getAllUsers().subscribe(users => this.users = users);
     // Recupera la prioridad almacenada en sessionStorage
    const storedPriority = sessionStorage.getItem('selectedPriority');
    if (storedPriority) {
        this.selectedPriority = storedPriority;
        sessionStorage.removeItem('selectedPriority'); // Limpia el valor después de usarlo
    } //else {
      
      //this.mostrarBotonIrHome = true; // Mostrar botón para seleccionar prioridad en Home si no hay una ya seleccionada
    //}// Leer el estado de la navegación o el parámetro que indica el origen
     const navigation = this.router.getCurrentNavigation();
     const fromCreateOrder = navigation?.extras?.state?.['fromCreateOrder'];
 
     // Establecer si mostrar el botón dependiendo del origen
     this.mostrarBotonPrioridad = !!fromCreateOrder;
}
onSelectUserId(event: Event): void {
  this.selectedUserId = (event.target as HTMLSelectElement).value;
  // Realiza cualquier acción adicional que necesites
}
onSubmit(): void {
  // Verifica si se ha seleccionado la prioridad
  if (!this.selectedPriority && !this.prioridadSeleccionada) {
    this.mostrarAdvertencia = true; // Mostrar advertencia si falta prioridad
    this.mostrarBotonIrHome = true; // Mostrar el botón para ir a Home si falta la prioridad//alert('Por favor, selecciona una prioridad antes de crear la orden.');
    return; // Evitar que continúe si no hay prioridad
  }
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
      //console.log('Orden Creada:', response);
      alert("Orden creada con exito");
      // Redirige al componente order-list tras crear la orden
      //this.router.navigate(['/order-list']);
    },
    error => console.error('Error creando la orden:', error));
   
  }

  irAPrioridad(): void {
    this.router.navigate(['/home'], { state: { fromCreateOrder: true } });
  }
   // Método para seleccionar la prioridad
   seleccionarPrioridad(prioridad: string): void {
    this.prioridadSeleccionada = prioridad;
    this.mostrarAdvertencia = false; // Oculta la advertencia si ya seleccionó la prioridad
    this.mostrarBotonIrHome = false; // Ocultar el botón si ya seleccionó prioridad
  }

   // Método para ir a Home y seleccionar la prioridad
   irAHomeParaPrioridad(): void {
    this.router.navigate(['/home'], { state: { fromCreateOrder: true } });
   }
orderData(orderData: any) {
    throw new Error('Method not implemented.');
  };

}
  

 

