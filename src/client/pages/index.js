'use strict';

$('#explore_btn').click(function() {
    var type = $('#type_input')
        .val()
        .replace(/,/g, '')
        .trim()
        .toLowerCase()
        .replace('@', '');
    var uri = $('#uri_input').val();

    if (!uri) return;

    if (type == 'account') {
        window.location = '/explore/account.html?uri=' + uri;
    } else if (type == 'post') {
        window.location = '/explore/post.html?uri=' + uri;
    } else if (type == 'transaction') {
        window.location = '/explore/transaction.html?uri=' + uri;
    } else if (type == 'block') {
        window.location = '/explore/block.html?uri=' + uri;
    } else {
        alert(
            'Wrong URI. Please enter a valid Steem transaction ID, block number or username.'
        );
    }
});
