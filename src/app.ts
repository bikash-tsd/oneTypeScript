class Department {
  constructor(private name:string,private employee:string[] ) {
    
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

class ITDepartment extends Department {
  constructor(name:string, employee: string[]){
    super(name,employee)
  }
}

const dep = new Department('accounting',[]);

dep.addEmployee('max');
dep.addEmployee('dash');
dep.printEmployee();

