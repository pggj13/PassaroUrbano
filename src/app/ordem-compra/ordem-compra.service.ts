import { map } from 'rxjs/operators';
import { URL_API } from '../app.api';
import { Observable, pipe } from 'rxjs';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../shared/pedido.model';



@Injectable()
export class OrdemCompraService {

    constructor(private http: Http) {

    }

    public efetivarCompra(pedido: Pedido): Observable<any> {

        let headers: Headers = new Headers()

        headers.append('Content-type', 'application/json')

        return this.http.post(
            `${URL_API}/pedidos`,
            JSON.stringify(pedido),
            new RequestOptions({ headers: headers })
        ).pipe(map((resposta: any) => {
            return resposta.json().id
        }))
    }
}