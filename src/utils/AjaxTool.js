
/**
 * Created by luomin on 2017/6/25.
 */

import axios from 'axios';
import apimap from '@/api/apimap';
import qs from 'qs';

export default function (url, method, data) {
  url = getUrl(url);
  return axios.post(url, qs.stringify(data));
}

function getEnv() {
  return 'develop';
}

function getUrl(url) {
  return apimap[getEnv()][url];
}
