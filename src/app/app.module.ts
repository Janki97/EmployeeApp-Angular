import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import  {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { RegistrationComponent } from './employee_pages/registration/registration.component';
import { LoginComponent } from './employee_pages/login/login.component';
import { EmployeeService } from './shared/employee.service';
import { EmployeeListComponent } from './employee_pages/employee-list/employee-list.component';
import { FilterPipe } from './shared/filter.pipe';
import { EmployeeEditComponent } from './employee_pages/employee-edit/employee-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    WelcomeComponent,
    EmployeeListComponent,
    FilterPipe,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'EmployeeList', component: EmployeeListComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ]),
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
