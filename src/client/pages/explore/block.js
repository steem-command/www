'use strict';

var config = require('../../../configs/config');
var prettyJson = require('../../../lib/prettyJson');
var dsteem = require('dsteem');

var client = new dsteem.Client(config.steem_rpc);
var urlParams = new URLSearchParams(window.location.search);
let uri = urlParams.get('uri');

if (uri) {
    $('#uriInput').val(uri);
    loadData();
}

async function loadData() {
    try {
        $('#output_segment').show();
        $('#output').html('');
        $('#output_segment').addClass('loading');

        let uri = $('#uriInput').val();
        if (!uri) {
            $('#output_segment').hide();
            return;
        } else {
            let block = await client.database.getBlock(uri);

            document.getElementById('output').innerHTML = prettyJson.toHtml(
                block
            );

            $('#output_segment').removeClass('loading');
        }
    } catch (err) {
        console.log(err);

        $('#output_segment').hide();
        $('#output_segment').removeClass('loading');
        alert('Sorry and error occurred.');
    }
}

document.getElementById('uriInput').addEventListener('keyup', function(e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;

    if (keyCode == '13') {
        // Enter pressed

        loadData();
    }
});

$('#loadBtn').click(function() {
    loadData();
});
