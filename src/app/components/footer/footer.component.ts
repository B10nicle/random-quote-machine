import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  private _author = 'Oleg Khilko';

  get author(): string {
    return this._author;
  }
}
