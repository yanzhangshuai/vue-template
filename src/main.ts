import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { setupStore } from '@/store';
import { setupRouter } from '@/router';
import { setupService } from '@/service';
import { setupComponent } from '@/component';
import { setupDirective } from '@/directive';
import App from '@/page/app.vue';
import '@/assets/styles/index.less';
import '@/assets/styles/tailwind.css';

Vue.use(VueCompositionAPI);

setupComponent();

setupDirective();

setupService();

const store = setupStore();

const router = setupRouter();

new Vue({
  render: (h) => h(App),
  [store.name]: store,
  router
}).$mount('#app');
