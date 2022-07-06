//Preventing URL spoofing and polluting
const url = location.href;
const p = url.indexOf("?");
if (p >= 1) {
  url = url.slice(0, p);
  self.location.replace(url);
}
