import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { APIResponse, Strain } from '../models';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getStrainList(
    sort: string,
    page: string = '1',
    
  ): Observable<APIResponse<Strain>> {
      let params = new HttpParams().set('sort', sort).set('page', page);


      return this.http.get<APIResponse<Strain>>(`${env.BASE_URL}/strains?count=50` , {
        params: params,
      })
  }
}
