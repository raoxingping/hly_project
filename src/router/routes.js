import Comment from '@/components/public/Comment'//公用页面
import AgenciesDetail from '@/components/Agencies/AgenciesDetail'//跟团游详情页
import AdminLogin from '@/components/AdminLogin'//登录
import Register from '@/components/Register'//游客注册
import AgenciesHome from '@/components/Agencies/AgenciesHome'//跟团游首页
import HeelTourSearchMore from '@/components/Agencies/HeelTourSearchMore' //跟团游查询更多
import MerchantRegister from '@/components/VendorRegistration/MerchantRegister'//供应商注册
import Agents from '@/components/VendorRegistration/Agents'//代理商注册

import FillInOrder from '@/components/Agencies/FillInOrder'//填写订单
import PersonalCenter from '@/components/PersonakCenterFolder/PersonalCenter'//个人中心
import MyTourOrder from '@/components/PersonakCenterFolder/MyTourOrder'//我的订单
import PersonalDataDetails from '@/components/PersonakCenterFolder/PersonalDataDetails'//个人信息
import UpdatePassword from '@/components/PersonakCenterFolder/UpdatePassword'//修改密码
import PaymentPlatform from '@/components/public/PaymentPlatform'//订单支付的类型
import MyOrderQRCode from '@/components/MyOrderQRCode'//二维码付款
import MyOrderDetails from '@/components/PersonakCenterFolder/MyOrderDetails'//订单详情
import TicketOrderDetails from '@/components/PersonakCenterFolder/TicketOrderDetails'//门票订单详情
import HotelOrderDetails from '@/components/PersonakCenterFolder/HotelOrderDetails'//酒店订单详情
import MyCollection from '@/components/PersonakCenterFolder/MyCollection' //我的收藏
import CommentOnAComment from '@/components/Agencies/CommentOnAComment' //发表评论

import MyPoints from '@/components/PersonakCenterFolder/MyPoints'//我的积分
//微信支付


import AdmissionTicketHomePage from '@/components/Tickets/AdmissionTicketHomePage'//门票首页
import TicketsDetail from '@/components/Tickets/TicketsDetail'//门票详情
import TicketsReserve from '@/components/Tickets/TicketsReserve'//门票预定
import AdmissionTicketMore from '@/components/Tickets/AdmissionTicketMore' //更多门票


import HotelHomePage from '@/components/Hotel/HotelHomePage'//酒店首页
import HotelSearchMore from '@/components/Hotel/HotelSearchMore'//酒店查询更多
import HotelDetalis from '@/components/Hotel/HotelDetalis'//酒店详情页
import HotelOrder from '@/components/Hotel/HotelOrder' //酒店订单页
import HotelParentChildTour from '@/components/Hotel/HotelParentChildTour'//酒店亲子游
import HotelLovers from '@/components/Hotel/HotelLovers' //情侣酒店
import HotelMountaineering from '@/components/Hotel/HotelMountaineering'//依山酒店
import HotelAncientTown from '@/components/Hotel/HotelAncientTown' //古镇酒店
import HotelInn from '@/components/Hotel/HotelInn'//客栈酒店
import HotelQingLv from '@/components/Hotel/HotelQingLv'//青旅酒店


export default [
  //青旅酒店
  {
    path: '/hotelQingLv/:id',
    name: 'HotelQingLv',
    component: HotelQingLv
  },
  //古镇酒店
  {
    path: '/hotelAncientTown/:id',
    name: 'HotelAncientTown',
    component: HotelAncientTown
  },
  //客栈酒店
  {
    path: '/hotelInn/:id',
    name: 'HotelInn',
    component: HotelInn
  },
  //酒店订单页
  {
    path: '/hotelOrder',
    name: 'HotelOrder',
    component: HotelOrder
  },
  //依山酒店
  {
    path: '/hotelMountaineering/:id',
    name: 'HotelMountaineering',
    component: HotelMountaineering
  },
  //情侣酒店
  {
    path: '/hotelLovers/:id',
    name: 'HotelLovers',
    component: HotelLovers
  },
  //酒店亲子游
  {
    path: '/hotelParentChildTour/:id',
    name: 'HotelParentChildTour',
    component: HotelParentChildTour
  },
  //发表评论
  {
    path: '/commentOnAComment/:id',
    name: 'CommentOnAComment',
    component: CommentOnAComment
  },
  //订单支付的类型
  {
    path: '/paymentPlatform',
    name: 'PaymentPlatform',
    component: PaymentPlatform
  },
  //门票预定
  {
    path: '/ticketsReserve/:id',
    name: 'TicketsReserve',
    component: TicketsReserve
  },
  //二维码支付订单
  {
    path: '/myOrderQRCode',
    name: 'MyOrderQRCode',
    component: MyOrderQRCode
  },
  //旅行社订单详情
  {
    path: '/myOrderDetails',
    name: 'MyOrderDetails',
    component: MyOrderDetails
  },
  //门票订单详情
  {
    path: '/ticketOrderDetails',
    name: 'TicketOrderDetails',
    component: TicketOrderDetails
  },
  //酒店订单详情
  {
    path: '/hotelOrderDetails',
    name: 'HotelOrderDetails',
    component: HotelOrderDetails
  },
  //供应商注册
  {
    path: '/merchantRegister',
    name: 'MerchantRegister',
    component: MerchantRegister
  },
  //代理商注册
  {
    path: '/agents',
    name: 'Agents',
    component: Agents
  },
  //个人中心
  {
    path: '/personalCenter',
    name: 'PersonalCenter',
    component: PersonalCenter,
    children: [
      //我的订单
      {
        path: 'myTourOrder',
        components: {
          default: Comment,
          MyInformtion: MyTourOrder
        },
        name: 'MyTourOrder'
      },
      //我的积分
      {
        path: 'myPoints',
        components: {
          default: Comment,
          MyInformtion: MyPoints
        },
        name: 'MyPoints'
      },
      //个人信息
      {
        path: 'personalDataDetails',
        components: {
          default: Comment,
          MyInformtion: PersonalDataDetails
        },
        name: 'PersonalDataDetails'
      },
      //修改密码
      {
        path: 'updatePassword',
        components: {
          default: Comment,
          MyInformtion: UpdatePassword
        },
        name: 'UpdatePassword'
      },
      //我的收藏
      {
        path: 'myCollection',
        components: {
          default: Comment,
          MyInformtion: MyCollection
        },
        name: 'MyCollection'
      }
    ]
  },
  //填写订单
  {
    path: '/fillInOrder',
    name: 'FillInOrder',
    component: FillInOrder
  },
  //游客注册
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  //公用页面
  {
    path: '/Comment',
    name: 'Comment',
    component: Comment,
    children: [
      //跟团游查询更多
      {
        path: 'heelTourSearchMore',
        components: {
          default: Comment,
          User: HeelTourSearchMore
        },
        name: 'HeelTourSearchMore'
      },
      //跟团游首页
      {
        path: 'agenciesHome',
        components: {
          default: Comment,
          User: AgenciesHome
        },
        name: 'AgenciesHome'
      },
      //跟团游详情页
      {
        path: 'agenciesDetail/:id',
        components: {
          default: Comment,
          User: AgenciesDetail
        },
        name: 'AgenciesDetail'
      },
      //门票详情页
      {
        path: 'ticketsDetail/:id',
        components: {
          default: Comment,
          User: TicketsDetail
        },
        name: 'TicketsDetail'
      },
      //门票首页
      {
        path: 'admissionTicketHomePage',
        components: {
          default: Comment,
          User: AdmissionTicketHomePage
        },
        name: 'AdmissionTicketHomePage'
      },
      //酒店首页
      {
        path: 'hotelHomePage',
        components: {
          default: Comment,
          User: HotelHomePage
        },
        name: 'HotelHomePage'
      },
      //酒店搜索更多
      {
        path: 'hotelSearchMore/:id',
        components: {
          default: Comment,
          User: HotelSearchMore
        },
        name: 'HotelSearchMore'
      },
      //酒店详情页
      {
        path: 'hotelDetalis/:id',
        components: {
          default: Comment,
          User: HotelDetalis
        },
        name: 'HotelDetalis'
      },
      //更多门票
      {
        path: 'admissionTicketMore/:id',
        components: {
          default: Comment,
          User: AdmissionTicketMore
        },
        name: 'AdmissionTicketMore'
      }
    ]
  },
  //登录
  {
    path: '/adminLogin',
    component: AdminLogin,
    name: 'AdminLogin'
  },
  {
    path: '/',
    hidden: true,
    redirect: {name: 'AgenciesHome'}
  },
  {
    path: '*',
    hidden: true,
    redirect: {name: 'AgenciesHome'}
  },
]
