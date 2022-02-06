import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export  type OptionsT = {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  withCredentials?: boolean;
  responseType?: any;
}

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  url = 'http://localhost:3000/';
  options = new HttpParams();
  body = {};

  constructor(private http: HttpClient) {
  }

  read<T>(path?: any, options?: OptionsT, urlValue?: string): Observable<T> {
    const url = urlValue ? urlValue : this.url;
    return this.http.get<T>(`${ url }${ path }`, options);
  }

  create<T>(path: any, body?: any, options?: OptionsT, url?: string): Observable<T> {
    return this.http.post<T>(`${ this.url }${ path }`, body, options);
  }

  update<T>(type: 'put' | 'patch', path: any, body: any, options?: OptionsT, url?: string): Observable<T> {
    if (type === 'put') {
      return this.put(path, body, options, url);
    } else {
      return this.patch(path, body, options, url);
    }
  }

  del<T>(path: any, options?: OptionsT, url?: string): Observable<T> {
    return this.http.delete<T>(`${ this.url }${ path }`, options);
  }

  private put<T>(path: any, body: any, options?: OptionsT, url?: string): Observable<T> {
    return this.http.put<T>(`${ this.url }${ path }`, body, options);
  }

  private patch<T>(path: any, body: any, options?: OptionsT, url?: string): Observable<T> {
    return this.http.patch<T>(`${ this.url }${ path }`, body, options);
  }
}
