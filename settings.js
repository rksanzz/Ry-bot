const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'ec1cee982d22',
}


//aumto functioner
global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoreadpmngc = true //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/jojo.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
zenzkey = '6daa8900c90b'
lolkey = '2f73fe5296d00f4fb394a468'
frkey = 'kZgLGZbX'
apidanz = '92b0a75k6f'
ckey = 'xPxsaElx'
global.vcardowner = ['6285837138696'], ['6285837138696'] //number
global.allpay = "085837138696" // nomor pertama / first number donate
global.allpay2 = "085837138696" // nomor ke dua /second number donate
global.ownername = "REXZZ - MD" //owner
global.email = "📧 REXZZ@gmail.com" //email
global.website = "⚙️ Github : Ditz" //github name
global.location = "🌍 Isekai, Taman Hiburan Para Loli, Pemandian Umum Wanita" //location
global.roblox = "👾 Youtube : @rexzz" //roblox
global.ig = "👑 Instagram : @rexzz" //insta
global.tg = "💙 Telegram : @rexzz" //telegram

//bot bomdy 
global.owner = ['6285837138696'], ['6285837138696']
global.ownernomer = "REXZZ" //ur number
global.ownertag = '6285837138696' //ur tag number
global.botname = 'REXZZ - MD' //ur bot name
global.linkz = "https://chat.whatsapp.com/HHbTWShvfQO4Kep09NGUFr" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtube.com/@REXZZ" //ur website to be displayed
global.botscript = 'https://github.com/rexzz' //script link
global.reactmoji = "⚡" //ur menu react emoji
global.themeemoji = "⚡" //ur theme emoji
global.packname = "REXZZ" //ur sticker watermark packname
global.author = "√" //ur sticker watermark author
global.wm = "4K SANZZ" //ur watermark

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/thumb.jpeg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/logo2.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/thumb.jpeg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/thumb.jpg") //ur thumb pic

//damtabase
global.premium = ['6285837138696'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','?','#','-']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'In process...',
    linkm: 'Where is the link?',
    error: 'Error!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
    global.limitawal = {
    premium: "Infinity",
    free: 6,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/thumb.jpeg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
