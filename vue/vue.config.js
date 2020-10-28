const path = require('path');
const bodyParse = require('body-parser');
const ENV = process.argv[4];
const resolve = (dir) =>  path.join(__dirname, dir)
module.exports = {
    lintOnSave: false,
    // publicPath: ''
    configureWebpack: {
        name: 'Hadwin'
    },
    chainWebpack(config) {
        config.module.rule('svg').exclude.add(resolve('src/assets/fonts'));
        config.module.rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/fonts'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end();
    },
    devServer: {
        before: app => {
            app.use(bodyParse.json());
            app.post('/user/login', (req, res) =>{
                const {username} = req.body;
                if(username == 'admin') {
                    res.json({
                        code: 1,
                        data: username,
                        msg: 'succ'
                    })
                } else {
                    res.json({
                        code: 0,
                        msg: '用户名或密码错误'
                    })
                }
            })
            app.get('/user/getInfo', (req, res) => {
                const auth = req.headers['authorization'];
                console.log('auth11111', auth.split(" "))
                const role = auth.split(" ")[1] == 'admin' ? ['admin'] : ['eadit']
                res.json({
                    code: 1,
                    data: role
                })
            })
        }
    }
    
}
