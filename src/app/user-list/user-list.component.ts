import { Component } from '@angular/core';

@Component({
  selector: 'user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  user = {
    name: "Alejandro Toloza (soy yo)",
    institute: "ISISTAN",
    mail: "aletoloza@gmail.com",
    cel: 154692609,
    image: "assets/soporte.jpg"
     }
  constructor() {}
  ngOnInit(): void {

  }
}
