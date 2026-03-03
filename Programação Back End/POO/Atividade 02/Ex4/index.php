<?php
abstract class Produto{
public $nome = "Gaby";
public $preco = 100;
public $estoque = 10;

abstract public function calcularDesconto();
}

class Eletronico extends Produto{
public $nome = "Celular";
public $preco = 1000;
public $estoque = 12;

public function calcularDesconto(){
 $conta = $this->preco - ($this->preco * 0.10);

 if($this->estoque < 5){
    $conta = $conta - ($this->preco * 0.10);
 }

 return $conta;
}
}

class Roupa extends Produto{
public $nome = "Vestido";
public $preco = 70;
public $estoque = 50;

public function calcularDesconto(){
 $conta = $this->preco - ($this->preco * 0.20);

 if($this->estoque < 5){
     $conta = $conta - ($this->preco * 0.10);
 }

 return $conta;
}
}

$celular = new Eletronico();
echo $celular->calcularDesconto();

echo "<hr>";

$roupa = new Roupa();
echo $roupa->calcularDesconto();

?>