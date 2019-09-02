import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee : Employee[] 
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = this.employeeService.getEmployee();
   
  }

  onSubmit() {

  }
}
