import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import {NgForm} from '@angular/forms';

declare var M: any ;
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService],
})
export class EmployeesComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  addEmployee(form: NgForm) {
    if (form.value.idEmployee){
      this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          console.log(res);
          M.toast({html: "Actualizado Satisfactoriamente" });
          this.resetForm(form);
          this.getEmployees();
          }
        );
    }else{
      this.employeeService.postEmployees(form.value)
        .subscribe(res => {
          console.log(res);
          this.resetForm(form);
          this.getEmployees();
          M.toast({html: "Guardado Satisfactoriamente" });
        });
    }

  }
  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe( res => {
        this.employeeService.employees = res as Employee[];
        console.log( "respuesta", res);
      });
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }
  deleteEmployee(employee: Employee){
    console.log("sdfsfsf", employee.idEmployee );
    this.employeeService.deleteEmployee(employee.idEmployee)
      .subscribe(res => {
        console.log(res);
        this.getEmployees();
        M.toast({html: "Eliminado Satisfactoriamente" });
      });
  }
  resetForm(form?: NgForm) {
    if ( form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }
}
