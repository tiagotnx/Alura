<?php
$idade = 17;
$numeroDePessosas = 2;

echo "Você só pode entrar se tiver a partir de 18 anos ou a partir de 16 anos acompanhado." . PHP_EOL;

if ($idade >= 18) {
    echo "Você tem $idade anos. Pode entrar.";
} elseif ($idade >= 16 && $numeroDePessosas > 1) {
    echo "Você tem $idade anos, está acompanhada, então pode entrar. ";
} else {
    echo "Você só tem $idade anos e está sozinho. Você não pode entrar";
}

echo PHP_EOL;
echo "Adeus!";