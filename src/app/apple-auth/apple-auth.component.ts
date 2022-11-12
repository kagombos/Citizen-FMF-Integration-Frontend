import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apple-auth',
  templateUrl: './apple-auth.component.html',
  styleUrls: ['./apple-auth.component.scss']
})
export class AppleAuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  appleAuth() {
    const CLIENT_ID = "com.myapp.bundle.backend"
    const REDIRECT_API_URL = "http://localhost:4200"
    window.open(
        `https://appleid.apple.com/auth/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_API_URL)}&response_type=code id_token&scope=name email&response_mode=form_post`,
        '_blank'
    );

    window.addEventListener('message', async event => {
        const decodedToken = event.data.id_token;
        console.log(decodedToken);
        let requestData = {}
        if (event.data.user) {
            const userName = JSON.parse(event.data.user);
            requestData = {
                "email": decodedToken.email,
                "name": `${userName.name.firstName} ${userName.name.lastName}`,
                "socialId": decodedToken.sub,
            };
        } else {
            requestData = {
                "email": decodedToken.email,
                "socialId": decodedToken.sub,
            };
        }
        console.log(`User Data : ${requestData}`);
        // do your next stuff here
    });
  }
}
