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
      console.log('fast: ', target);
      that.notifyListener('select_message', {
        created_time: Date.now(),
          data: 'Hello World',
          type: 0
      })
    });
  }

  fastTextList(){
    let arr = [
      'Hello there, how may I help you?',
      'Second.',
      'Third.'
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
      'https://storage.googleapis.com/livehub-xyz/Livetube_undefined_20210325104955_cover.jpeg',
      'https://storage.googleapis.com/livehub-xyz/Livetube_undefined_20210325104955_cover.jpeg'
    ];
    let listHTML = [];
    arr.forEach( text => {
      listHTML.push(`<img class="item" src="${text}" />`);
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
    <input type="checkbox" />
    <p class="switch"></p>
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