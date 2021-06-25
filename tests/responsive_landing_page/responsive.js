var phantomcss = require('phantomcss');
// const spooky = require('spooky');
// phantom.casperTest = true;

// spooky.start('http://mysite.dev/');

// spooky.thenOpen('http://mysite.dev/')

// .then(function() {
//   phantomcss.screenshot('.site-header', 'site-header');
// });

// spooky.then(function () {
//     // this function runs in Casper's environment
//     phantomcss.screenshot('.site-header', 'site-header');
//   });02

//   spooky.thenEvaluate(function () {
//     // this function runs in the page's environment
//   })
  
//   // this function (and the three spooky calls above) runs in Spooky's environment
//   spooky.run();

  try {
    var Spooky = require('spooky');
} catch (e) {
    var Spooky = require('../lib/spooky');
}

const
  path = require('path'),
  _ = require('underscore')
;
var
  // close env to pass to spawn
  env = _.clone(process.env),
  // get the PATH - in my local Windows, it was Path
  envPath = env.PATH || env.Path,
  // get path to node_modules folder where casperjs and
  // phantomjs-prebuilt are installed
  // this will be different for you
  binDir = path.join(__dirname, './../../node_modules/.bin'),
  Spooky = require('spooky')
;
// update the path in the cloned env
env.PATH = env.Path = `${envPath};${binDir}`;

var spooky = new Spooky({
        child: {
            command: /^win/.test(process.platform) ? 'casperjs.cmd' : 'casperjs',
            transport: 'http',
            spawnOptions: {
                // set the env using cloned version
                // this fixes issue 1 with the path
                env: env
              }
        },
        casper: {
            logLevel: 'debug',
            verbose: true
        }
    }, function (err) {
        if (err) {
            e = new Error('Failed to initialize SpookyJS');
            e.details = err;
            throw e;
        }

        spooky.start(
            'http://en.wikipedia.org/wiki/Spooky_the_Tuff_Little_Ghost');
        spooky.then(function () {
            phantomcss.screenshot('.site-header', 'site-header');
            // this.emit('hello', 'Hello, from ' + this.evaluate(function () {
            //     return document.title;
            // }));
        });
        spooky.run();
    });

spooky.on('error', function (e, stack) {
    console.error(e);

    if (stack) {
        console.log(stack);
    }
});


// Uncomment this block to see all of the things Casper has to say.
// There are a lot.
// He has opinions.
// spooky.on('console', function (line) {
//     console.log(line);
// });


spooky.on('hello', function (greeting) {
    console.log(greeting);
});

spooky.on('log', function (log) {
    if (log.space === 'remote') {
        console.log(log.message.replace(/ \- .*/, ''));
    }
});