let app = {
    siteURL: "/",
    sourcePath: "./app/src/",
    distPath: "./dist/",
    indexPath: "./dist/index.html",
    entryPath: "./src/entries/",
    main: "./src/root.js",
    staticPath: "./src/static",
    baseInfo: {
        name: "test",
        description: "test",
        icons: [],
        charset: "UTF-8",
        meta: [
            { name: 'viewport', content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no" },
            { name: 'format_detection', content: "telephone=no" },
            { name: 'apple_mobile_web_app_status_bar_style', content: "white" },
            { name: 'apple_mobile_web_app_capable', content: "yes" }
        ]
    },
    server: {
        serverPath: "./index.js",
        port: 8081,
        proxy: [
            {
                path: ["/api/","/comet/"], option: {
                    target: 'http://127.0.0.1:8189',
                    changeOrigin: true
                }
            }
        ]
    },
    ssr: {
        urls: ["/"],
        output: "./dist2/"
    }
};
module.exports = app;