//hent bibliootek IP
const ip = require('ip')
console.log(ip.address())
//hent biblioteket express og gem objektet i konstanten
const express = require('express')
//opret en varialbe til express serveren
const app = express()
//definerer en port
const port = 1337
//vi laver en meget simple database
const Kage = {
    'smag': 'Alt kage smager godt, uanset hvilken slags. sødmen gør bare ting ved mig som intet andet kan.',
    'følelse': 'kagens blødhed føles så god i min mund. Ikke alle kager har samme konsistens, så det er altid en god oplevelse.',
    'vurdering': 'Kage vil altid få en solid 12/10 fra min side, da jeg ikke har set noget som der er bedre end det.',
    'eksempler': 'Gulerodskage, drømmekage, citronmåne, chokoladekage, banankage, palmekage, tærter?, hvad er ikke en kage? gurkemeje er i hvert fald.',
    'farve': 'Kager kommer i mange farver, og de er alle lige gode. den klassiske chokolade brun, mums. den bedste pisfarve fra citronmåne, og ikke mindst cumfarven fra glasur.',
    'form': 'alle kagernes former er formidable og gør mig blød i knæene. Det er altid godt med runde kurver, men også flade dele. Det hele er godt.',
    'nagib': 'Nagib har sorte fødder'
}


//start en web server på port 1337
app.get('/*', (req, res)=>{
    console.log('Serverne fik besøg i roden')
    if(req.params[0]){
        console.log('WOW nogen vil bruge vores api: ' + req.params[0])
    if(Kage[req.params[0]]){
        res.send(Kage[req.params[0]])
    }else{
        res.send(req.params[0] + ' is NOT an api endpoint')
    }

        res.send(req.params[0])
    }else{
        res.send('Velkommen til min express server, som er min api for kage. Check de her for api: smag, følelse, vurdering, eksempler, farve, form, nagib ')
}
   
})
app.listen(port, ()=>{
    console.log('Server lyer på port: ' + port)
})