const path = require('path')
module.exports={
        chainWebpack: config =>{
            config.resolve.alias
                .set('@',path.join(__dirname,'src'))
                .set('assets',path.join(__dirname,'src/assets'))
                .set('components',path.join(__dirname,'src/assets/components'))
                .set('layout',path.join(__dirname,'src/assets/layout'))
                .set('router',path.join(__dirname,'src/assets/router'))
                .set('store',path.join(__dirname,'src/assets/store'))
                .set('views',path.join(__dirname,'src/assets/views'))
                .set('utils',path.join(__dirname,'src/utils'))
        },
        devServer: {
                // open: true,
                // proxy: {
                //         '/shop': {
                //                 target:'http://localhost:3000',
                //                 changeOrigin:true
                //         }
                // }
        }
}