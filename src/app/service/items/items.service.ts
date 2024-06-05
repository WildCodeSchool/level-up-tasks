import { Injectable } from '@angular/core';
import { Item } from '../../model/item/item';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  readonly items: Item[] = [
    new Item(1, 'Sirine BETTAIEB', 'sirinebettaieb30@gmail.com', 'avatar.png','https://github.com/sirinebettaieb','https://www.linkedin.com/in/sirine-bettaieb-bb5562177/'),
    new Item(2, 'Lucie DANIS', 'lucie.lindanis@gmail.com', 'avatar.png','https://github.com/LucieLDa','https://www.linkedin.com/in/lucie-danis-053475306/'),
    new Item(3, 'Fatimata DRAME', 'dramefatim75@gmail.com', 'avatar.png','https://github.com/Fatimata-dev','https://www.linkedin.com/in/ousseynou-fatimata75014/'),
    new Item(4, 'Salma MOUBARKI', 'salmamoubarki@gmail.com', 'avatar.png','https://github.com/MoubarkiS','https://www.linkedin.com/in/salma-moubarki-867087130/'),
  ];
  constructor() {}
}
