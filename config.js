const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_00_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA1OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4OSxcbiAgICAgICAgMzksXG4gICAgICAgIDk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDc3LFxuICAgICAgICA3MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDk3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1MixcbiAgICAgICAgNDksXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDY1LFxuICAgICAgICA3NSxcbiAgICAgICAgMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI3LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM2LFxuICAgICAgICA4NixcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMixcbiAgICAgICAgMjUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMixcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZclpWZXdvcHRsSGhyenJpVU9aTncwSStacFVGdFhOM3orV2ZFczhMVVNzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxM2xVSFdDaVJPV0NLWVFfQjRFTkt3XCIsXG4gIFwicGhvbmVJZFwiOiBcImYyNWEzZGYyLTA0OTktNGI1Mi05MTk3LTE4ZDllNjFlNTk0M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICA1OSxcbiAgICAgIDE3NSxcbiAgICAgIDEzMixcbiAgICAgIDI1MyxcbiAgICAgIDIwMSxcbiAgICAgIDExOCxcbiAgICAgIDIxMSxcbiAgICAgIDE2OCxcbiAgICAgIDIwNyxcbiAgICAgIDI0NyxcbiAgICAgIDU1LFxuICAgICAgMTI3LFxuICAgICAgMjAwLFxuICAgICAgNTksXG4gICAgICAyNixcbiAgICAgIDIwLFxuICAgICAgMjM4LFxuICAgICAgMjIsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgMTg4LFxuICAgICAgMTgsXG4gICAgICAxMDEsXG4gICAgICAxNTAsXG4gICAgICAyNDcsXG4gICAgICA3MSxcbiAgICAgIDIyOSxcbiAgICAgIDIzOSxcbiAgICAgIDgyLFxuICAgICAgNyxcbiAgICAgIDIyOCxcbiAgICAgIDI1NSxcbiAgICAgIDI0OSxcbiAgICAgIDI1MyxcbiAgICAgIDE2NSxcbiAgICAgIDEsXG4gICAgICAxNTYsXG4gICAgICAzMSxcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5Sk5GM1pTOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzM5Mjg4MTY6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNDA4NDMwNzU3NDg5OTo0OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPcjcwdGtERUpXQXBMVUdHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRVUXVXenZIS0RWNUJxdDR6QlhxbTVqN290Wk5KcjhJa1NqUGZ5cXJERXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNkZxcWFxMkRoNTM5OExIKzJjMzJXdDJVVGhOUVk5TGZhRW1qODRpYUlaVHhMSXRDOGR6Q2dNY3FzSjluQisyeGJjckVZUGMrZ0FWeEJXVUVxV1hDQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZS92anVXMmlkR1NHWDRBZTViZzZML0JmaTNCeTdCYjZPdGhpdXk0cjNjK0UzVmREdmk3UnlqNTR1ZlB3WGY4SkNiUGFhZTVVckZ2ZTk3ckl3YWg5Z3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzM5Mjg4MTY6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzUxNjQyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "vimukthi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
