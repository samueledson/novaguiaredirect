var message = document.querySelector('span#message');

chrome.storage.sync.get( 'url', function(items){

    document.querySelector('input#url').value = items.url;

});


document.querySelector('button#save').addEventListener('click', function() {

    var url = document.querySelector('input#url').value;

    if( !url ){
        message.innerHTML= 'Ops! Insira a URL primeiro.';
        return;
    }

    chrome.storage.sync.set( {'url': url}, function(){

        message.innerHTML = 'Sua página de nova guia foi alterada com sucesso!!';

    });

});