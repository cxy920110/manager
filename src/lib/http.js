import axios from 'axios'
import Vue from 'vue'



axios.defaults.baseURL='http://localhost:8888/api/private/v1/'

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log('lanjiela');
    // console.log(config);
    if(config.url.indexOf('/login')==-1){
        config.headers.Authorization=window.sessionStorage.getItem('token')
    }
    
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  axios.interceptors.response.use(function (response) {
    // Do something with response data
    // console.log('huilaile');
    // console.log(response);
    Vue.prototype.$message(response.data.meta.msg)
    
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

export default {
    install(Vue){
        Vue.prototype.$http=axios
    }
}