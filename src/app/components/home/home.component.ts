import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { APIResponse, Strain } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //api https://api.otreeba.com/v1/strains?count=50&sort=name
  //https://api.otreeba.com/v1/strains?count=50&sort=name
  //https://www.youtube.com/watch?v=LiOzTQAz13Q&t=1895s
  //tutorial stopped at 38:00

  public sort: string = '';
  public strains: Array<Strain> = [];
  public index: number = 0;
  constructor(
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['page']) {
        this.searchStrains('name', params['page']);
      } else {
        this.searchStrains('name');
      }
    });
  }

  searchStrains(sort: string, page?: string): void {
    this.httpService
      .getStrainList(sort, page)
      .subscribe((strainList: APIResponse<Strain>) => {
        this.strains = strainList.data;
        console.log(strainList);
      });
  }

  openStrainDetails(strain: Strain): void {   
    console.log(this.strains.indexOf(strain))
  }
}
