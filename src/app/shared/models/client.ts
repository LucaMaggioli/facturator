export class Client{
  name?: string = "";
  address?: string = "";
  email?: string = "";

  constructor(_name?:string, _address?:string, _email?:string) {
    this.name = _name;
    this.address = _address;
    this.email = _email;
  }

}
