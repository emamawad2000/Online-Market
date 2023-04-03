import { Component, Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
@Input() title:string=""
@Input() data:any[]=[]
@Output() selectedvalue = new EventEmitter()
constructor(){

}
detect(even:any){
this.selectedvalue.emit(even)
}
}
