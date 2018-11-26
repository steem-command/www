'use strict';

var config = require('../../../configs/config');
var prettyJson = require('../../../lib/prettyJson');
var dsteem = require('dsteem');

var client = new dsteem.Client(config.steem_rpc);

(async function() {
    try {
        var block = await client.database.getConfig();

        $('#output_segment').removeClass('loading');

        document.getElementById('output').innerHTML = prettyJson.toHtml(block);
    } catch (err) {
        alert('Sorry an err occured');
        $('#output_segment').hide();
        console.log(err);
    }
})();
