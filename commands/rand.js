module.exports = {
    name: 'rand',
    description: 'rand',
    async execute(msg, args) {
        if(!isNaN(args[0]) && !isNaN(args[1])) {
            const min = Math.ceil(args[0]);
            const max = Math.floor(args[1]);
            const r = Math.floor(Math.random() * (max - min + 1)) + min;

            msg.channel.send(String(r));
        } else {
            const min = Math.ceil(0);
            const max = Math.floor(99999999999);
            const r = Math.floor(Math.random() * (max - min + 1)) + min;

            msg.reply(String(r));
        }
    }
}