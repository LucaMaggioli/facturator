export class Article{
  id: string = "";
  name: string = "";
  photo: string = "";
  price: number = 0;
  description: string = "";

  constructor(_id:string, _name:string, _photo:string, price:number, description:string) {
    this.id = _id;
    this.name = _name;
    this.photo = _photo;
    this.price = price;
    this.description = description;
  }

}
