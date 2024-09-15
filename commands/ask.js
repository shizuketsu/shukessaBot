const answer1 = ['Definitely yes', 'Probably yes', 'YES'];
const answer2 = ['no no no', 'no', 'Probably no'];

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    name: 'ask',
    description: 'ask',
    async execute(msg, args) {
        const answer = getRandomInt(0, 1) ? answer1[getRandomInt(0, answer1.length - 1)] : answer2[getRandomInt(0, answer2.length - 1)];
        msg.reply(answer);
    }
}