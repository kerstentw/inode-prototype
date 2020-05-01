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

  constructor() {

  }

}

export { KlaytnNewsHandler };
