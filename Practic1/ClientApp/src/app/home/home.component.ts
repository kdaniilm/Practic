import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public settings: Settings;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Settings>(baseUrl + 'weatherforecast/get-Settings').subscribe(result => {
      this.settings = result;
    }, error => console.error(error));
  }
}

export class Settings {
  enviromentSettings: EnviromentSettings;
}

export class EnviromentSettings {
  name: string;
}
