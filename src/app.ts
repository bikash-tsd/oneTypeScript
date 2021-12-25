class Department {
  private lastReport:string;
  constructor(private name:string,private employee:string[],report:string ) {
    this.lastReport =report
  }

  set mostResentReport (value:string){
    this.lastReport = value;
  }

  get report (){
    return this.lastReport
  }

  describe(){
    console.log('department name: '+this.lastReport+ this.name);
    
  }
  addEmployee(empName:string){
    this.employee.push(empName)
  }
  printEmployee(){
    console.log(this.employee.length,this.employee);
    
  }

}



const dep = new Department('accounting',[],'reporting..');

dep.addEmployee('max');
dep.addEmployee('dash');
dep.printEmployee();
dep.mostResentReport = 'test'
console.log(dep.report);

