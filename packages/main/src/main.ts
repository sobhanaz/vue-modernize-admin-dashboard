import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from './router';
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';
import VueTablerIcons from 'vue-tabler-icons';
import { fakeBackend } from '@/utils/helpers/fake-backend';
import 'vue3-carousel/dist/carousel.css';
//Mock Api data
import './_mockApis';

import Maska from 'maska';

//i18
import { createI18n } from 'vue-i18n';
import messages from '@/utils/locales/messages';

//ScrollTop
import VueScrollTo from 'vue-scrollto';

//LightBox
import VueEasyLightbox from 'vue-easy-lightbox';

const i18n = createI18n({
    locale: 'en',
    messages: messages,
    silentTranslationWarn: true,
    silentFallbackWarn: true
});

// Initialize fake backend
fakeBackend();

// Create Vue app instance
const app = createApp(App);

// Register all plugins before mounting
app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(PerfectScrollbar);
app.use(VueTablerIcons);
app.use(i18n);
app.use(Maska);
app.use(VueApexCharts);

// ScrollTop configuration
app.use(VueScrollTo, {
    duration: 1000,
    easing: "ease",
});

// Lightbox
app.use(VueEasyLightbox);

// Mount the app (this should be the last operation)
app.mount('#app');

