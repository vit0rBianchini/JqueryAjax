<?php

    $con = mysqli_connect("localhost:3306", "root", "", "tde");

    //mysqli_query($con, 'INSERT INTO teste(identificador, nomeSobrenome, dataNascimento, sexo) VALUES (NULL, "Maria", "16/10/2000", "Masculino")');

    $resultado = mysqli_query($con, 'SELECT * FROM `teste`');

    $i = 0;
    while($linha = mysqli_fetch_assoc($resultado)){
        
        $retorno[$i]["identificador"] = $linha["identificador"];
        $retorno[$i]["nomeSobrenome"] = $linha["nomeSobrenome"];
        $retorno[$i]["dataNascimento"] = $linha["dataNascimento"];
        $retorno[$i]["sexo"] = $linha["sexo"];
        $retorno[$i]["cep"] = $linha["cep"];
        $retorno[$i]["cidade"] = $linha["cidade"];
        $retorno[$i]["bairro"] = $linha["bairro"];
        $retorno[$i]["telefone"] = $linha["telefone"];
        $retorno[$i]["email"] = $linha["email"];

        $i++;
    }

    echo json_encode($retorno)

?>