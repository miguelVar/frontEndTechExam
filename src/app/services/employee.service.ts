import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public selectedEmployee: Employee;
  public employees: Employee[];
  readonly URL_API = 'http://localhost:8080/employee';


  constructor(private http: HttpClient ) {
    this.selectedEmployee = new Employee();
  }

  getEmployees() {
    return this.http.get(this.URL_API);
  }

  postEmployees( employee: Employee){
    return this.http.post(this.URL_API, employee);
  }
  putEmployee( employee: Employee){
    return this.http.put(this.URL_API , employee);
  }
  deleteEmployee( idEmployee: string){
    const params = new HttpParams()
      .set('idEmployee', idEmployee);
    console.log("se fue: ", idEmployee);
    return this.http.delete(this.URL_API , {params});
  }
}
