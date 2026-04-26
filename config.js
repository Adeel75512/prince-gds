
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

/*const ownervb = process.env.OWNER_NUMBER || "";

// ENV format: number,name,number,name
const ownerlist = ownervb.split(',');

global.owner = [];

for (let i = 0; i < ownerlist.length; i += 2) {
    let number = ownerlist[i]?.replace(/[^0-9]/g, ''); // clean number
    let name = (ownerlist[i + 1] || "").trim();

    if (number) {
        global.owner.push([
            number,        // ❗ only number (NO @s.whatsapp.net)
            name || "Owner",
            true
        ]);
    }
}

// default owner
const defaultOwner = [
    "923092668108",
    "Prince💚",
    true
];

global.owner.push(defaultOwner);*/


 global.owner = [
  ['923092668108', 'Prince', true],
  ['639129985130']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['923092668108', '639129985130']
global.botNumber = ['']  //-- numero del bot
global.APIs = { // API Prefix
  // name: 'https://website' 
  fg_ss: 'https://fg-ss.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
  //fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'shen' //--- Regístrese en https://api.fgmods.xyz/
}

global.developer = 'https://wa.me/message/DCAK67ON3XVOG1' //contact
//💌------------------------------------------💌



//Sticker WM
global.wm = process.env.BOT_NAME || "Prince Bot"
global.botname = process.env.BOT_NAME || "Prince Bot"
global.princebot = '🛡️𝘗𝘙𝘐𝘕𝘊𝘌-𝘉𝘖𝘛-𝘔𝘋🛡️'
global.packname = process.env.PACK_NAME
global.author = 'Prince♥️' 
global.fg_ig = 'https://instagram.com/fg.error' 
global.fg_sc = 'https://github.com/FG98F/dylux-bot' 
global.fg_yt = 'https://youtube.com/fg98f'
global.fg_pyp = 'https://paypal.me/fg98f'
global.fg_tt = 'https://tiktok.com/@fg.error'
global.fg_logo = 'https://i.ibb.co/1zdz2j3/logo.jpg' 
global.fg_avatar = 'https://raw.githubusercontent.com/fg-error/fg-team/refs/heads/main/discord/avatar.png'

//--- Grupos WA
global.id_canal = '120363177092661333@newsletter' //-ID de canal de WhatsApp
global.canal_log = 'https://whatsapp.com/channel/0029Vb5vgQAHgZWYchqbIb0u'
global.canal_logid = '120363398698937291@newsletter'
global.fg_canal = 'https://whatsapp.com/channel/0029VaCeuZd6mYPQiWqxXj1F'
global.fg_group = "https://chat.whatsapp.com/BESBo5xjvIZE4YVvth6Yzr"
global.fg_gpnsfw = 'https://chat.whatsapp.com/F0JTTyZ3hsoL7OlU8TEpuH' //--GP NSFW

//--emojis
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
