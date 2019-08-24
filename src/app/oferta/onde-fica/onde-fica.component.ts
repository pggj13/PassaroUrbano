import { OfertasService } from '../../ofertas.service';
import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public descricao:string = '';

  constructor(private route:ActivatedRoute,private ofertaService:OfertasService) { }

  ngOnInit() {

    this.route.parent.params.subscribe((parametros: Params) => {
      this.ofertaService.getOndeFicaOfertaPorId(parametros.id)
    .then((resposta:string)=>{
      this.descricao = resposta
    })

    })


    
  }
}
