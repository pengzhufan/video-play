<template>
  <!-- playsinline：设置播放器在移动设备上不全屏[ Boolean, default: false ] -->
  <!-- customEventName：自定义状态变更时的事件名[ String, default: 'statechanged' ] -->
    <video-player
      ref="VideoPlayer"
        :options="playerOptions"
        :playsinline="true">
    </video-player>
</template>
<script>
import {VideoPlayer} from 'vue-video-player'

export default {
  　components: {
        VideoPlayer
    },
　　data() {
　　　　return {
 　　　　　　playerOptions: {
　　　　　　　　　// 是否静音
                  muted: true,
                  autoplay: false,
                  controls: true,
                  // 默认为英语，设置为中文
                  language: 'zh-CN',
                  // 播放速度，指定后Video.js将显示一个控件(vjs-playback-rate类的控件)，允许用户选择播放速度
                  playbackRates: [0.5, 1.0, 1.5, 2.0],
                  // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值，表示长宽比例
                  aspectRatio: '4:3',
         　　　　 // 兼容顺序，默认值是['html5']，其他已注册的技术将按其注册的顺序在该技术之后添加。
                  techOrder: ['html5'],
                  // 等同于原生<video>标签中的一组<source>子标签，可实现优雅降级；type 属性规定媒体资源的 MIME 类型
                  sources: [
                        {
                    	　　type: "video/mp4",
                    	　　src: "http://192.168.4.172:8080/api/baseResource/video"
                  	},
                   ],
                  // 视频封面
                  //poster: require('./icon/cover.jpg'),　
　　　　　　 }
　　　　}
　　},
　　computed: {
    	//插件 节点 用于添加自定义按钮事件
　　　　player() {
　　　　　　return this.$refs.videoPlayer.player
　　　　}
　　},
    mounted() {},
}
</script>