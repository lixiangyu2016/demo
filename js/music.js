var music = document.getElementById("music"),
	musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
	musicAudio.play();//->让音频播放:浏览器开始下载资源文件,也就是让它播放到出声音还需要一段时间,只有发出声音后我们才会显示音乐的图标
	musicAudio.addEventListener("canplay", function () {
		//->canplay:音频文件已经可以播放了,但是不一定是所有资源都加载完成了,大部分是边播放边记载
		music.style.display = "block";
	}, false);
}, 1000);
music.addEventListener("click", function () {
	//->当前是暂停状态我让其播放
	if (musicAudio.paused) {
		musicAudio.play();
		music.className = "music musicMove";
		return;
	}
	//->当前是播放状态我让其暂停
	musicAudio.pause();
	music.className = "music";
}, false);