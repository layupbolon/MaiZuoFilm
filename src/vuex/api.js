import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

var url = process.env.NODE_ENV !== 'production' ? '/api/' : 'http://m.maizuo.com/v4/api/';
export default {
    /**
     * 根据请求的时间戳获取banner列表
     */
    getBannerList:function (cb) {
        Vue.http.get(url + 'billboard/home?t=' + new Date()*1 + '&callback=?').then(function(res){
            if(res.status >= 200 && res.status <300){
                cb(res.data)
            }
        },function(error){
            return Promise.reject(error);
        })
    },
    /**
     * 获取首页热映电影
     */
    getNowPlaying:function(cb){
        Vue.http.get(url + 'film/now-playing?_t=' + new Date()*1 +'&page=1&count=5').then(function(res){
            if(res.status >= 200 && res.status <300){
                cb(res.data)
            }
        },function(error){
            return Promise.reject(error);
        })
    },
    /**
     * 获取首页即将上映电影
     */
    getComingSoon:function(cb){
        Vue.http.get(url + 'film/coming-soon?__t=' + new Date()*1 +'&page=1&count=3').then(function(res){
            if(res.status >= 200 && res.status < 300){
                cb(res.data)
            }
        },function(error){
            return Promise.reject(error);
        })
    },
    /**
     * 根据id获取相关影片信息
     */
    getFilmDetail:function(id,cb){
        Vue.http.get(url + 'film/' + id + '?__t=' + new Date()*1).then(function(res){
            if(res.status >= 200 && res.status < 300){
                cb(res.data)
            }
        },function(error){
            return Promise.reject(error);
        })
    },
    /**
     * 获取热映列表
     */
    getNowPlayList:function(page,cb){
        Vue.http.get(url + 'film/now-playing?page=' + page + '&count=10').then(function(res){
            if(res.status >= 200 && res.status <300){
                cb(res.data)
            }
        },function(error){
            return Promise.reject(error);
        })
    },
    /**
     * 获取即将上映列表
     */
    getComingList:function(page,cb){
        Vue.http.get(url + 'film/coming-soon?page=' + page +'&count=10').then(function(res){
            if(res.status >= 200 && res.status < 300){
                cb(res.data)
            }
        },function(error){
            return Promise.reject(error);
        })
    },
}