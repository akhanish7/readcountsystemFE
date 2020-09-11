export class Users {
  id: string;
  username: string;
  email: string;
  accessToken: string;

  constructor(
    id: string,
    username: string,
    email: string,
    accessToken: string
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.accessToken = accessToken;
  }

  public getaccessToken() {
    return this.accessToken;
  }
}
