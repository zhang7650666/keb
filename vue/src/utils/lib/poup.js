import Vue from 'vue';
import {Toast} from '@/components/base'

class CreateComponent {
    constructor() {
        this.vm = '';
        this.comp = '';
    }
    init(Component, props) {
        this.vm = new Vue({
            render(h) {
                return h(Component, {props})
            }
        }).$mount();
        this.comp = this.vm.$children[0];
    }
    toast() {
        document.body.appendChild(this.vm.$el);
        setTimeout(() => {
            document.body.removeChild(this.vm.$el);
            this.vm.$destroy()
        }, this.comp.duration)
    }
}

const create =  new CreateComponent();

const toast = function(args) {
    create.init(Toast, args);
    create.toast();
}


export {
    toast
}




const ToastConstructor = Vue.extend(Toast); // 返回一个扩展实例构造器
const showToast = function(args) {
    const {title = '', message = '', icon = '', duration = 2000} = args
    const toastDom = new ToastConstructor({
        el: document.createElement('div'),
        data() {
            return {
                title,
                message,
                icon,
                duration
            }
        }
    });
    document.body.appendChild(toastDom.$el);
    setTimeout(() => {
        document.body.removeChild(toastDom.$el);
        toastDom.$destroy();
    }, duration)
}