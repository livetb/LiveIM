class UserInfo {
  /**@type { String } */ id;
  /**@type { String } */ uid;
  /**@type { String } */ nickname;
  /**@type { String } */ avatar;
  /**@type { Number } */ gender;
  /**@type { String } */ age;
  /**@type { String } */ lastMessage;
  /**@type { Number } */ updateBadge;

  constructor(id, uid, nickname, avatar, gender, age, lastMessage){
    this.id = id;
    this.uid = uid;
    this.nickname = nickname;
    this.avatar = avatar;
    this.gender = gender;
    this.age = age;
    this.lastMessage = lastMessage;
  }
}

export {
  UserInfo
}