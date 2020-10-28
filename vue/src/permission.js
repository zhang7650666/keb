import store from '@/store';
import router from '@/router'
import {getToken, setToken} from '@/utils/lib/auth'

const whiteList = ['/login'];

router.beforeEach(async (to, from, next) => {
    if(getToken()) {
        console.log('store1111', store)
        const roles = store.state.user.roles && store.state.user.roles.length > 0;
        if(to.path == '/login') {
            console.log(2222)
            next({path: '/'})
        } else if(roles) {
            console.log(225)
            next();
        } else {
            try {
                console.log(33333)
                // 先请求获取用户信息
                const { roles } = await store.dispatch("user/getUserInfo");
                // 根据当前用户角色动态生成路由
                console.log(333334)
                const accessRoutes = await store.dispatch(
                  "permission/generateRoutes",
                  roles
                );
                console.log(333335)
                // 添加这些路由至路由器
                router.addRoutes(accessRoutes);
                console.log(333336)
                // 继续路由切换，确保addRoutes完成
                next({ ...to, replace: true });
              } catch (error) {
                console.log(4444)
                // 出错需重置令牌并重新登录（令牌过期、网络错误等原因）
                await store.dispatch("user/resetToken");
                next(`/login?redirect=${to.path}`);
              }
        }
    } else {
        if(whiteList.includes(to.path)) {
            console.log(55555)
            next();
        } else {
            console.log(666666)
            next(`/login?redirect=${to.path}`)
        }
    }
})
