/*

THIS CODE WAS WRITTEN BY MR Chami ( Chami ) - ( FREELY ).
    - @Chamindu
GITHUB : https://github.com/dark-chami21
------------------------------------------------------------------
CODE FOR : @dark-chami21
------------------------------------------------------------------
DON'T REMOVE CREDITS !

*/



const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "ai",
    react: "🤖",
    desc: "ai chat",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://chatgptforprabath-md.vercel.app/api/gptv1?q=${q}`)

await conn.sendMessage(from,{image:{url:"https://i.ibb.co/Yp3Tk3z/Manul-Ofc-X.jpg"},caption:madeMenu},{quoted:mek})
return reply(`${data.data}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
