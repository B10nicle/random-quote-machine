export class Quote {
  quoteText: string;
  quoteAuthor: string;

  constructor(
    quoteText: string = "If you accept the expectations of others, especially negative ones, then you never will change the outcome.",
    quoteAuthor: string = "Michael Jordan") {
    this.quoteText = quoteText;
    this.quoteAuthor = quoteAuthor;
  }
}
