import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  //tutorial stopped at 18:25

  public sort: string = '';
  public strains: Array<Strain> = [];

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) =>{
      this.searchStrains('name');
    })
  }

  searchStrains(sort: string, page?: string): void {
    this.httpService.getStrainList(sort, page).subscribe((strainList: APIResponse<Strain>) => {
      this.strains = strainList.data;
      console.log(strainList);
    })
  }
}
