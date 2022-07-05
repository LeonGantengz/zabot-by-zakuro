let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [081227144597]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay [081227144597]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
