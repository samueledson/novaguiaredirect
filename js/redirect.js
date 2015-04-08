chrome.storage.sync.get( 'url', function(items){

    if( !items.url ){

        chrome.tabs.create({ url: "options.html" });

    }

    document.location.href = 'http://' + items.url;

});