var path = require('path');
var fs = require('fs');
var pkg = require(path.join(process.cwd(), 'package.json'));

var idr = null;
var configPath = path.join(process.cwd(), 'device.json');
if (pkg.idr && pkg.idr.driver) {
    idr = require(pkg.idr.driver);
} else if (fs.existsSync(configPath)) {
    var config = JSON.parse(fs.readFileSync(configPath));
    if (config.idr && config.idr.driver) {
        idr = require(config.idr.driver);
    }
} else {
    configPath = path.join(process.cwd(), 'config.json');
    var config = JSON.parse(fs.readFileSync(configPath));
    if (config.idr && config.idr.driver) {
        idr = require(config.idr.driver);
    }
}

module.exports = idr;