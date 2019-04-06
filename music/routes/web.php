<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/test',function(){
    return view('test');
});

Route::any('/findallsong','MusicController@findallsong'); //搜索所有歌曲

Route::any('/playsong','MusicController@playsong'); //播放单独一首歌曲

Route::any('/hotlist','MusicController@hotlist'); //热门歌单

Route::any('/lovesong','MusicController@lovesong');//热门歌手单曲

Route::any('/songlist','MusicController@songlist'); //显示歌单的所有歌曲

Route::any('/lyrics','MusicController@getlyrics');//显示歌词