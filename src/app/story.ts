export class Story {
  _id: string;
  title: string;
  content: string;
  readCount: number;

  constructor(_id: string, title: string, content: string, readCount: number) {
    this._id = _id;
    this.title = title;
    this.content = content;
    this.readCount = readCount;
  }
}
