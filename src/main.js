import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import VueVideoPlayer from '@videojs-player/vue'
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

// 第一个是videoJs的样式，后一个是vue-video-player的样式，因为考虑到我其他业务组件可能也会用到视频播放，所以就放在了main.js内

const app = createApp(App)

app.use(router)
app.use(VueVideoPlayer)
app.use(VideoPlayer)
app.mount('#app')
