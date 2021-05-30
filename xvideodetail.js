case 'xnxxdetail':
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=japan&apikey=ROOT`, {method: 'get'})
if (anu.error) return reply(anu.error)
teks = '────────────\n\n'
for (let i of anu.result) {
teks += `❏ *Title* : ${i.title}\n❏ *Info* : ${i.info}\n❏ *Link* : ${i.link}\n\n────────────\n\n`
}
reply(teks.trim())
break
