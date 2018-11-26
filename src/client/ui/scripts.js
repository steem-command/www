'use strict';

const $ = require('jquery');
window.jQuery = $;
window.$ = $;

require('semantic-ui-css/semantic.min.js');

//first load the navbar, sidebar and footer!
$('#header').load('/partials/header.html');
$('#footer').load('/partials/footer.html');

$(document).ready(function() {
    $('.ui.dropdown').dropdown();
});
