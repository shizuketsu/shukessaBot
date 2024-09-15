const { PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'clear',
    description: 'clear',
    async execute(msg, args) {
        if(!msg.member.permissions.has(PermissionFlagsBits.ManageMessages)) return msg.reply('You do not have enough rights for this command');

        const amount = args[0] ? parseInt(args[0]) : 100;
        if(isNaN(amount) || amount < 1) return msg.reply('Incorrect number');

        try {
            const deletedMessages = await msg.channel.bulkDelete(amount, true);
            msg.channel.send(deletedMessages.size + ' messages deleted').then((smsg) => {
                setTimeout(() => {
                    smsg.delete();
                }, 5000);
            });
        } catch(e) {
            console.error(e);
            return msg.reply('Failed to clear');
        }
    }
}