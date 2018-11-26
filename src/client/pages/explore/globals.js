'use strict';

var config = require('../../../configs/config');
var prettyJson = require('../../../lib/prettyJson');
var dsteem = require('dsteem');

var client = new dsteem.Client(config.steem_rpc);

(async function() {
    try {
        var globals = await client.database.getDynamicGlobalProperties();

        $('#output_segment').removeClass('loading');

        document.getElementById('output').innerHTML = prettyJson.toHtml(
            globals
        );
    } catch (err) {
        alert('Sorry an err occured');
        $('#output_segment').hide();
        console.log(err);
    }
})();
