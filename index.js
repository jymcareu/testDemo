import Main from './src/components/Main'
import _Vue from 'vue'

// 标签的方式引入，留到后面再另开新篇讨论
const install = function (Vue, opts = {}) {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(Main.name, Main);　
}
/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

Main.install = install
export default Main;
