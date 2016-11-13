var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

var cleverbot = require('node-cleverbot').default;
console.log(cleverbot);

var say = require('say');

var cb = cleverbot.create();

rl.setPrompt('OHAI> ');
rl.prompt();

rl.on('line', function(line) {
		cb.sendMessage(line.trim()).then(message=>{

				console.log(message);
				say.speak(message);
				rl.prompt();
				})



		})
.on('close', function() {
		console.log('Have a great day!');
		process.exit(0);
		});
