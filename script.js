
/*	
// old code

function Question(question, answers, correct) {
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	};
// new method for display question and answers
Question.prototype.displayQuestion = function() {
	console.log(this.question);
	for (var i = 0; i < questions.length; i++) {
		console.log(i + ':' +  this.answers[i])
	}
};

// new method to check answer

Question.prototype.checkAnswer = function(ans) {
	if(ans === this.correct) {
		console.log('Feelsgoodman')
	} else console.log('Feelsbadmangun')
};


*/
(function () {
	class QuestionConst {
		constructor(question, answers, correct) {
			this.question = question;
			this.answers = answers;
			this.correct = correct;
		};

		displayQuestion() {
			console.log(this.question);
			for (var i = 0; i < this.answers.length; i++) {
				console.log(i + ':' +  this.answers[i])
			}
		};

		checkAnswer(ans, callback) {
			var sc;
			if(ans === this.correct) {
				sc = callback(true);
				console.log('--------------\nFEELSGOODMAN\n--------------\nYOU GOT ' + sc + ' POINTS FAM\n--------------');
			} else {
				sc = callback(false);
				console.log('--------------\nFELSBADMANGUN\n--------------\nYOU GOT ' + sc + ' POINTS FAM\n--------------');
			};
		};
	};

	let q1 = new QuestionConst('Arcana vote', ['pudge', 'rubick'], 0);
	let q2 = new QuestionConst('best dota player in the world', ['bulldonger', 'rtz', 'singsong'], 0);
	let q3 = new QuestionConst('who is the true TeeAye winner', ['dondo', 'rtz', 'bulldong', 'EEFFTY50/EEFFTY50'], 3);


	var questions = [q1, q2, q3];

	function score() {
		sc = 0;
		return function(arg) { 
			if (arg) {
				sc++;
			}
			return sc;
		}
	};

	var keepScore = score();

	function nextQuestion() {

		var number = Math.floor(Math.random() * questions.length);
		questions[number].displayQuestion();

		var answer = prompt("Answer q in console");
		if (answer !== "exit") {
			questions[number].checkAnswer(parseInt(answer), keepScore);

			nextQuestion();
		};

	};
	nextQuestion();
})();