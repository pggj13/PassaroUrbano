import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]

})
export class DiversaoComponent implements OnInit {


  public ofertas: Oferta[]

  constructor(private OfertasService: OfertasService) { }

  ngOnInit() {

    this.OfertasService.getOfertasPorCategorias('diversao')
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas
      });
  }

}
