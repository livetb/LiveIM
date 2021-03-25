class ObjectUnitClass {
  constructor(){
  }

  isNull( obj ) {
    if ( !obj || obj === undefined || obj === null) return true;
    return false;
  }

  isObject( obj ) {
    if ( this.isNull(obj) ) return false;
    if ( typeof obj !== 'object' ) return false;
    return true;
  }

  isEmptyObject( obj ) {
    if ( !this.isObject(obj) ) return false;
    if ( Object.keys(obj).length > 0) return false;
    return true;
  }

  isNoEmptyObject( obj ) {
    if ( !this.isObject(obj) ) return false;
    if ( Object.keys(obj).length < 1) return false;
    return true;
  }

  isNumber( num ) {
    if ( String(num) === 'NaN' ) return false;
    return ( typeof num === 'number');
  }

  isString( str ) {
    return ( typeof str === 'string' );
  }
  isEmptyString( str ) {
    if ( this.isNull(str) ) return true;
    if ( !this.isString(str) ) return true;
    if ( str.trim().length < 1 ) return true;
    return false;
  }
  isNoEmptyString( str ) {
    return !this.isEmptyString(str);
  }
}

const ObjectUnit = new ObjectUnitClass();

export {
  ObjectUnit
}