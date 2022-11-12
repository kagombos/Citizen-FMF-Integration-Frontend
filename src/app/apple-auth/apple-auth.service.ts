import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppleAuthService {

  constructor(
    private http: HttpClient
  ) { }

  requestAuth() {
    this.http.get()
  }
}
