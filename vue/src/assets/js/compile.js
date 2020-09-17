class Compile {
    constructor(options) {
        this.$vm = options.vm;
        this.$el = document.querySelector(options.el)

        // 把模板中内容移到片段中操作
        this.$fragment = this.nodeToFragment(this.$el);
        this.compile(this.$fragment);
    }

    nodeToFragment(el) {
        const fragment = document.createDocumentFragment();
        let child;
        while (child = el.firstChild ) {
            fragment.appendChild(child);
        }
        return fragment;
    }

    // 编译模板
    compile(el){
        const childNodes = el.childNodes;
        Array.from(childNodes).forEach(node => {
            if(node.nodeType == 1) {
                console.log('编译元素节点:' + node.nodeName)
            } else if(this.isInter(node)) {
                console.log('文本几点：' + node.textContent)
            }
            if(node.children && node.childNodes.length > 0) {
                this.compile(node)
            }
        })
        
    }

    isInter(node) {
        return node.nodeType == 3 && /\{\{(.*)\}\}/.test(node.textContent);
    }
}