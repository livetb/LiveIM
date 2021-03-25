import axios from 'axios';
import { Message } from '../bean/Message.js';
import { UserInfo } from '../bean/UserInfo.js';

const is_test = true;

const config = {
  baseURL: is_test ? 'https://t.livehub.cloud' : 'https://t.livehub.cloud'
}

axios.defaults.baseURL = config.baseURL;
axios.defaults.headers.common['authorization'] = "wgrdg78386a";
axios.interceptors.response.use(function (response) {
    let res = response.data;
    // console.log("AxiosResposne => ", res);
    // if(res.status === 413){
    //     handleStatus413();
    //     return;
    // }
    // if(res.status === 0) res.success = true;
    return res;
}, function (error) {
    return Promise.reject(error);
});

class ServerUnit {
  constructor(){

  }

  /**
   * @param { {"query":{},"pageSize":20,"pageNum":1} } param 
   * @returns { Promise<{ status: Number, data: UserInfo[]}> }
   */
  getMessageUserList( param = {"query":{},"pageSize":20,"pageNum":1} ){
    return axios.post('/api2/message/user/list/', param);
  }

  /**
   * @param { {"query":{"relateUid":3901604053073969},"pageSize":20,"pageNum":1} } param 
   * @returns { Promise<{ status: Number, data: Message[]}> }
   */
  getUserMessageDetail( param = {"query":{"relateUid":3901604053073969},"pageSize":20,"pageNum":1}){
    return axios.post('/api2/message/user/detail/', param);
  }

  /**
   * @param { String } relateUid 
   * @param { String } content 
   * @param { 0 | 1 | 3 } messageType 
   * @returns { Promise<{ status: Number, msg: String}> }
   */
  sendMessage(relateUid, content, messageType = 0) {
    let param = { relateUid, content, messageType};
    return axios.post('/api/message/send/', param);
  }

  /**
   * 
   * @param { File } filename 
   * @param { String } relateUid 
   * @param { 1 | 2 | 4 } messageType - 2: 图片
   * @returns { Promise<{ status: Number, msg: String}> }
   */
  sendMediaMessage(filename, relateUid, messageType) {
    let param = { filename, relateUid, messageType};
    return axios.post('/api/uploadMedia/');
  }

  /**
   * @param { String } uid
   * @returns { Promise<{ status: Number, data: { uid: String, createdAt: String, diamond: Number}}> }
   */
  getUserProfile( uid ){
    return axios.post('/api/user/info/', { relateUid: uid });
  }
}

const Server = new ServerUnit();

export {
  Server
}