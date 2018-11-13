// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import Head from './Head'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.config.productionTip = false
const ApiKey = "YOUR-API-KEY"
const BaseUrl = "https://newsapi.org/v2/top-headlines?country=jp&apiKey=";
const Url = BaseUrl + ApiKey;

new Vue({
  el: '#head',
  components: { Head },
  template: '<Head/>'
})

new Vue({
  el: '#app',
  data: {
    results: [],
    posttime: []
  },
  mounted() {
    axios.get(Url)
      .then(response => {
          this.results = response.data.articles;

          for(var i = 0; i < this.results.length; i ++){
            let setting = new Date(this.results[i].publishedAt);
            let month = setting.getMonth() + 1;
            let day = setting.getDate();
            setting = month + '月' + day + '日'
            this.posttime.push(setting);
          }
          console.log('status:', response.status); //ブラウザコンソールに200を返しておく
          //console.log('body:', response.data.articles[0]);//サンプルデータの確認
      }).catch(error => console.log(error))
  }
});
