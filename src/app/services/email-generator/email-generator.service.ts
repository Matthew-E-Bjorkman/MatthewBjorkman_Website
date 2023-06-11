import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../app-config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class EmailGeneratorService {
  constructor(private http: HttpClient, private appConfig: AppConfigService) { }

  SaveAndSendMail(nameOfUser: string, emailOfUser: string, userMessage: string) {

    const sgMail = require('@sendgrid/mail')
    var apiKey = this.appConfig.getConfig().SendGridAPIKey;
    
    sgMail.setApiKey(apiKey);

    const subject = 'Personal Website Contact: ' + emailOfUser;

    const msg = {
      to: 'matthewbjorkmanwork@gmail.com',
      from: 'work@matthewbjorkman.com', 
      subject: subject,
      text: userMessage,
    }

    sgMail.send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error: any) => {
      console.error(error)
    })
  }
}
