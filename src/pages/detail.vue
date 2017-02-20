<template>
    <div id="detail" v-if="detail">
        <img :src="detail.cover.origin">
        <div class="intro">影片简介</div>
        <ul>
            <li>导&nbsp&nbsp演：{{detail.director}}</li>
            <li>主&nbsp&nbsp演：<span v-for="item in detail.actors">{{item.name}}</span></li>
            <li>地区语言：{{detail.nation}}({{detail.language}})</li>
            <li>类&nbsp&nbsp型：{{detail.category}}</li>
            <li>上映日期：{{detail.premiereAt|getDay}}</li>
            <li class="p">{{detail.synopsis}}</li>
        </ul>

    </div>
</template>
<script>
    require('../assets/detail.sass')
    import {mapGetters} from 'vuex'

    export default{
        created:function(){
            let id = this.$route.params.id
            this.$store.dispatch('getFilmDetail',id)
        },
        filters:{
			getDay:function(time){
				let date = new Date(time*1),
						year = date.getFullYear(),
						month = date.getMonth()+1 > 9 ? date.getMonth()+1 : '0' + (date.getMonth() + 1),
						day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();

				return year + '-' + month + '-' + day;
			}
		},
        computed:mapGetters({
			detail:'getFilmDetail'
		})
    }

</script>
