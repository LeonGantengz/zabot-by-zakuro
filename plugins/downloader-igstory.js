
import axios from 'axios'
import hx from 'hxz-api' 

let handler = async (m, { conn, args, usedPrefix, command, text}) => {
	
 if (!text) throw `
╭⋆┈⋆┈⋆┈⋆⊰✩⊱⋆┈⋆┈⋆┈⋆╮
╽🤖️ Tulis nama 
┃Akun Instagram
┃
┃🤖 contoh : ${usedPrefix + command} leonvx._
╰•Yui-Chan By Rama•╯`
       
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
