class Toolbox {
	create() {
		let tool_box = document.querySelector('#tool-box-jmx');
		if( tool_box ) {
			tool_box.style.display = tool_box.style.display === 'block' ? 'none' : 'block';
		} else {
			let btn = `
			   	<br>
			   	<a href="javascript: void(0);">只看视频</a>
			   	<a href="javascript: void(0);">下载视频</a>
			   	<a href="javascript: void(0);">等待添加</a>
			   	<a href="javascript: void(0);">等待添加</a>
			   	<br><br><br>
			   	<a href="javascript: void(0);">等待添加</a>
			   	<a href="javascript: void(0);">等待添加</a>
			   	<a href="javascript: void(0);">等待添加</a>
			   	<a href="javascript: void(0);">等待添加</a>
			   	<br><br><br>
			   	<a href="javascript: void(0);">等待添加</a>
			   	<a href="javascript: void(0);">等待添加</a>
			   	<a href="javascript: void(0);">等待添加</a>
			   	<a href="javascript: void(0);">等待添加</a>
			   	<br><br><br>
			   	<a href="javascript: void(0);">等待添加</a>
			   	<a href="javascript: void(0);">等待添加</a>
			   	<a href="javascript: void(0);">等待添加</a>
			   	<a href="javascript: void(0);">等待添加</a>
			   	<br><br><br>
			   	<a href="javascript: void(0);">关闭窗口</a>
			`
			document.body.innerHTML += `
				<div id="tool-box-jmx">
  					${btn}
				</div>`;
		}
	}

	video_only() {
		let iframe = document.querySelector('iframe');
		if( iframe ) {
			document.body.innerHTML = iframe.parentNode.parentNode.innerHTML;
		}
	}
}

var toolbox = new Toolbox();