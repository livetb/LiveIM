import { Message } from '../../assets/js/bean/Message.js';
import { DefaultConfig } from '../../assets/js/common';

class ChatRecordList {
  /**
   * @type {{
   *  ele: HTMLElement,
   *  classList: String[],
   *  message_list: Message[],
   *  send_message_id: Number,
   * }}
   */
  config = {
    ele: null,
    classList: ['chat-record-list'],
    message_list: [],
    send_message_id: 10000
  }

  already = {
    init: {
      view: false
    }
  }

  /**
   * @type { Map<String, {
   *  status: 'pending' | 'failed', 'success',
   *  message: Message,
   *  ele: HTMLElement,
   * }}
   */
  MessageMap = new Map();
  /**@type { String } */
  uid;

  constructor( uid ){
    this.uid = uid;
    this.init();
  }

  init(){
    this.initView();
  }

  initView(){
    let config = this.config;
    let ele = document.createElement('div');
    ele.setAttribute('uid', this.uid);
    ele.classList.add(...config.classList);
    config.ele = ele;
  }

  getElement(){
    return this.config.ele;
  }

  /**
   * @param { Message | Message[] } message 
   * @param { { is_self: Boolean, avatar: avatar } } user_info
   */
  appendRecord( message, user_info ) {
    if (user_info.is_self) console.log(`send message to: ${this.uid}: `, message);
    console.log('appendRecord: ', { message, user_info });
    if(!Array.isArray(message)) message = [message];
    message.forEach( msg => {
      if (!msg.id) msg.id = this.config.send_message_id++;
      let cur_user_info = { is_self: false, avatar: user_info.avatar };
      if (msg.fromUid !== this.uid) {
        // console.log('No same uid: ', { from: message.fromUid, self: this.uid});
        cur_user_info.is_self = true;
        cur_user_info.avatar = DefaultConfig.avatar;
      } 
      let message_ele = new Message( msg, cur_user_info);
      let ele = message_ele.getElement();
      let status = cur_user_info.is_self ? 'pending' : 'success'
      ele.classList.add(status);
      this.MessageMap.set(message.id, { status: 'pending', message: msg, ele: ele });
      this.config.ele.appendChild(ele);
    });
  }

  /**
   * @param { Number } message_id 
   * @param { 'pending' | 'failed', 'success' } status 
   * @returns 
   */
  changeRecordStatus( message_id, status ) {
    let obj = this.MessageMap.get(message_id);
    let ele = obj && obj.ele;
    if (!ele) return;
    ele.classList.add(status);
  }

  hide(){
    this.config.ele.classList.add('hide-ele');
    // console.log(`hide ${this.uid}: `, this.config);
  }
  show(){
    this.config.ele.classList.remove('hide-ele');
    // console.log(`show ${this.uid}: `, this.config);
  }
  
}

export {
  ChatRecordList
}