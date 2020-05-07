import { klaytnHandlers } from './handlers';
import EPS from './constants/endpoints';

// to-do: Create a RestAPI base class
// to-do: Wrap senders and receivers and create custom errors

class RestEndpoints {

  // Misc. Endpoints

  bindPing(_app, _start, _caver_js) {
    _app.get(EPS.PING, async (req, res) => {
      let recv_time = new Date().getTime();
      console.log(recv_time, _start);
      let test = false;

      try {
        let num = await _caver_js.getCurrentBlock();
        test = parseInt(num) > 0;
      } catch {
        test = false;
      }
      res.json({data: "ping", receive_time: recv_time,node_stat: test, up_time: `${(recv_time - _start) /1000}s`});
    })
  }

  bindCreateAccount(_app, _caver_js) {

    /*
      Create a Klay account with private keys.  Recommended only for testing.
    */

    _app.get(EPS.CREATE_ACCOUNT, (req, res) => {

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

    _app.get(EPS.GET_ACCOUNT, async (req,res) => {
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

    _app.get(EPS.GET_NODE_INFO, async (req,res) => {
      const net_info = await _caver_js.getNetInfo();
      res.send({data: net_info});
    });
  }

  bindGetBlockInfo(_app, _caver_js) {
    _app.get(EPS.GET_BLOCK_INFO, async (req, res)=>{
        let block_idx = req.query.block_idx;

        if (!block_idx) {
          res.send({err: "Need block_idx"})
          return;
        }

        let info = await _caver_js.getFullBlockInfo(block_idx);

        res.send({data: info});
    })
  }

  bindGetBlockRange(_app, _caver_js) {
    _app.get('/get_block_range', async (req, res) => {
      let start = req.query.start;
      let num_blocks = req.query.num_blocks;

      if (start == "latest" && num_blocks) {
        start = await _caver_js.getCurrentBlock();
        num_blocks = num_blocks;
      } else if (!start || ! num_blocks) {
        res.send({err: "start and num_blocks needed"})
        return;
      }

      const blocks = await _caver_js.getBlockRange(start, num_blocks);

      res.send({data: blocks});
    });
  }

  bindGetTransactionInfo(_app, _caver_js) {
    _app.get(EPS.GET_TRANSACTION_INFO, async (req, res) => {
      let tx_hash: string = req.query.tx_hash;

      if (!tx_hash) {
        res.send({err: "Requires tx_hash"});
        return;
      }

      let info = await _caver_js.getTransactionInfo(tx_hash);

      res.send({data: info});

    })
  }

  // Proposer Endpoints

  bindGetProposerInfo(_app, _scope_api) {
    _app.get(EPS.PROPOSER_INFO, async (req, res) => {
      let account : string = req.query.acct;

      if (!account) {
        res.send({err: "Requires an account."});
        return;
      }

      let info = await _scope_api.getScopeAccount(account);
      res.send({data: info});
    });
  }

  bindGetCurrentPropSummaries(_app, _scope_api) {
    _app.get(EPS.PROPOSERS_SUMMARY, async (req, res)=>{
      let info = await _scope_api.getCurrentProposersSummary();

      res.send({data: info});
    })
  }

  bindGetCurrentNews(_app, _news_api) {
    _app.get(EPS.GET_NETWORK_NEWS, async (req, res)=>{
      let info = await _news_api.getAnnouncementsAndNews();

      res.send({data: info});
    })
  }

  bindGetCurrentTokenInfo(_app, _news_api) {
    _app.get(EPS.GET_TOKEN_INFO, async (req,res)=>{
      const abbr = req.query.abbr;
      let info = await _news_api.getTokenLists(abbr)
      res.send({data: info});
    })
  }



  constructor(_app, _server_start = 0) {
    let caver_js = new klaytnHandlers.caverHandlers.CaverHandler();
    let scope_api = new klaytnHandlers.scopeApiHandlers.ScopeApiHandler();
    let news_api = new klaytnHandlers.klaytnNewsHandlers.KlaytnNewsHandler();

    // Caver Bindings
    this.bindGetAccount(_app, caver_js)
    this.bindCreateAccount(_app, caver_js);
    this.bindPing(_app, _server_start, caver_js);
    this.bindGetNodeInfo(_app, caver_js);
    this.bindGetBlockInfo(_app, caver_js);
    this.bindGetTransactionInfo(_app, caver_js);
    this.bindGetBlockRange(_app, caver_js);
    this.bindGetCurrentNews(_app, news_api);
    this.bindGetCurrentTokenInfo(_app, news_api);

    // Scope Bindings
    this.bindGetProposerInfo(_app, scope_api);
    this.bindGetCurrentPropSummaries(_app, scope_api);

  }
}

export default RestEndpoints;
