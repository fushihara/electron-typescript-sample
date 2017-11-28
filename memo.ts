export class Memo {
  private message: string;
  constructor(message: string) {
    this.message = message;
  }
  public getMessage():String{
    return this.message;
  }
}

