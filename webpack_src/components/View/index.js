class View {
  constructor(){
    this.init();
  }


  /**
   * @abstract
   */
  init(){}

  /**@abstract */
  initView(){}

}

export {
  View
}