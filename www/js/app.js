$('.collection')
    .on('click', '.collection-item', function(){
        var nomeProduto = this.firstChild.textContent;
        Materialize.toast(nomeProduto + ' adicionado', 1000);

        var $badge = $('.badge', this);
        if ($badge.length === 0) {
            $badge = $('<span class="badge brown-text">0</span>').appendTo(this);
        }

        $badge.text(parseInt($badge.text()) + 1);
    })
    .on('click', '.badge', function() {
        $(this).remove();
        return false;
    });

$('.modal-trigger').leanModal();

$('#confirmar').on('click', function() {
    var texto = "";

    $('.badge').parent().each(function(){
        texto += this.firstChild.textContent + ': ';
        texto += this.lastChild.textContent + ', ';
    });

    $('#resumo').empty().text(texto);
});

$('.acao-limpar').on('click', function() {
    $('#numero-mesa').val('');
    $('.badge').remove();
});

$('.scan-qrcode').click(function(){
    cordova.plugins.barcodeScanner.scan(function (result){        
        if (result.text) {
            let mesa = parseInt(result.text);
            Materialize.toast('Mesa ' + mesa, 2000);
            $('#numero-mesa').val(mesa);
        }
    }, function(error) {
        alert(JSON.stringify(error));
        Materialize.toast('Erro ' + JSON.stringify(error), 2000, 'red-text');
    });
});

$('.acao-finalizar').on('click', function() {
    $.ajax({
        url: 'http://cozinhapp.sergiolopes.org/novo-pedido',
        data: {
            mesa: $('#numero-mesa').val(),
            pedido: $('#resumo').text()
        },
        error: function(erro) {            
           navigator.vibrate(1000);
           Materialize.toast(erro.responseText, 3000, 'red-text');
        },
        success: function(dados) {
            navigator.vibrate(1000);
            Materialize.toast(dados, 2000);
            $('#numero-mesa').val('');
            $('.badge').remove();
        }
    });
});