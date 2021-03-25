import { DateUnit } from '../unit/DateUnit.js';

class Message {
  /**@type { Number } */
  id;
  /**@type { Number } */
  timestamp;
  /**@type { String } */
  message
  /**@type { Number } */
  messageType;
  /**@type { { is_self: Boolean, avatar: avatar } } */
  user_info = {
    is_self: null,
    avatar: null
  }

  #config = {
    /**@type { HTMLElement } */
    ele: null,
    classList: ['chat-record']
  }

  /**
   * 
   * @param { Number } timestamp 
   * @param { String } message 
   * @param { Number } messageType 
   */
  constructor( message_obj, user_info = {}){
    if (message_obj && typeof message_obj === 'object') {
      let { id, timestamp, message, messageType } = message_obj;
      this.id = id;
      this.timestamp = timestamp;
      this.message = message;
      this.messageType = messageType;
    }
    this.user_info = user_info;
    this.init();
  }

  init(){
    this.initView();
  }

  /**
   * @param { String} message 
   * @param { 0 | 1 | 2 | 4| 13} type 
   */
  renderMessageContent( message, type = 0){
    let result = '';
    switch (type) {
      case 0: {
        result = `<p class="content text">${message}</p>`;
      }; break;
      case 2: {
        result = `<img class="content image" src="${message}" />`;
      }; break;
      default: {
        result = `<p style="color: red;" class="content text">${message}</p>`;
      }
    }
    return result;
  }

  initView(){
    let config = this.#config;
    let ele = document.createElement('div');
    ele.classList.add(...config.classList);
    if(this.user_info.is_self) ele.classList.add('self');
    ele.setAttribute('message-id', this.id);
    ele.innerHTML = `
    <div class="avatar-wrap">
      <div class="rectangle-box square">
        <div class="avatar no1">
          <img src="${this.user_info.avatar}" />
        </div>
      </div>
    </div>
    <div class="message-wrap">
      <div class="info">
        <p class="item">${DateUnit.format(this.timestamp)}</p>
        <p class="item"> MessageType: ${this.messageType}</p>
      </div>
      <div class="message ${this.messageType === 13 ? 'video-call' : ''}">
        ${this.renderMessageContent(this.message, this.messageType)}
      </div>
    </div>
    `;
    config.ele = ele;
  }

  getElement(){
    return this.#config.ele;
  }
}

export {
  Message
}