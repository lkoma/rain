import Vue from 'vue';

Vue.filter('subStr', (string, start = 0, length = 20) => {
    let str = string || '';
    if (string && string.length > length) {
        str = `${string.substring(start, length - 1)}...`;
    }
    return str;
});
