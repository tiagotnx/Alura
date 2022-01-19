import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
        this.cliente = novoValor;
        }
    }

    get cliente () {
        return this._cliente;
    }

    get saldo () {
        return this._saldo
    }

    _saldo = 0;

    sacar (valor) {
        if (this._saldo >= valor){//o this refere-se a conta corrente em questão.
            this._saldo -= valor;
            return valor;
            }
    }


    depositar (valor) {
        if (valor <= 0){//o this refere-se a conta corrente em questão.
            return
            }
            this._saldo += valor;
    }

    
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
};