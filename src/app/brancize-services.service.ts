import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BrancizeServicesService {
  constructor(private http: HttpClient) {}

  career(data: any): Observable<any> {
    console.log('career check');
    return this.http.post(`${baseUrl}` + 'career', data);
  }

  contact(data: any): Observable<any> {
    console.log('client contact');
    return this.http.post(`${baseUrl}` + 'submitform', data);
  }
}
