class Toolbox {
	video_only() {
		let iframe = document.querySelector('iframe');
		if( iframe ) {
			document.body.innerHTML = iframe.parentNode.innerHTML;
		}
	}

	message_listener() {
		message.on('action', msg => {
			console.log(msg.action);
			switch( msg.action ) {
				case "只看视频":
					this.video_only();
					break;
				case '下载视频':
					break;
			}
		});
	}
}

var toolbox = new Toolbox();
toolbox.message_listener();