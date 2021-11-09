<?php

    $nome = $_POST["nomeSobrenome"];
    $data = $_POST["dataNascimento"];
    $sexo = $_POST["sexo"];
    $cep = $_POST["cep"];
    $cidade = $_POST["cidade"];
    $bairro = $_POST["bairro"];
    $telefone = $_POST["telefone"];
    $email = $_POST["email"];


    $coneccao = mysqli_connect("localhost:3306", "root", "", "tde");

    mysqli_query($coneccao,"INSERT INTO `teste` (`identificador`, `nomeSobrenome`, `dataNascimento`, `sexo`, `cep`, `cidade`, `bairro`, `telefone`, `email`) VALUES (NULL, '$nome', '$data', '$sexo', '$cep', '$cidade', '$bairro', '$telefone', '$email')");

?>