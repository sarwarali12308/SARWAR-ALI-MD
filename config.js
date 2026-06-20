const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SARWAR-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEtBS2t4QlI5SlhnL21PeHZPbnh1VnZWY29jaDh4OS9sM24xbWV6UzYwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicElWV2JreHlnOTV2bk5MVXRxN0Qrd2tIQllkeHRkbllZREhwOE0rc3pDdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSFdDK1g3eUVtU2VnOTM0RzdGMTJxSGNLSUR5a3c0cGFHQ0dvNmZvKzBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvK2FzbElCWmxIdEtwOXpxZjFPam56aXRFdCt1L3U3UXVtd21wMnJKQUFBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllLT1hWZm9EVlhjTy83eWUzTWpRVGhNRWlRZEZ2Y1JZSkZTSUg5ekFhMGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVQejhDbm5iTVIzZWNqZ0p5UHROVmV6eUZyYTE4RGVrSDdDY3FRR0pZRkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicURYdTVxVWVPeFdpczdlSkVLaWFRTnVKUVd5NER6NmdqcDJ0YmxwVnBYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmcxa29aS1ZwVmNadnVaSzAwZFdCaWFROFdUbXpoYVZQTjVaaTB3Z3RTYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFhRUxSMGdyQTY3UFYvRzVhMWNrS3llQk1EanR5NFY5WFdKVjl3WVNLVVRNblJIRkJNcGF6S1VoK3Q0VlNELzRlYXViQlNObklQOVlqUy9JWGUzWmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA0LCJhZHZTZWNyZXRLZXkiOiJ1dzd2TTl1eXZ6clM5aVlqUzFHeTlvLzNLMnlzZnhWQ1QxRW53NjB0Y1pVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM0MTYwMzY4MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUM0MjRBQTA3QUE5MDhEMEMwRjZBRDUwMjQ1QTcwRjciLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc4MTk4NDA1Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzQxNjAzNjgxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQzNGNEQyQUI5NDFGNkI5QUM4ODM3QUZDQjJFRTVFMSIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgxOTg0MDUyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzNDE2MDM2ODFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDMEQzMDVDNzBENkU1NTE2NjI3M0I5MDI1OEFFNDk5IiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3ODE5ODQwNTJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM0MTYwMzY4MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUNDRDNENzFBOTIxNzY4MTFGMTMzRDc1NDVEOEI1MEEiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc4MTk4NDA1M31dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI5TUVMNTNURSIsIm1lIjp7ImlkIjoiOTIzMzQxNjAzNjgxOjNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMTk4Nzk3NTE4ODU0MjozQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXJYamQ0RkVLWFcyOUVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoiek5jaFFZYndYeFdHYzVrZTQ2MStHalEyRUIrUnFxdFc0czA4VnA3ZXJFUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMkdQcHV6RW0xbU9MWWppVVQ0ek5XM3c3aHNUSkRDWXVIaDRQdmZ2d1VIQVNEOTg5emcrc0dTOWFhcjNFakwxdE5pdEcwbVJTWTcxT3ZCUXhGZHNrQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IjgyTGxVeTZ6OVdKZXNrbkVLMWVVUTlpWU5CemtNc2Zub2hkTm5OTlJyNnRoYkZodE1rZVVTVEpWR21DNGRyYjlRU2FrOW01Uk5OYVI1Q0hDdGkwdGpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTE5ODc5NzUxODg1NDI6M0BsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY3pYSVVHRzhGOFZobk9aSHVPdGZobzBOaEFma2FxclZ1TE5QRmFlM3F4RSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzgxOTg0MDQ5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUYzaSJ9",
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
