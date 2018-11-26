const fs = require('fs'),
    path = require('path'),
    root = fs.realpathSync(process.cwd()),
    resolveApp = relativePath => path.resolve(root, relativePath),
    resolveRuntime = relativePath =>
        path.resolve(fs.realpathSync(process.cwd()), relativePath);

module.exports = {
    dir: resolveApp('.'),
    app: resolveApp('./src/server.js'),

    //ui
    //styles: [ resolveApp('./node_modules/semantic-ui-css/semantic.min.css'), resolveApp('./src/configs/global.css') ],
    styles: resolveApp('./src/client/ui/styles.js'),
    scripts: resolveApp('./src/client/ui/scripts.js'),

    //pages
    index: resolveApp('./src/client/pages/index.js'),

    //explore
    config: resolveApp('./src/client/pages/explore/config.js'),
    globals: resolveApp('./src/client/pages/explore/globals.js'),
    properties: resolveApp('./src/client/pages/explore/properties.js'),

    account: resolveApp('./src/client/pages/explore/account.js'),
    post: resolveApp('./src/client/pages/explore/post.js'),
    block: resolveApp('./src/client/pages/explore/block.js'),
    transaction: resolveApp('./src/client/pages/explore/transaction.js'),
    tags: resolveApp('./src/client/pages/explore/tags.js'),

    //others
    public: resolveApp('./public'),
    publicRuntime: () => resolveRuntime('./public'),
};
