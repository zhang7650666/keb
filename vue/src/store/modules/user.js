import {getToken, setToken, removeToken} from '@/utils/lib/auth'
import {login, getInfo} from '@/api/user'

const state = {
    token: getToken(),
    roles: [],
}

const  mutations = {
    setTokenx(state, token) {
        state.token = token;
    },
    setRoles(state, roles) {
        state.roles = roles; 
    }
}

const actions = {
    login({commit}, userInfo) {
        return login(userInfo).then((res) => {
            commit("setTokenx", res.data);
            setToken(res.data);
          });
        // const {username} = userinfo;
        // console.log('userinfo', userinfo)
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         if(username == 'admin') {
        //             commit('setTokenx', username);
        //             setToken(username);
        //             console.log('username', username)
        //             resolve()
        //         } else {
        //             reject('用户名、密码错误')
        //         }
        //     })
        // })
    },

    getUserInfo({commit, state}) {
        return getInfo(state.token).then(({data: roles}) => {
            commit("setRoles", roles);
            return {roles}
          })
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         const roles = state.token == 'admin' ? ['admin'] : ['eadit'];
        //         commit('setRoles', roles);
        //         resolve({roles});
        //     })
        // })
    },
    // remove token
    resetToken({ commit }) {
    return new Promise(resolve => {
      commit("setTokenx", "");
      commit("setRoles", []);
      removeToken();
      resolve();
    });
  }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}