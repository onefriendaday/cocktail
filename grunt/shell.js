var ftpCommand = function(folder, ip) {
	return 'lftp'
}

var ftpCommandCms = function(ip) {
	return 'lftp'
}

module.exports = {
	options: {
		stdout: true,
		stderr: true,
		stdin: true
	},
	syncDevelopmentWeb: {
		command: ftpCommand('test.example.com', '10.0.0.1')
	},
	syncDevelopmentCms: {
		command: ftpCommandCms('10.0.0.1')
	},
	syncLiveWeb: {
		command: ftpCommand('live.example.com', '10.0.0.1')
	},
	syncLiveCms: {
		command: ftpCommandCms('10.0.0.1')
	}
}