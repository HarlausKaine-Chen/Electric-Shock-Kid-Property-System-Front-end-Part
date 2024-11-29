import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import user from '@/views/modules/user/list'
import hostelInfo from '@/views/modules/hostelInfo/list'
import hostelApply from '@/views/modules/hostelApply/list'
import weFees from '@/views/modules/weFees/list'
import repair from '@/views/modules/repair/list'
import notice from '@/views/modules/notice/list'
 


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/user',
        name: '用户',
        component: user
      },{
	path: '/hostelInfo',
        name: '住宿信息',
        component: hostelInfo
      },
	  {
	  path: '/weFees',
	      name: '宿舍水电费查询',
	      component: weFees
	    },
		{
	path: '/hostelApply',
        name: '宿舍申请和退宿',
        component: hostelApply
      },
	  {
	  path: '/repair',
	      name: '报修登记与进度查询',
	      component: repair
	    },
	{
	path: '/notice',
	    name: '公告信息',
	    component: notice
	  },
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
