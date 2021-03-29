class UserInfo {
  /**@type { String } */ id;
  /**@type { String } */ uid;
  /**@type { String } */ nickname;
  /**@type { String } */ avatar;
  /**@type { Number } */ gender;
  /**@type { String } */ age;
  /**@type { String } */ lastMessage;
  /**@type { Number } */ updateBadge;
  /**@type { Number } */ diamond;
  /**@type { Number } */ star;

  constructor(id, uid, nickname, avatar, gender, age, lastMessage, diamond, star){
    this.id = id;
    this.uid = uid;
    this.nickname = nickname;
    this.avatar = avatar;
    this.gender = gender;
    this.age = age;
    this.lastMessage = lastMessage;
    this.diamond = diamond;
    this.star = star;
  }
}

export {
  UserInfo
}