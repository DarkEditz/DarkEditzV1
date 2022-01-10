///----------( Created By JALIL )----------\\\

/**
* Note:
* Kalau Mau Recode/Reupload Kasih Credit
**/

///--------------------------------------------------------------\\\

const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const axios = require('axios')
const speed = require('performance-now')
const request = require('request')
const fs = require('fs')
const ffmpeg = require('fluent-ffmpeg')
const crypto = require('crypto')  
const moment = require('moment-timezone')
const yts = require( 'yt-search')
const { exec, spawn, execSync } = require('child_process')


//━━━━━━━━━━━━━━━[ Lib  ]━━━━━━━━━━━━━━━\\
const { color, bgcolor } = require('./lib/color')
const { fetchJson, fetchText, runtime } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { TiktokDownloader } = require('./lib/gif.js')
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
//━━━━━━━━━━━━━━━[ DATABASE  ]━━━━━━━━━━━━━━━\\
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
//━━━━━━━━━━━━━━━[ POTO  ]━━━━━━━━━━━━━━━\\
tamnel = fs.readFileSync('./darkeditz')
jalel = fs.readFileSync('./jalil.jpg')
//━━━━━━━━━━━━━━━[ SETTING  ]━━━━━━━━━━━━━━━\\
 ownerNumber = ["60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net","60128422518@s.whatsapp.net"]
 BotNumber = '601172608669'
 botName = "DarkEditz"
 ownerName = 'Jalil'
 lolkeyy = 'BayuPerkasa'
//━━━━━━━━━━━━━━━[ Public Self ]━━━━━━━━━━━━━━━\\
isSelf = false
isPublic = false
autorespon = false
//━━━━━━━━━━━━━━━[ Jam ]━━━━━━━━━━━━━━━\\
function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
            }
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🌌'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠🌆'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞🌇'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠🏞'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢🌅'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🏙'
}
const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};  
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━\\
            module.exports = Jalil = async (Jalil, kir) => {
	       try {
            if (!kir.hasNewMessage) return
            kir = kir.messages.all()[0]
			if (!kir.message) return
			if (kir.key && kir.key.remoteJid == 'status@broadcast') return
			if (kir.key.fromMe) return
			global.prefix
			global.blocked		
		    kir.message = (Object.keys(kir.message)[0] === 'ephemeralMessage') ? kir.message.ephemeralMessage.message : kir.message
			const content = JSON.stringify(kir.message)
			const from = kir.key.remoteJid
	        const type = Object.keys(kir.message)[0]
			const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
            const hour_now = moment().format('HH:mm:ss')
            const cmd = (type === 'conversation' && kir.message.conversation) ? kir.message.conversation : (type == 'imageMessage') && kir.message.imageMessage.caption ? kir.message.imageMessage.caption : (type == 'videoMessage') && kir.message.videoMessage.caption ? kir.message.videoMessage.caption : (type == 'extendedTextMessage') && kir.message.extendedTextMessage.text ? kir.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*@,;]/.test(cmd) ? cmd.match(/^[簞?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '-'          	
			body = (type === 'conversation' && kir.message.conversation.startsWith(prefix)) ? kir.message.conversation : (type == 'imageMessage') && kir.message[type].caption.startsWith(prefix) ? kir.message[type].caption : (type == 'videoMessage') && kir.message[type].caption.startsWith(prefix) ? kir.message[type].caption : (type == 'extendedTextMessage') && kir.message[type].text.startsWith(prefix) ? kir.message[type].text : (type == 'listResponseMessage') && kir.message[type].singleSelectReply.selectedRowId ? kir.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && kir.message[type].selectedButtonId ? kir.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(kir.message[type].fileSha256.toString('base64')) !== null && getCmd(kir.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(kir.message[type].fileSha256.toString('base64')) : ""
		    budy = (type === 'conversation') ? kir.message.conversation : (type === 'extendedTextMessage') ? kir.message.extendedTextMessage.text : ''
	     	selectedButton = (type == 'buttonsResponseMessage') ? kir.message.buttonsResponseMessage.selectedButtonId : ''
            responseButton = (type == 'listResponseMessage') ? kir.message.listResponseMessage.title : ''
		    button = (type == 'buttonsResponseMessage') ? kir.message.buttonsResponseMessage.selectedDisplayText : ''
	    	isImage = (type === 'imageMessage')
	    	const isVideo = (type === 'videoMessage')
		    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
	      	const args = body.trim().split(/ +/).slice(1)
	    	const isCmd = body.startsWith(prefix)
	       	const q = args.join(' ')
		    const botNumber = Jalil.user.jid
		    const botNumberss = Jalil.user.jid + '@c.us'
		    const isGroup = from.endsWith('@g.us')
		    let sender = isGroup ? kir.participant : kir.key.remoteJid
		    const isOwner = ownerNumber.includes(sender)
	     	const totalchat = await Jalil.chats.all()
		    const groupMetadata = isGroup ? await Jalil.groupMetadata(from) : ''
		    const groupName = isGroup ? groupMetadata.subject : ''
	     	const groupId = isGroup ? groupMetadata.jid : ''
		    const groupMembers = isGroup ? groupMetadata.participants : ''
		    const groupDesc = isGroup ? groupMetadata.desc : ''
	     	const groupOwner = isGroup ? groupMetadata.owner : ''
		    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		    const isGroupAdmins = groupAdmins.includes(sender) || false        
		    const isWelkom = isGroup ? welkom.includes(from) : false
		    const isAntiLink = isGroup ? antilink.includes(from) : false
            const conts = kir.key.fromMe ? Jalil.user.jid : Jalil.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = kir.key.fromMe ? Jalil.user.name : conts.notify || conts.vname || conts.name || '-'
            
            const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${wib} *𝑾𝒊𝒃*\n       ${wita} *𝑾𝒊𝒕𝒂*\n       ${wit} *𝑾𝒊𝒕*`,
                 "h": `${wib} *𝑾𝒊𝒃*\n       ${wita} *𝑾𝒊𝒕𝒂*\n       ${wit} *𝑾𝒊𝒕*`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${wib} *𝑾𝒊𝒃*\n       ${wita} *𝑾𝒊𝒕𝒂*\n       ${wit} *𝑾𝒊𝒕*`,
                 'jpegThumbnail': fs.readFileSync('./darkeditz')
                        }
                       }
	                  } 
let d = new Date
let locale = 'en'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━\\            
		mess = {
			wait: 'Otewe',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

//
if (!isGroup && !isCmd && !command && !kir.key.fromMe && !autorespon) {
numd = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${sender}`, {method: 'get'})
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
                     sami = simi.success
                        Jalil.sendMessage(from, `_${sami}_`, text, {thumbnail: tamnel, sendEphemeral: true, quoted:kir, contextInfo : {forwardingScore: 508, isForwarded: true}})
                      }
//

const hideTag = async function(from, text){
	       let anu = await Jalil.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       Jalil.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./jalil.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  

             

        const listmsg = (from, title, desc, list) => { 
            let po = Jalil.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "SELECT","footerText": "_*©DarkEditz*_","listType": "SINGLE_SELECT","sections": list}}, {})
            return Jalil.relayWAMessage(po, {waitForAck: true})
        }
        
        const reply = (teks) => {
            Jalil.sendMessage(from, teks, text, {quoted:fgi})
        }

        const replly = (teks) => {
			Jalil.sendMessage(from, teks, text, { thumbnail: tamnel, sendEphemeral: true, quoted: fgi, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${date}`,body:"SELECT",previewType:"PHOTO",thumbnail:tamnel,sourceUrl:`https://wa.me/p/60128422518`}}})
		}
        
        const sendMess = (hehe, teks) => {
            Jalil.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Jalil.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Jalil.sendMessage(from, teks.trim(), extendedText, { quoted: kir, contextInfo: { "mentionedJid": memberr } })
        }            
            
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
let kma = gam1
let mhan = await Jalil.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Jalil.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Jalil.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Jalil.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Jalil.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButloc = (from, title, text, desc, button, sen, men, file) => {
return Jalil.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: kir, contextInfo: {"mentionedJid": men ? men : []}})
}
//━━━━━━━━━━━━━━━[ Fake Fakean ]━━━━━━━━━━━━━━━\\
        const fakestatus = (teks) => {
            Jalil.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fteks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": tamnel,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        Jalil.updatePresence(from, Presence.composing)
        Jalil.chatRead(from, "read")
        const fakegroup = (teks) => {
            Jalil.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fteks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": tamnel,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 169,
                            status: 1,
                            surface : 1,
                            message: `Jangan Spam:(`, 
                            orderTitle: `Donate Donk:(`,
                            thumbnail: tamnel, //thumb
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }        

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━\\

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Jalil.sendMessage(to, media, MessageType.sticker,{quoted:kir})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Jalil.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }              
//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━\\

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
        if (!kir.key.fromMe && isSelf === true) return
///Antilink
if (isGroup && !kir.key.fromMe && isAntiLink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return replly('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
replly(`「 *LINK GRUP TERDETEKSI* 」\n\n_Kamu Akan Di Kick Dari Group!!_`)
setTimeout(() => {
Jalil.groupRemove(from, [sender])
}, 2000);
}
}
//━━━━━━━━━━━━━━━[ WELCOME TO MENU ]━━━━━━━━━━━━━━━\\
switch (command) {             
//
case 'menu':
case 'help':
thu = await Jalil.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}`
Jalil.sendMessage(from, { contentText: `${menuh}`, footerText: `
*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/60128422518*
 💌EMAIL : *DarkEditz@gmail.com*
 🔎YT : *Dark Editz*
 🪀GROUP : *-*
    ${wib} *𝑾𝒊𝒃*
    ${wita} *𝑾𝒊𝒕𝒂*
    ${wit} *𝑾𝒊𝒕*

*メLord Jalil⁴̅⁰͍⁴̵*
̵`, buttons: [{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'メ MENU' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ OWNER' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: kirtod, contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break
case 'allmenu':
	menunyai = `Hai Kak *${pushname}* ${ucapanWaktu}
	
╭─❒ *INFO CREATOR*
├❖ *Author : Jalil*
├❍ *Insta    : -*
├❖ *Youtub : Dark Editz*
├❍ *LinkGb : -*
├❖ *LINK : -*
├❍ *wasap : wa.me/60128422518*
╰─────────────────────╯
 
╭─❒ *INFO BOT* 
├⊱❥Nama : DarkEditz
├⊱❥ Author : Jalil
├⊱❥ Pengembang : Dark Editz
├⊱❥ Base : Jalil
├⊱❥ Runtime : ${runtime(process.uptime())}
├⊱❥Total Chat : *${totalchat.length}*
├⊱❥ Prefix : ${prefix}
╰───────────────┈ ⳹

╭─❒ *INFO OWNER* 
├⊱❥ Nama : ${ownerName}
├⊱❥ Nomor : wa.me/60128422518
╰───────────────┈ ⳹
╭─❒ *TO TODAY*
├⊱❥ Hari : ${week} ${weton}
├⊱❥ Tanggal : ${date}
├⊱❥ Jam : ${time}
╰───────────────┈ ⳹

╭─❏ *INDONESIA TIME*
├⊱❥ Wib : ${wib}
├⊱❥ Wita : ${wita}
├⊱❥ Wit : ${wit}  
╰───────────────┈ ⳹

╭◪ 𝐑𝐮𝐥𝐞𝐬
├❖ *Spam : Auto Block!*
├❖ *Beri Jeda 5 Detik!*
├❖ *No Vc/Tlpn=Block!*
├❖ *Donasi Biar ${namabot} Lebih Berkembang!*
├❖ *Note Bot Belum Jadi Sepenuhnya!*
╰───────────────────────╯

╭─❒ *SIMPLE MENU*
├⊱❥ ${prefix}tes
├⊱❥ ${prefix}owner
├⊱❥ ${prefix}rules
├⊱❥ ${prefix}sc
╰──────────────────────╯

╭─❒ *GROUP MENU*
├⊱❥ ${prefix}welcome
├⊱❥ ${prefix}antilink
├⊱❥ ${prefix}add
├⊱❥ ${prefix}kick
├⊱❥ ${prefix}promote
├⊱❥ ${prefix}demote
├⊱❥ ${prefix}hidetag
├⊱❥ ${prefix}tagall
├⊱❥ ${prefix}setname
├⊱❥ ${prefix}setdesc
├⊱❥ ${prefix}setpp
├⊱❥ ${prefix}linkgroup
├⊱❥ ${prefix}group
╰──────────────────────╯
╭─❒ *ANIME MENU*
├⊱❥ ${prefix}ppcp
├⊱❥ ${prefix}wallanime
├⊱❥ ${prefix}loli
├⊱❥ ${prefix}waifu
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
╰──────────────────────╯
╭─❒ *MAKER MENU*
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
╰──────────────────────╯
╭─❒ *DOWNLOAD MENU*
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
╰──────────────────────╯
╭─❒ *ASUPAN MENU*
├⊱❥ ${prefix}cecanrandom
├⊱❥ ${prefix}cecanmalaysia
├⊱❥ ${prefix}cecanindonesia
├⊱❥ ${prefix}cecankorea
├⊱❥ ${prefix}cecanjepang
├⊱❥ ${prefix}hijaber
├⊱❥ ${prefix}santuy
├⊱❥ ${prefix}bocil
├⊱❥ ${prefix}ukhti
├⊱❥ ${prefix}ghea
├⊱❥ ${prefix}rika
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
╰──────────────────────╯
╭─❒ *SOUND MENU*
├⊱❥ ${prefix}sound1-sound75
├⊱❥ ${prefix}tupai
├⊱❥ ${prefix}bass
├⊱❥ ${prefix}robot
├⊱❥ ${prefix}volume
├⊱❥ ${prefix}balik
├⊱❥ ${prefix}fast
├⊱❥ ${prefix}slow
├⊱❥ ${prefix}tts
╰──────────────────────╯
╭─❒ *STICKER MENU*
├⊱❥ ${prefix}s
├⊱❥ ${prefix}sticker
├⊱❥ ${prefix}doge
├⊱❥ ${prefix}patrick
├⊱❥ ${prefix}gura
├⊱❥ ${prefix}animestick
├⊱❥ ${prefix}attp
├⊱❥ ${prefix}ttp
├⊱❥ ${prefix}toimg
├⊱❥ ${prefix}colong
├⊱❥ ${prefix}takestick
╰──────────────────────╯
╭─❒ *OWNER MENU*
├⊱❥ ${prefix}bc
├⊱❥ ${prefix}tes
├⊱❥ ${prefix}public
├⊱❥ ${prefix}self
├⊱❥ ${prefix}setname
├⊱❥ ${prefix}setprofile
├⊱❥ ${prefix}promoteall
├⊱❥ ${prefix}demoteall
├⊱❥ ${prefix}setmenu
├⊱❥ ${prefix}leave
╰──────────────────────╯
╭─❒ *GABUT MENU*
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
╰──────────────────────╯
╭─❒ *OTHER MENU*
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
├⊱❥ ${prefix}
╰──────────────────────╯

_*BIG THANKS TO*_
*ALLAH SWT*
*MY ORTU*
*DarkEditz ( SC ORI )* 
*Penyedia Apikey*
*Pengguna Script*
*Pengguna Bot*

           ║▌│█║▌│ █║▌│█│║▌║
           ║▌│█║▌│ █║▌│█│║▌║
   
            [ *POWERED BY ${ownerName}* ]
`
var imgs = await Jalil.prepareMessage('0@c.us', tamnel, image, { thumbnail: tamnel })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await Jalil.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `ALL MENU`,
                        "description": menunyai,
                        "footerText": `メLord Jalil⁴̅⁰͍⁴̵`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "100000000",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "35000000",
                        "retailerId": `YouTube : DarkEditz`,
                        "url": "OWNER : https://wa.me/60128422518\nYT : https://bit.ly/3BpBe1Z\nGROUP : https://bit.ly/3Ene2TO"
                    },
                    "businessOwnerJid": "60128422518@s.whatsapp.net",
                }
            }, { quoted: fgi, mimetype: 'image/jpeg' })
            Jalil.relayWAMessage(ctlg)
            break

//━━━━━━━━━━━━━━━[ Simple Case ]━━━━━━━━━━━━━━━\\    
case 'runtime':
            run = process.uptime() 
            teks = `${kyun(run)}`
            replly(teks)
            break  
case 'owner':
let inilist = []
for (let i of ownerNumber) {
const vname = Jalil.contacts[i] != undefined ? Jalil.contacts[i].vname || Jalil.contacts[i].notify : undefined
inilist.push({
"displayName": 'Jalil',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${Jalil.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await Jalil.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: fgi })
button = [
  {buttonId: '.menu', buttonText: {displayText: 'MENU'}, type: 1}
]
 buttons = {
    contentText: 'Nih Kak Owner ku >_<',
    footerText: `*メLord Jalil⁴̅⁰͍⁴̵*`,
    buttons: button,
    headerType: 1
}
await Jalil.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: fgi})
break          
case 'rules':
thu = await Jalil.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}
𒍮 𝙍𝙪𝙡𝙚𝙨 𝘽𝙤𝙩𝙯
❒͡ 1. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ᴡᴀʀɴ/sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 2. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑻𝒆𝒍𝒆𝒑𝒐𝒏 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 3. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑩𝒂𝒏𝒅𝒊𝒏𝒈 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ʙʟᴏᴄᴋ ᴘᴇʀᴍᴀɴᴇɴ*

𒍮 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕𝒛 ↓↓
_*https://wa.me/60128422518*_`
Jalil.sendMessage(from, { contentText: `${menuh}`, footerText: `
*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/60128422518*
 💌EMAIL : *DarkEditz@gmail.com*
 🔎YT : *-*
 🪀GROUP : *-*
Nama Bot : *${botName}*
Runtime : ${runtime(process.uptime())}
Total Chat : *${totalchat.length}*
    ${wib} *𝑾𝒊𝒃*
    ${wita} *𝑾𝒊𝒕𝒂*
    ${wit} *𝑾𝒊𝒕*

*Jika Sudah Paham Rules Nya Silahkan Pencet Di Bawah Jika Tidak Kelihatan Ketik .menu*
̵`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'メ Menu' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break                                
//━━━━━━━━━━━━━━━[ Group Case ]━━━━━━━━━━━━━━━\\            
case 'bay':
      reply('Sayonara Buat Yang Pergi😔\nSemoga Amal Ibadahnya Di Terima\nTapi Kalo Lu Balik Harus Donasi')
      break
case 'selamatdatang':
      reply('Welcome Kak Jangan Lupa Patuhi Peraturan  Grup Ya Kaka \nSemoga Betah👏')
      break
case 'welcome':
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
case 'antilink':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
case 'tagall':
       if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL BY DarkEditz ]*\n${q ? q : ''}\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
case 'hidetag':
      if (!isGroupAdmins && !isOwner) return 
      if (!isGroup) return reply(mess.only.group)
             try {
             quotedText = kir.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break                               
//━━━━━━━━━━━━━━━[ Anime Case ]━━━━━━━━━━━━━━━\\       
//━━━━━━━━━━━━━━━[ Sound Case ]━━━━━━━━━━━━━━━\\     
case 'sound1':
      case 'sound2':
      case 'sound3':
      case 'sound4':
      case 'sound5':
      case 'sound6':
      case 'sound7':
      case 'sound8':
      case 'sound9':
      case 'sound10':
      case 'sound11':
      case 'sound12':
      case 'sound13':
      case 'sound14':
      case 'sound15':
      case 'sound16':
      case 'sound17':
      case 'sound18':
      case 'sound19':
      case 'sound20':
      case 'sound21':
      case 'sound22':
      case 'sound23':
      case 'sound24':
      case 'sound25':
      case 'sound26':
      case 'sound27':
      case 'sound28':
      case 'sound29':
      case 'sound30':
      case 'sound31':
      case 'sound32':
      case 'sound33':
      case 'sound34':
      case 'sound35':
      case 'sound36':
      case 'sound37':
      case 'sound38':
      case 'sound39':
      case 'sound40':
      case 'sound41':
      case 'sound42':
      case 'sound43':
      case 'sound44':
      case 'sound45':
      case 'sound46':
      case 'sound47':
      case 'sound48':
      case 'sound49':
      case 'sound50':
      case 'sound51':
      case 'sound52':
      case 'sound53':
      case 'sound54':
      case 'sound55':
      case 'sound56':
      case 'sound57':
      case 'sound58':
      case 'sound59':
      case 'sound60':
      case 'sound61':
      case 'sound62':
      case 'sound63':
      case 'sound64':
      case 'sound65':
      case 'sound66':
      case 'sound67':
      case 'sound68':
      case 'sound69':
      case 'sound70':
      omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
      Jalil.sendMessage(from, omkeh, MessageType.audio, { quoted: fgi, mimetype: 'audio/mp4', ptt: true })
          break
case 'sound71':
      case 'sound71':
      case 'sound72':
      case 'sound73':
      case 'sound74':
      case 'sound75':
      omkeh = await getBuffer(`https://ojankyaa.000webhostapp.com/sound/${command}.mp3`)
      Jalil.sendMessage(from, omkeh, MessageType.audio, { quoted: fgi, mimetype: 'audio/mp4', ptt: true })
          break 
case 'volume':
if (!isQuotedAudio) return reply('Reply audio!')
let encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media3 = await Jalil.downloadAndSaveMediaMessage(encmedia3)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media3)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
Jalil.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ftroli})
fs.unlinkSync(rname)
}
)
case 'tupai':
encmedia6 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media6 = await Jalil.downloadAndSaveMediaMessage(encmedia6)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media6} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media6)
if (err) return reply('Error!')
let hah = fs.readFileSync(ran)
Jalil.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftrol})
fs.unlinkSync(ran)
})
break
case 'bass':                 
                  encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                  mediao = await Jalil.downloadAndSaveMediaMessage(encmediao)
                  ran = getRandom('.mp3')
                  exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
                     fs.unlinkSync(mediao)
                     if (err) return reply('Error!')
                     hah = fs.readFileSync(ran)
                     Jalil.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 234, quoted:mek})
                     fs.unlinkSync(ran)
                  })
               break                                          
//━━━━━━━━━━━━━━━[ Maker Case ]━━━━━━━━━━━━━━━\\  
case 'nulis':
               if (args.length < 1) return replly('Yang mau di tulis apaan?')
               teks = args.join(' ')
               replly(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               Jalil.sendMessage(from, buff, image, {quoted: fgi, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
case 'nuliskiri':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './media/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => reply('error'))
                .on('exit', () => {
                    Jalil.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                    
                })
            }
                break
case 'nuliskanan':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+128+129',
                    fixHeight,
                    './media/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => reply('error'))
                .on('exit', () => {
                    Jalil.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                    
                })
            }
                break
case 'foliokiri':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+48+185',
                    fixHeight,
                    './media/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply('error'))
                .on('exit', () => {
                    Jalil.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                    
                })
            }
                break
case 'foliokanan':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '3',
                    '-annotate',
                    '+89+190',
                    fixHeight,
                    './media/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => reply('error'))
                .on('exit', () => {
                    Jalil.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {quoted: fgi, caption: `Jangan malas pak...`})
                    
                })
            }
                break                                         
//━━━━━━━━━━━━━━━[ Download Case ]━━━━━━━━━━━━━━━\\    
case 'tourl':
            if ((isMedia && !kir.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo : kir
            owgi = await Jalil.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
case 'play':
             if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
             reply(mess.wait)
             let yut = await yts(q)
             yta(yut.videos[0].url)             
             .then(async(res) => {
             const { thumb, title, filesizeF, filesize } = res
             const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁
		     
•💬 Judul : ${yut.all[0].title}
•🎥 ID Video : ${yut.all[0].videoId}
•⏰️ Diupload Pada : ${yut.all[0].ago}
•👁️️ Views : ${yut.all[0].views}
•▶️ Durasi : ${yut.all[0].timestamp}
•📍 Channel : ${yut.all[0].author.name}
•🔗 Link Channel : ${yut.all[0].author.url}`
             ya = await getBuffer(thumb)
             py =await Jalil.prepareMessage(from, ya, image)
             gbutsan = [{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1},{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}]
             gbuttonan = {
             imageMessage: py.message.imageMessage,
             contentText: capti,
             footerText: 'Silahkan Pilih Jenis File Dibawah Ini☕',
             buttons: gbutsan,
             headerType: 4
}
             await Jalil.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
             break              
case 'ytmp3':
             if(!q) return reply('linknya?')              
             res = await yta(`${q}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Audio```')})
             sendMediaURL(from, `${res.dl_link}`,{quoted:fgi})
             break         
case 'ytmp4':
             if(!q) return reply('linknya?')            
             res = await ytv(`${q}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Video```')})
             sendMediaURL(from, `${res.dl_link}`,'Nih Kack')
             break  
case 'tiktok': 
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break 
case 'ssweb':
case 'ss':
                if (args.length < 1) return replly('Urlnya mana om')
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					Jalil.sendMessage(from, buff, image, {quoted: fgi, caption : teks})
					break   
//━━━━━━━━━━━━━━━[ Islami Case ]━━━━━━━━━━━━━━━\\        
case 'asmaulhusna':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=BayuPerkasa`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
case 'jadwalsholat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=BayuPerkasa`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break          
//━━━━━━━━━━━━━━━[ Cecan Case ]━━━━━━━━━━━━━━━\\     
case 'cecanvietnam':
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
Jalil.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Lupa Subscribe YT : DarkEditz'})
break

case 'cecanrandom':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Jalil.sendMessage(from, buffer, image, {quoted: fgi, caption: ''})
break

case 'hijaber':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Jalil.sendMessage(from, buffer, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break

case 'santuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Jalil.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'ukhti':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Jalil.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'bocil':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Jalil.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'ghea':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Jalil.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'rika':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
Jalil.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break

case 'cecanmalaysia':
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/malaysia?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
Jalil.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecankorea':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/korea?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
Jalil.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanindonesia':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/indonesia?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
Jalil.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanjapan':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/japan?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
Jalil.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanthailand':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/thailand?apikey=ZeroYT7`)
replly(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
Jalil.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cogan':
replly(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=KontoleBaperan`)
wmn = `🐧DarkEditz`
trans = `Subrek YT : DarkEditz`
but = [
          { buttonId: `${prefix}cogan`, buttonText: { displayText: '🔖 Next' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
case 'cecan':
replly(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=KontoleBaperan`)
wmn = `🐧DarkEditz`
trans = `Subrek YT : DarkEditz`
but = [
          { buttonId: `${prefix}cecan`, buttonText: { displayText: '🔖 Next' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
//━━━━━━━━━━━━━━━[ Sticker Case ]━━━━━━━━━━━━━━━\\       
case 'sticker': 
case 'stiker':
case 's':
            if ((isMedia && !kir.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
            const media = await Jalil.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                Jalil.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fgi})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && kir.message.videoMessage.seconds < 11 || isQuotedVideo && kir.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(kir).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : kir
                const media = await Jalil.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            Jalil.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fgi})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break           
case 'toimg':
case 'tomedia':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (kir.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await Jalil.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(kir).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await Jalil.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply('error')
							buffer = fs.readFileSync(ran)
							Jalil.sendMessage(from, buffer, image, {quoted: fgi})
							fs.unlinkSync(ran)
						})
					}
					break
case 'doge':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'patrick':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'gura':
       case 'gawgura':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
case 'animestick':
       case 'stickeranime':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              break                             
//━━━━━━━━━━━━━━━[ Owner Case ]━━━━━━━━━━━━━━━\\                                                                      
//━━━━━━━━━━━━━━━[ Gabut Case ]━━━━━━━━━━━━━━━\\     
case 'cerpen':
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=BayuPerkasa`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Creator : ${get_result.creator}\n`
    ini_txt += `Story :\n${get_result.cerpen}`
    titid = ini_txt
   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break
case 'faktaunik':
case 'katabijak':
case 'pantun':
case 'bucin':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=BayuPerkasa`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ NEXT`,
            },
            type: 1,
          },]);
        break
case 'randomnama':
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=BayuPerkasa`)
                    dasi = anu.result
                   sendButMessage(from, dasi, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ NEXT `,
            },
            type: 1,
          },]);
        break                                      
//━━━━━━━━━━━━━━━[ Other Case ]━━━━━━━━━━━━━━━\\                                           
case 'quotes':
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=KontoleBaperan`)
    quotes = quotes.result
    author = quotes.by
    quotes = quotes.quote
    replly(`_${quotes}_\n\n*â€• ${author}*`)
    break
case 'quotesanime':
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=KontoleBaperan`)
    quotes = quotes.result
    quote = quotes.quote
    char = quotes.character
    episode = quotes.episode
    replly(`_${quote}_\n\n*• ${char}*\n*${episode}*`)
    break                                    
//━━━━━━━━━━━━━━━[ AKHIR  ]━━━━━━━━━━━━━━━\\
default:
        if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Waktunya sahur kak, Main botnya buat nanti lagi, Sebelum makan jangan lupa baca Doa ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Udah sholat Subuh belum kak', 'yellow'), color('(🙄)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '11:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Pagi kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
          if (hour_now >= '11:00' && hour_now <= '12:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Siang kak, Dah mandi blm kak?', 'yellow'), color('(🙄)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi buka kak, Sabar ya kak', 'yellow'), color('(😆)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[Pesan Bot]', 'cyan'), color('Alhamdulillah, Dh magrib jan lupa sholat kak', 'yellow'), color('(😊)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bentar lagi jam 8 gak mabar kak?', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(😄)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '02:00') {
           console.log(color('[Pesan Bot]', 'cyan'), color('Bot ngantuk kak, tidur dulu ya kak', 'yellow'), color('(😴)', 'white'))
        }
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(kir.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(kir.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return Jalil.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
