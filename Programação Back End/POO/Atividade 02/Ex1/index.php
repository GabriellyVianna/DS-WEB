<?php
class Pessoa {
public $nome = "Gaby";
protected $idade = 16;

public function verDados(){
    echo $this->nome . "<br/>";
    echo $this->idade . "<br/>";
}
}

class Funcionario extends Pessoa {
public $salario = 1000; 

public function setSalario($valor) { 
    $this->salario = $valor;
}

public function verDados(){
    echo "Nome: " . $this->nome . "<br/>";
    echo "Idade: " . $this->idade . "<br/>";
    echo "Salário: " . $this->salario . "<br/>";
    }
}

class Gerente extends Funcionario {
public $nome = "Vini";
protected $idade = 17;

public function calcularSalario(){
    return $this->salario + ($this->salario * 0.20);
}

public function verDados(){
    echo "Nome: " . $this->nome . "<br/>";
    echo "Idade: " . $this->idade . "<br/>";
    echo "Salário: " . $this->salario . "<br/>";
    }
}

class Desenvolvedor extends Funcionario {
public $nome = "Sofia";
protected $idade = 18;
public $salario = 1050;

public function calcularSalario(){ 
    return $this->salario + ($this->salario * 0.10);
}

public function verDados(){
    echo "Nome: " . $this->nome . "<br/>";
    echo "Idade: " . $this->idade . "<br/>";
    echo "Salário: " . $this->salario . "<br/>";
}
}


$gerente = new Gerente();
$gerente->setSalario(1000);
$gerente->verDados();
echo "Total com bônus: " . $gerente->calcularSalario() . "<br/><br/>";

$dev = new Desenvolvedor();
$dev->verDados();
echo "Total com bônus: " . $dev->calcularSalario() . "<br/>";

?>