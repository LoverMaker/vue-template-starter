/**
 * Created by luomin on 2017/6/26.
 */

export default {
  /* cookie */
  // 设置cookie
  setCookie(cname, cvalue, exdays, path) {
    const d = new Date();
    let expires;
    if (exdays) {
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      expires = 'expires=' + d.toUTCString();
    } else {
      expires = '';
    }
    let paths;
    if (path === undefined) {
      paths = 'path = /';
    } else {
      paths = 'path = ' + path;
    }
    if (expires === '') {
      document.cookie = cname + '=' + cvalue + ';' + paths;
    } else {
      document.cookie = cname + '=' + cvalue + ';' + expires + ';' + paths;
    }
  },
  // 获取cookie
  getCookie(cname) {
    const name = cname + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length;) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(name) !== -1) {
        return c.substring(name.length, c.length);
      }
      i += 1;
    }
    return '';
  }
};
