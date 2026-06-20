const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SARWAR-MD~SARWAR-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUJ0UE1KTHcreFNJZDltVXpyMUgzM0ZvMUxrK0lqZDJRZ1Z0d0M3b2ttbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkRlY3B6UnU2eWFlWEUwOW1sMjh4VkxFQXZyUmtXQ0Zyb2FOZWE5MlZSUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtUEZOTlVXYUxuQnhGMmFCalpmR3lmWTZhM1VtSW4yN2VNUUpCRG4zcjNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNczZ6U1o2MEpXRmpvNGs1STZsQmNzQ2dqUkZDcXY3anFUOE1SN1FHWUJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldMOUFvZVhrWnFoMXpScjFldW5OdWR5UXVuMS9Nb3Eybko0clkxMnZIRjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJhRzkwMUJOTFh0cm5aZGtHRkh5V3ZXS3BoN254VGpIeFAwVTJubnBqelU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU1USFpJQ1JJM2tETGFTbG9TSkNPWStqSkt1YjI5Z21Ia1dRODVpOTZXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmE0VFlyditQOUVDcnBMeWo2MEY1bGhZNEdnK2xQeks5TzA1VUs3NGlSUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJJQWJESGlLbW4vRkhlQ1c3bHZuUlI5b3pFR0lXQ1JzN0NnQ1E0VHFlZkxtalNyaXJSTXRreDk2YWdCWmc2cForMXlLWW1FNDh4TGIzdi9vREVUY2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6IjFQVjI1WmMxUm1ETzJCVVZKQVBkRHJVWEdHcEZsdmNoUXVURjNzNWlsYWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDA1NDQ4MTYyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQ0MyNTMxRDk1QTNDM0M4NDlDRTAyQjAzQzg3Q0ExQyIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgxOTc1ODI0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwMDU0NDgxNjJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDMzJGRkREOUJDQzFCNUVCRTg2MUY3QjMxRjgxMEM3IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3ODE5NzU4MjV9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRjNQUzhIUFEiLCJtZSI6eyJpZCI6IjkyMzAwNTQ0ODE2Mjo4MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjU2Nzg4NzExOTIzNzM3OjgxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVdUbStFR0VJQ1cyOUVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMlFIODAzS0JXaDJ6WHRNVlRxeEd5eUwzL3JxbHBZcWpZa3NOQmxuNTZXND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMTBRcGY5RksyejRwYUNHUklySWRtbGdZdlF2eW4zS0QvNWZhMGI1VW05dERLUkhLZW5vbTB3UTBIOFFFbUlNZU9pYWNlQmdGUDVvWEFlc2RoN3pVQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IjQyTk5rZ3VCRjBuNUVGbXFzVlBjbUptQ1ZVWXZFLzVFNU1YUDV4M3lxNmN0Z1oyUkZBN2dGY0FRaCtqSFNqMXhOcG9VS0hrVlNFTUxHWjRjekU5bWhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTY3ODg3MTE5MjM3Mzc6ODFAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRrQi9OTnlnVm9kczE3VEZVNnNSc3NpOS82NnBhV0tvMkpMRFFaWitlbHUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQWdGIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc4MTk3NTgxOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEWWIifQ===",
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
