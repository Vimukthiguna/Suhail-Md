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
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_27_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY1LFxuICAgICAgICA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDkwLFxuICAgICAgICA1NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM2LFxuICAgICAgICA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICA3NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNixcbiAgICAgICAgOTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzksXG4gICAgICAgIDM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDg1LFxuICAgICAgICAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjksXG4gICAgICAgIDIwNixcbiAgICAgICAgNjQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk2LFxuICAgICAgICA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDk5LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMixcbiAgICAgICAgMjE0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcyLFxuICAgICAgICA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMixcbiAgICAgICAgMjA5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI3LFxuICAgICAgICA4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMcDRVdEt2OXQ2bUdLckhnL0xkZzg2WHM3a1BPNmkyNmRlOFpMSVF2bnU4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzczOTI4ODE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMDk2M0IyMzIyQzUyMUEyM0FDQjgxMDVCRjBCMDZCNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIzNTY4NTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS3haUGJaazFRSGFKMVpBZnVQX2czQVwiLFxuICBcInBob25lSWRcIjogXCJhMTIzNTc3ZS1kYzA3LTQ4YjAtYmQzNC03YjliZDMxOTk4OTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjYsXG4gICAgICAxOCxcbiAgICAgIDIzOSxcbiAgICAgIDcxLFxuICAgICAgMTY4LFxuICAgICAgNDgsXG4gICAgICAxODYsXG4gICAgICAzMixcbiAgICAgIDEyNCxcbiAgICAgIDI1LFxuICAgICAgMjQ3LFxuICAgICAgMTcyLFxuICAgICAgNjQsXG4gICAgICA1NSxcbiAgICAgIDEwMCxcbiAgICAgIDg5LFxuICAgICAgMTQ3LFxuICAgICAgNTQsXG4gICAgICAyMjUsXG4gICAgICAxMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE2LFxuICAgICAgMTM5LFxuICAgICAgMTY0LFxuICAgICAgMjM5LFxuICAgICAgMTAwLFxuICAgICAgMjAwLFxuICAgICAgMTY5LFxuICAgICAgMjQ4LFxuICAgICAgNDEsXG4gICAgICAyMyxcbiAgICAgIDk3LFxuICAgICAgODksXG4gICAgICAyMjAsXG4gICAgICAyMzAsXG4gICAgICAxNjIsXG4gICAgICAzNCxcbiAgICAgIDEyNCxcbiAgICAgIDU3LFxuICAgICAgMjA3LFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRNU0VGNU5EXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3MzkyODgxNjo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM0MDg0MzA3NTc0ODk5OjUwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ096NzB0a0RFTytvcExVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZFVRdVd6dkhLRFY1QnF0NHpCWHFtNWo3b3RaTkpyOElrU2pQZnlxckRFdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyMHN1TmMreTd2a2xaTmhrL2dmYWtyMGdMV1Bxc0JNbnpQV2d6UWNuNWx5eXRySVp6djFjTU8wSG1wYWFFekFRalByNnFLVU8wNFdPTnhPVklHcnlCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzWUZZZkNlNklHQm1EVEtSVEhId2p3UXNOUk5yUkNqVmcrTmx4b2RjTUgvTklzeVVvYzRKZlh6R2hqR3pmdTBxNU5ockhDMStzM0NiZWk4dU5yS0tEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3MzkyODgxNjo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIzNTY4NTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGdmJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZ2Yi5qc29uIjogIntcImtleURhdGFcIjpcIkk2MHZTWmZkOUhoalhwalJqWUJJVGFTVUlqTUNCK0I3NUpGY2VkM0VoRTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTkzMzEyMjM2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIzNTY4NTU0OTJcIn0iCn0="  // PUT your SESSION_ID 

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "shuhail-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "vimukthi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "shuhail"  ).toUpperCse(),



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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
