import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public pageTitle = 'Welcome';
  public Title = 'Employee Detail';
  constructor() { }

  ngOnInit(): void {
  }

}
