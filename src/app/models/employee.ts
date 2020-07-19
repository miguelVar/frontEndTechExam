export class Employee {

  constructor( idEmployee= '', fullName= '', position= '') {
    this.idEmployee = idEmployee;
    this.fullName = fullName;
    this.function = position;
  }
  idEmployee: string;
  fullName: string;
  function: string;
}
