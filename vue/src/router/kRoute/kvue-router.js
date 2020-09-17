let Vue;
class VueRouter {
  constructor(options) {
    this.$options = options;
    this.routeMap = {};
    this.app = new Vue({
      data: {
        current: '/'
      }
    })
  }
  init() {
    this.bindEvent();
    this.createRouteMap();
    this.initComponent();
  }
  bindEvent() {
    window.addEventListener('load', this.onHashChange().bind(this), false)
    window.addEventListener('hashChange', this.onHashChange().bind(this), false)
  }

  onHashChange() {
    this.app.current = window.location.hash.slice(1) || '/';
  }

  createRouteMap() {
    this.$options.routes.forEach(item => {
      this.routeMap[item.path] = item;
    })
  }
  initComponent() {
    Vue.component('router-link', {
      props: {
        to: String
      },
      render(h) {
        return h('a', {
          attrs: {
            href: '#' + this.to
          }
        }, this.$slots.default)
      }
    })

    Vue.component('router-view', {
        render: (h) => {
            const Comp = this.routeMap[this.app.current].component;
            return h(Comp)
        }
    })
  }
}

VueRouter.install = function (_Vue) {
  Vue = _Vue;

  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
        this.$options.router.init();
      }
    }
  })
}
