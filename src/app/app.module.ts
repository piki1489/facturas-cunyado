import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { ComprasComponent } from './components/compras/compras.component';
import { VentasComponent } from './components/ventas/ventas.component';

import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {TableModule} from 'primeng/table';
import{MultiSelectModule}from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { PrimeIcons } from 'primeng/api';
import { VentasBComponent } from './components/ventas-b/ventas-b.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    PresupuestoComponent,
    ComprasComponent,
    VentasComponent,
    VentasBComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule,
    DropdownModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
