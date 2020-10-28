import {constRoutes, asyncRoutes} from '@/router'

const hasPremisseion = (route, roles) => {
    if(route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role))
    } else {
        return true
    }
}
const asyncFilterRoutes = (routes, roles) => {
    const res = [];
    routes.forEatch(route => {
        const tem = {...route};
        if(hasPremisseion(tem, roles)) {
            if(tem.children) {
                tem.children = asyncFilterRoutes(tem, roles)
            }
            res.push(tem);
        }
    })
    return res;
}


export default {
    namespaced: true,
    state: {
        routes: [],
        saveAsyncRoutes: [],
    },
    mutations: {
        concatRoutes(state, routes) {
            state.saveAsyncRoutes = routes;
            state.routes = constRoutes.concat(routes)
        }
    },
    actions: {
        generateRoutes({commit}, roles) {
            return new Promise((resolve, reject) => {
                let accessedRoutes = '';
                if(roles.includes('admin')) {
                    accessedRoutes = asyncRoutes || [];
                } else {
                    accessedRoutes = asyncFilterRoutes(asyncRoutes, roles)
                }
                commit('concatRoutes', accessedRoutes);
                resolve(accessedRoutes)
            })
        }
    }
}