import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  id: number;
  name: string;
  salary: number;
  dept: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: any) {
    this.id = value.id;
    this.name = value.name;
    this.salary = value.salary;
    this.dept = value.dept;

    alert(` ${this.id} ${this.name} ${this.salary} ${this.dept}`);
  }

}
