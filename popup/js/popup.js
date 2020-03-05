document.addEventListener('click', e => {
	if( e.target.tagName.toLowerCase() === 'button' && e.target.parentNode.id === 'tool-box-jmx' ) {
		let action = e.target.innerText;
		chrome.tabs.query({active: !0}, (tabs) => {
			message.send(tabs[0].id, 'action', {action: action});
		})
	}
})