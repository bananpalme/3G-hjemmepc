//hent biblioteket IP 
const ip = require('ip')
//fordi vi har hentet biblioteket IP kan vi hurtoigt få fat på ip adressen
console.log(ip.address())
//hent biblioteket express og gem objektet i en konstant
const express = require('express')
//opret en variabel til express serveren
const app = express()
//definer en port
const port = 4040

//serve en statisk mappe i roden 
app.use('/', express.static('public'))

//Hvis der kommer klienter til endpointet /hvaler
app.get('/api/hvaler', (req, res)=>{
    const obj = {
        'blåhval':{
            'farve': 'grøn',
            'vægt': '1/2 bus'
        }
    }
    res.json(obj)
})
app.get('/api/cspro', (req, res)=>{
    const obj = {
        'Xyp9x':{
            'form': 'meget lækker',
            'vægt': 'omkring 3 katte og 1.5 stationær computer',
            'skaldet': 'ja',
            'aim': 'gør dem lige så skaldet som han selv er'
        },
        'm0NESY':{
            'form': 'et barn, namme nam',
            'vægt': '2 mariehøner og 1 blyant',
            'skaldet': 'uheldigvis ikke, også svært når han er 17',
            'aim': 'brunsovs/sovs (9/10)'
        },
        's1mple':{
            'form': 'lige som det skal være',
            'vægt': '2 køleskabe og et rejsekort',
            'skaldet': 'nej :(',
            'aim': 'balto/hunde (13/10)'
        }
    }
    res.json(obj)
})
//Hvis der kommer klienter til endpointet /hvaler
app.get('/api/dato', (req, res)=>{
    res.send('Du er kommet til mit dato api')
})

//serveren skal bare sidde og køre på porten
app.listen(port, ()=>{
    console.log('Server lytter på port: ' + port)
}) 