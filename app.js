const express = require('express')
const app = express()
const port = 3000

var Web3 = require('./node_modules/web3/index.js');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:8545'));


app.get('/', (req, res) => {
	if(!web3.isConnected()){
    		console.log("not connected");
	}else{
    		console.log("connected");
	}
	res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
