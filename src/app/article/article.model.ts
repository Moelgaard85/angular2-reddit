/**
 * Article
 */
export class Article {
  title: string;
  votes: number;
  link: string;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

}
