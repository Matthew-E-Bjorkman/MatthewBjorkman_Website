import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppConfigService } from 'src/app/services/app-config/app-config.service'; 
import { FormspreeResponse } from 'src/app/shared/interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient, private appConfig: AppConfigService) { }

  form!: FormGroup
  
  get name() { return this.form.get('name')!; }
  get email() { return this.form.get('email')!; }
  get message() { return this.form.get('message')!; }

  formData = {
    name: '',
    email: '',
    message: ''
  };

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.formData.name, [Validators.required]),
      email: new FormControl(this.formData.email, [Validators.required]),
      message: new FormControl(this.formData.message, [Validators.required]),
    }, {updateOn: 'change'});
  }

  public submitContactForm(): void {
    //Dynamically add the email validator so it doesn't block the submission button from enabling. 
    this.form.controls["email"].addValidators(Validators.email);
    this.form.controls["email"].updateValueAndValidity();

    if (this.form.invalid) {
      return;
    }

    var url = this.appConfig.getConfig().FormSpreeURL;

    var formDataPost = new FormData();
    formDataPost.append('name', this.form.controls['name'].value);
    formDataPost.append('email', this.form.controls['email'].value);
    formDataPost.append('message', this.form.controls['message'].value);

    this.http.post<FormspreeResponse>(url, formDataPost, {headers: {'Accept': 'application/json'}}).subscribe((data) => {
      if (data && data.ok) {
        this.router.navigate(['/thank-you']);
      }
    });
  }
}
