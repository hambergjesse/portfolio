//Preventing content framing
window.onload = function () {
  if (top != window) top.location = window.location;
};
