<?php

class fabricante {
    public $nome;
    public $paisOrigem;

    public function __construct($nome, $paisOrigem) {
        $this->nome = $nome;
        $this->paisOrigem = $paisOrigem;
    }
}

class motor {
    public $potencia;
    public $combustivel;

    public function __construct($potencia, $combustivel) {
        $this->potencia = $potencia;
        $this->combustivel = $combustivel;
    }
}

class modelo {
    public $modelo;
    public $ano;
    public $fabricante;
    public $motor;

    public function __construct($modelo, $ano, fabricante $fabricante, motor $motor){
        $this->modelo = $modelo;
        $this->ano = $ano;
        $this->fabricante = $fabricante;
        $this->motor = $motor;
    }
}

$fabricante1 = new fabricante("Honda", "Japão");
$motor1 = new motor("150cv", "Flex");

$modelo1 = new modelo("Civic", "2024", $fabricante1, $motor1);

echo " O modelo é: " . $modelo1->modelo . " | Ano de fabricação: " . $modelo1->ano . "<br><br>";
echo "Fabricante: " . $modelo1->fabricante->nome . " | País de fabricação: " . $modelo1->fabricante->paisOrigem . "<br><br>";
echo "Potência do modelo: " . $modelo1->motor->potencia . " | Combustível do modelo: " . $modelo1->motor->combustivel;

?>