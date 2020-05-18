import moment from "moment";

export const rpgFunc = {
  formatTime(value) {
    let timeStr=moment(value).format('YYYY-MM-DD HH:mm')
    return timeStr
  },

  //检查是否为手机号码
  checkMobilePhone(value) {
    const phone = value
    if (!(/^1[3456789]\d{9}$/.test(phone))) {
      return false;
    }
    return true
  }
}
