import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order-list/order';
import { User } from './user-list/user';

const URL_USERS = "http://localhost:3000/users"; 
const URL_ORDERS = "http://localhost:3000/orders"; 

@Injectable({
  providedIn: 'root',

})
export class StiDataService {

  constructor(private http: HttpClient ) {}
    getAllOrders(): Observable<Order[]> {
      return this.http.get<Order[]>(URL_ORDERS);
    }
    getAllUsers(): Observable<User[]> {
      return this.http.get<User[]>(URL_USERS);
  
    }
    deleteUser(id:number) {
      return this.http.delete<any> (`${URL_USERS}/${id}`)
    }
}


