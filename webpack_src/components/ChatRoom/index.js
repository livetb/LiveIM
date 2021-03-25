import { SendMessage } from './SendMessage.js';
import { ChatRecordList } from './ChatRecordList.js';
import { Server } from '../../assets/js/unit/Server.js';

import { UserInfo } from '../../assets/js/bean/UserInfo.js';

class ChatRoom {
  /**
   * @type {{
   *  id: String, classList: String[], ele: HTMLElement,
   * }}
   */
  config = {
    id: 'chat_room',
    classList: ['chat-room'],
    ele: null,
  }

  already = {
    init: {
      view: false
    }
  }

  /**
   * @type { Map<String, {
   *  is_bind_listener: Boolean,
   *  list: ChatRecordList,
   * }> }
   */
  RecordListMap = new Map();

  /**@type { ChatRecordList } */
  curChatRecordList
  /**@type { SendMessage } */
  sendMessage;

  constructor(){
    this.sendMessage = new SendMessage();
    this.init();
  }

  init(){
    this.initView();
    this.bindListener();
  }

  initView(){
    if (this.already.init.view === true) return;
    let ele = document.createElement('div');
    ele.classList.add(...this.config.classList);
    this.config.ele = ele;
    ele.appendChild(this.sendMessage.getElement());
    this.already.init.view = true;
  }

  bindListener(){
    let default_avatar = 'https://sw.cool3c.com//99588/2018/7f8bb260-943c-4b9d-b58b-4ed782c8761a.jpg?fit=max&w=800&q=80';
    this.sendMessage.setListener('send_text', (param) => {
      if (!this.curChatRecordList?.uid) return;
      Server.sendMessage(this.curChatRecordList.uid, param.data, 0);
      this.curChatRecordList.appendRecord({
        timestamp: param.created_time,
        message: param.data,
        messageType: 0,
      }, { is_self: true, avatar: default_avatar});
    });
    this.sendMessage.setListener('send_image', (param) => {
      if (!this.curChatRecordList?.uid) return;
      Server.sendMediaMessage(param.data, this.curChatRecordList.uid, 2);
      this.curChatRecordList.appendRecord({
        timestamp: param.created_time,
        message: URL.createObjectURL(param.data),
        messageType: 2
      }, { is_self: true, avatar: default_avatar});
    });
  }

  getElement(){
    return this.config.ele;
  }

  /**
   * @param { UserInfo } user 
   */
  async notifyUserChaned( user ) {
    console.log('notifyUserChaned: ', user);
    if (!user) return;
    let { uid, avatar } = user;
    this.curChatRecordList?.hide();
    let curChatRecordList = this.RecordListMap.get(uid)?.list;
    if( !curChatRecordList ) {
      curChatRecordList = new ChatRecordList(uid);
      this.config.ele.insertBefore(curChatRecordList.getElement(), this.sendMessage.getElement());
      this.RecordListMap.set(uid, {
        list: curChatRecordList
      });
      let { status, data } = await Server.getUserMessageDetail({
        query: {
          relateUid: uid
        },
        pageSize: 20, 
        pageNum: 1
      });
      if (status !== 0 || !Array.isArray(data)) return;
      data.reverse();
      curChatRecordList.appendRecord(data, {
        is_self: false, avatar: avatar
      });
      console.log('message detail: ', data);
    }
    this.curChatRecordList = curChatRecordList;
    curChatRecordList.show();
  }
}

export {
  ChatRoom
}