//这个文件就是用来模拟数据的文件
export default {
    'POST /api/checkAuth': (req, res) => {
        res.json({
            data: {
                status: 1,
                msg: '验证成功',
                root: 'admin'
            }
        })
    },
    'POST /api/register': (req, res) => {
        console.log('req', req.body);

        res.json({
            data: {
                status: 1,
                msg: '注册成功'
            }
        })
    },
    'POST /api/login': (req, res) => {
        res.json({
            data: {
                status: 1,
                msg: '登录成功',
                username: 'zhangfeng',
                root: 'admin',
                avatar: 'http://elm.cangdu.org/img/1765c6aebcd83975.jpg',
                token:'adhsufnskdjfnaklds12563958'
            }
        })
    }
}