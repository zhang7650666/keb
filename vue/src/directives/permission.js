import store from '@/store'

export default {
    inserted(el, binding) {
        const {value: permissionRoles} = binding;
        const roles = store.state.user.roles;
        if(permissionRoles && premissionRoles instanceof Array && permissionRoles.length > 0) {
            const hasPermission = roles.some(role => permissionRoles.includes(role));
            if(!hasPermission) {
                el.parentNode && el.parentNode.removeChild(el);
            }
        } else {
            throw new Error('你需要抛出一个数组类型的权限，如 v-permission="[admin]"')
        }
    }
}