import {
  klaytnHandlers
} from './handlers';

class RestEndpoints {

  bindPing(_app, _start) {
    _app.get('/ping', (req, res) => {
      let recv_time = new Date().getTime();
      console.log(recv_time, _start)
      res.json({data: "ping", receive_time: recv_time, up_time: `${(recv_time - _start) /1000}s`});
    })
  }

  bindCreateAccount(_app, _caver_js) {

    /*
      Create a Klay account with private keys.  Recommended only for testing.
    */

    _app.get('/create_account', (req, res) => {

      let entropy : string = req.query.entropy || "";
      let recv_time = new Date().getTime();
      let new_account = _caver_js.createAccount(entropy);

      res.json({data: new_account, received: recv_time});
    });
  }


  bindGetAccount(_app, _caver_js) {

   /*
     This endpoint grabs account info for a given account.
   */

    _app.get('/get_account', async (req,res) => {
      let account : string = req.query.acct;
      let block : string = req.query.defaultBlock || "latest";

      if (!account) {
        res.send({err: "Requires an account."});
        return;
      }

      let info = await _caver_js.getAccount(account);
      let recv_time = new Date().getTime();
      res.send({data: info, received: recv_time});
    });
  }

  bindGetNodeInfo(_app, _caver_js){

    /*
      This endpoint gives an overview of network information.
    */

    _app.get('/get_this_node_info', async (req,res) => {
      const net_info = await _caver_js.getNetInfo();
      res.send({data: net_info});
    });
  }

  bindGetProposerInfo(_app, scope_api) {
    _app.get('/proposer_info', async (req, res) => {
      let account : string = req.query.acct;

      if (!account) {
        res.send({err: "Requires an account."});
        return;
      }

      let info = await scope_api.getScopeAccount(account);
      res.send({data: info});
    });
  }

  constructor(_app, _server_start = 0) {
    let caver_js = new klaytnHandlers.caverHandlers.CaverHandler();
    let scope_api = new klaytnHandlers.scopeApiHandlers.ScopeApiHandler();

    this.bindGetAccount(_app, caver_js)
    this.bindCreateAccount(_app, caver_js);
    this.bindPing(_app, _server_start);
    this.bindGetNodeInfo(_app, caver_js);
    this.bindGetProposerInfo(_app, scope_api);
  }
}

export default RestEndpoints;
