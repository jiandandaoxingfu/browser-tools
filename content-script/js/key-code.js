function showKeyName(e) {
	// reference: https://www.cnblogs.com/zzcflying/articles/2660061.html
	var keyName;
	switch (e.keyCode) {
		case 8:
			keyName = "退格";				break;		case 9:
			keyName = "Tab";				break;		case 13:
			keyName = "Enter";				break;		case 16:
			keyName = "Shift";				break;		case 17:
			keyName = "Ctrl";				break;		case 18:
			keyName = "Alt";				break;		case 19:
			keyName = "Pause	Break";		break;		case 20:
			keyName = "Caps Lock";			break;		case 27:
			keyName = "Esc";				break;		case 32:
			keyName = "空格";				break;		case 33:
			keyName = "PageUp";				break;		case 34:
			keyName = "PageDown";			break;		case 35:
			keyName = "End";				break;		case 36:
			keyName = "Home";				break;		case 37:
			keyName = "方向键左";			break;		case 38:
			keyName = "方向键上";			break;		case 39:
			keyName = "方向键右";			break;		case 40:
			keyName = "方向键下";			break;		case 45:
			keyName = "Insert";				break;		case 46:
			keyName = "Delete";				break;		case 91:
			keyName = "左Win";				break;		case 92:
			keyName = "右Win";				break;		case 93:
			keyName = "快捷菜单键";			break;		case 95:
			keyName = "Sleep";				break;		case 96:
			keyName = "小键盘区0";			break;		case 97:
			keyName = "小键盘区1";			break;		case 98:
			keyName = "小键盘区2";			break;		case 99:
			keyName = "小键盘区3";			break;		case 100:
			keyName = "小键盘区4";			break;		case 101:
			keyName = "小键盘区5";			break;		case 102:
			keyName = "小键盘区6";			break;		case 103:
			keyName = "小键盘区7";			break;		case 104:
			keyName = "小键盘区8";			break;		case 105:
			keyName = "小键盘区9";			break;		case 106:
			keyName = "*";					break;		case 107:
			keyName = "+";					break;		case 109:
			keyName = "-";					break;		case 110:
			keyName = ".";					break;		case 111:
			keyName = "/";					break;		case 112:
			keyName = "F1";					break;		case 113:
			keyName = "F2";					break;		case 114:
			keyName = "F3";					break;		case 115:
			keyName = "F4";					break;		case 116:
			keyName = "F5";					break;		case 117:
			keyName = "F6";					break;		case 118:
			keyName = "F7";					break;		case 119:
			keyName = "F8";					break;		case 120:
			keyName = "F9";					break;		case 121:
			keyName = "F10";				break;		case 122:
			keyName = "F11";				break;		case 123:
			keyName = "F12";				break;		case 144:
			keyName = "NumLock";			break;		case 145:
			keyName = "ScrollLock";			break;		case 186:
			keyName = ";";					break;		case 187:
			keyName = "=";					break;		case 188:
			keyName = ",";					break;		case 189:
			keyName = "-";					break;		case 190:
			keyName = ".";					break;		case 191:
			keyName = "/";					break;		case 192:
			keyName = "`";					break;		case 219:
			keyName = "[";					break;		case 220:
			keyName = "\\";					break;		case 221:
			keyName = "]";					break;		case 222:
			keyName = "'";					break;		case 255:
			keyName = "Wake";				break;		default:
			keyName = "" + String.fromCharCode(e.keyCode) + "";	break;	}
	if ((e.shiftKey) && (e.keyCode != 16)) {
		keyName = "Shift + " + keyName;
	}
	if ((e.altKey) && (e.keyCode != 18)) {
		keyName = "Alt + " + keyName;
	}
	if ((e.ctrlKey) && (e.keyCode != 17)) {
		keyName = "Ctrl + " + keyName;
	}
	return keyName;
}

document.addEventListener('keydown', e => {
	let code = showKeyName(e);
	console.log(code);
	switch( code ) {
		case 'Ctrl + I': 
			toolbox.create();
			break;
		default:
			break;
	}
})
