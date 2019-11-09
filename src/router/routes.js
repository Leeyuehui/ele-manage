const AddFood = () => import(/* webpackChunkName: "group-foo" */ '../views/addfood')
const AddShop = () => import(/* webpackChunkName: "group-foo" */ '../views/addshop')
const Admin = () => import(/* webpackChunkName: "group-foo" */ '../views/admin')
const Edit = () => import(/* webpackChunkName: "group-foo" */ '../views/edit')
const Explain = () => import(/* webpackChunkName: "group-foo" */ '../views/explain')
const Food = () => import(/* webpackChunkName: "group-foo" */ '../views/food')
const Order = () => import(/* webpackChunkName: "group-foo" */ '../views/order')
const Set = () => import(/* webpackChunkName: "group-foo" */ '../views/set')
const Shop = () => import(/* webpackChunkName: "group-foo" */ '../views/shop')
const User = () => import(/* webpackChunkName: "group-foo" */ '../views/user')
const UserDetri = () => import(/* webpackChunkName: "group-foo" */ '../views/user-detri')
const Login = () => import(/* webpackChunkName: "group-foo" */ '../views/login')
const Register= () => import(/* webpackChunkName: "group-foo" */ '../views/register')

export default [
    {
        path:'/',
        redirect: '/home'
    },
    {
        path:'/addfood',
        component: AddFood,
        meta:{
            name: 'addfood'
        }
    },
    {
        path:'/addshop',
        component: AddShop,
        meta:{
            name: 'addshop'
        }
    },
    {
        path:'/admin',
        component: Admin,
        meta:{
           name: 'admin'
        }
    },
    {
        path:'/edit',
        component: Edit,
        meta:{
          name: 'edit'
        }
    },
    {
        path:'/explain',
        component: Explain,
        meta: {
            name:'explain'
        }
    },
    {
        path:'/food',
        component: Food,
        meta: {
            name: 'food'
        }
    },
    {
        path:'/order',
        component: Order,
        meta: {
            name: 'order'
        }
    },
    {
        path:'/set',
        component: Set,
        meta: {
            name: 'set'
        }
    },
    {
        path:'/shop',
        component: Shop,
        meta: {
            name: 'shop'
        }
    },
    {
        path:'/user',
        component: User,
        meta: {
            name: 'user'
        }
    },
    {
        path:'/user-detri',
        component: UserDetri,
        meta:{
            name:'user-detri'
        }
    },
    {
        path:'/login',
        component: Login,
        meta: {
            name:'login'
        }
    },
    {
        path:'/register',
        component: Register,
        meta:{
            name:'register'
        }
    },
    {
        path:'*',
        component: Error
    }
]