/*
Coded By: Dark Man.
Coded By: Dark Man.
Coded By: Dark Man.
*/
process.on('uncaughtException', console.error)
require("./config")
require("./islam")
const qrcode = require('qrcode')
const figlet = require('figlet')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const zDark = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const path = require('path')
const os = require('os')
const { AnimeWallpaper } = require("anime-wallpaper")
 const { TiktokDownloader } = require('./lib/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const hxz = require('./lib/hxz-api')
const bdr = require('rumus-bdr')
const yogipw = require("tod-api")
const { color, bgcolor } = require('./lib/color')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, GIFBufferToVideoBuffer, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { aiovideodl } = require('./lib/scraper.js')
const cheerio = require ("cheerio");
const textpro = require('./lib/textpro')
const { detikNews } = require('./lib/detik')
const { wikiSearch } = require('./lib/wiki.js');
const { Gempa } = require("./lib/gempa.js");
const ms = require('ms')
 let { covid } = require('./lib/covid.js') 
const { jadwaltv }= require('./lib/jadwaltv');
const { DarkTiktok } = require('./lib/tiktokmikudl');
const maker = require('mumaker')
const xfarrapi = require('xfarr-api')
const { hentai } = require('./lib/scraper2.js')
let { msgFilter } = require('./lib/antispam')
const { mediafireDl } = require('./lib/mediafire.js')


const _ = require('lodash')
const yargs = require('yargs/yargs')
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
const {
  yta, 
  ytv, 
  searchResult 
 } = require('./lib/ytdl')

let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));

 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/bounty.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/blood.json'))


global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

let lolkey = global.lolhuman
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []



let pendaftar = JSON.parse(fs.readFileSync('./storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'))
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
let ban = JSON.parse(fs.readFileSync('./database/ban.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'))
let setik = JSON.parse(fs.readFileSync('./src/sticker.json'))
let vien = JSON.parse(fs.readFileSync('./src/audio.json'))
let imagi = JSON.parse(fs.readFileSync('./src/image.json'))
let videox = JSON.parse(fs.readFileSync('./src/video.json'))
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))


const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('Asia/Kolkata').locale('id').format('a')
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)
//DarkPiece
module.exports = DarkPiece = async (DarkPiece, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = global.prefa
const isCmd = body.startsWith(prefix)
const notCmd = body.startsWith('')
const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"

const botNumber = await DarkPiece.decodeJid(DarkPiece.user.id)
const isCreator = [botNumber, ...global.Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const groupMetadata = m.isGroup ? await DarkPiece.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
const isBan = banUser.includes(m.sender)
const isBanChat = m.isGroup ? banchat.includes(from) : false
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const antiWame = m.isGroup ? ntwame.includes(from) : false
const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const isLeveling = m.isGroup ? _leveling.includes(from) : false
autoreadsw = true
const content = JSON.stringify(m.message)
const q = args.join(' ')

const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')

const mongoose = require("mongoose");


_sewa.expiredCheck(DarkPiece, sewa)

const reply = (teks) => {
    DarkPiece.sendMessage(m.chat, { text: teks},{ quoted: m})
        }
        
        const replay = (teks) => {
            DarkPiece.sendMessage(m.chat, { text: teks}, { quoted: m})
        }
        

function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
            }
            
		
if (m.message) {
addBalance(m.sender, randomNomor(574), balance)
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))

}

        if (isCmd && !isUser){
			pendaftar.push(m.sender)
			fs.writeFileSync('./storage/user/user.json', JSON.stringify(pendaftar))
        } 

            const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
               }
            }

            const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
                }
            }

            const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
                }
             }

            const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }

            const getUserRank = (userId) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) 
}

var levelRole = getLevelingLevel(m.sender)
        var role = 'Copper V'
        if (levelRole <= 5) {
            role = 'Copper IV'
        } else if (levelRole <= 10) {
            role = 'Copper III'
        } else if (levelRole <= 15) {
            role = 'Copper II'
        } else if (levelRole <= 20) {
            role = 'Copper I'
        } else if (levelRole <= 25) {
            role = 'Silver V'
        } else if (levelRole <= 30) {
            role = 'Silver IV'
        } else if (levelRole <= 35) {
            role = 'Silver III'
        } else if (levelRole <= 40) {
            role = 'Silver II'
        } else if (levelRole <= 45) {
            role = 'Silver I'
        } else if (levelRole <= 50) {
            role = 'Gold V'
        } else if (levelRole <= 55) {
            role = 'Gold IV'
        } else if (levelRole <= 60) {
            role = 'Gold III'
        } else if (levelRole <= 65) {
            role = 'Gold II'
        } else if (levelRole <= 70) {
            role = 'Gold I'
        } else if (levelRole <= 75) {
            role = 'Platinum V'
        } else if (levelRole <= 80) {
            role = 'Platinum IV'
        } else if (levelRole <= 85) {
            role = 'Platinum III'
        } else if (levelRole <= 90) {
            role = 'Platinum II'
        } else if (levelRole <= 95) {
            role = 'Platinum I'
        } else if (levelRole < 100) {
            role = 'Exterminator'
        }

        var levelRoles = getLevelingLevel(m.sender)
        var roles = 'Cop V'
        if (levelRoles <= 5) {
            roles = 'Cop IV'
        } else if (levelRoles <= 10) {
            roles = 'Cop III'
        } else if (levelRoles <= 15) {
            roles = 'Cop II'
        } else if (levelRoles <= 20) {
            roles = 'Cop I'
        } else if (levelRoles <= 25) {
            roles = 'Sil V'
        } else if (levelRoles <= 30) {
            roles = 'Sil IV'
        } else if (levelRoles <= 35) {
            roles = 'Sil III'
        } else if (levelRoles <= 40) {
            roles = 'Sil II'
        } else if (levelRoles <= 45) {
            roles = 'Sil I'
        } else if (levelRoles <= 50) {
            roles = 'Gol V'
        } else if (levelRoles <= 55) {
            roles = 'Gol IV'
        } else if (levelRoles <= 60) {
            roles = 'Gol III'
        } else if (levelRoles <= 65) {
            roles = 'Gol II'
        } else if (levelRoles <= 70) {
            roles = 'Gol I'
        } else if (levelRoles <= 75) {
            roles = 'Plat V'
        } else if (levelRoles <= 80) {
            roles = 'Plat IV'
        } else if (levelRoles <= 85) {
            roles = 'Plat III'
        } else if (levelRoles <= 90) {
            roles = 'Plat II'
        } else if (levelRoles <= 95) {
            roles = 'Plati I'
        } else if (levelRoles < 100) {
            roles = 'Exter'
        }


        //             XXX - OOO             //
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `معرف الغرفة: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} *لقـد فــاز*` : isTie ? `*تــعادل*` : `*دورك* ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}

❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}
`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await DarkPiece.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await DarkPiece.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
   
                        if (m.isGroup && isLeveling && isUser && DarkPiece.public) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        addCooldown(m.sender)
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 200
                                        const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
teks = `「*User Level UP*」\n\n@${m.sender.split("@")[0]} got leveled up!!\n\n*User XP*: ${getLevelingXp(m.sender)}\n*Level*: ${getLevel} -> ${getLevelingLevel(m.sender)}\n*Role*: ${role} \n\n`
DarkPiece.sendMessage(m.chat, {text: teks, mentions:[m.sender]}, {quoted:m})
}

                        } catch (err) {
                                console.error("❌ An error occured !")
                        }
                }
                if (prefix && command) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 30
                                        const requiredXp = 30 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
                                        }
                                        
                        } catch (err) {
                                console.error("❌ An error occured !")
                        }
                }

if (autoreadsw) {
		if (from === 'status@broadcast') {
        DarkPiece.chatRead(from)
	}
	}

if (global.autoreadpmngc) {
if (command) {
await DarkPiece.sendPresenceUpdate('composing', m.chat)
DarkPiece.sendReadReceipt(from, m.sender, [m.key.id])}
}

  if (global.autoReadAll) { if (m.chat) { DarkPiece.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
  }

    if (global.autoRecord) { if (m.chat) { DarkPiece.sendPresenceUpdate('recording', m.chat) }
}

  if (global.autoTyping) { if (m.chat) { DarkPiece.sendPresenceUpdate('composing', m.chat) }
}

  if (global.available) { if (m.chat) { DarkPiece.sendPresenceUpdate('available', m.chat) }
  }


const hariRaya = new Date('6 1, 2023 00:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Day ${jjam}Hour ${mmmenit}Minute ${ddetik}Second`
			
async function hitungmundur(bulan, tanggal) { 
          let from = new Date(`${bulan} ${tanggal}, 2023 00:00:00`).getTime();
          let now = Date.now();
          let distance = from - now;
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          return days + "Day " + hours + "Hour " + minutes + "Minute " + seconds + "Second"
        }
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
} catch (err) {
console.error(err)
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, 
"thumbnail": img, 
"itemCount": itcount, 
"status": "INQUIRY", 
"surface": "CATALOG", 
"orderTitle": title, 
"message": text, 
"sellerJid": sellers, 
"token": tokens, 
"totalAmount1000": ammount, 
"totalCurrencyCode": "IDR", 
}
}), { userJid: jid })
DarkPiece.relayMessage(jid, order.message, { messageId: order.key.id})
}


const { 
addInventoriDarah, 
cekDuluJoinAdaApaKagaDiJson, 
addDarah, 
kurangDarah, 
getDarah 
}  = require('./storage/user/blood.js')
const { 
cekInventoryAdaAtauGak, 
addInventori,  
addBesi, 
addEmas, 
addEmerald,
addUmpan,
addPotion,
kurangBesi, 
kurangEmas, 
kurangEmerald, 
kurangUmpan,
kurangPotion,
getBesi, 
getEmas, 
getEmerald,
getUmpan,
getPotion
} = require('./storage/user/exchange.js')
const { 
addInventoriMonay, 
cekDuluJoinAdaApaKagaMonaynyaDiJson, 
addMonay,
kurangMonay, 
getMonay 
} = require('./storage/user/money.js')
const { 
addInventoriLimit, 
cekDuluJoinAdaApaKagaLimitnyaDiJson, 
addLimit, 
kurangLimit, 
getLimit 
} = require('./storage/user/limit.js')
const { 
cekDuluHasilBuruanNya, 
addInventoriBuruan, 
addIkan,
addAyam, 
addKelinci, 
addDomba, 
addSapi,
addGajah,
kurangIkan,
kurangAyam, 
kurangKelinci, 
kurangDomba, 
kurangSapi,
kurangGajah,
getIkan,
getAyam, 
getKelinci, 
getDomba,
getSapi,
getGajah
} = require('./storage/user/prey.js')
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🤟','🤟','🤟']   


        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]

if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/CheemsBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/CheemsBot${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
 

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`لا تضع علامة علية\nأنه في وضع الأختفاء\nسبب الأختفاء : ${reason ? ''+reason:'\nلايوجد سبب'}\nمنذ : ${clockString(new Date - afkTime)}`.trim())}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
reply(`عدت, من وضع الأختفاء${user.afkReason ? '\nسبب الأختفاء : ' + user.afkReason : ''}
مدت الأختفاء : ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}


if (m.mtype === 'groupInviteMessage') {
teks = `I can't join the group untill my *Owner* ask me to join. Type *-owner* to get owner number and ask him.`
sendOrder(m.chat, teks, "5123658817728409", fs.readFileSync('./Assets/pic10.jpg'), `${watermark}`, `${BotName}`, "916909137213@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}


if (AntiLink) {
    linkgce = await DarkPiece.groupInviteCode(from)
    if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
    reply(`\`\`\`「  Antilink System  」\`\`\`\n\nNo action will be because you sent this group's link.`)
    } else if (isUrl(m.text)) {
    bvl = `\`\`\`「  *Antilink System*  」\`\`\`\n\nAdmin has sent a link so no action is taken.`
    if (isAdmins) return reply(bvl)
    if (m.key.fromMe) return reply(bvl)
    if (isCreator) return reply(bvl)
    kice = m.sender
    await DarkPiece.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
    DarkPiece.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka Has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
    } else {
    }
    }
 
    if (antiWame)
    if (budy.includes(`wa.me`)) {
  if (!isBotAdmins) return
  bvl = `\`\`\`「 _'wa.me' PM link Detected!_  」\`\`\`\n\nLink sent by Admin so no action is taken!`
  if (isAdmins) return reply(bvl)
  if (m.key.fromMe) return reply(bvl)
  if (isCreator) return reply(bvl)
  kice = m.sender
  await DarkPiece.groupParticipantsUpdate(m.chat, [kice], 'remove')
  DarkPiece.sendMessage(from, {text:`\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\n@${kice.split("@")[0]} Baka Has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
  } else {
  }
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\nLink sent by Admin so no action is taken!`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await DarkPiece.groupParticipantsUpdate(m.chat, [kice], 'remove')
DarkPiece.sendMessage(from, {text:`\`\`\`「 'wa.me' PM link Detected! 」\`\`\`\n\n@${kice.split("@")[0]}  Baka Has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

if (antiVirtex) {
    if (budy.length > 3500) {
    reply(`*Caution!*\n\n`.repeat(300))
    reply(`\`\`\`Virus Detected !!\`\`\`\n\nRevoving sender...`)
    if (!isBotAdmins) return reply(mess.botAdmin)
    DarkPiece.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
    }


    if (AntiLink) {
        if (!isBotAdmins) return
        linkgce = await DarkPiece.groupInviteCode(from)
        if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
        reply(`\`\`\`「  Antilink System  」\`\`\`\n\nNo action will be taken because you sent this group's link!`)
        } else if (isUrl(m.text)) {
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nAdmin has sent a group link so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await DarkPiece.groupParticipantsUpdate(m.chat, [kice], 'remove')
        DarkPiece.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        }

        
        if (AntiLinkYoutubeVid)
        if (budy.includes("https://youtu.be/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await DarkPiece.groupParticipantsUpdate(m.chat, [kice], 'remove')
        DarkPiece.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Yt video link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkYoutubeChannel)
           if (budy.includes("https://youtube.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await DarkPiece.groupParticipantsUpdate(m.chat, [kice], 'remove')
        DarkPiece.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Yt channel link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkInstagram)
           if (budy.includes("https://www.instagram.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await DarkPiece.groupParticipantsUpdate(m.chat, [kice], 'remove')
        DarkPiece.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Instagram link in this group! No promotion is allowed!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkFacebook)
           if (budy.includes("https://facebook.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await DarkPiece.groupParticipantsUpdate(m.chat, [kice], 'remove')
        DarkPiece.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Facebook link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTelegram)
           if (budy.includes("https://t.me/")){
        if (AntiLinkTelegram)
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await DarkPiece.groupParticipantsUpdate(m.chat, [kice], 'remove')
        DarkPiece.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Telegram link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTiktok)
           if (budy.includes("https://www.tiktok.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await DarkPiece.groupParticipantsUpdate(m.chat, [kice], 'remove')
        DarkPiece.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Tiktok link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTwitter)
           if (budy.includes("https://twitter.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await DarkPiece.groupParticipantsUpdate(m.chat, [kice], 'remove')
        DarkPiece.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending Twitter link in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkAll)
           if (budy.includes("https://")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await DarkPiece.groupParticipantsUpdate(m.chat, [kice], 'remove')
        DarkPiece.sendMessage(from, {text:`\`\`\`「  Antilink System  」\`\`\`\n\n@${kice.split("@")[0]} Baka has been removed for sending links in this group!`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        

if (m.mtype == 'viewOnceMessage') {
	if (!db.data.chats[m.chat].antionce) return
 teks = `「 *Anti ViewOnce Message* 」
${themeemoji} Name : ${m.pushName}
${themeemoji} User : @${m.sender.split("@")[0]}
${themeemoji} Clock : ${moment.tz('Asia/Kolkata').format('HH:mm:ss')} 
${themeemoji} Date : ${moment.tz('Asia/Kolkata').format('DD/MM/YYYY')}
${themeemoji} MessageType : ${m.mtype}`
DarkPiece.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply(`Maybe it's been opened by a bot`))
}


if (!DarkPiece.public) {
if (!m.key.fromMe) return
}


setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

// reset limit every 12 hours
let cron = require('node-cron')
    cron.schedule('00 12 * * *', () => {
    let user = Object.keys(global.db.users)
    let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
    for (let jid of user) global.db.users[jid].limit = limitUser
    console.log('Reseted Limit')
    }, {
    scheduled: true,
    timezone: "Asia/Kolkata"
    })

    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
      kuis = true
      jawaban = tebaklagu[m.sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
      await DarkPiece.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
      delete tebaklagu[m.sender.split('@')[0]]
      } else reply('*Wrong answer!*')
      }

      if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
        kuis = true
        jawaban = tebakgambar[m.sender.split('@')[0]]
        if (budy.toLowerCase() == jawaban) {
        await DarkPiece.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
        delete tebakgambar[m.sender.split('@')[0]]
        } else reply('*Wrong answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebakkata[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await DarkPiece.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebakkata[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = caklontong[m.sender.split('@')[0]]
          deskripsi = caklontong_desk[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await DarkPiece.sendButtonText(m.chat, [{ buttonId: 'guess saying', buttonText: { displayText: 'Guess The Saying' }, type: 1 }], `🎮 Guess The Saying 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete caklontong[m.sender.split('@')[0]]
          delete caklontong_desk[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebakkalimat[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await DarkPiece.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebakkalimat[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebaklirik[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await DarkPiece.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebaklirik[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebaktebakan[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await DarkPiece.sendButtonText(m.chat, [{ buttonId: 'riddles', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebaktebakan[m.sender.split('@')[0]]
          } else reply('*Wrong answer!*')
          }
          
          if (('family100'+m.chat in _family100) && isCmd) {
          kuis = true
          let room = _family100['family100'+m.chat]
          let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
          let isSurender = /^((me)?give up|surr?ender|surrender)$/i.test(m.text)
          if (!isSurender) {
          let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
          if (room.terjawab[index]) return !0
          room.terjawab[index] = m.sender
          }
          let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
          let caption = `
          Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
          ${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
          ${Array.from(room.jawaban, (jawaban, index) => {
          return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
          }).filter(v => v).join('\n')}
          ${isSurender ? '' : `Perfect Player`}`.trim()
          DarkPiece.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
          if (isWin || isSurender) delete _family100['family100'+m.chat]
          }
          
          
          this.suit = this.suit ? this.suit : {}
          let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
          if (roof) {
          let win = ''
          let tie = false
          if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|oke?|reject|dont want|later|no(pe)?can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
          if (/^(reject|dont want|later|n|no(pe)?can)/i.test(m.text)) {
           DarkPiece.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
          delete this.suit[roof.id]
          return !0
          }
          roof.status = 'play'
          roof.asal = m.chat
          clearTimeout(roof.waktu)
          
          DarkPiece.sendText(m.chat, `Suit has been sent to chat
          @${roof.p.split`@`[0]} dan 
          @${roof.p2.split`@`[0]}

          Please choose a suit in the respective chat"
          Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
          if (!roof.pilih) DarkPiece.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
          if (!roof.pilih2) DarkPiece.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
          roof.waktu_milih = setTimeout(() => {
          if (!roof.pilih && !roof.pilih2) DarkPiece.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
          else if (!roof.pilih || !roof.pilih2) {
          win = !roof.pilih ? roof.p2 : roof.p
          DarkPiece.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} don't choose suit, game over`, m)
          }
          delete this.suit[roof.id]
          return !0
          }, roof.timeout)
          }
          let jwb = m.sender == roof.p
          let jwb2 = m.sender == roof.p2
          let g = /scissors/i
          let b = /rock/i
          let k = /paper/i
          let reg = /^(scissors|rock|paper)/i
          if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
          roof.pilih = reg.exec(m.text.toLowerCase())[0]
          roof.text = m.text
          reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
          if (!roof.pilih2) DarkPiece.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
          }
          if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
          roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
          roof.text2 = m.text
          reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
          if (!roof.pilih) DarkPiece.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
          }
          let stage = roof.pilih
          let stage2 = roof.pilih2
          
          if (roof.pilih && roof.pilih2) {
            clearTimeout(roof.waktu_milih)
            if (b.test(stage) && g.test(stage2)) win = roof.p
            else if (b.test(stage) && k.test(stage2)) win = roof.p2
            else if (g.test(stage) && k.test(stage2)) win = roof.p
            else if (g.test(stage) && b.test(stage2)) win = roof.p2
            else if (k.test(stage) && b.test(stage2)) win = roof.p
            else if (k.test(stage) && g.test(stage2)) win = roof.p2
            else if (stage == stage2) tie = true
            DarkPiece.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}
            @${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
            @${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
            `.trim(), m, { mentions: [roof.p, roof.p2] })
            delete this.suit[roof.id]
            }
            }

            async function cerpen (category) {
              return new Promise((resolve, reject) => {
                  let title = category.toLowerCase().replace(/[()*]/g, "")
                  let judul = title.replace(/\s/g, "-")
                  let page = Math.floor(Math.random() * 5)
                  axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
                  .then((get) => {
                      let $ = cheerio.load(get.data)
                      let link = []
                      $('article.post').each(function (a, b) {
                          link.push($(b).find('a').attr('href'))
                      })
                      let random = link[Math.floor(Math.random() * link.length)]
                      axios.get(random)
                      .then((res) => {
                          let $$ = cheerio.load(res.data)
                          let hasil = {
                              title: $$('#content > article > h1').text(),
                              author: $$('#content > article').text().split('Short Story: ')[1].split('Category: ')[0],
                              kategori: $$('#content > article').text().split('Category: ')[1].split('\n')[0],
                              lolos: $$('#content > article').text().split('Passed moderation on: ')[1].split('\n')[0],
                              cerita: $$('#content > article > p').text()
                          }
                          resolve(hasil)
                      })
                  })
              })
          }

          if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            await reply(`「 *Math Quiz* 」\n\n 🎉 Correct Answer 🎉\n\nWant to play again? send ${prefix}math mode`)
            delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
            }

            if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
              let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
              let { text, mentionedJid } = hash
              let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
              userJid: DarkPiece.user.id,
              quoted: m.quoted && m.quoted.fakeObj
              })
              messages.key.fromMe = areJidsSameUser(m.sender, DarkPiece.user.id)
              messages.key.id = m.key.id
              messages.pushName = m.pushName
              if (m.isGroup) messages.participant = m.sender
              let msg = {
              ...chatUpdate,
              messages: [proto.WebMessageInfo.fromObject(messages)],
              type: 'append'
              }
              DarkPiece.ev.emit('messages.upsert', msg)
              }
          


              const textImg = (teks) => {
                DarkPiece.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./Assets/pic4.jpg')}) 
                }
                
               
             
                const ftoko = {
                key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
                },
                message: {
                "productMessage": {
                "product": {
                "productImage":{
                "mimetype": "image/jpeg",
                "jpegThumbnail": BotLogo
                },
                "title": `${global.OwnerName}`, 
                "description": `${global.BotName}`, 
                "currencyCode": "USD",
                "priceAmount1000": "2000",
                "retailerId": `${global.WaterMark}`,
                "productImageCount": 1
                },
                "businessOwnerJid": `0@s.whatsapp.net`
                }
                }
                }

                const fgi = {
                  key: { 
                        fromMe: false,
                       participant: `0@s.whatsapp.net`, ...(from ? 
                  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
                               },
                  message: { 
                                "videoMessage": { 
                                "title": `DarkPiece`,
                                "h": `DarkPiece`,
                                'duration': '99999', 
                                'gifPlayback': 'true', 
                                'caption': `DarkPiece`,
                                'jpegThumbnail': fs.readFileSync('./Assets/pic1.jpg')
                                       }
                                      }
                                   } 

//FAKEREPLY TROLI
const ftroli = {
  key : {
  participant : '0@s.whatsapp.net'
  },
  message: {
  orderMessage: {
  itemCount : 1,
  status: 1,
  surface : 1,
  message: `${global.OwnerName}`, 
  orderTitle: `${global.BotName}`,
  thumbnail: BotLogo, //Pic
  sellerJid: '0@s.whatsapp.net'
  
  }
  }
  }
  //FAKEREPLY LOCATION
  const flokasi = {
  key : {
   participant : '0@s.whatsapp.net'
  },
  message: {
  locationMessage: {
  name: `${global.location}`,
  jpegThumbnail: BotLogo
  }
  }
  }
  //FAKEREPLY DOCUMENT
  const fdocs = {
  key : {
   participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: `${global.BotName}`, 
  jpegThumbnail: BotLogo
  }
  }
  }
  //FAKEREPLY VIDEO
  const fvideo = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
  "videoMessage": { 
  "title": `${global.BotName}`,
  "h": `${global.OwnerName}`,
  'seconds': '30', 
  'caption': `${global.WaterMark}`,
  'jpegThumbnail': BotLogo
  }
  }
  }
  //FAKEREPLY GROUPINVITE
  const fgclink = {
  "key": {
  "fromMe": false,
  "participant": "0@s.whatsapp.net",
  "remoteJid": "0@s.whatsapp.net"
  },
  "message": {
  "groupInviteMessage": {
  "groupJid": "916909137213-1616169743@g.us",
  "inviteCode": `${global.OwnerName}`,
  "groupName": `${global.BotName}`, 
  "caption":`${global.WaterMark}`, 
  'jpegThumbnail': BotLogo
  }
  }
  }
  //FAKEREPLY GIF
  const fgif = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
   "videoMessage": { 
   "title":`${global.BotName}`,
   "h": `${global.OwnerName}`,
   'seconds': "30", 
   'gifPlayback': 'true', 
   'caption': `${global.WaterMark}`,
   'jpegThumbnail': BotLogo
  }
  }
  } 
  //FAKEREPLY TEXT WITH THUMBNAIL
  const ftextt = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
  "extendedTextMessage": {
   "text":`${global.OwnerName}`,
  "title": `${global.BotName}`,
   'jpegThumbnail': BotLogo
  }
  } 
  }
  //FAKEREPLY VN
  const fvn = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "916909137213-1613049930@g.us" } : {}) 
  },
  message: { 
  "audioMessage": {
  "mimetype":"audio/ogg; codecs=opus",
  "seconds": "9999999999999999",
  "ptt": "true"
  }
  } 
  }
  l = 1
  monospace = '```'
  const timestampe = speed();
  const latensie = speed() - timestampe
  const levelMenu = getLevelingLevel(m.sender)
  const xpMenu = getLevelingXp(m.sender)
  const uangku = getBalance(m.sender, balance)
  const reqXp  = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
  const jumlahUser = pendaftar.length
    if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
    if (!isInventory){ addInventori(m.sender) }
    if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }



    const menulist = `
    Konichiwa ${pushname} dear 👋. I am ${global.BotName}, a bot developed by: Dark Man to take your WhatsApp usage into next level.

       「 System Info 」
    
    Up Time : ${runtime(process.uptime())}
    Bot Name : ${global.BotName}
    Owner Name : ${global.OwnerName}`



    const menulist2 = `
    Konichiwa ${pushname} dear 👋. I am ${global.BotName}, a bot developed by: Dark Man to take your WhatsApp usage into next level.
        
       「 System Info 」
    
    Speed : ${latensie.toFixed(4)} miliseconds
    Up Time : ${runtime(process.uptime())}
    Bot Name : ${global.BotName}
    Owner Name : ${global.OwnerName}
    𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Amazon AWS
    𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.users).length}
    
    
       「 User Info 」
    
    User Level: ${levelMenu}
    User XP : ${xpMenu} \ ${reqXp}
    User Role : ${role}
    
    
       「 User Bank 」
    
    User Balance : ${uangku}
    Iron : ${getBesi(m.sender)}
    Gold : ${getEmas(m.sender)}
    Emarald : ${getEmerald(m.sender)}
    Potion : ${getPotion(m.sender)}
    
    
    Type */menu* or press any button below to start using *${global.BotName}*
    
    ©️ *${global.BotName}* All Rights Reserved by: *Dark Man*
    `
        const qtod = m.quoted? "true":"false"


function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}


 let smallinput = budy.toLowerCase()
    

    
   
    if (smallinput=='Dark Man !!@_)(**') {
      reply (`Hello *${pushname}*, I am *${BotName}*, a WhatsApp bot made by *Dark Man* and currently being hosted by *${OwnerName}*.  type  *${prefix}help* to get my full command list.`);
    }



    if (smallinput.includes('صباح الخير')) {
      reply (`*صباح النور*`);
    }


      if (smallinput.includes('السلام عليكم') || smallinput.includes('سلام عليكم')) {
        reply (`*وعليكم السلام*`);
      }




      const listnameanime =
      [
          "ناروتو",
          "ايتاتشي",
          "ساسكي",
          "غوكو",
          "فيجيتا",
          "بيكولو",
          "غوجيتا",
          "بلاك",
          "ريمورو",
          "فيجيتو",
          "ايزن",
          "غوجو",
          "ميناتو",
          "باكاغو",
          "ميدوريا",
          "بياكويا",
          "ايزونا",
          "كوغا يوما",
          "بيرونا",
          "ايرين",
          "كاغويا",
          "كاكاشي",
          "ميكاسا",
          "ساكورا",
          "جيرايا",
          "ليفاي",
          "ارمين",
          "سوكونا",
          "ايتادوري",
          "هيستوريا",
          "جينكو",
          "ماكيو",
          "اوسوب",
          "فرانكي",
          "بروك",
          "بيكا",
          "دوفلامينغو",
          "غارو",
          "سايتاما",
          "كونكورود",
          "كونان",
          "فايوليت",
          "نيزوكو",
          "تانجيرو",
          "اينوسكي",
          "كوباياشي",
          "اكازا",
          "رينغوكو",
          "اغيور اوبناي",
          "شينوبو",
          "كاناي",
          "تنغن",
          "داميان",
          "كيلوا",
          "غون",
          "كورابيكا",
          "ايريس",
          "مايكي",
          "هيناتا",
          "سايا",
          'شانكس',
          'شيتشيبوكاي',
          'شيريو المطر',
          'غالدينو',
          'غول دي روجر',
          'غيلد تيسورو',
          'فان أوغر',
          'فوجيتورا',
          'فوكسي',
          'فيرغو',
          'فيستا',
          'فيشر تايجر',
          'إدوارد نيوجيت',
          'إدوارد ويفل',
          'إكس دريك',
          'إيمو ساما',
          'إينيل',
          'باجي المهرج',
          'بارتولوميو',
          'بارثولوميو كوما',
          'باروك وركس',
          'باسيل هوكينز',
          'بوا هانكوك',
          'بورتغاس دي إيس',
          'بولي',
          'بيرندي ورلد',
          'بيغ مام',
          'بيلامي',
          'ترافلجار لاو',
          'تشينجاو',
          'توني توني تشوبر',
          'جاغوار دي ساول',
          'جاك',
          'جوزو',
          'جولري بوني',
          'جيسوس بورجس',
          'جيكو موريا',
          'جينبي',
          'داز بونز',
          'دون كريج',
          'دون كيهوتي دوفلامنغو',
          'روب لوتشي',
          'رورونوا زورو',
          'ريبيكا',
          'زيف',
          'سابو',
          'سانجي',
          'سباندام',
          'سكراتشمين آبو',
          'سموكر',
          'سيزار كلاون',
          'سيلفر رايلي',
          'سينجوكو',
          'غالدينو',
          'فيشر تايجر',
          'كابتن كورو',
          'كاريبو',
          'كافنديش',
          'كاكو',
          'كايدو',
          'كروكودايل',
          'كوبي',
          'كوينا',
          'كيزارو',
          'كيلر',
          'كينغ الحريق',
          'كينمون',
          'ماجيلان',
          'مارشال دي تيتش',
          'ماركو',
          'مستر 2',
          'مستر 5',
          'مومونجا',
          'مونت بلانك نولاند',
          'مونكي دي جارب',
          'مونكي دي دراغون',
          'مونكي دي لوفي',
          'ميهوك',
          'نامي',
          'نيكو روبين',
          'هودي جونز',
          'وابول',
          'وايبر',
          'يوستاس كيد',
          'يونكو',
          'غوتين',
          'غوهان',
          'بولما',
          'ترانكس',
          'تينشينهان',
          'فيجيتا',
          'تشاوزو',
          'نوفا شينرون',
          'اندرويد 18',
          'اوميغا شينرون',
          'موتين روشي',
          'بيكولو',
          'جوتين',
          'يامتشا',
          'كوريرين',
          'ساتان',
          'الدايشنكان',
          'شاوتزو',
          'فيديل',
          'ببلز',
          'جيس',
          'برا',
          'نابا',
          'بورتر',
          'راديتز',
          'ريكوم',
          'برولي',
          'فريزا',
          'غولدا',
          'كولير'
      ]
      if (smallinput.includes('كتت')) {
        const RandomNames = listnameanime[Math.floor(Math.random(5) * listnameanime.length)]
        DarkPiece.sendMessage(from, {text: `*${RandomNames}*`}, { quoted: m })
    }


// = = = = = = = = = = = = التفاعلات الاخرى = = = = = = = = = = = = = =
//////////////////////////////////////////////////////////////////////

// = = = = = = تفاعل صوتي = = = = = = =
for (let anju of vien){
    if (budy === anju){
        result = fs.readFileSync(`./system/audio/${anju}.mp3`)
        //DarkPiece.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })   
        }
    }


// = = = = = = تفاعل ستيكر = = = = = = =
for (let anji of setik){
    if (budy === anji){
        result = fs.readFileSync(`./system/sticker/${anji}.webp`)
        //DarkPiece.sendMessage(m.chat, { sticker: result }, { quoted: m })
        }
}


// = = = = = = تفاعل صور = = = = = = =
for (let anjh of imagi){
    if (budy === anjh){
        result = fs.readFileSync(`./system/image/${anjh}.jpg`)
        //DarkPiece.sendMessage(m.chat, { image: result }, { quoted: m })
        }
}


// = = = = = = تفاعل فيد = = = = = = =
for (let anjh of videox){
    if (budy === anjh){
        result = fs.readFileSync(`./system/video/${anjh}.mp4`)
        //DarkPiece.sendMessage(m.chat, { video: result }, { quoted: m })
        }
}

switch(command) {
/*

# = = = = COMMANDS :) = = = = #

*/
case 'toqrcode': case 'toqr': {
    if (!q) return m.reply('الرجاء تضمين ارتباط أو نص!')
     let qyuer = await qrcode.toDataURL(q, { scale: 35 })
     let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
     let buff = getRandom('.jpg')
     await fs.writeFileSync('./'+buff, data)
     let medi = fs.readFileSync('./' + buff)
    await DarkPiece.sendMessage(from, { image: medi, caption:"ها أنت ذا!"}, { quoted: m })
     setTimeout(() => { fs.unlinkSync(buff) }, 10000)
    }
    break

case 'شير': case 'نشر': {
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!isBotAdmins) return replay(mess.botadmin)
if (!m.isGroup) return reply(mess.grouponly)
if (!text) return m.reply(`ادخل نص?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`نجح في إيصال الرسالة إلى جهات الاتصال`)
for (let pler of mem) {
    DarkPiece.sendMessage(pler, { text: q})
}  
m.reply(`Success in pushing contact`)
}
    break


case 'style': case 'styletext': case 'زخرفه': case 'زخرفة': case 'خط': case 'خطوط': case 'زخرف': {
let { styletext } = require('./lib/scraper')
if (!text) 'أدخل نص من فضلك/nيجب ان يكون النص باللغة الأنجليزية'
    let anu = await styletext(text)
    let teks = `خطوط : *${text}*\n\n`
    for (let i of anu) {
        teks += `*#* ${i.result}\n\n`
    }
    m.reply(teks)
}
break


case 'islam': {
    const islamtext = `
هنا ستجد آيات, واحاديث, وادعيه
`

const sections = [
    {
    "title": "آيــات",
    "rows": [
        {
           "title": `الآية 1`,
           "description": aay1
        },
        {
           "title": `الآية 2`,
           "description": aay2
        },
        {
           "title": `الآية 3`,
           "description": aay3
        },
        {
           "title": `الآية 4`,
           "description": aay4
        },
        {
           "title": `الآية 5`,
           "description": aay5
        },
        {
           "title": `الآية 6`,
           "description": aay6
        },
        {
           "title": `الآية 7`,
           "description": aay7
        },
        {
           "title": `الآية 8`,
           "description": aay8
        },
    ]
},

{
    "title": "دعــاء",
    "rows": [
        {
            "title": `الدعاء 1`,
            "description": daa1
        },
        {
            "title": `الدعاء 2`,
            "description": daa2
        },
        {
            "title": `الدعاء 3`,
            "description": daa3
        },
        {
            "title": `الدعاء 4`,
            "description": daa4
        },
        {
            "title": `الدعاء 5`,
            "description": daa5
        },
        {
            "title": `الدعاء 6`,
            "description": daa6
        },
        {
            "title": `الدعاء 7`,
            "description": daa7
        },
        {
            "title": `الدعاء 8`,
            "description": daa8
        },
        {
            "title": `الدعاء 9`,
            "description": daa9
        },
        {
            "title": `الدعاء 10`,
            "description": daa10
        },
        {
            "title": `الدعاء 11`,
            "description": daa11
        },
        {
            "title": `الدعاء 12`,
            "description": daa12
        },
        {
            "title": `الدعاء 13`,
            "description": daa13
        },
        {
            "title": `الدعاء 14`,
            "description": daa14
        },
        {
            "title": `الدعاء 15`,
            "description": daa15
        }
    ]
},
{
    "title": "حـديــث",
    "rows": [

        {
            "title": `الحديث 1`,
            "description": had1
        },
        {
            "title": `الحديث 2`,
            "description": had2
        },
        {
            "title": `الحديث 3`,
            "description": had3
        },
        {
            "title": `الحديث 4`,
            "description": had4
        },
        {
            "title": `الحديث 5`,
            "description": had5
        },
        {
            "title": `الحديث 6`,
            "description": had6
        },
        {
            "title": `الحديث 7`,
            "description": had7
        },
        {
            "title": `الحديث 8`,
            "description": had8
        },
        {
            "title": `الحديث 9`,
            "description": had9
        },
        {
            "title": `الحديث 10`,
            "description": had10
        },
        {
            "title": `الحديث 11`,
            "description": had11
        },
        {
            "title": `الحديث 12`,
            "description": had12
        },
        {
            "title": `الحديث 13`,
            "description": had13
        },
        {
            "title": `الحديث 14`,
            "description": had14
        },

    ]
}]

const buttonMessage = {
    title:'*اسلامية*',
    text: islamtext,
    buttonText:'الأختيارات',
    sections:sections,
    headerType: 4
}

DarkPiece.sendMessage(m.chat, buttonMessage, { quoted:m })}

break

 case 'aboutme': {
    let instaurl = 'https://instagram.com/a0i.b'
    let githuburl = 'https://github.com/Dark-Man747'
    let waurl = 'https://chat.whatsapp.com/HkdPooTl7YoGlNojrMeup7'
    let mynumber = 'https://api.whatsapp.com/send?phone=+96894116692'
    const textinfo = `

*للمزيد من المعلومات عني وعن أعمالي يمكنك زيارة حساباتي على:*

*❒ انستغرام*
*❲ ${instaurl} ❳*

*❒ حيتثب*
*❲ ${githuburl} ❳*

*❒ مجموعة للبوتات*
*❲ ${waurl} ❳*

*❒ الرقم*
*❲ ${mynumber} ❳*

`
    const llistMessagee = {
        image:{ url : 'https://telegra.ph/file/e994822b6d095cdc4e737.png'},
        caption: textinfo,
        footer: `${BotName}`,
    }
    const sendMsg = await DarkPiece.sendMessage(m.chat, llistMessagee)}

break		
	

 case 'حقوق': case 'الحقوق': case 'حقوقي': case 'slabel': {  
 	if (!text) return replay(`مثال :/حقوق لاو`)
  	if (m.quoted.isAnimated === true) {
    DarkPiece.downloadAndSaveMediaMessage(quoted, "gifee")
    DarkPiece.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
  } else if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await DarkPiece.sendImageAsSticker(m.chat, media, m, { packname: "Ⓒ Dark Man Inc.", author: `${text}` })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('بحد أقصى 10ثواني')
  let media = await quoted.download()
  let encmedia = await DarkPiece.sendVideoAsSticker(m.chat, media, m, { packname: "Ⓒ Dark Man Inc.", author: `${text}` })
  await fs.unlinkSync(encmedia)
  } else {
  m.reply(`الرد على ملصق \n*${prefix + command}* نص`)
  }
  }
	 break
		


case 'logo': case 'لوجو': case 'لوغو': {
   if (!q) throw `للأستخدام ${prefix + command} نص\n*النص يكون باللغة الأنجليزية فقط*`
   const sections = [{
       "title": "اختار لوجو من فضلك",
       "rows": [
          {
              "title": "candy",
              "description": "",
              "rowId": `${prefix}candy ${q}`
          },
          {
              "title": "christmas",
              "description": "",
              "rowId": `${prefix}christmas ${q}`
          },
          {
              "title": "3dchristmas",
              "description": "",
              "rowId": `${prefix}3dchristmas ${q}`
          },
          {
              "title": "sparklechristmas",
              "description": "",
              "rowId": `${prefix}sparklechristmas ${q}`
          },
          {
              "title": "deepsea",
              "description": "",
              "rowId": `${prefix}deepsea ${q}`
          },
          {
              "title": "scifi",
              "description": "",
              "rowId": `${prefix}scifi ${q}`
          },
          {
              "title": "rainbow2",
              "description": "",
              "rowId": `${prefix}rainbow2 ${q}`
          },
          {
              "title": "waterpipe",
              "description": "",
              "rowId": `${prefix}waterpipe ${q}`
          },
          {
              "title": "spooky",
              "description": "",
              "rowId": `${prefix}spooky ${q}`
          },
          {
              "title": "pencil",
              "description": "",
              "rowId": `${prefix}pencil ${q}`
          },
          {
              "title": "circuit",
              "description": "",
              "rowId": `${prefix}circuit ${q}`
          },
          {
              "title": "discovery",
              "description": "",
              "rowId": `${prefix}discovery ${q}`
          },
          {
              "title": "metalic",
              "description": "",
              "rowId": `${prefix}metalic ${q}`
          },
          {
              "title": "fiction",
              "description": "",
              "rowId": `${prefix}fiction ${q}`
          },
          {
              "title": "demon",
              "description": "",
              "rowId": `${prefix}demon ${q}`
          },
          {
              "title": "transformer",
              "description": "",
              "rowId": `${prefix}transformer ${q}`
          },
          {
              "title": "berry",
              "description": "",
              "rowId": `${prefix}berry ${q}`
          },
          {
              "title": "thunder",
              "description": "",
              "rowId": `${prefix}thunder ${q}`
          },
          {
              "title": "3dstone2",
              "description": "",
              "rowId": `${prefix}3dstone2 ${q}`
          },
          {
              "title": "neonlight",
              "description": "",
              "rowId": `${prefix}neonlight ${q}`
          },
          {
              "title": "glitch",
              "description": "",
              "rowId": `${prefix}glitch ${q}`
          },
          {
              "title": "harrypotter",
              "description": "",
              "rowId": `${prefix}harrypotter ${q}`
          },
          {
              "title": "brokenglass",
              "description": "",
              "rowId": `${prefix}brokenglass ${q}`
          },
          {
              "title": "papercut",
              "description": "",
              "rowId": `${prefix}papercut ${q}`,
          },
          {
               "title": "watercolor",
               "description": "",
               "rowId": `${prefix}watercolor ${q}`,
           },
           {
               "title": "multicolor",
               "description": "",
               "rowId": `${prefix}multicolor ${q}`,
           },
           {
               "title": "neondevil",
               "description": "",
               "rowId": `${prefix}neondevil ${q}`,
           },
           {
               "title": "underwater",
               "description": "",
               "rowId": `${prefix}underwater ${q}`,
           },
           {
               "title": "graffitibike",
               "description": "",
               "rowId": `${prefix}graffitibike ${q}`,
           },
           {
               "title": "snow",
               "description": "",
               "rowId": `${prefix}snow ${q}`,
           },
           {
               "title": "cloud",
               "description": "",
               "rowId": `${prefix}cloud ${q}`,
           },
           {
               "title": "honey",
               "description": "",
               "rowId": `${prefix}honey ${q}`,
           },
           {
               "title": "ice",
               "description": "",
               "rowId": `${prefix}ice ${q}`,
           },
           {
               "title": "fruitjuice",
               "description": "",
               "rowId": `${prefix}fruitjuice ${q}`,
           },
           {
               "title": "biscuit",
               "description": "",
               "rowId": `${prefix}biscuit ${q}`,
           },
           {
               "title": "wood",
               "description": "",
               "rowId": `${prefix}wood ${q}`,
           },
           {
               "title": "chocolate",
               "description": "",
               "rowId": `${prefix}chocolate ${q}`,
           },
           {
               "title": "strawberry",
               "description": "",
               "rowId": `${prefix}strawberry ${q}`,
           },
           {
               "title": "matrix",
               "description": "",
               "rowId": `${prefix}matrix ${q}`,
           },
           {
               "title": "blood",
               "description": "",
               "rowId": `${prefix}blood ${q}`,
           },
           {
               "title": "dropwater",
               "description": "",
               "rowId": `${prefix}dropwater ${q}`,
           },
           {
               "title": "toxic",
               "description": "",
               "rowId": `${prefix}toxic ${q}`,
           },
           {
               "title": "lava",
               "description": "",
               "rowId": `${prefix}lava ${q}`,
           },
           {
               "title": "rockart",
               "description": "",
               "rowId": `${prefix}rockart ${q}`,
           },
           {
               "title": "bloodglas",
               "description": "",
               "rowId": `${prefix}bloodglas ${q}`,
           },
           {
               "title": "halloween",
               "description": "",
               "rowId": `${prefix}halloween ${q}`,
           },
           {
               "title": "darkgold",
               "description": "",
               "rowId": `${prefix}darkgold ${q}`,
           },
           {
               "title": "joker",
               "description": "",
               "rowId": `${prefix}joker ${q}`,
           },
           {
               "title": "wicker",
               "description": "",
               "rowId": `${prefix}wicker ${q}`,
           },
           {
               "title": "firework",
               "description": "",
               "rowId": `${prefix}firework ${q}`,
           },
           {
               "title": "skeleton",
               "description": "",
               "rowId": `${prefix}skeleton ${q}`,
           },
           {
               "title": "blackpinkart",
               "description": "",
               "rowId": `${prefix}blackpinkart ${q}`,
           },
           {
               "title": "sand",
               "description": "",
               "rowId": `${prefix}sand ${q}`,
           },
           {
               "title": "glue",
               "description": "",
               "rowId": `${prefix}glue ${q}`,
           },
           {
               "title": "1917",
               "description": "",
               "rowId": `${prefix}1917 ${q}`,
           },
           {
               "title": "leaves",
               "description": "",
               "rowId": `${prefix}leaves ${q}`,
           },
      ]
  }
]

const llistMessagee = {
  text: "*قم بـ الأختيار من فضلك*",
  title: `مصنع لوجو :\n`,
  buttonText: "قائمة الوجو",
  sections:sections
}
const sendMsg = await DarkPiece.sendMessage(m.chat, llistMessagee)
}
    break

case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rockart': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
case 'firework': case 'skeleton': case 'blackpinkart': case 'sand': case 'glue': case '1917': case 'leaves': {
if (!q) throw `للأستخدام ${prefix + command} نص\n*النص يكون باللغة الأنجليزية فقط*`
m.reply(mess.wait)
let link
    if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
    if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
    if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
    if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
    if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
    if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
    if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
    if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
    if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
    if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
    if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
    if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
    if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
    if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
    if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
    if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
    if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
    if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
    if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
    if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
    if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
    if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
    if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
    if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
    if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
    if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
    if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
    if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
    if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
    if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
    if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
    if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
    if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
    if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
    if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
    if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
    if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
    if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
    if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
    if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
    if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
    if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
    if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
    if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
    if (/rockart/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
    if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
    if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
    if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
    if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
    if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
    if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
    if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
    if (/blackpinkart/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
    if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
    if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
    if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
    if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'          
let anutexpro = await maker.textpro(link, q)
DarkPiece.sendMessage(m.chat, { image: { url: anutexpro }, caption: `صنع بواسطة ${BotName}` }, { quoted: m })
}
    break





/*
    case 'xo': case 'ox':
	reply (`*تم إلغاء اللعبة بسبب غبائكم*`);
		
	break
*/	
    case 'أكس-أو': case 'اكس-أو': case 'أكس-او': case 'اكس-او': case 'xo': case 'ox':{
        if (isBan) return reply(mess.banned)
        if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(`${mess.grouponly}`)
        let TicTacToe = require("./lib/tictactoe")
        this.game = this.game ? this.game : {}
        if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`أنت لا تزال في اللعبة`)
        let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
        if (room) {
        reply('تم العثور على شريك!')
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'PLAYING'
        let arr = room.game.render().map(v => {
        return {
        X: '❌',
        O: '⭕',
        1: '1️⃣',
        2: '2️⃣',
        3: '3️⃣',
        4: '4️⃣',
        5: '5️⃣',
        6: '6️⃣',
        7: '7️⃣',
        8: '8️⃣',
        9: '9️⃣',
        }[v]
        })
        let str = `معرف الغرفة: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

انتظار @${room.game.currentTurn.split('@')[0]}
`
        if (room.x !== room.o) await DarkPiece.sendText(room.x, str, m, { mentions: parseMention(str) } )
        await DarkPiece.sendText(room.o, str, m, { mentions: parseMention(str) } )
        } else {
        room = {
        id: 'tictactoe-' + (+new Date),
        x: m.chat,
        o: '',
        game: new TicTacToe(m.sender, 'o'),
        state: 'WAITING'
        }
        if (text) room.name = text
        reply('في انتظار شريك' + (text ? `
        ${text}` : ''))
        this.game[room.id] = room
        }
        }
        break





case 'me': case 'بروفايلي': case 'معلوماتي':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     

     var flob = await getBuffer(picak+'User Profile')
     var bio= await DarkPiece.fetchStatus(m.sender)
     var bioo = bio.status
     const adn= isAdmins? "True":"False"

     try {

        pfp=await DarkPiece.profilePictureUrl(m.sender, 'image')
    
          } catch (e) {
     
      pfp ='https://wallpapercave.com/uwp/uwp1937618.jpeg'
    }

     const profilexx = `*「 معلومات الملف الشخصي 」*\n\n*اسم المستخدم* : ${pushname}\n*السيرة الذاتية* : ${bioo}\n*مشرف المجموعة* : ${adn}\n*المستوى* : ${levelMenu}\n*الخبرة* : ${xpMenu} من أصل ${reqXp}\n*الرتبة* : ${role}`
            let buttonMessage = {
                image: { url: pfp },
                caption: profilexx,
                footer: `${BotName}`,
                headerType: 4
            }
            DarkPiece.sendMessage(m.chat,buttonMessage,{quoted:m})
        	
            break


  case 'grupsetting':
    case 'groupsetting':{
        if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
            let sections = []
            let com = [`group open`,`leveling on`,`antilinkgc on`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`]
            let comm = [`group close`,`leveling off`,`antilinkgc off`,`antilinktg off`,`antilinktt off`,`antilinkytch off`,`antilinkytvid off`,`antilinkig on`,`antilinkfb off`,`antilinktwit off`,`antilinkall off`,`antiwame off`]
            let listnya = [`Group open/close`,`Leveling on/off`,`Antilink Group on/off`,`Antilink Telegram on/off`,`Antilink Tiktok on/off`,`Antilink Youtube Channel on/off`,`Antilink Youtube Video on/off`,`Antilink Instagram on/off`,`Antilink Facebook on/off`,`Antilink Twitter on/off`,`Antilink All on/off`,`Anti Wame on/off`]
            let suruh = [`Enable`, `Disable`]
            let fiturname = [`Group`,`Leveling`,`Auto Sticker`,`Antilink Group`,`Antilink Telegram`,`Antilink Tiktok`,`Antilink Youtube Channel`,`Antilink Youtube Video`,`Antilink Instagram`,`Antilink Facebook`,`Antilink Twitter`,`Antilink All`,`Anti Wame`,`Auto Revoke`]
            let startnum = 0; let startnu = 0; let startn = 0;let start = 0
            let startnumm = 1
            for (let x of com) {
                const yy = {title: `${listnya[startnum++]}`,
            rows: [
               {
                title: `${suruh[0]}`,
                description: `Activate ${fiturname[startnu++]}`,
                rowId: `${prefix}${x}`
              },{
                title: `${suruh[1]}`,
                description: `Deactivate ${fiturname[startn++]}`,
                rowId: `${prefix}${comm[start++]}`
              }
            ]
           }
                sections.push(yy)
            }
            const sendm =  DarkPiece.sendMessage(
from, 
{
text: "Group Settings",
footer: BotName,
title: "Set your group settings here...",
buttonText: "Click Button",
sections
}, { quoted : m }
)  
}
break


case 'coffee': case 'كوفي': {
        if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
                let buttons = [
                        {buttonId: `${prefix}coffee`, buttonText: {displayText: 'الـتالــي'}, type: 1}
                    ]
                    let buttonMessage = {
                        image: { url: 'https://coffee.alexflipnote.dev/random' },
                        caption: `ها هي قهوتك...`,
                        footer: `${BotName}`,
                        buttons: buttons,
                        headerType: 4
                    }
                    DarkPiece.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break

 

case 'emojimix': case 'دمج':{
	   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!q) reply(`*مثال :* ${prefix + command} 🦉+🤣`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await DarkPiece.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break


 case 'emoji': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply('اين هو الايموجي؟')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await DarkPiece.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `ها هو...`}, {quoted:m})
await DarkPiece.sendMessage(from, {text:"الرد /s على هذه الصورة لعمل ملصق"}, {quoted:mese})
})
}
break


case 'del': case 'delete': case 'حذف': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!m.quoted) return reply('قم برد على رسالة للحذف')
 let { chat, fromMe, id} = m.quoted

const key = {
    remoteJid: m.chat,
    fromMe: false,
    id: m.quoted.id,
    participant: m.quoted.sender
}

await DarkPiece.sendMessage(m.chat, { delete: key })
 }
 break


 case 'listpc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
 let teks = `「 DarkPiece's pm user list 」\n\nTotal ${anu.length} users are using DarkPiece in personal chat.`
 for (let i of anu) {
  teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`
 }
 DarkPiece.sendTextWithMentions(m.chat, teks, m)
 }
 break

 case 'listgc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = ` 「  DarkPiece's group user list  」\n\nTotal ${anu.length} users are using bot in Groups.`
 for (let i of anu) {
  let metadata = await DarkPiece.groupMetadata(i)
  if (metadata.owner === "undefined") {
  loldd = false
  } else {
  loldd = metadata.owner
  }
  teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
 }
 DarkPiece.sendTextWithMentions(m.chat, teks, m)
 }
 break


 case 'infogroup': case 'معلومات-الجروب': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = (await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)) 
 let teks = `「 *معلومات عن الجروب* 」`
 for (let i of anu) {
  let metadata = await DarkPiece.groupMetadata(i)
  if (metadata.owner === "undefined") {
  loldd = false
  } else {
  loldd = metadata.owner
  }
  teks += `\n\nالأسم : ${metadata.subject ? metadata.subject : "undefined"}\nالمالك : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nالمعرف : ${metadata.id ? metadata.id : "undefined"}\nالإنشاء : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nعدد الأعضاء : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
 }
 DarkPiece.sendTextWithMentions(m.chat, teks, m)
 }
 break



 case 'afk': case 'اختفاء': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let user = global.db.users[m.sender]
 user.afkTime = + new Date
 user.afkReason = args.join(" ")
 replay(`${m.pushName} تم, وضع الاختفاء\nسبب الأختفاء : ${args.join(" ") ? args.join(" ") : ''}`)
 }
 break


 
   case 'leveling':
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return reply(mess.useradmin)
 if (args.length < 1) return reply('Type on to *Enable*\nType off to *Disable*')
 if (args[0] === 'on'){
 if (isLeveling) return reply(`Already activated`)
 _leveling.push(from)
 fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
 reply('Leveling activated')
 } else if (args[0] === 'off'){
 let anu = _leveling.indexOf(from)
 _leveling.splice(anu, 1)
 fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
 reply('Leveling deactivated')
 } 
 break

 case 'antilinkgc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLink) return replay('Already activated')
 ntilink.push(from)
 replay('Activated _Antilink_ in this group.')
 var groupe = await DarkPiece.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 DarkPiece.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLink) return replay('Already deactivated!')
 let off = ntilink.indexOf(from)
 ntilink.splice(off, 1)
 replay('Deactivated _Antilink_ in this group!')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkgc on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await DarkPiece.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkYoutubeVid) return replay('Already activated')
 ntilinkytvid.push(from)
 replay('Activated youtube video antilink !')
 var groupe = await DarkPiece.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 DarkPiece.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkYoutubeVid) return replay('Already deactivated')
 let off = ntilinkytvid.indexOf(from)
 ntilinkytvid.splice(off, 1)
 replay('Deactivated youtube video antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkyoutubevideo on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkyoutubevideo off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await DarkPiece.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break



     case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkYoutubeChannel) return replay('Already activated')
 ntilinkytch.push(from)
 replay('Activated youtube channel antilink !')
 var groupe = await DarkPiece.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 DarkPiece.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkYoutubeChannel) return replay('Already deactivated')
 let off = ntilinkytch.indexOf(from)
 ntilinkytch.splice(off, 1)
 replay('Deactivated youtube channel antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkyoutubech on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkyoutubech off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await DarkPiece.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkInstagram) return replay('Already activated')
 ntilinkig.push(from)
 replay('Activated instagram antilink !')
 var groupe = await DarkPiece.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 DarkPiece.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkInstagram) return replay('Already deactivated')
 let off = ntilinkig.indexOf(from)
 ntilinkig.splice(off, 1)
 replay('Deactivated instagram antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkinstagram on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkinstagram off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await DarkPiece.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break

   case 'antilinkfacebook': case 'antilinkfb': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkFacebook) return replay('Already activated')
 ntilinkfb.push(from)
 replay('Activated facebook antilink !')
 var groupe = await DarkPiece.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 DarkPiece.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkFacebook) return replay('Already deactivated')
 let off = ntilinkfb.indexOf(from)
 ntilinkfb.splice(off, 1)
 replay('Deactivated facebook antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkfacebook on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkfacebook off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await DarkPiece.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off `, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinktelegram': case 'antilinktg': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTelegram) return replay('Already activated')
 ntilinktg.push(from)
 replay('Activated telegram antilink !')
 var groupe = await DarkPiece.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 DarkPiece.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTelegram) return replay('Already deactivated')
 let off = ntilinkig.indexOf(from)
 ntilinkig.splice(off, 1)
 replay('Deactivated telegram antilink in this group')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinktelegram on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinktelegram off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await DarkPiece.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off `, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinktiktok': case 'antilinktt': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTiktok) return replay('Already activated')
 ntilinktt.push(from)
 replay('Activated tiktok antilink !')
 var groupe = await DarkPiece.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 DarkPiece.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTiktok) return replay('Already deactivated')
 let off = ntilinktt.indexOf(from)
 ntilinktt.splice(off, 1)
 replay('Deactivated tiktok antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinktiktok on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinktiktok off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await DarkPiece.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break

   case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTwitter) return replay('Already activated')
 ntilinktwt.push(from)
 replay('Activated twitter antilink in this group !')
 var groupe = await DarkPiece.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 DarkPiece.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTwitter) return replay('Already deactivated')
 let off = ntilinktwt.indexOf(from)
 ntilinktwt.splice(off, 1)
 replay('Deactivated twitter antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinktwt on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinktwt off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await DarkPiece.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkall': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTwitter) return replay('Already activated')
 ntilinkall.push(from)
 replay('Enabled all antilink !')
 var groupe = await DarkPiece.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 DarkPiece.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkAll) return replay('Already deactivated')
 let off = ntilinkall.indexOf(from)
 ntilinkall.splice(off, 1)
 replay('Disabled all antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `${prefix}antilinkall on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antilinkall off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await DarkPiece.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


   case 'antiwame': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (antiWame) return replay('Already activated')
 ntwame.push(from)
 replay('Activated antiwame !')
 var groupe = await DarkPiece.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 DarkPiece.sendMessage(from, {text: `\`\`\`*「  Warning  」*\`\`\`\n\nAntilink is enabled!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!antiWame) return replay('Already deactivated')
 let off = nttoxic.indexOf(from)
 ntwame.splice(off, 1)
 replay('Deactivated antiwame !')
 } else {
   let buttonsntwame = [
   { buttonId: `${prefix}antiwame on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `${prefix}antiwame off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await DarkPiece.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


   case 'ban': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args[0]) return replay(`Select add or del (add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user you want to ban.`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User is already banned.')
banUser.push(orgnye)
replay(`نجحة عملية الحظر`)
} else if (args[0] === "del") {
if (!isBane) return ads('User is already unbanned.')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`نجحة عملية إلغاء الحظر`)
} else {
replay("Error")
}
}
break


case 'المتصلين': case 'المتصليين': case 'tagonline':{
 if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!isBotAdmins) return replay(mess.botadmin)
    if (!isAdmins && !isCreator) return replay(mess.useradmin)
 let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
 let online = [...Object.keys(store.presences[id]), botNumber]
 let liston = 1
 DarkPiece.sendText(m.chat, '*「المتصليين حالياً」*\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break



 case 'youtube': case 'يتيوب': case 'yts': case 'يوتيوب': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
    if (!isCreator) return reply(mess.botowner)
 if (!args.join(" ")) return replay(`*مثال* : /يوتيوب edit one piece`)
 let yts = require("yt-search")
 let search = await yts(args.join(" "))
 //let no = 1
 let sections = []
 for (let i of search.all) {
    const list = {title: `${i.title}`,
    rows: [
          {
           title: `${i.title}`, 
           rowId: `${prefix}youtube-download ${i.url}`,
           description: `المدة: ${i.timestamp}`
          }, 
          ]
       }
    sections.push(list)   
    }
 const sendm =  DarkPiece.sendMessage(
     from, 
     {
      text: "أختر من الزر أدناه",
      title: "*بحث يوتيوب*\n",
      buttonText: "نتائج البحث",
      sections
     }, { quoted : m }
   )

   DarkPiece.sendMessage(m.chat, { quoted: m })
 }
 break


 case 'youtube-download': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)

 const YT=require('./lib/ytdlcore')

 const { isUrl, fetchBuffer } = require('./lib/Function')

 if(!text) return DarkPiece.sendMessage(from,{text:"ادخل ما تريد البحث عنه"},{quoted:m})

 let yts = require("yt-search")
 
 let search = await yts(text)
 
 let anu = search.videos[0]

 let buttons12 = [
    {buttonId: `${prefix}ytvd ${anu.url}`, buttonText: {displayText: 'فيديو'}, type: 1},
    {buttonId: `${prefix}ytad ${anu.url}`, buttonText: {displayText: 'صوت'}, type: 1}
    ]
 let buttonMessage12 = {
    image: { url: anu.thumbnail },
    caption: `
    *「التحميل من اليوتيوب」*

*العنوان :* ${anu.title}
*المدة :* ${anu.timestamp}
*المشاهدات :* ${anu.views}
*وقت التنزيل :* ${anu.ago}
*الرابط :* ${anu.url}`,
    footer: `${global.BotName}`,
    buttons: buttons12,
    headerType: 4,
    }
    DarkPiece.sendMessage(m.chat, buttonMessage12, { quoted: m })
}
 break



case 'block': {
    if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return reply(mess.botowner)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await DarkPiece.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break


case 'unblock': {
            if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return reply(mess.botowner)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await DarkPiece.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break



 case 'tagall': case 'منشن-الجميع': case 'منشن':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 let teks = `
 	*「رسالة للجميع」*
  
 *الرسالة : ${args.join(" ") ? args.join(" ") : 'بدون رسالة'}*\n\n`
 for (let mem of participants) {
 teks += `:📍» @${mem.id.split('@')[0]}\n`
 }
 DarkPiece.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
 }
 break


case'منشن-المشرفين': case'admintag': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!text) return replay(`*اترك رسالة للمشرفين بعد كتاتبة الأمر*`)
 let teks = `*「منشن المشرفين」*
  
 *الرسالة : ${text}*\n\n`
 for (let mem of groupAdmins) {
 teks += `🤴 @${mem.split('@')[0]}\n`
 }
 DarkPiece.sendMessage(m.chat, { text: teks, mentions: groupAdmins}, { quoted: m })
 }
 break


 case 'منشن-مخفى': case 'منشن-مخفي':  case 'مخفي': case 'hiddentag':  {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 DarkPiece.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
 }
 break




     case 'remove': case 'طرد': case 'اطرد':{
        if (isBan) return reply(mess.banned)
       if (isBanChat) return reply(mess.bangc)
       if (!isCreator) return reply(mess.owner)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await DarkPiece.groupParticipantsUpdate(m.chat, [users], 'remove')
     }
     break


     case 'join': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return replay(mess.botowner)
     if (!args[0]) return replay(`Where's the link?`)
     vdd = args[0]
     let vcc = vdd.split("https://chat.whatsapp.com/")[1]
     if (!vcc) return replay("Link invalid!")
     if (isCreator) {
     await DarkPiece.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("Succes!")
     } else {
      DarkPiece.query({
     tag: "iq",
     attrs: {
     type: "get",
     xmlns: "w:g2",
     to: "@g.us"
     },
     content: [{ tag: "invite", attrs: { code: vcc } }]
     }).then(async(res) => {
     sizny = res.content[0].attrs.size
     if (sizny < 20) {
     teks = `Sorry, munimun 20 members are required in a group to add bot!`
     sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./Assets/pic7.jpg'), `${global.packname}`, `${global.BotName}`, "916909137213@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
     } else if (sizny > 20) {
     await DarkPiece.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("Joined !")
     } else {
     replay("Error")
     }
     }).catch(_ => _)
     }
     }
     break

  

        case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
            try {
            let set
            if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
            if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
            if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
            if (/earrape/.test(command)) set = '-af volume=12'
            if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
            if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
            if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
            if (/reverse/.test(command)) set = '-filter_complex "areverse"'
            if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
            if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
            if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
            if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
            if (/audio/.test(mime)) {
            reply(mess.waiting)
            let media = await DarkPiece.downloadAndSaveMediaMessage(quoted)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply(err)
            let buff = fs.readFileSync(ran)
            DarkPiece.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
            fs.unlinkSync(ran)
            })
            } else reply(`Pls mention any audio you want to modify _${prefix + command}_`)
            } catch (e) {
            reply(e)
            }
            break


case 'setnamebot': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.botowner)
    if (!text) return reply(`مثال : تستهبل أنت وجهك`)
        let name = await DarkPiece.updateProfileName(text)
        m.reply(`تمت عملية تغير الأسم بنجاح \n${text}`)
    }
    break


case 'setbiobot': {
 if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.botowner)
    if (!text) return reply(`مثال : بدون استهبال`)
        let namebio = await DarkPiece.updateProfileStatus(text)
        m.reply(`تمت عملية تغير الحالة بنجاح \n${text}`)
    }
    break    


case 'صورة': case 'simage': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.quoted) return reply('ضع علامة على الملصق')
if (!/webp/.test(mime)) return reply(`قم برد على ملصق فقط *${prefix + command}*`)
reply(mess.waiting)
let media = await DarkPiece.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
DarkPiece.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
}
break


case 'صوت': case 'tovoice': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`إرسال / رد فيديو / صوت تريد استخدامه كصوت مع تسمية توضيحية ${prefix + command}`)
 if (!m.quoted) return reply(`إرسال / رد فيديو / صوت تريد استخدامه كصوت مع تسمية توضيحية ${prefix + command}`)
 reply(mess.waiting)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 DarkPiece.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
 }
break


case 'toaudio': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (/document/.test(mime)) return reply(`إرسال / رد فيديو / صوت تريد تحويله إلى MP3 مع التسمية التوضيحية ${prefix + command}`)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`إرسال / رد فيديو / صوت تريد تحويله إلى MP3 مع التسمية التوضيحية ${prefix + command}`)
 if (!m.quoted) return reply(`إرسال / رد فيديو / صوت تريد تحويله إلى MP3 مع التسمية التوضيحية ${prefix + command}`)
 reply(mess.waiting)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 DarkPiece.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${global.BotName} (${m.id}).mp3`}, { quoted : m })
 }
break


case 'متحركه': case 'ansticker':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return reply('قم برد على الملصق المتحرك')
 if (!/webp/.test(mime)) return reply(`رد ملصق مع تسمية توضيحية *${prefix + command}*`)
 reply(mess.wait)
 let { webp2mp4File } = require('./lib/uploader')
 let media = await DarkPiece.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await DarkPiece.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'تم تحويله من Webp إلى Gif' }, gifPlayback: true }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break


 case 'tourl': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 reply(mess.wait)
 let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
 let media = await DarkPiece.downloadAndSaveMediaMessage(quoted)
 if (/image/.test(mime)) {
 let anu = await TelegraPh(media)
 reply(util.format(anu))
 } else if (!/image/.test(mime)) {
 let anu = await UploadFileUgu(media)
 reply(util.format(anu))
 }
 await fs.unlinkSync(media)
 }
 break

 case 'owner': case 'المطور': case 'مطور':{
    DarkPiece.sendContact(m.chat, global.Owner, m)
    }
    break


case 'بحث-صور': case 'صور': case 'searchimages2': case 'googleimage':{
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply("أدخل نص للبحث")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `${prefix}gimage ${args.join(" ")}`, buttonText: {displayText: 'التالــي'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `
    *「بحث الصور على جوجل」*

البحث عن : *${text}*`,
footer: `${global.BotName}`,
buttons: buttons,
headerType: 4,

}
DarkPiece.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break


case 'google': case 'جوجل': case 'بحث-جوجل': {
    if (isBan) return reply(mess.banned)
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`مثال: ${prefix + command} متى تم صنع اول كمبيوتر`)
 let google = require('google-it')
 let search = await google({'query': args.join(" ")})

 let sections = []
 for (let g of search) {//${args.join(" ") ? args.join(" ") : 'بدون رسالة'}
    const list = {title:`العنوان: ${g.title}`,
    rows: [
          {
           title: `البحث عن: *${text}*\n\nالعنوان: *${g.title}*\n${g.snippet}\n\n`,
           description: `الرابط: \n*${g.link}*`
          },
          ]
       }
    sections.push(list)   
    }

 const sendm =  DarkPiece.sendMessage(
     from, 
     {
      text: "أختر من الزر أدناه",
      title: "*「البحث على جوجل」*\n",
      buttonText: "نتائج البحث",
      sections
     }, { quoted: m }
   )
 
 
   DarkPiece.sendMessage(m.chat, { quoted: m })
    }
    break
		
		

case 'mp4' : {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply(`Pls provide link!`)
try {
    DarkPiece.sendMessage(from, {video:{url:args[0]}, caption:"Succes!", contextInfo:{externalAdReply:{
title:`${global.BotName}`,
body:`${global.OwnerName}`,
thumbnail: BotLogo,
mediaType:2,
mediaUrl: `${global.websitex}`,
sourceUrl: `${global.websitex}`
}}}, {quoted:m})
} catch {
reply("Link error!")
}
}
break

case 'jpeg': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`Please provide link!`)
 try {
    DarkPiece.sendMessage(from, {image:{url:args[0]}, caption:"Success!"}, {quoted:m})
 } catch {
 reply("Link error")
 }
 }
 break

 case 'تحميل-انتسجرام': case 'ig': {	            
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
    if (!isCreator) return reply(mess.botowner)
    if (!text) return reply(`أعطيني الرابط`)
        const { instagramdl, instagramStalk, instagramdlv4, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('*الرابط غير صحيح*')
        instagramdlv3(`${text}`).then(async (data) => {            
        var buf = await getBuffer(data[0].thumbnail)        
        DarkPiece.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `By : *Dark Man*`}, { quoted: m })
        }).catch((err) => {
            reply(mess.error)
        })
}
    break



 case 'ملصق': case 'ستيكر': case 'sticker': case 's': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 if (/image/.test(mime)) {
 let media = await quoted.download()
 let encmedia = await DarkPiece.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else if (/video/.test(mime)) {
 if ((quoted.msg || quoted).seconds > 11) return reply('بحد أقصى 10 ثوان!')
 let media = await quoted.download()
 let encmedia = await DarkPiece.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else {
 reply(`إرسال صورة / فيديو مع التسمية التوضيحية ${prefix + command}\n مدة الفيديو 1-9 ثوان`)
 }
 }
 break		
		
		

case 'tiktok':{ 
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
    if (!isCreator) return reply(mess.botowner)
   if (!text) return m.reply( `مثال : ${prefix + command} *الرابط*`)
   if (!q.includes('tiktok')) return m.reply(`*الرابط غير صالح*`)
   m.reply(mess.wait)
   require('./lib/tiktok').Tiktok(q).then( data => {
       var button = [{ buttonId: `/tiktokaudio ${q}`, buttonText: { displayText: `صوت` }, type: 1 }, { buttonId: `/menu`, buttonText: { displayText: `القائمة` }, type: 1 }]
       DarkPiece.sendMessage(m.chat, { caption: `By: *Dark Man*`, video: { url: data.watermark }, buttons: button, footer: BotName })//, mentions: [sender]
   })
   }
   break
   
case 'tiktokaudio':{
   if (!text) return m.reply( `مثال : ${prefix + command} *الرابط*`)
   if (!q.includes('tiktok')) return m.reply(`*الرابط غير صالح*`)
   m.reply(mess.wait)
   require('./lib/tiktok').Tiktok(q).then( data => {
    DarkPiece.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
   })
   }



 case 'ytad': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    const YT=require('./lib/ytdlcore')
    let yts = require("yt-search")
    let search = await yts(text)
    let anu = search.videos[0]
    const ytmp3play = await YT.mp3(anu.url)
    let stats = fs.statSync(ytmp3play.path)
    let fileSizeInBytes = stats.size;
    if (fileSizeInBytes > 60000000) return reply('Cant send audios longer than 60 MB!')
    
 await DarkPiece.sendMessage(from, {document: fs.readFileSync(ytmp3play.path),fileName: anu.title + '.mp3',mimetype: 'audio/mpeg',}, {quoted:m})
 }
 break




 case 'ytvd': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 const YT=require('./lib/ytdlcore')
    let yts = require("yt-search")
    let search = await yts(text)
    let anu = search.videos[0]
    const ytmp4play = await YT.mp4(anu.url)
    let vidduration =ytmp4play.duration;
    if (vidduration > 1800) return reply('Cant send videos longer than *30 min*')
    DarkPiece.sendMessage(from, {video:{url:ytmp4play.videoUrl}, mimetype:"video/mp4", caption:anu.title+'\n By : *Dark Man*',}, {quoted:m})
 }
 break



case 'صور-تطقيم':case 'couplepp':  case 'تطقيم': {
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
         reply(mess.waiting)
         let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
         let random = anu[Math.floor(Math.random() * anu.length)]
         DarkPiece.sendMessage(m.chat, { image: { url: random.male }, caption: `لك` }, { quoted: m })
         DarkPiece.sendMessage(m.chat, { image: { url: random.female }, caption: `لها` }, { quoted: m })
     }
 break



case 'بحث-صور2': case 'صور2': case 'nexticon': case 'searchimages': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return reply("ادخل النص للبحث\n*يجب أن يكون النص باللغة الإنجليزية*")
 try {
 hx.pinterest(args.join(" ")).then(async(res) => {
 imgnyee = res[Math.floor(Math.random() * res.length)]
 let buttons = [
 {buttonId: `${prefix}nexticon ${args.join(" ")}`, buttonText: {displayText: 'التالــي'}, type: 1},
]
 let buttonMessage = {
 image: { url: imgnyee },
 caption:  `العنوان : ` + args.join(" ") + `\nالرابط : `+imgnyee,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,
 
 }
 DarkPiece.sendMessage(m.chat, buttonMessage, { quoted: m })
 }).catch(_ => _)
 } catch {
 reply("حدث خطأ")
 }
 }
 break



case 'نسبة': case 'نسبه': case 'النسبة': case 'النسبه': case 'rate':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
				if (!text) return replay(`ضع علامة على شخص ما\nمثال : ${prefix + command} @Boting`)
					const gan = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
                    DarkPiece.sendMessage(from, { text: `*${command}*\n\nالأسم : ${q}\nالنسبة : *${teng}%*` }, { quoted: m })
					break

case 'الشخصيه': case 'الشخصية': case 'شخصية': case 'شخصيه': case 'personal':{
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
					if (!text) return replay(`ضع علامة على شخص ما\nمثال : ${prefix + command} @Boting`)
					const Random =['مكروه/ة','غثيث/ه','دمك خفيف','خلوق/ه','رايق/ه','جيد/ه','محترم/ه','غامض/ه','مسكين/ه','حزين/ه','الافضل','قبيح/ه',"بطل/ه","عم/ة الجميع","مظلوم/ه","كفو","ت/يستاهل طرد","غبي/ه","شايف/ه نفسه/ا","منحرف/ه","حيوان/ه احيناناً"]
					const taky = Random[Math.floor(Math.random() * Random.length)]
					DarkPiece.sendMessage(from, { text: `التحقق من الشخصية : ${q}\nالإجابة : *${taky}*` }, { quoted: m })
                }
				     break



 case 'عقوبة': case 'عقوبه': case 'عقاب':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
                   const dare =[
         "لن يتم إضافة عقوبات إلى الآن, سيتم إضافتها قريباً",
     ]
                   const Mikudareww = dare[Math.floor(Math.random() * dare.length)]
                   buffer = await getBuffer(`https://wallpapercave.com/wp/wp10975674.jpg`)
                   DarkPiece.sendMessage(from, { image: buffer, caption: '*العقوبة هي :*\n\n'+ Mikudareww }, {quoted:m})
                   break


case 'سؤال': case 'سوال':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
const truth =[
    "لن يتم إضافة أسألة حتى الآن, سيتم إضافتها قريباً",
]
const mikutruthww = truth[Math.floor(Math.random() * truth.length)]
buffer = await getBuffer(`https://wallpapercave.com/wp/wp10946070.jpg`)
DarkPiece.sendMessage(from, { image: buffer, caption: '*السؤال هو :*\n\n'+ mikutruthww }, {quoted:m})
    break



case "speak": case"انطق": case"قول": case"احكي":{
 if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)

 if (!args[0]) return reply("ادخل نص لأنطقة")

   let texttosay = text
     ? text
     : m.quoted && m.quoted.text
     ? m.quoted.text
     : m.text;
   const SpeakEngine = require("google-tts-api"); 
   const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "ar", slow: false, host: "https://translate.google.com",});
   DarkPiece.sendMessage(m.chat,{audio: {url: texttospeechurl,},mimetype: "audio/mpeg",fileName: `Speak.mp3`,},{quoted: m,});
 }
 break


case 'leavegc': case 'leavegroup': case 'bye': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
        reply(mess.waiting)
    if (!isCreator) return replay(`${mess.botowner}`)
    await DarkPiece.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
    break




case 'help': case 'menu': case 'أوامر': case 'اوامر': case 'الاوامر': case 'الأوامر':{
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 let ownernya = OwnerNumber + '@s.whatsapp.net'
 let timestampe = speed();
 let latensie = speed() - timestampe

 const helpmenu = `
                   *❲﷽❳*


    مرحباً بك *${pushname}*

*❒* ضع قبل كل أمر:  ${prefix}

*⌯╾╾╾╾╾⟞❲🌐❳⟝╼╼╼╼╼⌯*

*${runtime(process.uptime())}*
*❒* السرعة : *${latensie.toFixed(4)}*
*❒* اسم البوت : *${global.BotName}*
*❒* المطور : *@${ownernya.split('@')[0]}*

*⌯╾╾╾╾╾⟞❲🌐❳⟝╼╼╼╼╼⌯*
`
//🌐♻️
let ments = [ownernya]


let buttonshelpmenuDM = [
    {buttonId: `${prefix}menudm`, buttonText: {displayText: 'المهام - القائمة'}, type: 1},
    {buttonId: `${prefix}islam`, buttonText: {displayText: 'اسلامية'}, type: 1},
    {buttonId: `${prefix}aboutme`, buttonText: {displayText: 'عني'}, type: 1}
    ]

    let buttonMessage = {
        image:{ url : 'https://avatars.slack-edge.com/2021-10-13/2599170913381_204007b21a777cd7c04d_512.png'},
        caption: helpmenu,
        footer: `${BotName}`,
        buttons: buttonshelpmenuDM,
        mentions: ments,
        headerType: 4
}
    DarkPiece.sendMessage(m.chat, buttonMessage, { quoted:m })}
break



case 'helpdm': case 'menudm':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
 const helpmenu2 = `
*⌯╾╾╾╾╾⟞❲📜❳⟝╼╼╼╼╼⌯*

*①* ←هذا البوت مخصص لجروبات الواتساب→

*②* ضع قبل كل أمر: ${prefix}

*⌯╾╾╾╾⟞❲الاوامر❳⟝╼╼╼╼⌯*

*❒* searchimages - هوه امر يقوم بالبحث عن الصور *يلزم وضع نص بعد الامر وان يكون باللغة الانجليزية*

*❒* rate - هوه امر يقوم بإخراج نسبة عشوائية *يلزم كتابة نص بعد الامر او وضع علامة للشخص*

*❒* personal - هوه امر يقوم بإخراج صفة عشوائية *يلزم كتابة نص بعد الامر او وضع علامة للشخص*

*❒* speak - هوه امر يقوم بقراءة ما تكتبة بعد الامر

*❒* sticker -هوه امر يقوم بتحويل الصورة لملصق والفيد ايضاً *يلزم ان لايزيد مدة الفيد عن 9ثواني*

*❒* google - هوه امر يقوم بالبحث في محرك البحث جوجل *يلزم وضع نص بعد الامر*

*❒* searchimages2 - هوه امر يقوم بالبحث عن صور *يلزم وضع نص بعد الامر*

*❒* ansticker - هوه امر يقوم بإرجاع الملصق المتحرك للصورة متحركة

*❒* toaudio - هوه امر يقوم بتحويل الفيد للصوت, هذا الامر سوف يرسل الصوت كمستند لا يمكن تشغيلة في الواتساب *يلزم كتابة بعد الامر mp3*

*❒* tovoice - هوه امر يقوم بتحويل الفيد للصوت, هذا الامر سوف يرسل الصوت ويمكنك تشغيلة من الواتساب

*❒* simage - هوه امر يقوم بتحويل الملصق لصورة

*❒* bass & blown & deep & earrape & fast & fat & nightcore & reverse & robot & slow & smooth & tupai - هذة مجموعة اوامر تقوم بتغير الاصوت *يلزم الرد على الصوت فقط*

*❒* hiddentag - هوه امر يقوم بوضع منشن مخفي للجميع

*❒* tagall - هوه امر يقوم بوضع منشن للجميع

*❒* admintag - هوه امر يقوم بوضع منشن للمشرفين فقط *يلزم كتابة نص بعد الامر*

*❒* tagonline - هوه امر يقوم بوضع منشن للمتصلين فقط

*❒* me - هوه امر يقوم بإخراج معلومات عنك

*❒* logo - هوه امر يقوم بصناعة لوجو *يلزم وضع نص بعد الامر ويكون باللغة الانجليزية*

*❒* slabel - هوه امر يقوم بتغير تسمية الملصق *يلزم وضع نص بعد الامر*

*❒* styletext - هوه امر يقوم بزخرفة النصوص *يلزم وضع نص بعد الامر ويكون باللغة الانجليزية*

*❒* emoji - هوه امر يقوم بتحويل الايموجي للصورة *يلزم وضع ايموجي بعد الامر*

*❒* emojimix - هوه امر يقوم بدمج الايموجي *يلزم وضع ايموجي بعد الامر*

*❒* xo - هوه امر يقوم ببدأ جيم اكس او *يلزم ان يكون لديك شريك للعب*

*❒* toqrcode - هوه امر يقوم بتحويل الرابط او النص لـQR

*⌯╾╾╾╾╾⟞❲📜❳⟝╼╼╼╼╼⌯*
`
let buttonshelpm = [
    {buttonId: `${prefix}owner`, buttonText: {displayText: 'المطور'}, type: 1}
    ]
    let buttonMessage = {
        image: { url : 'https://avatars.slack-edge.com/2021-10-13/2599170913381_204007b21a777cd7c04d_512.png' },
        caption: helpmenu2,
        footer: `${BotName}`,
        buttons: buttonshelpm,
        headerType: 4
}
    DarkPiece.sendMessage(m.chat, buttonMessage)}
break


case '':
  if (isCmd) {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    
    const needhelpmenu = `*هل تحتاج إلى مساعدة:*\n${pushname} اكتب *${prefix}اوامر* للحصول على قائمة الأوامر الكاملة`;

    const response = await axios.get('https://telegra.ph/file/2e96dfef9beaa92d4dca2.gif', { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, "utf-8")
    var fetchedgif = await GIFBufferToVideoBuffer(buffer)

    const buttonMessage = {
      video: fetchedgif, gifPlayback: true,
      caption: needhelpmenu,
      footer: `${global.BotName}`,
      headerType: 4,
      buttons: [
        { buttonId: `${prefix}menudm`, buttonText: { displayText: 'القائمة' }, type: 1 }
      ]
    };

    DarkPiece.sendMessage(m.chat, buttonMessage, { quoted: m });
  }
break


default:

    if(isCmd){
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
        reply (`*هل تحتاج إلى مساعدة:*\n${pushname} اكتب *${prefix}اوامر* للحصول على قائمة الأوامر الكاملة`)

    }

if (budy.startsWith('=>')) {
if (!isCreator) return reply(mess.botowner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
    DarkPiece.sendMessage(from, {image:ErrorPic, caption:String(e)}, {quoted:m})
}
}
if (budy.startsWith('>')) {
if (!isCreator) return reply(mess.botowner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await DarkPiece.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
}
}

if (budy.startsWith('$')) {
if (!isCreator) return replay(mess.botowner)
exec(budy.slice(2), (err, stdout) => {
if(err) return DarkPiece.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
if (stdout) return replay(stdout)
})
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
DarkPiece.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
}catch (err) {
    DarkPiece.sendMessage(`${ownertag}@s.whatsapp.net`, util.format(err), {quoted:m})
console.log(err)
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
