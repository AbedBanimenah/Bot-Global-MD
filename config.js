const fs = require("fs")
const chalk = require("chalk")
global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true
//
//
global.Owner = ['96894116692']
global.OwnerNumber = ['96894116692']
global.ownertag = ['96894116692']
global.BotName = "بطاطس عُمان"
global.packname = "Ⓒ Dark Man Inc."
global.author = "بطاطس عُمان"
global.OwnerName = "مطور البوت - dark man747"
global.BotSourceCode = "None"
global.SupportGroupLink = "https://chat.whatsapp.com/FJaqd9rsyK0DOvxbQ145gO"
global.sessionName = "session"


global.prefa = ['/']


global.location = "Oman"
global.reactmoji = "❤️"
global.themeemoji = "💖"
global.vidmenu = "None"
global.websitex = "."
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


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


global.mess = {
    jobdone: '*تم الإنهاء ...*',
    useradmin: '*هذا الأمر للأدمن المجموعة*',
    botadmin: 'آسف ، أنا غير قادر على تنفيذ هذا الأمر دون أن يكون *مسؤول* من هذه المجموعة.',
    botowner: '*هذا الأمر لمالك البوت*',
    grouponly: '*هذا الأمر للمجموعات فقط*',
    privateonly: '*هذا الأمر للدردشة الخاصة فقط*',
    botonly: 'فقط *بوت نفسه* يمكنه استخدام هذا الأمر!',
    waiting: '*جاري أنهاء المهمة*',
    nolink: '*يجب إدخال رابط*',
    error: '*صارت مشكلة غير متوقعة*',
    banned: '*تم حظرك من أستخدام الأومر*',
    bangc: '*تم حظر هذه المجموعة من أستخدام الأومر*',
    nonsfw: 'لا تكن باكا منحرفا! هذه ليست مجموعة تمكين NSFW!'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 3000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '667d4460f6d5',
}


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
