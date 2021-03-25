class DateUnitClass {
  constructor(){

  }

  default_format_str = 'yyyy-MM-dd HH:mm:ss:ms'

  /**
   * 
   * @param { Date | Number } date_obj 
   * @param { String } format_str 
   * @param { 'date' | 'time' | 'datetime' } type 
   * @returns 
   */
  format( date_obj, format_str, type){
    if (!type && !format_str) format_str = "yyyy-MM-dd HH:mm:ss:ms";
    else if ("date" === type) format_str = "yyyy-MM-dd";
    else if ("time" === type) format_str = "HH:mm:ss";
    else if ("datetime" === type) format_str = "yyyy-MM-dd HH:mm:ss";
    if (!date_obj) date_obj = new Date();
    else if (typeof date_obj === 'number') date_obj = new Date(date_obj);
    let month = date_obj.getMonth() + 1;
    let day = date_obj.getDate();
    let hours = date_obj.getHours();
    let minutes = date_obj.getMinutes();
    let seconds = date_obj.getSeconds();
    format_str = format_str.replace("yyyy", date_obj.getFullYear());
    format_str = format_str.replace("MM", `${month > 9 ? "" : 0}${month}`);
    format_str = format_str.replace("dd", `${day > 9 ? "" : 0}${day}`);
    format_str = format_str.replace("HH", `${hours > 9 ? "" : 0}${hours}`);
    format_str = format_str.replace("mm", `${minutes > 9 ? "" : 0}${minutes}`);
    format_str = format_str.replace("ss", `${seconds > 9 ? "" : 0}${seconds}`);
    format_str = format_str.replace("ms", date_obj.getMilliseconds());
    return format_str;
  }
}

const DateUnit = new DateUnitClass();

export {
  DateUnit
}