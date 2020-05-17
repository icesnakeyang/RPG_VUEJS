export const rpgFunc = {
  formatTime(value) {
    let timestamp3 = value;
    let newDate = new Date();
    newDate.setTime(timestamp3);
    return newDate.toLocaleString()
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
