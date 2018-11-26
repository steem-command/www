var paths = require('./paths.js');

var entry = {};

entry = {
    styles: paths.styles,
    scripts: paths.scripts,

    index: paths.index,

    //explore
    explore_config: paths.config,
    explore_properties: paths.properties,
    explore_globals: paths.globals,
    explore_account: paths.account,
    explore_post: paths.post,
    explore_block: paths.block,
    explore_transaction: paths.transaction,
    explore_tags: paths.tags,
};

module.exports = entry;
