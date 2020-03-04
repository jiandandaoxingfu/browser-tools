document.addEventListener('click', e => {
	if( e.target.tagName.toLowerCase() === 'a' && e.target.parentNode.id === 'tool-box-jmx' ) {
		let action = e.target.text;
		switch( action ) {
			case '只看视频': 
				toolbox.video_only();
				break;
			case "下载视频":
				break;
			case "关闭窗口":
				toolbox.create();
				break;
			default: 
				break;
		}
	}
})