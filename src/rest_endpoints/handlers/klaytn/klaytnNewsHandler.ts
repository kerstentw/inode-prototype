import * as axiostypes from 'axios';
import axios from 'axios';

class KlaytnNewsHandler {

  async getAnnouncementsAndNews() {
    let options : axiostypes.AxiosRequestConfig = {
      method: 'get',
      url: process.env.EXTERNAL_NEWS_API
    }

    let info = await axios(options);

    return info.data.data.children;
  }


  async getTokenLists(_primary_token_sym){
    let options: axiostypes.AxiosRequestConfig = {
      method: 'get',
      url: process.env.EXTERNAL_MARKETCAP_API
    }

    let info = await axios(options);

    let primary = info.data.coins.filter(item=>{if(item.symbol == _primary_token_sym){return item}});

    return {coin_list: info.data.coins, primary_token: primary};
  }

}

export { KlaytnNewsHandler };
