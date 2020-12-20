const readlineSync = require('readline-sync');
const chalk = require('chalk');
console.log(
'Welcome to '+ chalk.yellow.bold( 'Know-me? ')+ 'Challenge'
);
var username = readlineSync.question(chalk.green.bold('What\'s your name? '));
console.log(chalk.yellow.bold('All the best ') + chalk.yellowBright.bold(username));
var highscore = [
	{
		name: 'Anon',
		totalScore: 2
	}
];
var sc = 0;

play = (question, answer) => {
	var usrans = readlineSync.question(question);
	if (usrans.toUpperCase() === answer.toUpperCase()) {
		console.log(chalk.green('Right!'));
		sc++;
	} else {
		console.log(chalk.redBright('Wrong!'));
	}
	//sc--;
	console.log('Your score: ' + chalk.greenBright.bold(sc));
	console.log(
		chalk.blueBright(
			'------------------------------------------------------------------'
		)
	);
};

var questions = [
	{
		ques:"What is my first name?\nYour answer: " ,
		ans: 'anupam'
	},
	{
		ques:
			'Where do I live?\nYour answer: ',
		ans: 'lucknow'
	},
	{
    ques:
			"how many siblings do i have?\nYour answer: ",
		ans: '3'

	},
	{
		ques:
			'Which musical instrument can i play?\nYour answer: ',
		ans: 'guitar'
	},
	{
		ques:
			"what is my favourite sport?\nYour answer: ",
		ans: 'lawn tennis'
	}
];

for (var i = 0; i < questions.length; i++) {
	var x = i + 1;
	console.log('Question: ' + x);
	play(questions[i].ques, questions[i].ans);
}
console.log(
	chalk.greenBright(username) + '! You Scored ' + chalk.greenBright(sc)
);

var y = highscore.length;
//console.log(y);

for (var i = 0; i < y; i++) {
	if (highscore[i].totalScore <= sc) {
		console.log(
			'Congratulations! You have beaten ' +
				chalk.redBright.bold(highscore[i].name) +
				' with a high score ' +
				chalk.greenBright.bold(sc) +
				'/5'
		);
		console.log('You belong to Leaderboard. Send me your screenshot');
		break;
	}
}
