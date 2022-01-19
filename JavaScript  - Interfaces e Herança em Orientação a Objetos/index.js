import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticação } from "./SistemaAutenticação.js";

const diretor = new Diretor ('Rodrigo', 10000, 12345678900);
diretor.cadastrarSenha(123456)

const gerente = new Gerente ('Ricardo', 5000, 12345678901);
gerente.cadastrarSenha(123)

const cliente = new Cliente ('Lais', 789456123, 456)

const gerenteEstaLogado = SistemaAutenticação.login(gerente, '123')
const diretorEstaLogado = SistemaAutenticação.login(diretor, '123456')
const clienteEstaLogado = SistemaAutenticação.login(cliente, '456')


console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)






// import { ContaCorrente } from "./Conta/ContaCorrente.js";
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
// import { ContaSalario } from "./Conta/ContaSalario.js";

// const cliente1 = new Cliente("Ricardo", 11122233309);

// const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// const contaSalario = new ContaSalario(cliente1);
// contaSalario.depositar(100);
// contaSalario.sacar(10);

// console.log(contaSalario);
