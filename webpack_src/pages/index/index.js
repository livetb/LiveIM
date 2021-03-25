if (typeof Promise !== 'function') {
  alert('Your Browser Not Support Promise.')
}

import { UserList } from '../../components/UserList';
import { ChatRoom } from '../../components/ChatRoom';
import { Server } from '../../assets/js/unit/Server';
import { UserInfo } from '../../assets/js/bean/UserInfo';
// import { ObjectUnit } from '../../assets/js/unit/ObjectUnit';

const user_list_arr = [
  {
    id: 10001,
    uid: 12345,
    nickname: 'Jack Ma',
    avatar: 'https://sw.cool3c.com/user/99588/2018/7f8bb260-943c-4b9d-b58b-4ed782c8761a.jpg'
  },
  {
    id: 10002,
    uid: 12346,
    nickname: 'Pony Ma',
    avatar: 'https://sw.cool3c.com/user/99588/2018/7f8bb260-943c-4b9d-b58b-4ed782c8761a.jpg'
  },
  {
    id: 10003,
    uid: 12347,
    nickname: 'Wang Jianlin',
    avatar: 'https://sw.cool3c.com/user/99588/2018/7f8bb260-943c-4b9d-b58b-4ed782c8761a.jpg'
  }
]

class ThePage {
  config = {
    /**@type { HTMLElement } */
    ele: null,
    /**@type { HTMLElement } */
    parent: null,
    /**@type { String } */
    parent_cssSelector: '#chat_block',
    /**@type { HTMLElement } */
  }

  already = {
    init: {
      view: false
    }
  }
  /**@type { UserList } */
  userList;
  /**@type { ChatRoom } */
  chatRoom;
  constructor(){
    this.userList = new UserList();
    this.chatRoom = new ChatRoom();
    this.init();
    this.bindListener();
  }

  /**
   * @type { Map<String, UserInfo> }
   */
  UserInfoMap = new Map();

  init(){
    this.initView();
    // user_list_arr.forEach(user => this.userList.appendUser(user));
    // console.log('ThePage: ', this);
    this.getMessageUserList();
  }
  
  initView(){
    if ( this.already.init.view ) return;
    let config = this.config;
    let parent = document.querySelector(config.parent_cssSelector);
    config.parent = parent;
    parent.appendChild(this.userList.getElement());
    parent.appendChild(this.chatRoom.getElement());
    this.already.init.view = true;
  }

  async getMessageUserList(){
    let { status, data } = await Server.getMessageUserList();
    if (status !== 0) return;
    console.log('getMessageUserList: ', data);
    data.forEach( user => {
      user.uid = user.relateUid;
      this.userList.appendUser(user);
      this.UserInfoMap.set(user.uid, user);
    });
    let usp = new URLSearchParams(location.search);
    if (usp.get('timer') === 'on') {
      let sec = ~~usp.get('sec');
      let duration = sec > 0 ? sec * 1000 : 10 * 1000;
      console.log('Start Timer: ', { duration });
      setTimeout(() => {
        this.getMessageUserList();
      }, duration);
    }
  }

  bindListener(){
    this.userList.setListener('changed_user', (param) => {
      // console.log('ThePage changed user: ', param);
      let { is_checked, user } = param;
      if (is_checked) this.chatRoom.notifyUserChaned( user );
    });
  }
}

const thePage = new ThePage();