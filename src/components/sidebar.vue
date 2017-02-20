<template>
    <div id="sidebar">
        <div class="sidebar_container" @click="hideSidebar" v-show="show">
            <div class="sidebar_detail">
                <transition name="leftNav">
                    <nav v-show="show">
                        <ul>
                            <li v-for="menu in menuList">
                                <router-link :to='menu.path'>
                                    <span>{{menu.name}}</span>
                                    <i class="icon iconfont icon-right"></i>
                                </router-link>
                            </li>
                        </ul>
                    </nav>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
    require('../assets/sidebar.sass')
    import {mapGetters} from 'vuex'
    export default{
        data(){
            let menuList = [
				{
					name:'首页',
					path:'/home'
				},
				{
					name:'影片',
					path:'/film/now-playing'
				}
			]
			return {
				menuList:menuList
			}
        },
		computed:mapGetters({
            show:'leftNavState'
        }),
        methods:{
            hideSidebar(){
                this.$store.dispatch('changeLeftNavState',false)
            }
        }
    }
</script>
