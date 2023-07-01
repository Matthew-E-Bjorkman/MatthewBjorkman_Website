import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  config: any;

  constructor(private http: HttpClient) { }

  public loadConfig() {
    return this.http.get('./assets/config.json')
      .subscribe((config: any) => {
            this.config = config;
      })
  }

  public getConfig() {
      return this.config;
  }
}