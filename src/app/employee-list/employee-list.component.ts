import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeeDataService } from '../services/employee-data.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  p: number = 1;
  collection: any[] = [];

  constructor(private employee: EmployeeDataService) {
    this.employee.getAllData()
    .then((res: any) => {
      this.collection = res;
    })
  }

  edit() {

  }

  delete(id: string, index: number) {
    this.employee.deleteData(id)
    .then((res: any) => {
      this.collection.splice(index, 1);
    })
  }
} 
