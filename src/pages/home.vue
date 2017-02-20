<template>
    <div id="home">
        <div class="banner">
            <swiper class="swiper_banner">
                <swiper-slide class="slide" v-for='item in banner'>
                    <a target='_blank' :href="item.url">
                        <img :src="item.imageUrl" alt="">
                    </a>
                </swiper-slide>
            </swiper>
        </div>
        <div class="now_playing">
            <div class="item" v-for="item in nowplay">
                <router-link :to="{name:'detail',params:{id:item.id}}">
                    <img :src="item.cover.origin" alt="">
                    <div class="item_bottom">
                        <div class="desc">
                            <h4>{{item.name}}</h4>
                            <div class="info">{{item.cinemaCount}}家影院上映{{item.watchCount}}人购票</div>
                        </div>
                        <div class="grade">{{item.grade}}</div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="coming_title">
            <div>即将上映</div>
        </div>
        <div class="coming_soon">
            <div class="item" v-for="item in coming">
                <router-link :to="{name:'detail',params:{id:item.id}}">
                    <img :src="item.cover.origin" alt="">
                    <div class="item_bottom">
                        <div class="desc">
                            <h4>{{item.name}}</h4>
                        </div>
                        <div class="time">{{item.premiereAt|formatDate}}</div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    require('../assets/home.sass')
    import {swiper,swiperSlide} from 'vue-awesome-swiper'
    import {mapGetters} from 'vuex'

    export default{
        data(){
            return {}
        },
        created:function(){
            this.$store.commit('COM_CONF',{
				title:'卖座电影'
			})
            if(this.banner.length === 0){
				this.$store.dispatch('getBannerList')
			}
			if(this.nowplay.length === 0){
				this.$store.dispatch('getNowPlaying')
			}
			if(this.coming.length === 0){
				this.$store.dispatch('getComingSoon')
			}
        },
        computed:mapGetters({
            banner:"getBannerList",
            nowplay:'getNowPlaying',
			coming:'getComingSoon'
        }),
        filters:{
			formatDate:function(time){
				let date = new Date(time*1),
					month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1) ,
					day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();

				return `${month}月${day}日上映`
			}
		},
        components:{
            swiper,swiperSlide
        }
    }
</script>
