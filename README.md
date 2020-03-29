# node-express-helloworld

## Initialize the Chain data:

```
geth — datadir ~/eth-dev/ init genesis.json
```
## Start the Ethereum:

```
geth --datadir ~/eth-dev/ --networkid 88881 --verbosity 3 --ipcdisable --rpc --port 30301 --rpcport 8545 --rpcaddr 127.0.0.1 console 2 >> ~/eth-dev/eth.log
```
