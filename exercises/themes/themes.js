const ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");
const glob = require('glob');
const extractThemesPlugin = new ExtractTextPlugin({
    filename: '[name].css'
});


const themeEntries = (() => {
    const globPath = path.join(__dirname, "themes", "*");
    var files = glob.sync(globPath, {mark: true});
    return files.filter((f) => f.lastIndexOf('/') === f.length - 1).reduce((res, curr) => {
        var finalRes = res || {};
        finalRes["themes/" + path.basename(curr, path.extname(curr))] = path.join(__dirname, "themes", `${path.basename(curr, path.extname(curr))}`, "theme.less");
        return finalRes;
    }, {});

})();
module.exports = {
    themeEntries,
    extractThemesPlugin
};
