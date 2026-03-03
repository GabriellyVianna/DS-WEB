<?php
class Veiculo {
public $marca = "Honda";
public $modelo= "Civic";
private $velocidade = "80";

public function getNumero() {
return $this->velocidade;
}
public function setNumero($n) {
$this->velocidade = $n;
}

public function verDados(){
    echo $this->marca . "<br/>";
    echo $this->modelo . "<br/>";
    echo $this->velocidade . "<br/>";
}
}

class Carro extends Veiculo {
public $marca = "Gol";
public $modelo= "rebaixado";
private $velocidade = "50";

public function acelerar(){
    return "A velocidade do carro é" . $this->velocidade;
}
public function verDados(){

//Exibe a Classe atual
echo get_class($this) . "<br/>";
echo $this->marca . "<br/>";
echo $this->modelo . "<br/>";
echo $this->velocidade . "<br/>";
}
}

class Moto extends Veiculo {
public $marca = "Toyota";
public $modelo= "Cbr";
private $velocidade = "100";

public function acelerar(){
    return "A velocidade da moto é" . $this->velocidade;
}
public function verDados(){

//Exibe a Classe atual
echo get_class($this) . "<br/>";
echo $this->marca . "<br/>";
echo $this->modelo . "<br/>";
echo $this->velocidade . "<br/>";
}
}

$moto1 = new Moto();
echo $moto1->acelerar();

echo "<hr>";

$carro2 = new Carro();
echo $carro2->acelerar();

?>