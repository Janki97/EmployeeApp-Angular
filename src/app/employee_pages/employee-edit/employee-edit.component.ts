import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { MustMatch } from 'src/validators/MustMatch ';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  registerForm:FormGroup;
  submitted = false;

  constructor(private fb:FormBuilder ,private empService: EmployeeService) { }

  ngOnInit() {

    this.registerForm =this.fb.group({
      name:['',[Validators.required,Validators.maxLength(25)]],
      email: ['', [Validators.required, Validators.email]],
      phone:['', [Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]],
      position:['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
      }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.valid) {
        this.empService.registerUser(this.registerForm.value).subscribe(res=>{
           
              alert('SUCCESS!! :-)\n\n' + JSON.parse(JSON.stringify(this.registerForm.value)));
            //localStorage.setItem('token',res.token)
        })
    }
  }

}
