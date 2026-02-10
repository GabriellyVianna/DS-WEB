<?php

 class Pessoa {

    public $nome; //Atributo
    
    public function falar() { //Método

      return "O meu nome é ".$this->nome;

    }
 }

 $Bruno = new Pessoa ();
 $Bruno->nome = "Bruno Attina";
 echo $Bruno->falar();
 ?>
