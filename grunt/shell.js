var ftpCommand = function(folder, ip) {
	return 'lftp -u "dd,dd" -e "mirror --exclude \'cache/\' --exclude app.db --exclude composer.json --exclude composer.lock -R -L -e webapp /srv/www/doka/'+folder+'/revolution/webapp;mirror -R -L -e public /srv/www/doka/'+folder+'/revolution/public;mirror -R -L -e data /srv/www/doka/'+folder+'/revolution/data;put -O /srv/www/doka/'+folder+'/revolution index.php; bye" sftp://'+ip
}

var ftpCommandCms = function(ip) {
	return 'lftp -u "dd,dd" -e "mirror -R -L -e public /Node/var/httpd/htdocs/revolution/public;mirror -R -L -e data /Node/var/httpd/htdocs/revolution/data;mirror -R -L -e cms /Node/var/httpd/htdocs/revolution/cms; bye" sftp://'+ip
}

module.exports = {
	options: {
		stdout: true,
		stderr: true,
		stdin: true
	},
	syncDevelopmentWeb: {
		command: ftpCommand('test.example.com', '62.99.231.27')
	},
	syncDevelopmentCms: {
		command: ftpCommandCms('10.1.1.192')
	},
	syncLiveWeb: {
		command: ftpCommand('live.example.com', '62.99.231.26')
	},
	syncLiveCms: {
		command: ftpCommandCms('10.1.1.193')
	}
}