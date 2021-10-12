import {Article} from "../shared/models/article";
import {Bill} from "../shared/models/bill";
import {Client} from "../shared/models/client";

export const articles: Article[] = [
  new Article("0-1", "phone", "/photo/url", 55.99 , "description"),
  new Article("0-2", "laptop", "/photo/url", 225.99, "description" ),
  new Article("0-3", "fridge", "/photo/url", 79.99 , "description"),
  new Article("0-4", "book", "/photo/url", 5.99 , "description")
];

export const bills: Bill[] = [];

export const clients: Client[] = [
  new Client('0',"Luca", "sches 45", "lucamaggio@gmail.com"),
  new Client('1',"Jérôme", "oche 10", "Jérôme.thb@gmail.com"),
  new Client('2',"Hiago", "Bel air 45", "hiago@gmail.com"),
];
