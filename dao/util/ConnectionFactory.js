module.exports = function () {
    var neo4j = require('node-neo4j');
    return new neo4j('http://localhost:7474');
};