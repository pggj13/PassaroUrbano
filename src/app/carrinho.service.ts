import { Oferta } from './shared/oferta.model';
import { ItemCarrinho } from './shared/item-carrinho.model';

export class CarrinhoService {

    public itens: ItemCarrinho[] = []


    public exibirItens(): ItemCarrinho[] {
        return this.itens
    }
    public incluirItem(oferta: Oferta): void {

        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor, 1
        )

        //verificar se o itemm em questão já não existe dentro de this.itens
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade += 1
        } else {
            this.itens.push(itemCarrinho)
        }
    }

    public totalCarrinhoCompras(): number {
        let total: number = 0

        this.itens.map((item: ItemCarrinho) => {
            total = total + (item.valor * item.quantidade)
        })

        return total
    }
    public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {


        //outro caso seria antes de incrementar verificar se ainda tem muitas quantidade no estoque


        //incrementar quantidade

        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade += 1
        }
    }

    public decrementarQuantidade(itemCarrinho: ItemCarrinho): void {
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

        if (itemCarrinhoEncontrado) {

            itemCarrinhoEncontrado.quantidade -= 1

            //remove do carrinho quando a quantidade do carrinho for igual a zero
            if (itemCarrinhoEncontrado.quantidade === 0) {

            
                this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1)

            }
        }
    }
    public limparCarrinho():void{
        this.itens = []
    }

}

