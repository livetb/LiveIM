import { SendMessage } from './SendMessage.js';
import { ChatRecordList } from './ChatRecordList.js';
import { FastMessageList } from '../FastMessageList/';
import { Server } from '../../assets/js/unit/Server.js';
import { DefaultConfig } from '../../assets/js/common';
import { UserInfo } from '../../assets/js/bean/UserInfo.js';
import { UserProfile } from '../UserProfile';

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

  /**
   * 保存所有用户个人信息，
   * @type { Map<String, {} }
   */
  UserProfileMap = new Map();


  /**@type { ChatRecordList } */
  curChatRecordList; // 当前聊天记录列表
  /**@type { SendMessage } */
  sendMessage;
  /**@type { FastMessageList } */
  fastMessageList;
  /**@type { UserProfile } */
  userProfile;

  constructor(){
    this.sendMessage = new SendMessage();
    this.fastMessageList = new FastMessageList();
    this.userProfile = new UserProfile();
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
    ele.appendChild(this.userProfile.getElement());
    ele.appendChild(this.fastMessageList.getElement());
    ele.appendChild(this.sendMessage.getElement());
    this.already.init.view = true;
  }

  appendRecordToList(message, user_info){
    if (!this.curChatRecordList) return;
    this.curChatRecordList.appendRecord(message, user_info);
    this.curChatRecordList.getElement().scrollTop = this.curChatRecordList.getElement().scrollHeight;
  }

  bindListener(){
    let default_avatar = DefaultConfig.avatar;
    
    this.sendMessage.setListener('send_text', (param) => {
      if (!this.curChatRecordList?.uid) return;
      Server.sendMessage(this.curChatRecordList.uid, param.data, 0);
      this.appendRecordToList({
        timestamp: param.created_time,
        message: param.data,
        messageType: 0,
      }, { is_self: true, avatar: default_avatar});
    });
    this.sendMessage.setListener('send_image', (param) => {
      if (!this.curChatRecordList?.uid) return;
      Server.sendMediaMessage(param.data, this.curChatRecordList.uid, 2);
      this.appendRecordToList({
        timestamp: param.created_time,
        message: URL.createObjectURL(param.data),
        messageType: 2
      }, { is_self: true, avatar: default_avatar});
    });
    // fast message list
    this.fastMessageList.setListener('select_message', (param) => {
      let { created_time, data, type } = param;
      Server.sendMessage(this.curChatRecordList.uid, data, type);
      this.appendRecordToList({
        timestamp: created_time,
        message: data,
        messageType: type
      }, { is_self: true, avatar: default_avatar});
    });
  }

  getElement(){
    return this.config.ele;
  }

  async updateCurUserProfile( uid ) {
    this.userProfile.hide();
    let profile = this.UserProfileMap.get(uid);
    if (!profile) {
      let { data } = await Server.getUserProfile(uid);
      profile = data;
      this.UserProfileMap.set(uid, profile);
    }
    this.userProfile.updateProfile(profile || {});
  }

  /**
   * @param { UserInfo } user 
   */
  async notifyUserChaned( user ) {
    this.updateCurUserProfile(user.uid);
    console.log('notifyUserChaned: ', user);
    if (!user) return;
    let { uid, avatar } = user;
    this.curChatRecordList?.hide();
    let curChatRecordList = this.RecordListMap.get(uid)?.list;
    if( !curChatRecordList ) {
      curChatRecordList = new ChatRecordList(uid);
      this.config.ele.insertBefore(curChatRecordList.getElement(), this.fastMessageList.getElement());
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
    /** 点击对话直接刷新 */
    // let { status, data } = await Server.getUserMessageDetail({
    //   query: {
    //     relateUid: uid
    //   },
    //   pageSize: 20, 
    //   pageNum: 1
    // });
    // if (status !== 0 || !Array.isArray(data)) return;
    // data.reverse();
    // curChatRecordList.appendRecord(data, {
    //   is_self: false, avatar: avatar
    // });
    // console.log('message detail: ', data);
    /**  */

    this.RecordListMap.forEach( obj => {
      if (obj.list.uid !== uid) obj.list.hide();
      else console.log('Same UID, break.')
    });
    this.curChatRecordList = curChatRecordList;
    curChatRecordList.show();
    curChatRecordList.getElement().scrollTop = curChatRecordList.getElement().scrollHeight;
  }
}

export {
  ChatRoom
}