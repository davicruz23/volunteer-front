import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviroment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  protected apiUrl = environment.apiUrl;

  constructor(protected http: HttpClient) {}

  search(data: any, page: number = 0, size: number = 10): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    // console.log('search', data, page, size);
    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('size', size);
    return this.http.post(this.apiUrl + '/search', data, { headers, params });
  }

  store(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    console.log('store', JSON.stringify(data));
    return this.http.post(this.apiUrl, data, { headers });
  }

  update(id: number, data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    console.log(data);
    return this.http.put(this.apiUrl + '/' + id, data, { headers });
  }

  test(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    console.log('store', JSON.stringify(data));
    return this.http.post(this.apiUrl + '/test', data, { headers });
  }

  index(data: any): Observable<any> {
    const { page, size } = data;
    let params = new HttpParams();
    params = params.append('page', page ?? 0);
    params = params.append('size', size ?? 10);
    const headers = new HttpHeaders({});
    let content = this.http.get(this.apiUrl, { headers, params });

    return content;
  }

  ranking(data: any): Observable<any> {
    const { page, size, gradeId } = data;
    let params = new HttpParams();
    params = params.append('page', page ?? 0);
    params = params.append('size', size ?? 10);
    params = params.append('gradeId', gradeId ?? 0);
    const headers = new HttpHeaders({});
    console.log(params);
    let content = this.http.get(this.apiUrl + '/ranking', { headers, params });

    return content;
  }

  getAll(): Observable<any> {
    let params = new HttpParams();
    const headers = new HttpHeaders({});
    return this.http
      .get(this.apiUrl + '/all', { headers, params, observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          // console.log('Status code:', response.status);
          return response.body;
        })
      );
  }

  findById(data: any): Observable<any> {
    const headers = new HttpHeaders({});
    console.log(data);
    return this.http.get(this.apiUrl + '/' + data, { headers });
  }

  delete(data: any): Observable<any> {
    const headers = new HttpHeaders({});

    return this.http.delete<any>(this.apiUrl + '/' + data + '/delete', {
      headers,
    });
  }
}
