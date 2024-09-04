$(document).ready(function(){
    $('#tarefa-form').on('submit', function(e){
        e.preventDefault();

        // Recupera o valor da tarefa
        const nomeTarefa = $('#nome-tarefa').val();
        
        // Cria um novo item de lista
        const novoItem = $('<li></li>').text(nomeTarefa);
        
        // Adiciona o novo item à lista
        $('#lista-tarefas').append(novoItem);
        
        // Limpa o campo de entrada
        $('#nome-tarefa').val('');
    });

    // Adiciona o efeito de linha no texto ao clicar no item
    $('#lista-tarefas').on('click', 'li', function(){
        $(this).toggleClass('completed');
    });
});
