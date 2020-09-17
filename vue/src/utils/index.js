import * as prototype from './lib/prototype';
import * as poup from './lib/poup';
const objPro = {...prototype, ...poup};
export default {
    install(Vue) {
        Object.keys(objPro).forEach(item => {
            Vue.prototype[`$${item}`] = objPro[item];
        })
    }
}

