import Vue from 'vue';

Vue.filter('dateSep', (string, sep = '-', updateSep = '') => string.replace(new RegExp(sep, 'g'), updateSep));
