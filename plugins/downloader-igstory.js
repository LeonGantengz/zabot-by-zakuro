
import axios from 'axios'
import hx from 'hxz-api' 

let handler = async (m, { conn, args, usedPrefix, command, text}) => {
	
 if (!text) throw `
╭⋆┈⋆┈⋆┈⋆⊰✩⊱⋆┈⋆┈⋆┈⋆╮
╽🤖️ Tulis nama 
┃Akun Instagram
┃\n\n
┃🤖 contoh : ${usedPrefix + command} leonvx._
╰•⋆҈͜͡ ⫘𝐓𝐔𝐑𝐁𝐎⋆𝐍𝐈𝐓𝐑𝐎⫘⋆҈͜͡•╯`
       
  await m.reply(wait)
  
   hx.igstory(text).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {            
              conn.sendFile(m.chat, i.url, 'igstory.mp4', `🤖 Pesanan Anda 🤖`.trim(), m)
            } else {     
              conn.sendFile(m.chat, i.url, '', '', m)
            }
          }
        });
   
}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria' ]

handler.limit = true

export default handler
