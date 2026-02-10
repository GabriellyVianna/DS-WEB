<?php

class Fogao {

    public $potencia;
    public $cor;
    public $tamanho;
    public $modelo;
    public $marca;
    
    public function acender() {
        return "<br>Acendeu o Fogão de potencia " . $this->potencia;
    }

    public function apagar() {
        return "<br>Apagou o Fogão da marca " . $this->marca;
    }

    public function queimar() {
        return "<br>Queimou o pano de prato no Fogão modelo " . $this->modelo;
    }
}

$fogãopreto = new Fogao ();
$fogãopreto->potencia = "220V";
echo $fogãopreto->acender();

$fogãoprata = new Fogao ();
$fogãoprata->marca = "Electrolux";
echo $fogãoprata->apagar();

$fogãobranco = new Fogao ();
$fogãobranco->modelo = "4 Bocas";
echo $fogãobranco->queimar();


class TV {

    public $voltagem;
    public $polegada;
    public $tamanho;
    public $modelo;
    public $marca;
    
    public function ligar() {
        return "<br><br>Ligou a Tv da marca " . $this->marca;
    }

    public function desligar() {
        return "<br>Desligou  a Tv modelo " . $this->modelo;
    }

    public function assistir() {
        return "<br>Assistiu na Tv com voltage " . $this->voltagem;
    }
}

$Tvpreto = new TV ();
$Tvpreto->marca = "Samsung";
echo $Tvpreto->ligar();

$Tvprata = new TV ();
$Tvprata->modelo = "de Resolução 4k";
echo $Tvprata->desligar();

$Tvbranco = new TV ();
$Tvbranco->voltagem = "110V";
echo $Tvbranco->assistir();

class Computador {

    public $memoria;
    public $polegada;
    public $cor;
    public $modelo;
    public $marca;
    
    public function digitar() {
        return "<br><br>Digitou no computador com marca " . $this->marca;
    }

    public function assistir() {
        return "<br>Assistiu no computador cor " . $this->cor;
    }

    public function jogar() {
        return "<br>A quantidade de polegada era " . $this->polegadas;
    }
}

$Computadorpreto = new Computador ();
$Computadorpreto->marca = "LG";
echo $Computadorpreto->digitar();

$Computadorprata = new Computador ();
$Computadorprata->cor = "Rosa";
echo $Computadorprata->assistir();

$Computadorbranco = new Computador ();
$Computadorbranco->polegadas = "17";
echo $Computadorbranco->jogar();

class MaquinaDeLavar {

    public $tamanho;
    public $voltagem;
    public $cor;
    public $modelo;
    public $marca;
    
    public function lavar() {
        return "<br><br>Lavou roupa na Maquínica de tamanho " . $this->tamanho;
    }

    public function centrifugar() {
        return "<br>Centrifugou a roupa na Maquínica modelo " . $this->modelo;
    }

    public function enxaguar() {
        return "<br>Enxaguou a roupa de cor " . $this->cor;
    }
}

$Maqpreto = new MaquinaDeLavar ();
$Maqpreto->tamanho = "Grande";
echo $Maqpreto->lavar();

$Maqprata = new MaquinaDeLavar ();
$Maqprata->modelo = "Industrial";
echo $Maqprata->centrifugar();

$Maqbranco = new MaquinaDeLavar ();
$Maqbranco->cor = "Azul";
echo $Maqbranco->enxaguar();

class Ventilador {

    public $tamanho;
    public $voltagem;
    public $cor;
    public $modelo;
    public $marca;
    
    public function ligar() {
        return "<br><br>Ligou o ventilador de cor " . $this->cor;
    }

    public function resfriar() {
        return "<br>Resfriou a sala com o modelo " . $this->modelo;
    }

    public function desligar() {
        return "<br>Desligou o ventilador com voltagem " . $this->voltagem;
    }
}

$Venpreto = new Ventilador ();
$Venpreto->cor = "Preto";
echo $Venpreto->ligar();

$Venprata = new Ventilador ();
$Venprata->modelo = "Power";
echo $Venprata->resfriar();

$Venbranco = new Ventilador ();
$Venbranco->voltagem = "Bivolt";
echo $Venbranco->desligar();

?>



