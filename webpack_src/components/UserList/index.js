import { UserInfo } from '../../assets/js/bean/UserInfo.js';
import { UserWrap } from './UserWrap.js';
import { ObjectUnit } from '../../assets/js/unit/ObjectUnit.js';

class UserList {
  /**
   * @type {{
   *  id: String, classList: String[], ele: HTMLElement,
   *  more_list_wrap: HTMLElement, more_list: HTMLElement,
   *  filter_diamond: HTMLElement, filter_star: HTMLElement,filter_all:HTMLElement,
   *  filter: {
   *    diamond: Boolean, star: Boolean,all:Boolean,
   *  }
   * }}
   */
  config = {
    id: 'user_list',
    classList: ['user-list'],
    ele: null,
    more_list_wrap: null,
    more_list: null,
    filter_grid:null,
    filter_diamond: null,
    filter_star: null,
    filter_all: null,
    filter: {
      diamond: true,
      star: true,
      all: false,
    }
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
    changed_user: null,
    more_list: null
  }

  constructor(id, classList) {
    if (typeof id === 'string') this.config.id = id;
    if (Array.isArray(classList)) this.config.classList.push(...classList);
    this.init();
  }

  init() {
    this.initView();
    this.bindListener();
  }

  initView() {
    let config = this.config;
    let ele = config.ele;
    if (ele) return;
    ele = document.createElement('div');
    ele.id = config.id;
    ele.classList.add(...config.classList);
    config.ele = ele;
    ele.innerHTML = `
    <div class="filter-grid">
      <label class="filter">
        <input type="checkbox" ${config.filter.diamond ? 'checked' : ''} name="filter-diamond" />
        <span>有钻石</span>
      </label>
      <label class="filter">
        <input type="checkbox" ${config.filter.star ? 'checked' : ''} name="filter-star" />
        <span>有消费</span>
      </label>
      <label class="filter">
        <input type="checkbox" ${config.filter.all ? 'checked' : ''} name="filter-all" />
        <span>所有</span>
      </label>
    </div>
    <div class="more-list-wrap">
      <button class="more-list">more</button>
    </div>
    `;
    config.more_list_wrap = ele.querySelector('.more-list-wrap');
    config.more_list = ele.querySelector('.more-list');
    config.filter_diamond = ele.querySelector('input[name="filter-diamond"]');
    config.filter_star = ele.querySelector('input[name="filter-star"]');
    config.filter_all = ele.querySelector('input[name="filter-all"]');
    config.filter_grid=ele.querySelector('.filter-grid');
  }

  bindListener() {
    // let that = this;
    let moreListener = (() => {
      let timer;
      let flag = true;
      return () => {
        if (!flag) return;
        flag = false;
        this.notifyListener('more_list');
        if (timer) clearTimeout(timer);
        timer = setInterval(() => {
          flag = true;
        }, 2000);
      }
    })();
    this.config.more_list.addEventListener('click', function () {
      moreListener(this);
    });
    // filter
    this.config.filter_grid.addEventListener('click',function(e){
      
      
    })
    this.config.filter_diamond.addEventListener('change', () => {
      let is_checked = this.config.filter_diamond.checked;
      this.config.filter.diamond = is_checked;
      // if(this.config.filter.diamond){
      //   this.config.filter_all.checked=false;
      // }
      this.notifyListener('filter_diamond', { is_checked });
      // this.UserMap.forEach( user => {
      //   if (this.config.filter.diamond && this.config.filter.star) {
      //     user.user_wrap.show('', true);
      //     return;
      //   }
      //   is_checked ? user.user_wrap.hide('diamond') : user.user_wrap.show('diamond');
      // });
    });
    this.config.filter_star.addEventListener('change', () => {
      let is_checked = this.config.filter_star.checked;
      this.config.filter.star = is_checked;
      // if(this.config.filter.star){
      //   this.config.filter_all.checked=false;
      // }
      this.notifyListener('filter_star', { is_checked });
      // this.UserMap.forEach( user => {
      //   if (this.config.filter.diamond && this.config.filter.star) {
      //     user.user_wrap.show('', true);
      //     return;
      //   }
      //   is_checked ? user.user_wrap.hide('star') : user.user_wrap.show('star');
      // });
    });
    this.config.filter_all.addEventListener('change', () => {
      let is_checked = this.config.filter_all.checked;
      this.config.filter.all = is_checked;
      // if (this.config.filter.all) {
      //   this.config.filter_diamond.checked = false;
      //   this.config.filter_star.checked = false;
      // }
      this.notifyListener('filter_all', { is_checked });
    });
  }

  getElement() {
    return this.config.ele;
  }

  /**
   * @param { UserInfo } user 
   */
  appendUser(user) {
    if (ObjectUnit.isEmptyObject(user)) return;
    let cur = this.UserMap.get(user.uid);
    if (!cur) {
      cur = {
        created_time: Date.now(),
        user: user
      }
      cur.user_wrap = new UserWrap(user);
      cur.user_wrap.setListener('selected', (param) => {
        this.UserMap.get(user.uid).user_wrap.updateBadge(0);
        if (!param.is_checked) return;
        this.notifyListener('changed_user', {
          is_checked: true,
          user: user
        });
      });
      this.config.ele.insertBefore(cur.user_wrap.getElement(), this.config.more_list_wrap);
      this.UserMap.set(user.uid, cur);
    }
    cur.user_wrap.updateBadge(user.unReadCount);
    cur.user_wrap.updateLastMessage(user.lastMessage);
    cur.updated_time = Date.now();
    cur.user = user;
    if (this.UserMap.size === 1) {
      cur.user_wrap.checked();
      cur.user_wrap.updateBadge(0);
      this.notifyListener('changed_user', { is_checked: true, user: cur.user });
    }
  }

  /**
   * @param { 'changed_user' | 'more_list' | 'filter_diamond' | 'filter_star' | 'filter_all' } event_name 
   * @param { Function({ is_checked: Boolean, uid: String }) } callback 
   */
  setListener(event_name, callback) {
    this.on[event_name] = callback;
  }
  /**
   * @param { 'changed_user' | 'more_list' | 'filter_diamond' | 'filter_star' | 'filter_all' } event_name 
   * @param { Function({ is_checked: Boolean, user: UserInfo }) } param 
   */
  notifyListener(event_name, param) {
    let callback = this.on[event_name];
    console.log(callback);
    if (typeof callback === 'function') callback(param);
  }
}

export {
  UserList
}