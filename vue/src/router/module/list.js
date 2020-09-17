const list = {
    path: '/',
    name: 'shop',
    component: () => import('@/views/list/shop'),
    redirect: '/list',
    meta: {
        title: '商品'
    },
    children: [
        {
            path: 'list',
            name: 'list',
            component: () => import('@/views/list/list'),
            meta: {
                title: '列表'
            }
        },
        {
            path: 'detail/:id',
            name: 'detail',
            component: () => import('@/views/list/detail'),
            props: true, // 如果加上这个配置项路由参数可以作为props的属性
            meta: {
                title: '详情'
            }
        }
    ]
}

export default list;