import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';
import localePt from "@angular/common/locales/pt";//import para currency pt

import{HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

import {ROUTER} from './app-routes'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TopoComponent } from './topo/topo.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { registerLocaleData } from '@angular/common';


import {ReactiveFormsModule} from '@angular/forms'


//pipe
import { DescricaoReduzida } from './shared/descricao-reduzida.pipe';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { OrdemCompraSucessoComponent } from './ordem-compra-sucesso/ordem-compra-sucesso.component';

import { CarrinhoService } from './carrinho.service'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RodapeComponent,
    TopoComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTER)
  ],
  providers: [
    {provide:LOCALE_ID,useValue:'pt'},
    CarrinhoService

],
  bootstrap: [AppComponent]
})

export class AppModule { }

registerLocaleData(localePt);
