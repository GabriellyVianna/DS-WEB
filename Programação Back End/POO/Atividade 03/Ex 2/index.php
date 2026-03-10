<?php

class artista {
    public $nome;
    public $genero;

    public function __construct($nome, $genero) {
        $this->nome = $nome;
        $this->genero = $genero;
    }
}

class musica {
    public $titulo;
    public $duracao;
    public $artista;//define como variavel

      public function __construct($titulo, $duracao, Artista $artista){
        $this->titulo = $titulo;
        $this->duracao = $duracao;
        $this->artista = $artista;
    }
}

//Instancia
$artista1 = new artista("Queen", "5:55");

$musica1 = new musica("Bohemian Rhapsody", "Rock", $artista1);

echo "Nome da Música: " . $musica1->titulo . " | Gênero: " . $musica1->duracao . "<br><br>";
echo "Nome do Artista: " . $musica1->artista->nome . " | Duração: " . $musica1->artista->genero;

?>