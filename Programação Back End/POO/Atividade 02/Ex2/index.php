<?php
abstract class Animal {
abstract public function fazerSom();
public function mover(){
    return "anda";
}
}

class Sapo extends Animal {
public function fazerSom(){
    echo "Grept Grept";
 }
}

class Cavalo extends Animal {
public function fazerSom() {
    echo "Potocó Potocó!";
}
public function mover(){
    return "Galopa e " . parent::mover();
}
}

class Cachorro extends Animal {
public function fazerSom() {
    echo "Au Au!";
}
}

$Sapo = new Sapo();
$Sapo->fazerSom();
echo $Sapo->mover(); 

echo "<br>";

$cavalo = new Cavalo();
$cavalo->fazerSom(); 
echo $cavalo->mover();

echo "<br>";

$Cachorro = new Cachorro();
$Cachorro->fazerSom();
echo $Cachorro->mover(); 
?>