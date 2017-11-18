/* eslint-disable import/prefer-default-export */

/**
 * Created by luomin on 2017/6/25.
 */

import axios from 'axios';
// import qs from 'qs';
export const ajax = (params) => {
  // const startTime = new Date().getTime();
  return new Promise((resolve, reject) => {
    axios({
      method: params.type,
      url: params.url,
      data: params.data
    }).then((res) => {
      // const endTime = new Date().getTime();
      resolve(res.data);
    }).catch((error) => {
      reject(error);
    });
  });
};
