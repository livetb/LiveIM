import { ViewUnit } from '../../assets/js/unit/ViewUnit.js';

class UserProfile {
  /**
   * @type {{
   *  id: String, classList: String[], ele: HTMLElement,
   *  text_list: HTMLElement, image_list: HTMLElement,
   *  info: {
   *    uid: HTMLElement, diamond: HTMLElement, createdAt: HTMLElement
   *  }
   * }}
   */
  config = {
    id: 'user_profile_wrap',
    classList: ['user-profile-wrap', 'hide-ele'],
    ele: null,
    info: {
      uid: null,
      diamond: null,
      createdAt: null
    }
  }


  constructor(id, classList){
    if (typeof id === 'string') this.config.id = id;
    if (Array.isArray(classList)) this.config.classList.push(...classList);
    this.init();
  }

  init(){
    this.initView();
  }

  initView(){
    let config = this.config;
    let ele = config.ele;
    if (ele) return;
    ele = document.createElement('div');
    ele.id = config.id;
    ele.classList.add(...config.classList);
    config.ele = ele;
    ele.innerHTML = `
    <p class="item uid"></p>
    <p class="item diamond"></p>
    <p class="item createdAt"></p>
    `;
    config.info.uid = ele.querySelector('.uid');
    config.info.diamond = ele.querySelector('.diamond');
    config.info.createdAt = ele.querySelector('.createdAt');
  }

  getElement(){
    return this.config.ele;
  }

  /**
   * @param { { uid: String, createdAt: String, diamond: Number} } profile 
   */
  updateProfile( profile ){
    this.config.ele.classList.remove('hide-ele');
    for (let key in this.config.info) {
      this.config.info[key].innerText = `${key}: ${profile[key]}`;
    }
  }

  hide(){
    this.config.ele.classList.add('hide-ele');
  }

}

export {
  UserProfile
}