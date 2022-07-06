let handler = async (m, {command, conn}) => {
    if (command == 'nsfwloli') {
        m.reply('_sedang di proses_')
        let haha = (`https://api-reysekha.herokuapp.com/api/wallpaper/nsfwloli?apikey=APIKEY`)
        conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['NEXT', `/${command}`]], m)
    } else {
        m.reply('_sedang di proses_')
        let haha = (`https://api.zeeoneofc.xyz/api/nsfw/${command.replace('nsfw', '')}?apikey=OKoJdo32`)
        conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['NEXT', `/${command}`]], m)
    }
}

handler.help = ['nsfwloli', 'nsfwahegao', 'nsfwass', 'nsfwbdsm', 'nsfwblowjob', 'nsfwcuckold', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwgangbanh', 'nsfwglasses', 'nsfwhentai', 'nsfwjahy', 'nsfwmanga', 'nsfwmstb', 'nsfwneko', 'nsfworgy', 'nsfwpanties', 'nsfwpussy', 'nsfwneko', 'nsfwtentacles', 'nsfwthings', 'nsfwyuri', 'nsfwzettai']
handler.command = ['nsfwloli', 'nsfwahegao', 'nsfwass', 'nsfwbdsm', 'nsfwblowjob', 'nsfwcuckold', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwgangbanh', 'nsfwglasses', 'nsfwhentai', 'nsfwjahy', 'nsfwmanga', 'nsfwmstb', 'nsfwneko', 'nsfworgy', 'nsfwpanties', 'nsfwpussy', 'nsfwneko', 'nsfwtentacles', 'nsfwthings', 'nsfwyuri', 'nsfwzettai']
handler.tags = ['nsfw']
handler.premium = true
handler.limit = true
export default  handler
