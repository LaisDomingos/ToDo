$(document).ready(function() { 

    var deleteBtn = $('.delete-btn'); //seleciona o botão de deletar
    
    $(deleteBtn).on('click', function(e) { //Uma função que vai ativar quando ele foi clicado

        e.preventDefault();

        var delLink = $(this).attr('href'); //pega o atributo href desse botão
        var result = confirm('Quer deletar esta tarefa?'); 

        if(result) {
            window.location.href = delLink; //se ele clicou em ok, ele vai para o delLink
        }

    });

});