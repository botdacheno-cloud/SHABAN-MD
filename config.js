const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVB2SzNUV21mcnFiSGRxOFkxVzJVN0pQcGpOajJpUWs0UHFVRk9WRUFXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEdlNlJCMDd4cStWZ2l3SDU1K0VXL1Q4WlA1UzhtVmxvN3ZOZ2xBUG1Bbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SGxLMWtwb2pwbGVSbXNkQitIOHVxM0lXdW94aFI2M0kvUkZYTHlGZFZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRFBmM29MWElDUlJPRUM1YXlLNzRURkFEeFlIWWx0TlBURnh1dlV0T1JrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklPcGw0a2ZHWFVVbjVUaGpSTU9zVFI3ck5kWTAyYThJZUpXUDJPbE45VjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhvcVJnNlFDRjMwOUtvbVVHb0NvMTJycEk0V05KZFpHdUNMUmlSaDJFem89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0ZjWGJTSGRBWlBUQi96THpNeGZBNzJyTERPcndZSERPQStIYzRSakowRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmxsMGxxUUJMTzZuZHpockFUSzROU3ExWTVRVUV5UzlwZ2NYU1FBUS94OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdJcVY4dGlZaDAyWkxDTk1JQW9wMTFieXVNenE4TmFwUTk0L2VFenliVkpCYmpDcFFmeG5HUXJvM0Y4clN2dFprWEZaWHp1d0RMNm80RTlUYmpMRGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUyLCJhZHZTZWNyZXRLZXkiOiIxN0ZsQW8wcVIwVGE5OTRHZE8zTFcwMkdUb0l2cURKdytFL01Xa2VnZDhJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjE4MjkzNTExNTMxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQ5Nzk2RjFDOTQzQjY4MEJFRUEwNjMzM0E3RTM4ODkyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY0MTUyMTd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjE4MjkzNTExNTMxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI5Q0JEMTg3REMzRTM4RjQ2RTgwRTg2MDUyNzc2MEVGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY0MTUyMTl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlBRRUpUSlNCIiwibWUiOnsiaWQiOiIxODI5MzUxMTUzMTozNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCM6p2bIOGNndafIOGthCDwnZC38J2QtPCdkLbwnZC78J2QuPCdm67wnZupIMui4bWPNyIsImxpZCI6IjYxNDQ0MzU1ODA5MzAxOjM0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGFNdGQ4RkVPcUp3OFVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib1haaVo4L0xWN0luS2ZjZU9CbWUxaVUzOVRIMlh3TUlVNEFRbHVTU25sTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRnAwdm14QWh3MGlOUUFKUldmcEVUWEhYTkR5R0E5SjV1bUp6RlJTa3UraXJuZVc2NE4zSUJScVQzY3N0cWl3eEhpU3Nxd3MxQkJvTkVwZ01HbFVjQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlZITkhBWlJkbk9LMlB0U0lBaDN6RzNDOVROK1JHcCtHaVlmZWRFK3FVdmY5Q0oyQmxxSXdBcXkzaEo2Qit3NzhWOU9aRHZjQ093VUpPODNRbzRnWWp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTgyOTM1MTE1MzE6MzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYUYyWW1mUHkxZXlKeW4zSGpnWm50WWxOL1V4OWw4RENGT0FFSmJra3A1VCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2NDE1MjE0LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ1BWIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || "'",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHABAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "18293511531",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-DACHENO",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *SHABAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923043788282",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
