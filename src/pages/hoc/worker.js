// self 类似主线程中的 window
window.onmessage = function(e) {
  window.postMessage(e.data.number * 2);
};