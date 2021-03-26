import axios from 'axios';
// import { Message } from '../bean/Message.js';
// import { UserInfo } from '../bean/UserInfo.js';

/**
 * @typedef { Promise<{ status: 0 | 413 | 2001, data: { }}> }
 */
let BaseResponseType;

const is_test = true;

const config = {
  baseURL: is_test ? 'https://t.livehub.cloud' : 'https://t.livehub.cloud',
  no_send_msg: false,
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
   * 获取消息列表
   * @param { {"query":{},"pageSize":20,"pageNum":1} } param 
   * @returns { Promise<{ status: Number, data: UserInfo[]}> }
   */
  getMessageUserList( param = {"query":{},"pageSize":20,"pageNum":1} ){
    return axios.post('/api2/message/user/list/', param);
  }

  /**
   * 获取未读消息列表
   * @param { Number } pageNum 
   * @param { Number } pageSize 
   * @param { Number } type 
   * @returns { BaseResponseType }
   */
  getUnreadMessageUserList( pageNum = 1, pageSize = 20, type = 2 ) {
    let param = {query: {type}, pageSize, pageNum };
    return axios.post('/api2/customer/msg/list', param);
  }
  getAlreadyReadMessageUserList( pageNum = 1, pageSize = 20 ) {
    return this.getUnreadMessageUserList( pageNum, pageSize, 3);
  }

  /**
   * 获取和用户对话详情列表
   * @param { {"query":{"relateUid":3901604053073969},"pageSize":20,"pageNum":1} } param 
   * @returns { Promise<{ status: Number, data: Message[]}> }
   */
  getUserMessageDetail( param = {"query":{"relateUid":3901604053073969},"pageSize":20,"pageNum":1}){
    return axios.post('/api2/message/user/detail/', param);
  }

  /**
   * 发送消息给用户
   * @param { String } relateUid 
   * @param { String } content 
   * @param { 0 | 1 | 3 } messageType 
   * @returns { Promise<{ status: Number, msg: String}> }
   */
  sendMessage(relateUid, content, messageType = 0) {
    if (config.no_send_msg) return;
    let param = { relateUid, content, messageType};
    return axios.post('/api/message/send/', param);
  }

  /**
   * 发送媒体消息给用户
   * @param { File } filename 
   * @param { String } relateUid 
   * @param { 1 | 2 | 4 } messageType - 2: 图片
   * @returns { Promise<{ status: Number, msg: String}> }
   */
  sendMediaMessage(filename, relateUid, messageType) {
    if (config.no_send_msg) return;
    let param = { filename, relateUid, messageType};
    return axios.post('/api/uploadMedia/', param);
  }

  /**
   * 获取用户个人资料
   * @param { String } uid
   * @returns { Promise<{ status: Number, data: { uid: String, createdAt: String, diamond: Number}}> }
   */
  getUserProfile( uid ){
    return axios.post('/api/user/info/', { relateUid: uid });
  }

  /**
   * 登录
   * @param { String } username 
   * @param { String } password 
   * @returns { BaseResponseType }
   */
  login( username, password ){
    return 1;
  }
}

const Server = new ServerUnit();

export {
  Server
}