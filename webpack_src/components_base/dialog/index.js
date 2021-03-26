/**
 * 寻找svg元素最近的html父元素
 * @param {HTMLElement} ele - svg元素
 * @param {String} className - class
 */
 function parentNoSvg(ele){
  if(!ele) return ele;
  let svgNames = ["svg", "path", "fill"];
  let parent = ele.parentElement;
  if(!svgNames.includes(parent.nodeName.toLowerCase())) return parent;
  return parentNoSvg(parent);
}

const DialogUnit = (() => {

  const minZIndex = 2000;
  let count = 0; // 统计共显示了多少次Dialog，用来计算z-index
  const showMap = new Map(); // 保存显示中的Dialog, Map<cssSelector, z-index>
  const dialogMap = new Map(); 
  /**缓存所有显示过的Dialog，直到调用remove方法删除，
   * Map<cssSelector, {
   *    ele: DialogEle,
   *    options: { isSolo, showClose, noCancelable }
   *    onClose: closeCallback,
   *    onCancel: cancelCallback,
   *    listener: false,
   * }
  **/
  const Unit = function(name = "DialogUnit"){
    this.name = name;
  }
  Unit.prototype.hideAllShowDialog = function(ignoreCssSelector){
    showMap.forEach((idx, cssSelector) => {
      if(cssSelector === ignoreCssSelector) return;
      this.hide(cssSelector);
    });
  }
  /**
   * 显示指定Dialog
   * @param {String} cssSelector - 可用于querySelector的CSS选择器
   * @param {Boolean} options.isSolo - 是否单独显示（为true时，隐藏正在显示的Dialog)
   * @param {Boolean} optons.NoCancelable - 点击Dialog以外区域是否关闭Dialog，
   * @param {Boolean} optons.showClose - 是否显示默认关闭按钮，
   */
  Unit.prototype.show = function(cssSelector, options = {}){
    let { isSolo, showClose } = options;
    let dialog = dialogMap.get(cssSelector) || {};
    if(!dialog.ele) dialog.ele = document.querySelector(cssSelector);
    if(!dialog.ele) return -1;
    dialog.options = options;

    let curZIndex = (minZIndex + count++);
    dialog.ele.style.zIndex = curZIndex;
    if(isSolo) this.hideAllShowDialog(cssSelector);
    dialog.ele.classList.remove("hide");
    dialog.ele.classList.remove("hide-ele");
    dialog.ele.classList.add("show");
    showMap.set(cssSelector, curZIndex)
    
    let bodyHeight = document.body.offsetHeight;
    let curHeight = dialog.ele.offsetHeight;
    if(bodyHeight > curHeight){
      document.body.classList.add("scroll");
    }
    document.body.classList.add("forbid-body");
    if(!dialogMap.has(cssSelector)) dialogMap.set(cssSelector, dialog);

    let content = dialog.ele.querySelector(".content");
    if(showClose){ // 显示默认关闭按钮
      let closeNode = document.createElement("span");
      closeNode.classList.add("default-close");
      closeNode.innerHTML = `<svg class="default-close-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2710" width="16" height="16"><path class="default-close-path" d="M512 401.25742901L733.48384743 179.7735816c31.64058661-31.64058661 79.101596-31.64058661 110.74218262 0s31.64058661 79.101596 0 110.74218261L622.74257099 512l221.48384741 221.48384743c31.64058661 31.64058661 31.64058661 79.101596 0 110.74218262s-79.101596 31.64058661-110.74218261 0L512 622.74257099 290.51615257 844.2264184c-31.64058661 31.64058661-79.101596 31.64058661-110.74218262 0-31.64058661-31.64058661-31.64058661-79.101596 0-110.74218261L401.25742901 512 179.7735816 290.51615257C148.13247715 258.87504814 148.13247715 211.41468603 179.7735816 179.7735816c31.64058661-31.64058661 79.101596-31.64058661 110.74218261 0L512 401.25742901Z" fill="#515151" p-id="2711"></path></svg>`;
      content.appendChild(closeNode); 
    }else {
      if(content.querySelector(".default-close")) content.querySelector(".default-close").remove();
    }

    let that = this;
    if(!dialog.listener) {
      dialog.listener = true;
      dialog.ele.addEventListener("click", async function(event){
        let target = event.target;
        console.log(cssSelector, " Click  => ", target.className);
        if(["svg", "path", "fill"].includes(target.nodeName)) target = parentNoSvg(target);
        if(!target) return;
        let closeClass = ["default-close", "default-close-svg", "default-close-path"];
        if(closeClass.includes(target.className) || target.classList.contains("close-btn")){
          if(typeof dialog.onClose === "function") await dialog.onClose();
          that.hide(cssSelector);
        }else if(target.classList.contains("cus-dialog")){
          if(target.classList.contains("no-cancelable")) return;
          if(typeof dialog.onCancel === "function") await dialog.onCancel();
          if(!dialog.options.noCancelable) that.hide(cssSelector);
        }else if(target.classList.contains("cancel")){
          if(typeof dialog.onCancel === "function") await dialog.onCancel();
          that.hide(cssSelector);
        }else if(target.classList.contains("confirm")){
          if(typeof dialog.onConfirm === "function") await dialog.onConfirm();
          that.hide(cssSelector);
        }
      });
    }
  }
  Unit.prototype.confirm = function(id,title, description, confirmCallback, cancelCallback){
    console.log("confirm: ---1");
    if(!id || id.toString().length < 1) return;
    let cssSelector = "#cus_confirm_dialog_" + id;
    let dialog = dialogMap.get(cssSelector) || {};
    dialog.onCancel = cancelCallback;
    dialog.onConfirm = confirmCallback;
    if(!dialog.ele){
      console.log("confirm: ---2");
      dialog.ele = document.createElement("div");
      dialog.ele.id = "cus_confirm_dialog_" + id;
      dialog.ele.classList.add("cus-dialog","default","confirm-dialog", "hide-ele");
      document.body.appendChild(dialog.ele);
      dialog.ele.innerHTML = `
      <div class="content dialog-container">
        <div class="header">
          <h2 class="title">Confirm?</h2>
        </div>
        <div class="body">
          <span class="title">Title</span> <br>
          <span class="description">Descirption</span>
        </div>
        <div class="footer">
          <div class="cancel btn">Cancel</div>
          <div class="confirm btn">Confirm</div>
        </div>
      </div>`;
      dialogMap.set(cssSelector, dialog);
      dialog.body = dialog.ele.querySelector(".body");
      dialog.title = dialog.ele.querySelector(".body .title");
      dialog.description = dialog.ele.querySelector(".body .description");
    }
    if(!title && !description){
      console.log("confirm: ---3");
      dialog.body.classList.add("hide-ele");
    } else {
      console.log("confirm: ---4");
      dialog.body.classList.remove("hide-ele");
      if(title){
        dialog.title.classList.remove("hide-ele");
        dialog.title.innerText = title;
      }else dialog.title.classList.add("hide-ele");
      if(description){
        dialog.description.classList.remove("hide-ele");
        dialog.description.innerText = description;
      }else dialog.description.classList.add("hide-ele");
    }
    console.log("confirm: ---5");
    this.show(cssSelector);
    return cssSelector;
  }
  Unit.prototype.hide = function(cssSelector){
    if(!showMap.has(cssSelector)) return;
    let dialog = dialogMap.get(cssSelector);
    showMap.delete(cssSelector);
    if(!dialog) return -1;
    dialog.ele.classList.remove("show");
    dialog.ele.classList.add("hide");
    // let duration = +dialog.ele.style.animationDuration || 0;
    // console.log("HideDialog: Duration => ", duration);
    setTimeout(() => {
      dialog.ele.classList.remove("hide");
      // dialog.ele.style.display = "none";
      if(showMap.size < 1) document.body.classList.remove("forbid-body", "scroll");
    }, 300);
  }
  Unit.prototype.remove = function(cssSelector){
    let dialog = dialogMap.get(cssSelector);
    if(!dialog) return -1;
    this.hide(cssSelector);
    dialog = null;
    dialogMap.delete(cssSelector);
  }
  Unit.prototype.addCloseListener = function(cssSelector, callback){
    let dialog = dialogMap.get(cssSelector);
    if(!dialog || typeof callback !== "function") return -1;
    dialog.onClose = callback;
  }
  Unit.prototype.addCancelListener = function(cssSelector, callback){
    let dialog = dialogMap.get(cssSelector);
    if(!dialog || typeof callback !== "function") return -1;
    dialog.onCancel = callback;
  }
  return new Unit();
})();

import './index.scss';

export {
  DialogUnit
}