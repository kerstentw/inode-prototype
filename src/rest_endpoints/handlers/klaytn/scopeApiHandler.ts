import PROPOSERS from '../../constants/proposers';
import * as axiostypes from 'axios';
import axios from 'axios';

class ScopeApiHandler {
  constructor () {

  }

  async getScopeAccount(_acct) {
    let options : axiostypes.AxiosRequestConfig = {
      method: 'get',
      url: `${process.env.EXTERNAL_API}/account/${_acct}`
    }

    let info = await axios(options);

    return info.data.result;
  }

  async getCurrentProposersSummary(){
    // to-do:  place a scraping script here if freshness of proposersets
    // is in doubt

    let proposer_info_array = [];

    for (let i = 0; i < PROPOSERS.proposers.length; i++) {
      let cur_proposer_acct = PROPOSERS.proposers[i];
      let info = await this.getScopeAccount(cur_proposer_acct);
      proposer_info_array.push(info);
    }

    return proposer_info_array;
  }

}

export { ScopeApiHandler };
