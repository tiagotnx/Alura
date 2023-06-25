<?php

$altura = 1.90;
$peso = 60;

$imc = $peso / ($altura**2);

if ($imc < 18.5) {
    echo "Seu imc é de $imc, o que é abaixo do normal.";
} elseif ($imc < 25) {
    echo "Seu imc é de $imc, o que é normal.";
} else {
    echo "Seu imc é de $imc, o que é acima do normal.";
}