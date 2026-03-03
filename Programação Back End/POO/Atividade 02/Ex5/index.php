<?php
class Documento {
    private $numero;

    public function getNumero() {
        return $this->numero;
    }

    public function setNumero($n) {
        $this->numero = $n;
    }
}

class CPF extends Documento {
public function validar() {
$cpf = preg_replace('/\D/', '', $this->getNumero()); 

if (strlen($cpf) != 11) {
    return false;
}

if (preg_match('/(\d)\1{10}/', $cpf)) {
return false;
}

for ($t = 9; $t < 11; $t++) {
$soma = 0;
for ($c = 0; $c < $t; $c++) {
 $soma += $cpf[$c] * (($t + 1) - $c);
}
$digito = (10 * $soma) % 11;
if ($digito == 10) $digito = 0;
if ($cpf[$c] != $digito) {
    return false;
}
 }

return true;
    }
}

$doc = new CPF();
$doc->setNumero("490.860.588-25"); 

echo "CPF: " . $doc->getNumero() . "<br/>";
echo "Validação: " . ($doc->validar() ? "Válido" : "Inválido");
?>