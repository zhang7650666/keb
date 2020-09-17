


class KVue {
    constructor(options) {
    console.log(111111, options)

        this.$options = options;

        this.$data = options.data;
        this.observer(this.$data)

        // new Watcher(this, "name");
        // this.name; //读一次，触发依赖收集
        // new Watcher(this, "other.like");
        // this.other.like;
        new Compile({el: options.el, vm: this});
    }

    observer(data) {
        if(data && Object.prototype.toString.call(data).slice(8, -1) === 'Object') {
             Object.keys(data).forEach(key => {
                this.defineRedirect(data, key, data[key])
                this.proxyData(key); // 代理转发一下数据
            });
        }
    }

    defineRedirect(obj, key, val) {
        // 递归遍历
        this.observer(val);
        // 依赖收集
        const dep = new Dep()
        // 数据劫持
        Object.defineProperty(obj, key, {
                get() {
                    Dep.target && dep.addDep(Dep.target);
                    return val;
                },
                set(newVal) {
                    if(newVal !==val) {
                      val = newVal;
                      dep.notify();
                    }
                }
            }) 
    }
    // 将data数据挂在到跟节点上
    proxyData(key) {
        Object.defineProperty(this, key, {
            get() {
                return this.$data[key]
            },
            set(newVal) {
                this.$data[key] = newVal;
            }
        })
    }
}


class Dep{
    constructor() {
        this.watchers = []
    }
    addDep(watcher){
        this.watchers.push(watcher)
    }

    notify() {
        this.watchers.forEach(watcher => {
            watcher.update();
        })
    }
}

class Watcher {
    constructor(vm, key) {
        this.vm = vm;
        this.key = key;
        Dep.target = this;
        // console.log('this', this)
    }
    update() {
        // console.log(this.key + ' :watch 数据更新了')
    }
}












