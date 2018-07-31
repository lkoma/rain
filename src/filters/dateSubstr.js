import Vue from 'vue';

Vue.filter('dateSubstr', (string, start = 0, length = 10) => (string ? string.substring(start, length) : string));
