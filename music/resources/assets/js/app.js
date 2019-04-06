require('./bootstrap');
import VueRouter from 'vue-router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(MuseUI)
Vue.use(VueRouter)

//导入本人所写的组件
import App from './App.vue'
import LoveSong from './components/Music/LoveSong.vue'
import FindSongList from './components/Music/FindSongList.vue'
import SearchMusic from './components/Music/SearchMusic.vue'
import SongList from './components/Music/SongList.vue'
import Lyrics from './components/Music/Lyrics.vue'
import MyCollect from './components/Music/MyCollect.vue'

//vuerouter路由
const router = new VueRouter({
    routes: [
        { path: '/', component: FindSongList },
        { path: '/findlovesong', component: LoveSong },
        { path: '/searchmusic', component: SearchMusic },
        { path: '/songlist/:songlistId', name: 'songlist', component: SongList },
        { path: '/lyrics/:songid', name: 'lyrics', component: Lyrics },
        { path: '/mycollect', component: MyCollect },
    ]
})

//vuex的单例模式
const store = new Vuex.Store({
    state: {
        songid: 0, //播放歌曲的id
        audio: document.createElement('audio'),
        songlist: [
            {
                songtitle: '你还要我怎样',
                songer: '薛之谦',
                album: '意外',
                songid: '27955653',
            },
            {
                songtitle: '我好像在哪见过你',
                songer: '薛之谦',
                album: '初学者',
                songid: '417859631',
            }
        ],
    },
    mutations: {
        //设置播放歌曲的id
        setsongid(state, payload) {
            state.songid = payload.songid;
        }
    },
    actions: {
        //调用mutations的函数
        playsong({ commit }, payload) {
            commit('setsongid', payload);
        },
    }
})


//初始化
const app = new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
    store,
});
