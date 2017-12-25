const path = require('path');
const {argv} = require('yargs');

exports.environment = argv.env || process.env.NODE_ENV || 'production';
exports.watch = argv.env && 'watch' in argv.env;
exports.dev = exports.watch || exports.environment === 'development';
exports.min = (argv.env && 'min' in argv.env) || !exports.dev;

console.log(`exports.environment = ${exports.environment }`);
console.log(`exports.watch = ${exports.watch }`);
console.log(`exports.dev = ${exports.dev }`);
console.log(`exports.min = ${exports.min }`);

exports.paths = {};
exports.paths.root = path.join(__dirname, '..');
exports.paths.src = path.join(exports.paths.root, 'src');
exports.paths.dist = path.join(exports.paths.root, 'dist');
exports.paths.release = path.join(exports.paths.root, 'release');

exports.paths.scripts = path.join(exports.paths.src, 'scripts');
exports.paths.styles = path.join(exports.paths.src, 'styles');

exports.paths.aliases = {
    'root': exports.paths.root
};

exports.host = 'localhost';
exports.port = 1337;