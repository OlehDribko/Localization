// const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

const generateKey = (length, key) => {
  let randomString = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * key.length);
    randomString += key[index];
  }
  return randomString;
};

console.log(generateKey(7, "abcdefghijklmnopqrstuvwxyz0123456789"));
