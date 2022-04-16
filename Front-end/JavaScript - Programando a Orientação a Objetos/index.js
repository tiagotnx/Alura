import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente(); //cria um novo cliente (instância/objeto)
cliente1.nome = "Ricardo";//atribui valores aos campos do cliente.
cliente1.cpf = 11122233309;

// const cliente2 = new Cliente();
// cliente2.nome = "Alice";
// cliente2.cpf = 88822233309;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.agencia = 1001;
ContaCorrenteRicardo.cliente = cliente1
ContaCorrenteRicardo.depositar(500);


const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();
conta2.cliente.nome = "Alice";
conta2.cliente.cpf = 88822233309;
// conta2.cliente = cliente2;
conta2.agencia = 102;


ContaCorrenteRicardo.transferir(200, conta2);
console.log(conta2, ContaCorrenteRicardo);



//proposta que está sendo feita para uma sintaxe de campos privados dentro do JS https://github.com/tc39/proposal-class-fields#private-fields