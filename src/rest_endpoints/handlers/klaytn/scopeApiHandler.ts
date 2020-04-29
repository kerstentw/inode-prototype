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

}

export { ScopeApiHandler };
