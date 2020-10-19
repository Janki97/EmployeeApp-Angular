import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { regPage } from 'src/models/regPage';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData  : regPage;
  list : regPage[];
  readonly rootUrl = 'https://localhost:44379'

  constructor(private http: HttpClient) { }

  registerUser(formData : regPage){
    return this.http.post(this.rootUrl+'/api/employee/employee',formData);
     
   }

   getEmployee():Observable<any>{
     return this.http.get(this.rootUrl+'/api/employee/');
   }
   
   putEmployee(formData : regPage){
    return this.http.put(this.rootUrl+'/api/Employee/employee/'+formData.id,formData);
     
   }

   deleteEmployee(id : number){
    return this.http.delete(this.rootUrl+'/api/Employee/employee/'+id);
   }
}