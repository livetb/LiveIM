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
    // 加载至第几页未读消息用户列表
    pageNum: {
      user_list: 2
    },
    // 页面是否可见
    page_visible: true,
    /**@type { {diamond: Boolean, star: Boolean} } */
    filter: {
      diamond: true,
      star: true,
      all: false,
    }
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
  constructor() {
    this.userList = new UserList();
    this.chatRoom = new ChatRoom();
    this.config.filter = this.userList.config.filter;
    this.init();
  }

  /**
   * @type { Map<String, UserInfo> }
   */
  UserInfoMap = new Map();

  init() {
    this.initView();
    this.getMessageUserList();
    this.bindListener();
    this.startMessageUserListTimer();
  }

  initView() {
    if (this.already.init.view) return;
    let config = this.config;
    let parent = document.querySelector(config.parent_cssSelector);
    config.parent = parent;
    parent.appendChild(this.userList.getElement());
    parent.appendChild(this.chatRoom.getElement());
    this.already.init.view = true;
    sessionStorage.setItem('filter', JSON.stringify(this.config.filter))
  }

  async getMessageUserList(pageNum = 1) {
    if (this.config.filter.all) {
      let { status, data } = await Server.getAllUserList(pageNum, undefined, this.config.filter.diamond, this.config.filter.star);
      if (status !== 0) return;
      let records = data.records;
      console.log('allUserList:', records);
      records.sort((a, b) => {
        return b.diamond - a.diamond;
      })
      records.forEach(user => {
        user.id = user.Uid;
        this.userList.appendUser(user);
        this.UserInfoMap.set(user.uid, user);
      })
    } else {
      let { status, data } = await Server.getUnreadMessageUserList(pageNum, undefined, undefined,
        this.config.filter.diamond, this.config.filter.star);
      if (status !== 0) return;
      console.log('getMessageUserList: ', data);
      data.sort((a, b) => {
        return b.diamond - a.diamond;
      });
      data.forEach(user => {
        user.uid = user.relateUid;
        this.userList.appendUser(user);
        this.UserInfoMap.set(user.uid, user);
      });
    }
  }

  startMessageUserListTimer() {
    let usp = new URLSearchParams(location.search);
    if (usp.get('timer') === 'on') {
      let sec = ~~usp.get('sec');
      let duration = sec > 15 ? sec * 1000 : 15000;
      console.log('Start Timer: ', { duration });
      setInterval(() => {
        this.getMessageUserList();
      }, duration);
    }
  }

  bindListener() {
    // 切换聊天用户
    this.userList.setListener('changed_user', (param) => {
      let { is_checked, user } = param;
      if (is_checked) this.chatRoom.notifyUserChaned(user);
    });
    // 更多未读消息用户列表
    this.userList.setListener('more_list', () => {
      let sessionFilter = sessionStorage.getItem('filter');
      let filterStr = JSON.stringify(this.config.filter);
      if (sessionFilter === filterStr) {
        this.getMessageUserList(this.config.pageNum.user_list++);
      }else{
        sessionStorage.setItem('filter',JSON.stringify(this.config.filter));
        this.config.pageNum.user_list=2;
        this.getMessageUserList(1);
      }
    });
    // 检测页面是否可见
    document.addEventListener('visibilitychange', () => {
      let visible = document.visibilityState;
      this.config.page_visible === (visible === "visible");
    });
    // 筛选用户类型
    this.userList.setListener('filter_diamond', (param) => {
      let { is_checked } = param;
    });
    this.userList.setListener('filter_star', (param) => {
      let { is_checked } = param;
    });
    this.userList.setListener('filter_all', (param) => {
      let { is_checked } = param;
    })
  }
}

const thePage = new ThePage();
window.thePage = thePage;