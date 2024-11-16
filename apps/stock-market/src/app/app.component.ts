import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'app-root',
  template: `<h1>Stock Market App</h1><router-outlet></router-outlet>`,
})
export class AppComponent {
}
