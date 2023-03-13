import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { VentasBComponent } from './components/ventas-b/ventas-b.component';
import { VentasComponent } from './components/ventas/ventas.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'menu', component:MenuComponent},
  {path:'ventas',component:VentasComponent},
  {path:'ventasB', component:VentasBComponent},
  {path:'presupuesto',component:PresupuestoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
