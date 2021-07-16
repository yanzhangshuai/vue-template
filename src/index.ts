import { createApp } from 'vue';
import { setupStore } from '@/store';
import { setupComponent } from '@/component';
import { setupDirective } from '@/directive';
import { isReady, setupRouter } from '@/router';
import App from './app.vue';
import '@/assets/styles/index.less';
import '@/assets/styles/tailwind.css';

const app = createApp(App);

setupComponent(app);

setupDirective(app);

setupRouter(app);

setupStore(app);

//  等待router
isReady().then(() => {
  app.mount('#app');
});