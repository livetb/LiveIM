
class ViewUnitClass {
  constructor(){

  }

  /**
   * @param { Element } ele 
   * @param { String } class_name 
   * @returns 
   */
  parentByClass(ele, class_name) {
    if (!ele || !ele instanceof Element) return ele;
    if (ele.classList.contains(class_name)) return ele;
    return this.parentByClass(ele.parentElement, class_name);
  }
}

const ViewUnit = new ViewUnitClass();

export {
  ViewUnit
}