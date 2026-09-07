const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SARWAR-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUxLbFFsYUtZeVdVblp3Q0ZUT2hha2tZQ3BPeFcvKzg5WFhTNlBva3pYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTBRVXYvNFFHN3d5U1U4SldUQkRNNFh4aUlJQk1jbUkrS2w2TUsxOUQybz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQ2F2TjVydTE2anBWYll1OVlMRFF3QkdCVkczZ0FwaDFOWjRwbHpVOWxNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRy9tRzFJb3VsekdwMDNzbE1ZWkhra0tNVWtVU0F0ek5uSlkreFpabG00PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNHR21EVGZTUXFtY1RTZFJLeTBPNHhUdU5xaVRGMGNCWGs2WUdpMEJDM3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1hekxzeVNIOFpNYjh0Y2pjWVRudVVKTlR5a2FHKzI3L2Y1UmxDcFZXRDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0pPblQzK0xnZHZnUWpTNFRobm14dG56RW5PRXJ4SWRzV1M2aG53ME5GQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHRyZ21wbHdqTjdIMHkrMlp4K0wxUnhXY0pkT1k1MGNDbVJKWDRIYXdFYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilh4NVlEQXhCdlFRMDBWOGdXTlZueHUwUlNZWmlRQ3B3all0RWhtdU5WU0gvakIrakRkeDZNSkRXdzFqdWlJSXhRRkV3dmMwQmxYcXRvZ2wyMDNqM0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk5LCJhZHZTZWNyZXRLZXkiOiJucE82Rlh2MGduZVU3WWJ4UDdQb0JPd044SU1yMDdQMjlncDhQdzF1ZFFZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI0Mjg5NTUwNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUNDOTgzMTk5MjZENzM5RENCQzk2RkVBNjZFODAxQ0EiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc4ODc1NzM0MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjQyODk1NTA0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBQzRDQUQ3NjI2OUQxOTk3MjZCQkU5N0VEQkE2RTkyMyIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzg4NzU3MzQxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyNDI4OTU1MDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IkFDMzg1NjVEQjI2RkMyRjA5NzYyRjQyQkMxQzlEQTdFIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3ODg3NTczNDJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI0Mjg5NTUwNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUMyRTcxMEY0RjU3Qjg1Qzc0MTk0QjMzMzg5M0RDMDYiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc4ODc1NzM0Mn1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI3S0xERVJGUyIsIm1lIjp7ImlkIjoiOTIzMjQyODk1NTA0OjQxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTMwMDUyMTI5ODMzMTU5OjQxQGxpZCIsIm5hbWUiOiJBbGkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01tSThLd0RFTkdLK2RRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRUakhveFdYcGFKdkhiamZseEZZRFJ0Z29uNzh6Q3lhNjJTcG5MMkQza1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilp0ckxMSjVrODNnQU1mbmZYbXNhTDR0S1VOTkgxNXU4aUlLVWlmNGNKSm83amFZNG9HMEZMRVRTOWZUV05BNjFFWmRpZVRLRDF3RnNMZVM5c0pwOUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSYVgwOFc5R3k4cVlobjZ4MWJWTjJ0VXhlUWpldHlBMUFhdlNjY280eXRTR0VBMC8xOHEyYU55TWNneis5ZFRrNXZ0ZnNSVkZkemc4aWIwdmlVNUVEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjEzMDA1MjEyOTgzMzE1OTo0MUBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVTA0eDZNVmw2V2lieDI0MzVjUldBMGJZS0orL013c211dGtxWnk5Zzk1RyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzg4NzU3MzM3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNNRyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SARWAR-MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true or false for auto voice reply
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/Z1K68jXR/upload-1786444357631.png",
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
OWNER_NUMBER: process.env.OWNER_NUMBER || "923242895504",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "SARWAR-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴀʀᴡᴀʀ-ᴍᴅ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/Z1K68jXR/upload-1786444357631.png",
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
DEV: process.env.DEV || "923242895504",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 
ANTI_CALL: process.env.ANTI_CALL || "false"
// make it true for auto call reject 
};
