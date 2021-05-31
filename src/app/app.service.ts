import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  'authToken' = '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';
  'apiUrl' = 'https://api.github.com';

  constructor(private http: HttpClient) {
  }

  getRepositoryData(requestUrl: string, params?: any): Observable<any> {
    const headers = {
      Authorization: this.authToken,
      Accept: 'application/vnd.github.v3+json'
    };

    return this.http.get(this.apiUrl + requestUrl, {params: {...params}, headers: {...headers}});
  }

  getUserData(requestUrl: string, params?: any): Observable<any> {
    const headers = {
      Authorization: this.authToken,
      Accept: 'application/vnd.github.v3+json'
    };
    return this.http.get(this.apiUrl + requestUrl, {params: {...params}, headers: {...headers}});
  }

  getTopics(requestUrl: string, params?: any): Observable<any> {
    const headers = {
      Authorization: this.authToken,
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.nebula-preview+json'
    };
    return this.http.get(this.apiUrl + requestUrl, {params: {}, headers: {...headers}});
  }
}
