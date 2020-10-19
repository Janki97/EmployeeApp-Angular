import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { regPage } from 'src/models/regPage';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public pageTitle = 'Welcome';
  public Title = 'Employee Records';
  searchValue:string;
  message:string;
  empId:number; 
  lstcomments:regPage[];
  
  constructor(private empservice:EmployeeService) { }

  ngOnInit() {

    this.empservice.getEmployee()
      .subscribe(
        data =>
        {
            this.lstcomments =data;
        });
 }

  // showForEdit(emp: regPage) {
  //   this.empservice.formData = Object.assign({}, emp);;
  // }

  onDelete(id: number) {
      if (confirm('Are you sure to delete this record?')) {
        this.empservice.deleteEmployee(id).subscribe(res => {
          this.empservice.getEmployee();
          this.message="Deleted successfully', 'EMP. Register";
        });
      }
    }

}