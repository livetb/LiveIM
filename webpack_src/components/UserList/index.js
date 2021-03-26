import { UserInfo } from '../../assets/js/bean/UserInfo.js';
import { UserWrap } from './UserWrap.js';
import { ObjectUnit } from '../../assets/js/unit/ObjectUnit.js';

class UserList {
  /**
   * @type {{
   *  id: String, classList: String[], ele: HTMLElement,
   * }}
   */
  config = {
    id: 'user_list',
    classList: ['user-list'],
    ele: null,
  }
  /**
   * @type { Map<String, {
   *  created_time: Number,
   *  updated_time: Number,
   *  user: UserInfo,
   *  user_wrap: UserWrap,
   * }> }
   */
  UserMap = new Map();

  on = {
    changed_user: null
  }

  constructor(id, classList){
    if (typeof id === 'string') this.config.id = id;
    if (Array.isArray(classList)) this.config.classList.push(...classList);
    this.init();
  }

  init(){
    this.initView();
    this.bindListener();
  }

  initView(){
    let config = this.config;
    let ele = config.ele;
    if (ele) return;
    ele = document.createElement('div');
    ele.id = config.id;
    ele.classList.add(...config.classList);
    config.ele = ele;
  }

  bindListener(){
    let that = this;
    let scroll_timer = null;
    let can_scroll = true;
    this.config.ele.addEventListener('scroll', function(){
      if (!can_scroll) return;
      can_scroll = false;
      let clientHeight = this.clientHeight;
      let scrollHeight = this.scrollHeight;
      let scrollTop = this.scrollTop;
      console.log('UserList Scroll: ', { clientHeight, scrollTop, scrollHeight});
      if (scrollTop + clientHeight + 5 >= scrollHeight) {
        console.log('Already Scroll To Bottom.');
      } else console.log('No Scroll To Bottom.');
      scroll_timer = setTimeout(() => {
        can_scroll = true;
      }, 500);
    });
  }

  getElement(){
    return this.config.ele;
  }

  /**
   * @param { UserInfo } user 
   */
  appendUser( user ) {
    if (ObjectUnit.isEmptyObject(user)) return;
    let cur = this.UserMap.get(user.uid);
    if (!cur) {
      cur = {
        created_time: Date.now(),
        user: user
      }
      cur.user_wrap =  new UserWrap(user);
      cur.user_wrap.setListener('selected', (param) => {
        this.UserMap.get(user.uid).user_wrap.updateBadge(0);
        if (!param.is_checked) return;
        this.notifyListener('changed_user', {
          is_checked: true,
          user: user
        });
      });
      cur.user_wrap.updateBadge(user.unReadCount);
      this.config.ele.appendChild(cur.user_wrap.getElement());
      this.UserMap.set(user.uid, cur);
    }
    cur.updated_time = Date.now();
    cur.user = user;
    if (this.UserMap.size === 1) {
      cur.user_wrap.checked();
      this.notifyListener('changed_user', { is_checked: true, user: cur.user });
    }
  }

  /**
   * @param { 'changed_user' } event_name 
   * @param { Function({ is_checked: Boolean, uid: String }) } callback 
   */
  setListener( event_name, callback ) {
    this.on[event_name] = callback;
  }
  /**
   * @param { 'changed_user' } event_name 
   * @param { Function({ is_checked: Boolean, user: UserInfo }) } param 
   */
  notifyListener( event_name, param ) {
    let callback = this.on[event_name];
    if (typeof callback === 'function') callback(param);
  }
}

export {
  UserList
}