import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import { CarrinhoService } from '../carrinho.service'


//import {interval,observable,Subject,pipe, Observable} from 'rxjs'
//import {takeUntil} from 'rxjs/operators'

//import 'rxjs/Rx'//usado para utilizar os operador Observable

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]

})
export class OfertaComponent implements OnInit {


  public oferta: Oferta


  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertasService,
    private carrinhoService:CarrinhoService) { }

  ngOnInit() {
    //console.log(this.route.snapshot.params['id'])
    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService.getOferta(parametros.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta
        })
    })



    /*
  this.route.params.subscribe((parametro: any) => {
    console.log(parametro)
  }, (error: any) => {
    console.log(error),
      (complete: any) => {
        console.log('processamento foi classificado como concluido!')
      }
  })*/

    /*let tempo = interval(5000).pipe()
    tempo.subscribe((intervalo:number)=>{
      console.log(intervalo)
    })*/
  }

  public adicionarItemCarrinho():void{
    this.carrinhoService.incluirItem(this.oferta)
  }

}
