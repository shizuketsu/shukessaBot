const { EmbedBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: 'dog',
    description: 'hotdog',
    async execute(msg, args) {
        axios({
            method: 'get',
            url: 'https://dog.ceo/api/breeds/image/random'
        }).then((r) => {
            const img = r.data.message;

            const embed = new EmbedBuilder()
                .setColor('#92a2ff')
                .setTitle('Dog:')
                .setImage(img)
                .setFooter({ text: 'Requested by ' + msg.author.username, iconURL: msg.author.displayAvatarURL() });

            msg.channel.send({ embeds: [embed] });
        }).catch((e) => {
            console.log(e);
        });
    }
}