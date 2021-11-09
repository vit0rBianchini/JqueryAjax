
$(document).ready(function () {
    fEventoClick();
    $("#telefone").mask("(00) 0000-00009");
    $("#cep").mask("00000-009");
    $("#data_nascimento").mask("00/00/0000");
    fComunicarServidor("listar")


});

function fEventoClick(){

    $("#bCadastrar").click(function (e) { 
        e.preventDefault();
        fComunicarServidor("inserir")
        fComunicarServidor("listar")
    });

    $("#cep").blur(function (e) { 
        e.preventDefault();
        fPreencherCampoCep($("#cep").val().replace("-", ""));
    });

};

function fComunicarServidor(arquivo){

    var dados = $("form").serialize();
    console.log(dados)
    $.ajax({
        type: "POST",
        url: "php/"+arquivo+".php",
        data: dados,
        dataType: "json",
        success: function (retorno) {
            var conteudo = "";
            conteudo += "<tr>";
            conteudo += "<td>Identificador</td>";
            conteudo += "<td>Nome</td>";
            conteudo += "<td>Data de Nascimento</td>";
            conteudo += "<td>Sexo</td>";
            conteudo += "<td>Cep</td>";
            conteudo += "<td>Cidade</td>";
            conteudo += "<td>Bairro</td>";
            conteudo += "<td>Telefone/celular</td>";
            conteudo += "<td>E-mail</td>";
            conteudo += "</tr>";
            for(var i = 0; i < retorno.length; i++){
                conteudo += "<tr>";
                conteudo += "<td>" + retorno[i]["identificador"]+"</td>";
                conteudo += "<td>" + retorno[i]["nomeSobrenome"]+"</td>";
                conteudo += "<td>" + retorno[i]["dataNascimento"]+"</td>";
                conteudo += "<td>" + retorno[i]["sexo"]+"</td>";
                conteudo += "<td>" + retorno[i]["cep"]+"</td>";
                conteudo += "<td>" + retorno[i]["cidade"]+"</td>";
                conteudo += "<td>" + retorno[i]["bairro"]+"</td>";
                conteudo += "<td>" + retorno[i]["telefone"]+"</td>";
                conteudo += "<td>" + retorno[i]["email"]+"</td>";
                conteudo += "</tr>";
            }

            $("#tabela").html(conteudo);
        }

    });
}

function fPreencherCampoCep(cep){
    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/unicode/`,
        dataType:"json",
        success: function (response) {
            $("#cidade").val(response.localidade);
            $("#bairro").val(response.bairro);

        }
    });

};