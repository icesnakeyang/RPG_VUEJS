export const rpgFormat = {
  formatTime(value) {
    let timestamp3 = value;
    let newDate = new Date();
    newDate.setTime(timestamp3);
    return newDate.toLocaleString()
  }
}
