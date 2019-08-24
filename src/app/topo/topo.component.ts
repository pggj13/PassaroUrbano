import { Oferta } from '../shared/oferta.model';
import { Observable, Subject, of } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { switchMap, debounceTime, catchError, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Array<Oferta>>

  private subjectPesquisa: Subject<string> = new Subject<string>()//Criado o proxy

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa//retorno Oferta[]
      .pipe(debounceTime(1000))//debounceTune ==> faz a pesquisa depois de 1 segundo
      .pipe(distinctUntilChanged())//para fazer pesquisa distintas
      .pipe(switchMap((termo: string) => {
        if (termo.trim() === '') { //Verfica se a pesquisa está vazio
          // retornar um observable de array de ofertas vazio

          return of<Oferta[]>([])//of define tipo de retorno
        }
        return this.ofertasService.pesquisaOfertas(termo)
      }), catchError((erro: any) => {//erro da pesquisa
        return of<Oferta[]>([])
      }))
  }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca)

  }
  public limpaPesquisa():void{
    this.subjectPesquisa.next('')
  }
}
