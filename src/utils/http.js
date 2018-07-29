import axios from 'axios';
import { Message } from 'element-ui';
import qs from 'qs';

// axios 全局配置
axios.defaults.baseURL = '/api';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use((config = {}) => {
    const after = { ...config };
    if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
        after.data = qs.stringify(config.data);
    }
    return after;
});
axios.interceptors.response.use(rsp => {
    const data = rsp.data;
    if (data.returnCode === 0 || data.return_code === 0) {
        return Promise.resolve(data.data);
    }
    let errorMsg = data.returnMessage;
    try {
        const errorData = data.replace(/[\r\n]/g, '');
        errorMsg = JSON.parse(errorData).returnMessage;
    }
    catch (error) {
        errorMsg = data.returnMessage;
    }
    Message({
        showClose: true,
        message: errorMsg || data.return_message,
        type: 'error'
    });
    return Promise.reject(data);
}, error => {
    // 请求错误时做些事
    console.error(error);
    const errData = {
        returnCode: -999,
        returnMessage: '获取信息失败啦，请稍后再试~'
    };
    Message({
        showClose: true,
        message: '获取信息失败啦，请稍后再试~',
        type: 'error'
    });
    return Promise.reject(errData);
});
export default axios;
