'use strict';

//this module will be bundle to the client so should contain ONLY NON-SENSITIVE information

var config = {};

//site
config.site_name = 'Steem Command';
config.site_description =
    'The most powerful interface to the Steem Blockchain. Explore, command and conquer Steem operations.';
config.site_uri = 'http://steemcmd.com';
config.super_admin = 'dzivenu';

//steem
config.steem_api = 'https://api.steemit.com';
config.steem_rpc = 'https://api.steemit.com';
config.steem_account = 'steemcmd';
config.community = 'institute';

module.exports = config;
