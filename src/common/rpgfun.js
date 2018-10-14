export const rpgFormat = {
  formatTime(value) {
    var timestamp3 = value;
    var newDate = new Date();
    newDate.setTime(timestamp3);
    return newDate.toLocaleString()
  }
}
