import {Component} from '@angular/core';
import {QuoteService} from "../../service/quote.service";
import {Quote} from "../../model/Quote";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent {
  private _quote: Quote = new Quote();

  constructor(private dataService: QuoteService) {
  }

  get quote(): Quote {
    return this._quote;
  }

  getQuote() {
    this.dataService.getQuote().subscribe((result) => {
      this._quote = <Quote>result;
    });
  }
}
