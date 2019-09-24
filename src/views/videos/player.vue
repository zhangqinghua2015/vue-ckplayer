<template>
  <div>
    <label>
      <span v-for="item in items" :key="item.label"> {{item.label}}</span>
    </label>
    <div id="video"></div>
  </div>
</template>

<script>
  export default {
    name: 'player',
    data () {
      // div标题
      let videoTitle = this.$route.query.videoTitle;
      if (!videoTitle || Object.keys(videoTitle).length==0) {
        videoTitle = '暂无播放内容';
      }
      return {
        items: [
          {label:videoTitle}
        ]
      }
    },
    mounted: function(){
      // 挂载完成后进行
      const videoObject = {
        container: '#video', //容器的ID或className
        variable: 'player', //播放函数名称
        // loaded: 'loadedHandler', //当播放器加载后执行的函数
        loop: true, //播放结束是否循环播放
        /*cktrack: 'static/ckplayer/material/srt.srt', //字幕文件
        poster: 'static/ckplayer/material/poster.jpg', //封面图片
        preview: { //预览图片
          file: ['static/ckplayer/material/mydream_en1800_1010_01.png', 'static/ckplayer/material/mydream_en1800_1010_02.png'],
          scale: 2
        },*/
        config: '', //指定配置函数
        debug: true, //是否开启调试模式
        drag: 'start', //拖动的属性
        seek: 0, //默认跳转的时间
        /*****广告部分开始*****/
        /*adfront: 'http://×××w.ckplayer.com/yytf/swf/front001.swf,http://×××w.ckplayer.com/yytf/swf/front002.swf', //前置广告
        adfronttime: '15,15',
        adfrontlink: '',
        adpause: 'http://×××w.ckplayer.com/yytf/swf/pause001.swf,http://×××w.ckplayer.com/yytf/swf/pause002.swf',
        adpausetime: '5,5',
        adpauselink: '',
        adinsert: 'http://×××w.ckplayer.com/yytf/swf/insert001.swf,http://×××w.ckplayer.com/yytf/swf/insert002.swf',
        adinserttime: '10,10',
        adinsertlink: '',
        inserttime: '10,80',
        adend: 'http://×××w.ckplayer.com/yytf/swf/end001.swf,http://×××w.ckplayer.com/yytf/swf/end002.swf',
        adendtime: '15,15',
        adendlink: '',*/
        /*****广告部分结束*****/
        /*****进度条提示点开始*****/
        /*promptSpot: [
          {
            words: '提示点文字01',
            time: 30
          },
          {
            words: '提示点文字02',
            time: 150
          }
        ],*/
        /*****进度条提示点结束*****/
        video: [
          ['http://img.ksbbs.com/asset/Mon_1703/05cacb4e02f9d9e.mp4', 'video/mp4', '中文标清', 0],
          ['http://img.ksbbs.com/asset/Mon_1703/d0897b4e9ddd9a5.mp4', 'video/mp4', '中文高清', 0],
          ['http://img.ksbbs.com/asset/Mon_1703/eb048d7839442d0.mp4', 'video/mp4', '英文高清', 10],
          ['http://img.ksbbs.com/asset/Mon_1703/d30e02a5626c066.mp4', 'video/mp4', '英文超清', 0]
        ]
      };
      let videoTitle = this.$route.query.videoTitle;
      if (videoTitle && Object.keys(videoTitle).length!=0) {
        videoObject.video = [
          ['/player/static/video/' + videoTitle, 'video/mp4', '中文标清', 0]
        ];
      }
      // 定义一个对象
      let player = new ckplayer(videoObject);
    }
  }
</script>

<style scoped>
  #video {
    /*width: 600px;*/
    /*height: 400px;*/
    margin: 0px auto;
  }
</style>
