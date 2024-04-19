
import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
 templateUrl:'./list.component.html',
  styleUrl: './list.component.css',

})
export class ListComponent {

  @Input()
  public characterList: Character[]=
  [{id:'',name:'Trunk',power:10}
  ];

  @Output()
  //public onDelete: EventEmitter<number>=new EventEmitter();
  public onDelete=new EventEmitter<number>();

  @Output()
  //public onDelete: EventEmitter<number>=new EventEmitter();
  public onDeleteById=new EventEmitter<string>();



onDeleteCharacter(index:number):void{
  this.onDelete.emit(index);
}

onDeleteCharacterById(id?:string):void{
  if (!id) return;
  this.onDeleteById.emit(id);
}

}
