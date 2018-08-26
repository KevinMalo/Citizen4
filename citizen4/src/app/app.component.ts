import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loaded = false;

  constructor() {
    }

    loadAddPatient() {

      if (this.loaded === false) {
        this.loaded = true;
      } else if (this.loaded === true) {
        this.loaded = false;
      }

     }

}
