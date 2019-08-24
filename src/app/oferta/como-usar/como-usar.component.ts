import { OfertasService } from '../../ofertas.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {

  public descricao:string = '';


  constructor(private route:ActivatedRoute,private ofertaService:OfertasService) { }

  ngOnInit() {

    this.route.parent.params.subscribe((parametros: Params) => {
      this.ofertaService.getComoUsarOfertaPorId(parametros.id)
      .then((resposta:string)=>{
        this.descricao = resposta
  
      })

    })

    
  }

}
