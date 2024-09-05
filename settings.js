const fs = require('fs')
const chalk = require('chalk')

// BOT-INFO
global.botName = "ᴢʜɴᴢᴋ"
global.ownerName = "ʟᴇᴄɪɪɪ"
global.botNumber = "628xxxxxxx"
global.devNumber = ["628xxxxxx"]

// ADMIN-PANEL
global.locID = "1" // Jangan Diganti
global.eggID = "15" // Jangan Diganti
global.domain = "https://example.id" // Ganti Domain Lu
global.pltcc = "-" // Isi Apikey Plta Lu
global.pltaa = "-" // Isi Apikey Pltc Lu
global.nama_host = "LECCYOFC" // Ganti Nama Store Atau nama Host Lu

// BOT-SETTING
global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = true // auto read messages

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})