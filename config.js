const fs = require("fs")
const chalk = require("chalk")

// انتبه فقط غير الأشياء اللي كاتبلك فيهاا غير كذا بتصير لك مشاكل .
global.Owner = ['972595352735'] // حط رقمك مع رمز الدوله بدون فواصل
global.OwnerNumber = ['972595352735'] // حط رقمك مع رمز الدوله بدون فواصل
global.ownertag = ['972595352735'] // حط رقمك مع رمز الدوله بدون فواصل
global.BotName = "KUKUSHIBU" // اسم البوت
global.packname = "Ⓒ 𝙳𝚊𝚛𝚔 𝙼𝚊𝚗 𝙸𝚗𝚌." // الباك نيم تبع الملصقات
global.author = 'Ⓒ KUKUSHIBU.' // اسم مؤلف الملصق
global.OwnerName = "KUKUSHIBU" // اسمك او لقبك
global.BotSourceCode = "https://github.com/Dark-Man747/Bot-Global-MD"
global.SupportGroupLink = "https://chat.whatsapp.com/FJaqd9rsyK0DOvxbQ145gO"
global.sessionName = "session" 

global.prefa = ['.'] // هنا بدايت الاوامر مثلا ( . او - او #), كذا ولكن بشرط تحط رمز واحد فقط.

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

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
