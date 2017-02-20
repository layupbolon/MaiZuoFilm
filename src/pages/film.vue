<template>
    <div id="film">
        <div class="tabBar">
            <div class="item" @click="changeBar('now-playing')" :class="type==='now-playing'?'active':''">正在热映</div>
            <div class="item" @click="changeBar('coming-soon')" :class="type==='coming-soon'?'active':''">即将上映</div>
        </div>
        <div class="tab_content">
            <transition-group tag="div" name="list" class="now-playing" v-if="type==='now-playing'">
                <router-link v-for="item in nowList" class="item" :key="item" :to="{name:'detail',params:{id:item.id}}">
                    <div class="avater">
                        <img :src="item.poster.thumbnail" alt="">
                    </div>
                    <div class="info">
                        <h4>{{item.name}}</h4>
                        <p>{{item.intro}}</p>
                        <span>{{item.cinemaCount}}家影院上映&nbsp&nbsp{{item.watchCount}}人购票</span>
                    </div>
                    <div class="grade">{{item.grade}}</div>
                </router-link>
            </transition-group>
            <transition-group tag="div" name="list" class="coming-soon" v-if="type==='coming-soon'">
                <router-link v-for="item in comingList" class="item" :key="item" :to="{name:'detail',params:{id:item.id}}">
                    <div class="avater">
                        <img :src="item.poster.thumbnail" alt="">
                    </div>
                    <div class="info">
                        <h4>{{item.name}}</h4>
                        <p>{{item.intro}}</p>
                        <div class="date">{{item.premiereAt|formatDate}}</div>
                    </div>
                </router-link>
            </transition-group>
        </div>
    </div>
</template>
<script>
    require('../assets/film.sass')
    import {mapGetters} from 'vuex'
    export default{
        data(){
            return{
                type:''
            }
        },
        computed:mapGetters({
			nowList:'getNowPlayList',
			comingList:'getComingList'
		}),
		created:function(){
            document.body.scrollTop = 0;
			this.type = this.$route.params.type
			if(this.type == 'now-playing' && this.nowList.length == 0){
				this.$store.dispatch('getNowPlayList')
			}else if(this.type == 'coming-soon' && this.comingList.length == 0){
				this.$store.dispatch('getComingList')
			}
		},
		filters:{
			formatDate:function(time){
				let date = new Date(time*1),
					month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1) ,
					day = date.getDate()  > 9 ? date.getDate()  : '0' + date.getDate(),
					week = date.getDay();

				let arr = ['日','一','二','三','四','五','六']

				return `${month}月${day}日上映 星期${arr[week]}`
			}
		},
        methods:{
            changeBar:function(type){
                if(this.type === type){
                    return false;
                }
                this.type = type
                this.$router.replace({params:{type:type}})
				if(this.type == 'now-playing' && this.nowList.length == 0){
					this.$store.dispatch('getNowPlayList')
				}else if(this.type == 'coming-soon' && this.comingList.length == 0){
					this.$store.dispatch('getComingList')
				}
            }
        }
    }
</script>
