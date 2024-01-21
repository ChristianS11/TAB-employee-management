import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { authGuard, loginGuard } from './services/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        canActivate: [loginGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [loginGuard]
    },
    {
        path: 'list',
        component: EmployeeListComponent,
        canActivate: [authGuard]
    },
    {
        path: 'add',
        component: AddEmployeeComponent,
        canActivate: [authGuard]
    },
    {
        path: 'detail/:employee_id',
        component: DetailEmployeeComponent,
        canActivate: [authGuard]
    },
];
