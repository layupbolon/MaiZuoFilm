<template>
  <div id="app">
    <comHead :title="title"/>
    <div class="container">
      <transition :name="transitionName">
        <router-view class="routerView"></router-view>
      </transition>
    </div>
    <comLoading v-show="loading"/>
    <comSidebar/>
  </div>
</template>

<script>
  require('./assets/app.sass')
  import {mapGetters} from 'vuex'
  import Head from './components/head'
  import Loading from './components/loading'
  import Sidebar from './components/sidebar'

  export default {
    data(){
      return {
        transitionName:"mytransition"
      }
    },
    created:function(){
      if(this.$route.name === undefined)
        return this.$router.push('home')
    },
    computed:mapGetters({
      loading:'getLoading',
      title:'getTitle'
    }),
    components:{
      comHead:Head,
      comLoading:Loading,
      comSidebar:Sidebar
    }
  }
</script>