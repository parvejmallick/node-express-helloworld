const express = require('express')
const app = express()
const port = 3000

var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:8545'));


app.get('/', (req, res) => {
	web3.eth.net.isListening().then(() => res.send('is connected'))
   	.catch(e => res.send('Wow. Something went wrong'));
	//res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
