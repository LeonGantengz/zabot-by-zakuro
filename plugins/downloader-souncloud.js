import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Input URL'
  if (!args[0].includes('soundcloud.com')) throw 'Invalid URL'
  let res = await fetch('https://yui-api.herokuapp.com/api/soundcloud?URL=${args[0]}')
  if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    let sound : json.result
    conn.sendFile(m.chat, sound.dlink)
    handler.help = [soundcloud <url> <without message>]
handler.tags = ['downloader']
handler.command = /^(soundcloud)$/i
handler.limit = true