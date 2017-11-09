// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

Vue.directive('click-outside', {
  bind: function bindOutsideClick(el, binding, vnode) {
    const event = Object.prototype.hasOwnProperty.call(el, 'event')
      ? el.event
      : function hasClickedOutside(e) {
        // here I check that click was outside the el and his childrens
        if (!(el === event.target || el.contains(e.target))) {
          // and if it did, call method provided in attribute value
          vnode.context[binding.expression](e);
        }
      };
    document.addEventListener('click', event);
  },
  unbind: function unbindOutsideClick(el) {
    document.body.removeEventListener('click', el.event);
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
