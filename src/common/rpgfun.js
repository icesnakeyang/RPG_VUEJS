export const rpgFormat = {
  formatTime(value) {
    console.log(value);
    var timestamp3 = value;
    var newDate = new Date();
    newDate.setTime(timestamp3);
    return newDate.toLocaleString()
  }
}
