$( document ).ready(function() {

    var deleteBtn = $('.delete-btn'); //seleciona o botão de deletar
    var searchBtn = $('#search-btn'); //seleciona o botão de search
    var searchForm = $('#search-form'); //seleciona o form de search

    $(deleteBtn).on('click', function(e) { //Uma função que vai ativar quando o botão deletar for clicado


        e.preventDefault();

        var delLink = $(this).attr('href'); //pega o atributo href desse botão
        var result = confirm('Quer deletar esta tarefa?');

        if(result) {
            window.location.href = delLink; //se ele clicou em ok, ele vai para o delLink
        }

    });

    $(searchBtn).on('click', function() { //Uma função que vai ativar quando o botão search for clicado
        searchForm.submit();
    });

});