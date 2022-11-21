import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare let AppleID: any;

@Injectable({
  providedIn: 'root'
})
export class AppleAuthService {
  private readonly appleScriptUrl: string = 'apple_lib_script_url';
  private ready: Promise<boolean> = new Promise(resolve => {
    if (typeof window !== undefined) {
      const script = require('scriptjs');
      script(this.appleScriptUrl, () => resolve(true));
    } else {
      resolve(false);
    }
  });

  constructor(
    private http: HttpClient
  ) { 
    this.ready.then((res) => {
      if (res) {
        this.initAppleAuth();
      }
    })
  }

  initAppleAuth() {
    AppleID.auth.init({
      clientId: 'your client id',
      scope: 'name email',
      redirectURI: `${window.location.origin}/apple-signin`,
      state: 'what ever string to be remembered'
    }); 
  }

  requestAuth() {
    this.http.get()
  }
}
