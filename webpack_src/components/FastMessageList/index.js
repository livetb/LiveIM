import { ViewUnit } from '../../assets/js/unit/ViewUnit.js';

class FastMessageList {
  /**
   * @type {{
   *  id: String, classList: String[], ele: HTMLElement,
   *  text_list: HTMLElement, image_list: HTMLElement
   * }}
   */
  config = {
    id: 'fast_message_list_wrap',
    classList: ['fast-message-list-wrap'],
    ele: null,
    text_list: null,
    image_list: null,
  }

  on = {
    select_message: null
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

  bindListener(){
    let that = this;
    this.config.text_list.addEventListener('click', function(event){
      let target = event.target;
      that.notifyListener('select_message', {
        created_time: Date.now(),
          data: target.innerText,
          type: 0
      });
    });
    this.config.image_list.addEventListener('click', function(event){
      let target = event.target;
      if(!target.classList.contains('item')) return;
      that.notifyListener('select_message', {
        created_time: Date.now(),
          data: target.getAttribute('src'),
          type: 2
      });
    });
  }

  fastTextList(){
    let arr = [
      'Hello there, how may I help you?',
      `Hello there, please let me know if you have any problems while using the app. I am always here to help. :)

      Best,
      Emily`,
      'Thanks.',
      'Please try to refresh your Wallet page. If you still cannot see the balance, please provide the purchasing record screenshot for our reference.',
      'Your account would be deleted in 10 minutes. Please do not login again, your account would be reactivated.',
      'All our users are verified. If you think someone is fake, you could make a report. You may click the button on the top right corner to block a specific person and he/she would not show on your profile anymore.',
      'You may swipe to match with the person you like and then send them messages for free. You could even video call them privately. Hope you enjoy it!',
      'Sorry it is not location based app, we provide wordwide users for matching.',
      `Sorry, I m here to work solving users' problems only :)`,
      'You may buy diamonds in the wallet.',
      `Hello, I am Emily, anything I can help?

      :)`,
      'Please provide the screenshot of purchase receipt sent by Apple. You may find it in your email.'
    ];
    let listHTML = [];
    arr.forEach( text => {
      listHTML.push(`<p class="item">${text}</p>`);
    });
    return listHTML.join('');
  }

  fastImageList(){
    let arr = [
      'https://storage.googleapis.com/livehub-xyz/Livetube_undefined_20210325104955_cover.jpeg',
      'https://storage.googleapis.com/livehub-xyz/Livetube_undefined_20210326020742_cover.jpeg',
      'https://storage.googleapis.com/livehub-xyz/Livetube_undefined_20210326020846_cover.jpeg',
      'https://storage.googleapis.com/livehub-xyz/Livetube_undefined_20210326020917_cover.jpeg'
    ];
    let listHTML = [];
    arr.forEach( text => {
      listHTML.push(`
      <img class="item" src="${text}" />
      <img class="preview" src="${text}" />
      `);
    });
    return listHTML.join('');
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
    <input checked="true" id="fast_message_list_switch_input" type="checkbox" />
    <label class="switch" for="fast_message_list_switch_input">
      <p></p>
    </label>
    <div class="fast-message-list">
      <div class="text-list">
        ${this.fastTextList()}
      </div>
      <div class="image-list">
        ${this.fastImageList()}
      </div>
    </div>
    `;
    config.text_list = ele.querySelector('.text-list');
    config.image_list = ele.querySelector('.image-list');
  }

  getElement(){
    return this.config.ele;
  }

  /**
   * @param { 'select_message' } event_name 
   * @param { Function({ created_time: Number, data: String, type: 'text' | 'image' }) } callback 
   */
  setListener( event_name, callback ) {
    this.on[event_name] = callback;
  }
  /**
   * @param { 'select_message' } event_name 
   * @param { { created_time: Number, data: String, type: 'text' | 'image' } } param 
   */
  notifyListener( event_name, param ) {
    let callback = this.on[event_name];
    if (typeof callback === 'function') callback(param);
  }
}

export {
  FastMessageList
}