const path = require('path');
const {argv} = require('yargs');

exports.environment = argv.env || process.env.NODE_ENV || 'development';
exports.watch = 'watch' in argv;
exports.dev = exports.watch || exports.environment === 'development';
exports.min = !exports.dev;

exports.paths = {};
exports.paths.root = path.join(__dirname, '..');
exports.paths.src = path.join(exports.paths.root, 'src');
exports.paths.dist = path.join(exports.paths.root, 'dist');
exports.paths.release = path.join(exports.paths.root, 'release');

exports.paths.scripts = path.join(exports.paths.src, 'scripts');
exports.paths.scss = path.join(exports.paths.src, 'scss');

exports.paths.aliases = {
    'root': exports.paths.root
};

exports.host = 'localhost';
exports.port = 1337;