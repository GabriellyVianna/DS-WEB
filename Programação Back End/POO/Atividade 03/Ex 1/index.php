<?php
//Objeto
class Dono {
    public $nome;
    public $telefone;

    public function __construct($nome, $telefone) {
        $this->nome = $nome;
        $this->telefone = $telefone;
    }
}
//Objeto dentro de objeto
class Animal {
    public $nome;
    public $especie;
    public $dono;

   
    public function __construct($nome, $especie, Dono $dono) {
        $this->nome = $nome;
        $this->especie = $especie;
        $this->dono = $dono;
    }
}

//instanciando
$dono1 = new Dono("João", "(11) 99999-9999");

$animal1 = new Animal("Rex", "Cachorro", $dono1);

echo "Nome do animal: " . $animal1->nome . " | Especie: " . $animal1->especie . "<br><br>";
echo "Nome do dono: " . $animal1->dono->nome . " | Telefone: " . $animal1->dono->telefone;

?>