function randomWord() {
  var res = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var len = characters.length;
  const randLen = Math.floor(Math.random() * 10) + 1;
  for (var i = 0; i < randLen; i++) {
    const j = Math.floor(Math.random() * len);
    res += characters[j];
  }
  return res;
}

export default randomWord;
