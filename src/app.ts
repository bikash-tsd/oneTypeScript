class Department {
  private name :string;
  private employee:string[];
  constructor(n:string) {
    this.name = n;
    this.employee =[];
  }
  describe(){
    console.log('department name: '+this.name);
    
  }
  addEmployee(empName:string){
    this.employee.push(empName)
  }
  printEmployee(){
    console.log(this.employee.length,this.employee);
    
  }

}

const dep = new Department('accounting');

dep.addEmployee('max');
dep.addEmployee('dash');
dep.printEmployee();

