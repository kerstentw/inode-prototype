let rpcTestData = new Object();

rpcTestData.admin_nodeInfo: {
   kni: "kni://0bbff960d26fc12a5153ac25d7aaffd654e073a74a8b1aa65034250d47fac610ebe99a83d21d741c6121a32fb01312b49fc0633ae04e80c5eb73c3bc71c5a850@[::]:32323?discport=0",
   id: "0bbff960d26fc12a5153ac25d7aaffd654e073a74a8b1aa65034250d47fac610ebe99a83d21d741c6121a32fb01312b49fc0633ae04e80c5eb73c3bc71c5a850",
   ip: "::",
   listenAddr: "[::]:32323",
   name: "Klaytn/validator-1/vX.X.X/XXXX-XXXX/goX.X.X",
   ports: {
     discovery: 0,
     listener: 32323
   },
   protocols: {
     istanbul: {
       config: {
         chainId: 2018,
         isBFT: true,
         istanbul: {...},
         unitPrice: 0
       },
       difficulty: 52794,
       genesis: "0x42824367c973785245923a712cf2e5a99aae6a26f44e4f1ec686a0e60986644e",
       head: "0x4c3000a6f8c40b0507d8ee4a3fc5c9865df0a8d66f882366ea95473c87342005",
       network: 2017
     }
   }


rpcTestData.admin_datadir = {
  "jsonrpc":"2.0",
  "id":1,
  "result":"/your/dir/ken/data/dd"
}

rpcTestData.admin_peers = [{
    caps: ["istanbul/64"],
    id: "5d73afadf1eb4d6ccd1e10ab0f00301a1642b102fb521f170f4eaa4b3cb9a58788d1e2b387d6ce3726cb4786d034feb7dd17b5055b6d9a888520011e5756c89e",
    name: "Klaytn/validator-3/vX.X.X/XXXX-XXXX/goX.X.X",
    network: {
      inbound: true,
      localAddress: "127.0.0.1:32323",
      nodeType: "cn",
      remoteAddress: "127.0.0.1:63323",
      static: false,
      trusted: false
    },
    protocols: {
      istanbul: {
        difficulty: 52794,
        head: "0x4c3000a6f8c40b0507d8ee4a3fc5c9865df0a8d66f882366ea95473c87342005",
        version: 64
      }
    }
},  /* ... */ {
    caps: ["istanbul/64"],
    id: "8bcf4297aa6bb46121bb20a18b7af8f1eaad7e7435c71cb64109511a73c5507744bca138ee76b52d06cecedde9d88fdfddbffc5c3b80c5cbace3c326d5df5f1f",
    name: "Klaytn/validator-2/vX.X.X/XXXX-XXXX/goX.X.X",
    networks: [{
      inbound: true,
      localAddress: "127.0.0.1:32323",
      nodeType: "cn",
      remoteAddress: "127.0.0.1:63247",
      static: false,
      trusted: false
    }],
    protocols: {
      istanbul: {
        difficulty: 52794,
        head: "0x4c3000a6f8c40b0507d8ee4a3fc5c9865df0a8d66f882366ea95473c87342005",
        version: 64
      }
    }
}]

rpcTestData.admin_addPeer = {
  "jsonrpc":"2.0",
  "id":1,
  "result":true
}

rpcTestData.admin_removePeer = {
  "jsonrpc":"2.0",
  "id":1,
  "result":true
}

rpcTestData.admin_startRPC = {
  "jsonrpc":"2.0",
  "id":1,
  "error":{
    "code":-32000,
    "message":"HTTP RPC already running on 127.0.0.1:8551"
  }
}

rpcTestData.admin_stopRPC = {
  "jsonrpc":"2.0",
  "id":1,
  "result":true
}


export default rpcTestData;
