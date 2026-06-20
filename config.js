const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SARWAR-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUFjUEwwWGxqMlBCaU9KTXkvMjZIWUZKWm81RWxXMllHTE1nWUVxMlNWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0tzWGdMajE3SS83QmtyTGdrVTFsWkRsL3FTMnppZ3kzTjFPa3hWa3d3TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTDA5dDNxb0Z1MTh2a3k4d3BOR2VtUVJ5dmxQaXU1SG16U0NuSVV1Vkd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxc3duQjBDbU5Vdk9XNFluSnVCb2JTYnc1NmRvZnJYUDNuQi9GSnE0ZWxVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFHcUpLMmxaZWJyQW9KNE1NcndYRmVvdWVaSFR6bGR6ZXJuRzVTWTV0VjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1WT2ExVldTTHA3WTMzZ2RJOU5JUHJNVElDcTMzRTVxYWZVVlJzZVZKZ009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0xtUTM1OGxYdHdsekZ4UjZVZUNkbHFScU1xK2ZiWlgyNHZ1Tlc1ZnpVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0ZuR3JtNHRiNkZQQ1V0OFRHZ2pkSjJTVkEydllZeVNPZy9oZUU0a2Jqbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijl3eUNEaUFsUWlYOE83RytKVjByVVFBZUlFNW1MNGFMY0ppZDQ0ZnNJa2h4azh6ekhMYWhwOG5yS2dKNzcxM2JVT0F4Q2pySHQ3ZzBYVVlubnJaVGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiI3dzhUQlJQYytlY2xtTHlaa3dCM3REMGd5RnVmZEx0cUdZVUpMTXAxM3ZNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkJHQzZHOUJMIiwibWUiOnsiaWQiOiI5MjMwMDU0NDgxNjI6ODJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI1Njc4ODcxMTkyMzczNzo4MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01hVG0rRUdFS0xnMjlFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJRSDgwM0tCV2gyelh0TVZUcXhHeXlMMy9ycWxwWXFqWWtzTkJsbjU2VzQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjdzWnhVdjZuY2NmMTVrRnlhemJtTnMyRVozaUUvTWN4Z3ZFSHJPaUgxdzA2R0tRYzZFbWJBL0dmbjdMUFE0NXlqS2tZSGJvd1ROdUJQZ05la3kzMkFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBT2orbnZjZk5rMXNhaThIb2pwUXJhZ0szUW40dndKMkVsR1o4aitVTTI4SU5DSXFPdmRQOGoyL0FDS01yeUIwMEpCTG5yZ3BVQk1WZHBlNzZJd0loQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjU2Nzg4NzExOTIzNzM3OjgyQGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJka0IvTk55Z1ZvZHMxN1RGVTZzUnNzaTkvNjZwYVdLbzJKTERRWlorZWx1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0FnRiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3ODE5ODUzMjMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRFlkIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SARWAR-MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true or false for auto voice reply
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/zc57w6.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SARWAR-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SARWAR-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923005448162",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "SARWAR-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴀʀᴡᴀʀ-ᴀʟɪ-ᴍᴅ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/zc57w6.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*SARWAR-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923005448162",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 
ANTI_CALL: process.env.ANTI_CALL || "false"
// make it true for auto call reject 
};
