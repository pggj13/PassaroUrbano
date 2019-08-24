import { URL_API } from './app.api';
import { Oferta } from './shared/oferta.model'
import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable, Subject, ReplaySubject } from 'rxjs';
import { map,retry } from 'rxjs/operators';



//import { map, filter, switchMap } from 'rxjs/operators';

import 'rxjs'



@Injectable()
export class OfertasService {


    constructor(private http: Http) { }

    public ofertas: Array<Oferta>;



    public getOfertas(): Promise<Array<Oferta>> {

        //efetuar uma requisição http
        //retornar uma promise de ofertas[]
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: Response) => resposta.json())

    }

    public getOferta(id: number): Promise<Oferta> {

        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: Response) => {
                return resposta.json()[0]
            })
    }

    public getOfertasPorCategorias(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: Response) => resposta.json())
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: Response) => {
                return resposta.json()[0].descricao
            })
    }
    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: Response) => {
                return resposta.json()[0].descricao
            })
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]> {

        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .pipe(map((resposta: Response) => {
                return resposta.json()
            }), retry(10))

    }

    /*public pesquisaOferta(termo: string): Observable<Oferta[]> {
        return this.http.get(`${URL_API}?descricao_oferta_like=${termo}`)
            .pipe(map((resposta: any) => resposta.json()), retry(10))

    }*/

    /* public ofertas: Array<Oferta> = [
 
         {
             id: 1,
             categoria: "restaurante",
             titulo: "Super Burger",
             descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
             anunciante: "Original Burger",
             valor: 29.90,
             destaque: true,
             imagens: [
                 { url: "/assets/ofertas/1/img1.jpg" },
                 { url: "/assets/ofertas/1/img2.jpg" },
                 { url: "/assets/ofertas/1/img3.jpg" },
                 { url: "/assets/ofertas/1/img4.jpg" }
             ]
         },
         {
             id: 2,
             categoria: "restaurante",
             titulo: "Cozinha Mexicana",
             descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
             anunciante: "Mexicana",
             valor: 32.90,
             destaque: true,
             imagens: [
                 { url: "/assets/ofertas/2/img1.jpg" },
                 { url: "/assets/ofertas/2/img2.jpg" },
                 { url: "/assets/ofertas/2/img3.jpg" },
                 { url: "/assets/ofertas/2/img4.jpg" }
             ]
 
         },
         {
             id: 4,
             categoria: "diversao",
             titulo: "Estância das águas",
             descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
             anunciante: "Estância das águas",
             valor: 31.90,
             destaque: true,
             imagens: [
                 { url: "/assets/ofertas/3/img1.jpg" },
                 { url: "/assets/ofertas/3/img2.jpg" },
                 { url: "/assets/ofertas/3/img3.jpg" },
                 { url: "/assets/ofertas/3/img4.jpg" },
                 { url: "/assets/ofertas/3/img5.jpg" },
                 { url: "/assets/ofertas/3/img6.jpg" }
             ]
         }
 
     ]
 
    
     public getOfertas2(): Promise<Oferta[]> {
 
         return new Promise((resolve, reject) => {
             //Algum tipo de processamento, que ao finalizar chama a função resolve ou a função reject
 
 
             let deu_certo = true;
 
             if (deu_certo) {
 
                 setTimeout(() => resolve(this.ofertas), 3000)
             }
             else {
                 reject({ codigo_erro: 404, mensagem_erro: 'Servidor não encontrado' })
             }
         }).then((ofertas: Array<Oferta>) => {
             //Pode se tomar uma ação com valor do resolve
             console.log('primeiro then')
             return ofertas
         }).then((ofertas: Oferta[]) => {
             //Todo se fazer uma tratativa aqui
             console.log('Segundo then')
             return new Promise((resolve2, reject2) => {
                 setTimeout(() => { resolve2(ofertas) }, 3000)
             })
         }).then((ofertas: Oferta[]) => {
 
             console.log('terceiro then executado apos 3 seg porque esta aguardando uma promise a ser resolvida')
             return ofertas
         })
     }*/
}