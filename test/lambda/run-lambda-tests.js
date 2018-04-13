const Mocha = require('mocha');


function runTests() {
    return new Promise(resolve => {
        const mocha = new Mocha();
        mocha.checkLeaks();

        mocha.addFile('index.test.js');

        mocha.run(function(failures) {
            resolve(failures)
        });
    });
}

exports.runTests = async function(event, context) {
    return await runTests();
};

if (!module.parent) {
    runTests();
}


