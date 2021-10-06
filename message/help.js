exports.menu = (prefix, i) => {
    return `*Whats up?*
`
}

exports.newMenu = (ucapan, ownerName, botName, prefix, pendaftar, runtime, pushname, isOwner, isPremium, sisalimit, limitCount, glimit, gcount, expired, tanggal, jam) => {
    return `${ucapan.data.result} ${pushname}
╒═══ 《 *${botName}* 》 ═══
├────────────────────
├≽ *Creator: ${ownerName}*
├≽ *Lib: Baileys v3.5.1*
├≽ *Prefix: 「 ${prefix} 」*
├≽ *Total Fitur: Banyak*
├≽ *Total Pengguna: ${pendaftar.length}*
├≽ *Tanggal :${tanggal}*
├≽ *Pukul :${jam}*
├≽ *Waktu Berjalan*:
├≽ *${runtime}*
├────────────────────
╞═══ 《 *Info Pengguna* 》 ═══
├────────────────────
├≽ *Name* : *${pushname}*
├≽ *Status* : *${isOwner ? 'OWNER' : isPremium ? 'Premium' : 'Gratisan'}*
├≽ *Limit* : *${isPremium ? 'Unlimited' : `${sisalimit}/${limitCount}`}*
├≽ *Premium validity time* : ${isOwner ? '-' : isPremium ? expired : 'Not Premium'}*
├────────────────────
╞═══ 《 *Menu* 》 ═══
├────────────────────
├≽ *${prefix}stickermenu*
├≽ *${prefix}creatormenu*
├≽ *${prefix}sistemmenu*
├≽ *${prefix}gabutmenu*
├≽ *${prefix}downloadmenu*
├≽ *${prefix}randommenu*
├≽ *${prefix}toolsmenu*
├≽ *${prefix}othermenu*
├────────────────────
├≽ _NB: Mohon chat *${prefix}owner jika bot_
├≽ _tidak merespon lebih dari semenit._
├────────────────────
╞═══ 《 *Thanks to* 》 ═══
├────────────────────
├≽ *Xinz-Team*
├≽ *Aqulzz*
├≽ *Nafizz*
├≽ *Y-DhyZx*
├≽ *Ramlan ID*
├≽ *X-MrG3P5*
├≽ *Nanda*
├≽ *Juwen*
├≽ *Adiwajshing/Baileys*
├≽ *Ijulhaxor*
├≽ *Vtubers Gaming*
├────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.stickerMenu = (prefix, ownerName) => {
    return `╒═══ 《 *Stickers Menu* 》 ═══
├────────────────────
├≽ *${prefix}sticker*
├≽ *${prefix}stickergif*
├≽ *${prefix}swm*
├≽ *${prefix}take*
├≽ *${prefix}toimg*
├≽ *${prefix}tovideo*
├≽ *${prefix}attp*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.ownerMenu = (prefix, ownerName) => {
    return `╒═══ 《 *Owner Menu* 》 ═══
├────────────────────
├≽ *${prefix}addprem*
├≽ *${prefix}delprem*
├≽ *${prefix}ban*
├≽ *${prefix}unban*
├≽ *${prefix}join*
├≽ *${prefix}addbaword*
├≽ *${prefix}delbaword*
├≽ *${prefix}addchangelog*
├≽ *${prefix}public*
├≽ *${prefix}self*
├≽ *${prefix}exif*
├≽ *${prefix}bc*
├≽ *${prefix}setprefix*
├≽ *${prefix}setthumb*
├≽ *${prefix}clearall*
├≽ *${prefix}>*
├≽ *${prefix}$*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.groupMenu = (prefix, ownerName) => {
    return `╒═══ 《 *Group Menu (set bot as admin)* 》 ═══
├────────────────────
├≽ *${prefix}afk*
├≽ *${prefix}infogrup*
├≽ *${prefix}add*
├≽ *${prefix}kick*
├≽ *${prefix}promote*
├≽ *${prefix}demote*
├≽ *${prefix}linkgc*
├≽ *${prefix}leave*
├≽ *${prefix}setdesc*
├≽ *${prefix}setgrupname*
├≽ *${prefix}setppgrup*
├≽ *${prefix}opengrup*
├≽ *${prefix}closegrup*
├≽ *${prefix}tagall*
├≽ *${prefix}tagme*
├≽ *${prefix}kontak*
├≽ *${prefix}hidetag*
├≽ *${prefix}getpp*
├≽ *${prefix}mute*
├≽ *${prefix}unmute*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.sistemMenu = (prefix, ownerName) => {
    return `╒═══ 《 *Sistem Menu* 》 ═══
├────────────────────
├≽ *${prefix}antilink*
├≽ *${prefix}antiwame*
├≽ *${prefix}antibadword*
├≽ *${prefix}welcome*
├≽ *${prefix}left*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.gabutMenu = (prefix, ownerName) => {
    return `╒═══ 《 *Gabut? Tanyain bot aja* 》 ═══
├────────────────────
├≽ *${prefix}apakah*
├≽ *${prefix}bisakah*
├≽ *${prefix}kapankah*
├≽ *${prefix}hobby*
├≽ *${prefix}rate*
├≽ *${prefix}truth*
├≽ *${prefix}dare*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.gomeMenu = (prefix, ownerName) => {
    return `╒═══ 《 *Disabled* 》 ═══
├────────────────────
├≽ *${prefix}tictactoe*
├≽ *${prefix}delttt*
├≽ *${prefix}tebakgambar*
├≽ *${prefix}family100*
├≽ *${prefix}suit*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.downloadMenu = (prefix, ownerName) => {
    return `╒═══ 《 *DOWNLOAD MENU* 》 ═══
├────────────────────
├≽ *${prefix}ytmp3*
├≽ *${prefix}ytmp4*
├≽ *${prefix}play*
├≽ *${prefix}playmp4*
├≽ *${prefix}tiktok*
├≽ *${prefix}tiktokmp3*
├≽ *${prefix}instagram*
├≽ *${prefix}facebook*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.soarchMenu = (prefix, ownerName) => {
    return `╒═══ 《 *SEARCH MENU* 》 ═══
├────────────────────
├≽ *${prefix}yts*
├≽ *${prefix}pinterest*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.stoikMenu = (prefix, ownerName) => {
    return `╒═══ 《 *STALKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}igstalk*
├≽ *${prefix}ghstalk*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.randomMenu = (prefix, ownerName) => {
    return `╒═══ 《 *RANDOM MENU* 》 ═══
├────────────────────
├≽ *${prefix}quotes*
├≽ *${prefix}darkjokes
├≽ *${prefix}pantun
├≽ *${prefix}bucin
├≽ *${prefix}cehor
├≽ *${prefix}fakta
├≽ *${prefix}katabijak
├≽ *${prefix}motivasi
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.omimeMenu = (prefix, ownerName) => {
    return `╒═══ 《 *ANIME MENU* 》 ═══
├────────────────────
├≽ *${prefix}waifu*
├≽ *${prefix}loli*
├≽ *${prefix}husbu*
├≽ *${prefix}shota*
├≽ *${prefix}nekonime*
├≽ *${prefix}megumin*
├≽ *${prefix}sagiri*
├≽ *${prefix}shinobu*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.toolsMenu = (prefix, ownerName) => {
    return `╒═══ 《 *TOOLS MENU* 》 ═══
├────────────────────
├≽ *${prefix}nulis*
├≽ *${prefix}nuliskiri*
├≽ *${prefix}nuliskanan*
├≽ *${prefix}foliokiri*
├≽ *${prefix}foliokanan*
├≽ *${prefix}tinyurl*
├≽ *${prefix}translate*
├≽ *${prefix}ebase64*
├≽ *${prefix}debase64*
├≽ *${prefix}ehex*
├≽ *${prefix}dehex*
├≽ *${prefix}ebinary*
├≽ *${prefix}debinary*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.molerMenu = (prefix, ownerName) => {
    return `╒═══ 《 *MAKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}hartatahta*
├≽ *${prefix}neon*
├≽ *${prefix}matrix*
├≽ *${prefix}blackpink*
├≽ *${prefix}halloween*
├≽ *${prefix}thundername*
├≽ *${prefix}devilwings*
├≽ *${prefix}cloudtext*
├≽ *${prefix}bloodtext*
├≽ *${prefix}bloodtext2*
├≽ *${prefix}steeltext*
├≽ *${prefix}lavatext*
├≽ *${prefix}toxiclogo*
├≽ *${prefix}dropwater*
├≽ *${prefix}metaldark*
├≽ *${prefix}sandwrite*
├≽ *${prefix}3dwater*
├≽ *${prefix}graffiti*
├≽ *${prefix}graffiti2*
├≽ *${prefix}phlogo*
├≽ *${prefix}glitch*
├≽ *${prefix}graffiti3*
├≽ *${prefix}layeredtext*
├≽ *${prefix}vintage*
├≽ *${prefix}3dspace*
├≽ *${prefix}stonetext*
├≽ *${prefix}avengers*
├≽ *${prefix}marvellogo*
├≽ *${prefix}3dmetal*
├≽ *${prefix}lionlogo*
├≽ *${prefix}wolflogo*
├≽ *${prefix}ninjalogo*
├≽ *${prefix}pubglogo*
├≽ *${prefix}shadowtext*
├≽ *${prefix}smoketext*
├≽ *${prefix}romancetext*
├≽ *${prefix}carvedwood*
├≽ *${prefix}harrypotter*
├≽ *${prefix}flamingtext*
├≽ *${prefix}falleaves*
├≽ *${prefix}underwater*
├≽ *${prefix}wolfmetal*
├≽ *${prefix}woodboard*
├≽ *${prefix}undergrass*
├≽ *${prefix}coffetext*
├≽ *${prefix}lovetext*
├≽ *${prefix}burnpaper*
├≽ *${prefix}lovemessage*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.otherMenu = (prefix, ownerName) => {
    return `╒═══ 《 *OTHER MENU* 》 ═══
├────────────────────
├≽ *cekprefix*
├≽ *${prefix}stats*
├≽ *${prefix}limit*
├≽ *${prefix}balance*
├≽ *${prefix}runtime*
├≽ *${prefix}speed*
├≽ *${prefix}owner*
├≽ *${prefix}donasi*
├≽ *${prefix}sourcecode*
├≽ *${prefix}cekprem*
├≽ *${prefix}listprem*
├≽ *${prefix}listban*
├≽ *${prefix}listbadword*
├≽ *${prefix}buylimit*
├≽ *${prefix}buyglimit*
├≽ *${prefix}topglobal*
├≽ *${prefix}toplocal*
├≽ *${prefix}readmore*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.hontaiMenu = (prefix, ownerName) => {
    return `╒═══ 《 *18+ MENU* 》 ═══
├────────────────────
├≽ *${prefix}randomhentong*
├≽ *${prefix}kemonomimi*
├≽ *${prefix}ero*
├≽ *${prefix}echi*
├≽ *${prefix}ahegao*
├≽ *${prefix}trap*
├≽ *${prefix}neko*
├≽ *${prefix}blowjob*
├≽ *${prefix}kitsune*
├≽ *${prefix}yuri*
├≽ *${prefix}bhoobs*
├≽ *${prefix}kuni*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.storugeMenu = (prefix, ownerName) => {
    return `╒═══ 《 *STORAGE MENU* 》 ═══
├────────────────────
├≽ *${prefix}sound*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}
