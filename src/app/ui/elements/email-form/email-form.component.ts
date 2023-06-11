import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmailGeneratorService } from 'src/app/services/email-generator/email-generator.service'; 
import { AppConfigService } from 'src/app/services/app-config/app-config.service'; 

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  constructor(private http: HttpClient, private appConfig: AppConfigService, private emailService: EmailGeneratorService) { }

  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      }),
      text: new FormControl(null, {
        validators: [Validators.required]
      }),
    });
  }

  onSubmitClick() {
    if (this.form?.invalid) {
      return;
    }

    var name = this.form?.value.name;
    var email = this.form?.value.email;
    var text = this.form?.value.text;

    this.emailService.SaveAndSendMail(name, email, text);
  }
}
