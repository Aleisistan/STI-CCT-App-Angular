import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
    { path: '',redirectTo: '/about',pathMatch: 'full' },
    { path: 'users', component: UserListComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'orders', component: OrderListComponent}

];
NgModule({
    declarations: [
        AppComponent, AboutUsComponent, UserListComponent, OrderListComponent
        ],
    imports: [RouterModule.forRoot(routes), AppComponent, UserListComponent, AboutUsComponent, OrderListComponent],
    exports: [RouterModule],
    bootstrap: [AppComponent]
})
export class AppRoutingModule {}