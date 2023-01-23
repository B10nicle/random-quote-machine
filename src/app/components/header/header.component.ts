import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  private _title = 'Random Quote Machine';

  get title(): string {
    return this._title;
  }
}
