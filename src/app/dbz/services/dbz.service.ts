import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';

console.log(uuid());
import { Character } from '../interfaces/character.interface';


@Injectable(
  {providedIn: 'root'}
)
export class DbzService {

  public characters: Character[]=[
    {id: uuid(),name:'Krilin',power:1000},
    {id: uuid(),name:'Goku', power: 9500},
    {id: uuid(),name:'Vegeta', power: 7500}
  ];

onNewPersonaje(character: Character):void{
//aplicando destructuración onNewPersonaje({name,power}: Character):void{
//console.log('MainPage');
  //  console.log(character);
 //

 /* const newCharacter:Character={
    id:uuid(),
     name,
    power
  }*/

  const newCharacter:Character={id:uuid(),...character};
  this.characters.push(newCharacter);
}

/*onDeleteCharacter(index:number):void{
  console.log("Indice de elemento borrado",index);
  this.characters.splice(index,1);
}*/

onDeleteCharacterById(id:string):void{
this.characters=this.characters.filter(character =>character.id!==id);

}
}
