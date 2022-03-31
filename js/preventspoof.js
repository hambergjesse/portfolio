//Preventing URL spoofing and polluting
var url = location.href;
var p = url.indexOf("?");
if (p >= 1) {
  url = url.slice(0, p);
  self.location.replace(url);
}
