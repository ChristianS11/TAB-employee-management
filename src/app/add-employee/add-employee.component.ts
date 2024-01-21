import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DatePickerComponent, DpDatePickerModule } from 'ng2-date-picker';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, DpDatePickerModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  selectedDate: any;
  datePickerConfig: any;
}
