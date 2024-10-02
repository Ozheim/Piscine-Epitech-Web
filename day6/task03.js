export function countGs(str) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "G") {
      res += 1;
    }
  }
  return res;
}
