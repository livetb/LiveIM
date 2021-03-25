const { ObjectUnit } = require("../../assets/js/unit/ObjectUnit");

class SendMessage {
  /**
   * @type {{
   *  id: String,
   *  ele: HTMLElement,
   *  classList: String[],
   *  text_input: HTMLElement,
   *  button: {
   *    send_text: HTMLElement,
   *    send_image: HTMLElement,
   *  }
   * }}
   */
  config = {
    id: 'send_message_wrap',
    ele: null,
    classList: ['send-message-wrap'],
    text_input: null,
    button: {
      send_text: null,
      send_image: null
    }
  }

  on = {
    send_text: null,
    send_image: null,
  }

  already = {
    init: {
      view: false
    }
  }
  constructor(){
    this.init();
  }

  init(){
    this.initView();
    this.bindListener();
    // console.log('SendMessage: ', this);
  }

  initView(){
    if (this.already.init.view) return;
    let config = this.config;
    let ele = document.createElement('div');
    config.ele = ele;
    ele.id = config.id;
    ele.classList.add(...config.classList);
    ele.innerHTML = `
    <div class="input-wrap">
      <textarea class="text-input"></textarea>
    </div>
    <div class="button-wrap">
      <label class="file-label">
        <input type="file" accept="image/*">
        <span class="button choose-file">Choose Image</span>
      </label>
      <button class="button send-message">Send Message</button>
    </div>
    `;
    config.text_input = ele.querySelector('.text-input');
    config.button.send_text = ele.querySelector('.send-message');
    config.button.send_image = ele.querySelector('.file-label input');
    this.already.init.view = true;
  }

  bindListener(){
    let config = this.config;
    let that = this;
    //
    config.text_input.addEventListener('keypress', function(event){
      // console.log('key: ', event.key);
      if(event.key.toLowerCase() === 'enter') {
        let text = this.value;
        // console.log('send text: ', text);
        that.notifyListener('send_text', {
          created_time: Date.now(),
          data: text
        });
        that.config.text_input.value = '';
      }
    });
    // 
    config.button.send_text.addEventListener('click', () => {
      let text = this.config.text_input.value;
      if (ObjectUnit.isEmptyString(text)) return;
      console.log('send text: ', text);
      this.notifyListener('send_text', {
        created_time: Date.now(),
        data: text
      });
      this.config.text_input.value = '';
    });
    // 
    config.button.send_image.addEventListener('input', function(){
      /**@type { File } */
      let file = this.files && this.files[0];
      if (!file) return;
      if (!/image/.test(file.type)) return;
      console.log('send image: ', file);
      that.notifyListener('send_image', {
        created_time: Date.now(),
        data: file
      });
      this.value = '';
    });
  }

  getElement(){
    return this.config.ele;
  }

  /**
   * @param { 'send_text' | 'send_image' } event_name 
   * @param { Function } callback 
   */
  setListener( event_name, callback ){
    this.on[event_name] = callback;
  }

  /**
   * @param { 'send_text' | 'send_image' } event_name 
   */
  notifyListener( event_name, param ){
    let callback = this.on[event_name];
    if (typeof callback === 'function') callback(param);
  }
}

export {
  SendMessage
}