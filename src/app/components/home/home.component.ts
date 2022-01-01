import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //api https://api.otreeba.com/v1/strains?count=50&sort=name
  //https://api.otreeba.com/v1/strains?count=50&sort=name
  //tutorial stopped at 18:25

  public sort: string ='';
  constructor() { }

  ngOnInit(): void {
  }

}
