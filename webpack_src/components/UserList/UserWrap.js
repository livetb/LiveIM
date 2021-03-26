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
   * }}
   */
  config = {
    classList: ['user-wrap'],
    ele: null,
    input: null,
    badge: null
  }

  on = {
    change: null,
    selected: null,
  }

  /**
   * @param { UserInfo } user 
   */
  constructor( user ){
    // super();
    this.user = user;
    this.init();
  }
  
  init(){
    // console.log('UserWrap: init.');
    this.initView();
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
      <div class="serial">${serial_number++}</div>
      <div class="avatar-wrap">
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
      </div>
    </div>
    `;
    config.ele = ele;
    config.badge = ele.querySelector('.badge');
    config.input = ele.querySelector('input');
    let that = this;
    config.input.addEventListener('change', function(){
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
}

export {
  UserWrap
}