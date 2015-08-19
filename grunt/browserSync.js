module.exports = {
	dev: {
        bsFiles: {
            src: [
                'public/css/*',
                'public/js/*',
                'webapp/views/**/*'
            ]
        },
        options: {
            proxy: '<%= php.dev.options.hostname %>:<%= php.dev.options.port %>',
            watchTask: true,
            notify: true,
            open: true,
            logLevel: 'silent'
        }
    }
}