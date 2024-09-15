const { EmbedBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: 'cat',
    description: 'cat',
    async execute(msg, args) {
        axios({
            method: 'get',
            url: 'https://api.thecatapi.com/v1/images/search'
        }).then((r) => {
            const img = r.data[0].url;

            const embed = new EmbedBuilder()
                .setColor('#92a2ff')
                .setTitle('Cat:')
                .setImage(img)
                .setFooter({ text: 'Requested by ' + msg.author.username, iconURL: msg.author.displayAvatarURL() });

            msg.channel.send({ embeds: [embed] });
        }).catch((e) => {
            console.log(e);
        });
    }
}