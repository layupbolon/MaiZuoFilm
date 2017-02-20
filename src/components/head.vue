<template>
    <div id="head">
        <a class="head_menu" @click="showSideMenu">
            <i class="icon iconfont icon-menu"></i>
        </a>
        <span class="title">{{title}}</span>
        <div class="head_right">
            <a class="head_city">上海<i class="icon iconfont icon-bottom"></i></a>
            <a class="head_mine"><i class="icon iconfont icon-people"></i></a>
        </div>
    </div>
</template>
<script>
    require('../assets/icon/iconfont.css')
    require('../assets/head.sass')

    export default {
      data(){
        return{}
      },
      props:{
          title:{
              type:String
          }
      },
      methods:{
          showSideMenu:function(){
              return this.$store.dispatch('changeLeftNavState',true)
          }
      }
    }
</script>
