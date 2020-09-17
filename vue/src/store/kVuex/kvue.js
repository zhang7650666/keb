let Vue;

function install(_Vue) {
    Vue = _Vue;
    Vue.mixin({
        beforeCreate() {
            if (this.$options.store) {
                Vue.prototype.$kstore = this.$options.store;
              }
            
        }
        
    })
}

class KStore {
    constructor(options = {}) {
        this.state = new Vue({
            data: options.state,
        });
        this.$options = options;
        this.mutations = options.mutations || {};
        this.actions = options.actions || {};
        options.getters && this.handleGetters(options.getters)
    }

    commit(type, args) {
        const commitFn = this.mutations[type];
        commitFn(this.state, args);
    }
    dispatch(type, args) {
        const dispFn = this.actions[type];
        return dispFn({commit: this.commit, state: this.state}, args)
    }

    handlerGatters(gatters) {
        this.gatters = {};
        Object.keys(gatters).forEach(key => {
            Object.defineProperty(this.gatters, key, {
                get: () =>{
                    return this.gatters[key](this.state)
                }
            })
        })
    }
}

export default {KStore, install}