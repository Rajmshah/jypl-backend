import Vue from 'vue';
import globalJs from '@/service/global.js';

Vue.filter('serverimage', (value, width, height, style) => {
  const tmp = function (input, width, height, style) {
    if (input) {
      if (input.substr(0, 4) == 'http') {
        return input;
      }
      let image = globalJs.readFileUrl + input;
      // var image = "http://wohlig.io:1330/api/Upload/readfile" + "?file=" + input;
      if (width) {
        image += '&width=' + width;
      }
      if (height) {
        image += '&height=' + height;
      }
      if (style) {
        image += '&style=' + style;
      }
      return image;
    }
    return 'img/mtc-logo.png';
  };
  return tmp(value, width, height, style);
});
