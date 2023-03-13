import { Component } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {


  arrVentas: any[]= [{
    cliente:'Juan',
    ciudad:'Alicante',
    materiales:'Pladul',
    total:3000

  },{
    cliente:'Juan',
    ciudad:'Elche',
    materiales:'Pladul',
    total:3000

  },{
    cliente:'Juan',
    ciudad:'Elche',
    materiales:'Pladul',
    total:3000

  },{
    cliente:'Juan',
    ciudad:'Elche',
    materiales:'Pladul',
    total:3000

  }];

  constructor(){

  }

  NgOnInit(){







  }

  getEventValue($event:any) :string {
    return $event.target.value;
  }

  clear(arrVentas: any) {
    arrVentas.clear();
}


}
