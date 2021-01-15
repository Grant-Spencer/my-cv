import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Resume';
  name = 'Grant Spencer';
  address = '123 Easy St'
  phone = '555-555-5555';
  email = 'Grant@email.com';

  displayWork = true;
  displayEdu = true;

}
