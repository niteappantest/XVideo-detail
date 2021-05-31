case 'xvideodetail':
xnxxdet = body.slice(11)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=${xnxxdet}&apikey=ROOT`, {method: 'get'})
if (anu.error) return reply(anu.error)
teks = '────────────\n\n'
for (let i of anu.result) {
teks += `❏ *Title* : ${i.title}\n❏ *Info* : ${i.info}\n❏ *Link* : ${i.link}\n\n────────────\n\n`
}
reply(teks.trim())
break
