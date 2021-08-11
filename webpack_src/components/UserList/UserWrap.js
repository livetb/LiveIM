import { View } from '../View';
import { ObjectUnit } from '../../assets/js/unit/ObjectUnit.js';

import { UserInfo } from '../../assets/js/bean/UserInfo.js';

var serial_number = 1;

class UserWrap {
  /**@type { UserInfo } */
  user;
  
  /**
   * @type {{
   *  classList: String[],
   *  ele: HTMLElement,
   *  input: HTMLElement,
   *  badge: HTMLElement,
   *  last_message: HTMLElement,
   * }}
   */
  config = {
    classList: ['user-wrap'],
    ele: null,
    input: null,
    badge: null,
    last_message: null
  }

  on = {
    change: null,
    selected: null,
  }

  /**
   * @param { UserInfo } user 
   */
  constructor( user ){
    this.user = user;
    this.init();
  }
  
  init(){
    this.initView();
    this.bindListener();
  }

  renderDiamondStar(diamond, star){
    if (diamond<1 && star < 1) return '';
    return `<p class="diamond-and-star">diamond: ${diamond} / consume: ${star}</p>`;
  }

  initView(){
    if (ObjectUnit.isEmptyObject(this.user)) return;
    // console.log('UserWrap.initView: ', { user: this.user, config: this.config});
    let user = this.user;
    let config = this.config;
    let ele = config.ele;
    if ( ele ) return;
    ele = document.createElement('label');
    ele.classList.add(...config.classList);
    ele.innerHTML = `
    <input uid="${user.uid}" type="radio" name="list-user" >
    <div class="user">
      <div class="serial ${user.diamond > 0 ? 'diamond' : ''}">${serial_number++}</div>
      <div class="avatar-wrap ${user.star > 0 ? 'star' : ''}">
        <div class="rectangle-box square">
          <div class="avatar no1">
            <img src="${user.avatar}" />
          </div>
          <div class="badge no2">·</div>
        </div>
      </div>
      <div class="message-wrap">
        <h2 class="name">${user.nickname}</h2>
        <p class="last-message">${user.lastMessage}</p>
        ${this.renderDiamondStar(user.diamond, user.star)}
      </div>
    </div>
    `;
    config.ele = ele;
    config.badge = ele.querySelector('.badge');
    config.input = ele.querySelector('input');
    config.last_message = ele.querySelector('.last-message');
  }

  bindListener(){
    let that = this;
    this.config.input.addEventListener('change', function(){
      let is_checked = this.checked;
      let param = {
        is_checked,
        uid: that.user.uid
      }
      that.notifyListener('change', param);
      that.notifyListener('selected', param);
    });
  }

  getElement() {
    return this.config.ele;
  }

  /**
   * @param { 'change' | 'selected' } event_name 
   * @param { Function({ is_checked: Boolean, uid: String }) } callback 
   */
  setListener( event_name, callback ) {
    this.on[event_name] = callback;
  }
  /**
   * @param { 'change' | 'selected' } event_name
   * @param { { is_checked: Boolean, uid: String } } param
   */
  notifyListener( event_name, param ) {
    let callback = this.on[event_name];
    if (typeof callback === 'function') callback(param);
  }

  checked(){
    this.config.input.checked = true;
  }

  updateBadge( num ) {
    let badge = this.config.badge;
    if ( num > 0) {
      badge.classList.remove('hide-ele');
      badge.innerText = num;
    } else {
      badge.classList.add('hide-ele');
    }
  }

  updateLastMessage( message ) {
    this.config.last_message.innerText = message;
  }

  /**
   * @param { '' | 'diamond' | 'star' } filter
   */
  hide( filter, reserve ){
    let flag = "";
    if (reserve) {
      flag = 'no-'+filter;
    } else {
      switch( filter ) {
        case 'diamond': {
          flag = this.user.diamond > 0 ? '' : 'no-diamond';
        }; break;
        case    'star': {
          flag = this.user.star > 0 ? '' : 'no-star';
        }; break;
        default : flag = 'hide-ele';
      }
    }
    // console.log('UserWrap.hide: ', { filter, reserve, flag, list: this.config.ele.classList});
    // return;
    if (!flag) return;
    if (reserve) {
      this.config.ele?.classList.remove(flag);
    } else {
      this.config.ele?.classList.add(flag);
    }
  }

  /**
   * @param { '' | 'diamond' | 'star' } filter
   */
  show( filter, diamond_or_star ){
    if (diamond_or_star) {
      if (this.user.diamond > 0 || this.user.star > 0) {
        this.config.ele.classList.remove('no-diamond', 'no-star');
      } else {
        this.config.ele.classList.add('no-diamond', 'no-star');
      }
      return;
    }
    this.hide( filter, true);
  }
}

export {
  UserWrap
}