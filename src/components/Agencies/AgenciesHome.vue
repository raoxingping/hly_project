<template>
  <div>
    <!--滑块-->
    <!--<div class="movebox" >-->
    <!--<div class="movego"></div>-->
    <!--<div class="txt" id="txt">拖动滑块验证</div>-->
    <!--<div class="move moveBefore" v-move></div>-->
    <!--</div>-->


    <div class="continer clearfix">
      <ul>
        <li>
          <div class="menu">
            <h4>
              <div class="ico_1"></div>
              <span>热门目的地</span>
              <div class="pointer"></div>
            </h4>
            <div class="local">
              <a href="javascript:;" v-for="item in hotAgenciesCityList">{{item.sm_af_AreaName}}</a>
            </div>
          </div>
          <!--菜单导航-->
          <!--<div id="detail1" class="detail">-->
            <!--<div class="box">-->
              <!--<div class="box_titel">-->
                <!--<span>海南:</span>-->
              <!--</div>-->
              <!--<div class="box_con">-->
                <!--<a href="javascript:;">三亚</a>-->
                <!--<a href="javascript:;">蜈支洲</a>-->
                <!--<a href="javascript:;">亚龙湾</a>-->
                <!--<a href="javascript:;">海口</a>-->
                <!--<a href="javascript:;">天涯海角</a>-->
                <!--<a href="javascript:;">大东海</a>-->
                <!--<a href="javascript:;">大小洞天</a>-->
                <!--<a href="javascript:;">分界洲岛</a>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="box">-->
              <!--<div class="box_titel">-->
                <!--<span>海南:</span>-->
              <!--</div>-->
              <!--<div class="box_con">-->
                <!--<a href="javascript:;">三亚</a>-->
                <!--<a href="javascript:;">蜈支洲</a>-->
                <!--<a href="javascript:;">亚龙湾</a>-->
                <!--<a href="javascript:;">海口</a>-->
                <!--<a href="javascript:;">天涯海角</a>-->
                <!--<a href="javascript:;">大东海</a>-->
                <!--<a href="javascript:;">大小洞天</a>-->
                <!--<a href="javascript:;">分界洲岛</a>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="box">-->
              <!--<div class="box_titel">-->
                <!--<span>海南:</span>-->
              <!--</div>-->
              <!--<div class="box_con">-->
                <!--<a href="javascript:;">三亚</a>-->
                <!--<a href="javascript:;">蜈支洲</a>-->
                <!--<a href="javascript:;">亚龙湾</a>-->
                <!--<a href="javascript:;">海口</a>-->
                <!--<a href="javascript:;">天涯海角</a>-->
                <!--<a href="javascript:;">大东海</a>-->
                <!--<a href="javascript:;">大小洞天</a>-->
                <!--<a href="javascript:;">分界洲岛</a>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="box">-->
              <!--<div class="box_titel">-->
                <!--<span>海南:</span>-->
              <!--</div>-->
              <!--<div class="box_con">-->
                <!--<a href="javascript:;">三亚</a>-->
                <!--<a href="javascript:;">蜈支洲</a>-->
                <!--<a href="javascript:;">亚龙湾</a>-->
                <!--<a href="javascript:;">海口</a>-->
                <!--<a href="javascript:;">天涯海角</a>-->
                <!--<a href="javascript:;">大东海</a>-->
                <!--<a href="javascript:;">大小洞天</a>-->
                <!--<a href="javascript:;">分界洲岛</a>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="box">-->
              <!--<div class="box_titel">-->
                <!--<span>海南:</span>-->
              <!--</div>-->
              <!--<div class="box_con">-->
                <!--<a href="javascript:;">三亚</a>-->
                <!--<a href="javascript:;">蜈支洲</a>-->
                <!--<a href="javascript:;">亚龙湾</a>-->
                <!--<a href="javascript:;">海口</a>-->
                <!--<a href="javascript:;">天涯海角</a>-->
                <!--<a href="javascript:;">大东海</a>-->
                <!--<a href="javascript:;">大小洞天</a>-->
                <!--<a href="javascript:;">分界洲岛</a>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="box">-->
              <!--<div class="box_titel">-->
                <!--<span>海南:</span>-->
              <!--</div>-->
              <!--<div class="box_con">-->
                <!--<a href="javascript:;">三亚</a>-->
                <!--<a href="javascript:;">蜈支洲</a>-->
                <!--<a href="javascript:;">亚龙湾</a>-->
                <!--<a href="javascript:;">海口</a>-->
                <!--<a href="javascript:;">天涯海角</a>-->
                <!--<a href="javascript:;">大东海</a>-->
                <!--<a href="javascript:;">大小洞天</a>-->
                <!--<a href="javascript:;">分界洲岛</a>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--菜单详情-->
        </li>
        <li>
        <div class="menu">
          <h4>
            <div class="ico_2"></div>
            <span>出境长线</span>
            <div class="pointer"></div>
          </h4>
          <div class="local">
            <a href="javascript:;" v-for="item in outLongAreaList">{{item.ts_gta_Key}}</a>
          </div>
        </div>
        <!--菜单导航-->
        <!--<div id="detail1" class="detail">-->
        <!--<div class="box">-->
        <!--<div class="box_titel">-->
        <!--<span>海南:</span>-->
        <!--</div>-->
        <!--<div class="box_con">-->
        <!--<a href="javascript:;">三亚</a>-->
        <!--<a href="javascript:;">蜈支洲</a>-->
        <!--<a href="javascript:;">亚龙湾</a>-->
        <!--<a href="javascript:;">海口</a>-->
        <!--<a href="javascript:;">天涯海角</a>-->
        <!--<a href="javascript:;">大东海</a>-->
        <!--<a href="javascript:;">大小洞天</a>-->
        <!--<a href="javascript:;">分界洲岛</a>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="box">-->
        <!--<div class="box_titel">-->
        <!--<span>海南:</span>-->
        <!--</div>-->
        <!--<div class="box_con">-->
        <!--<a href="javascript:;">三亚</a>-->
        <!--<a href="javascript:;">蜈支洲</a>-->
        <!--<a href="javascript:;">亚龙湾</a>-->
        <!--<a href="javascript:;">海口</a>-->
        <!--<a href="javascript:;">天涯海角</a>-->
        <!--<a href="javascript:;">大东海</a>-->
        <!--<a href="javascript:;">大小洞天</a>-->
        <!--<a href="javascript:;">分界洲岛</a>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="box">-->
        <!--<div class="box_titel">-->
        <!--<span>海南:</span>-->
        <!--</div>-->
        <!--<div class="box_con">-->
        <!--<a href="javascript:;">三亚</a>-->
        <!--<a href="javascript:;">蜈支洲</a>-->
        <!--<a href="javascript:;">亚龙湾</a>-->
        <!--<a href="javascript:;">海口</a>-->
        <!--<a href="javascript:;">天涯海角</a>-->
        <!--<a href="javascript:;">大东海</a>-->
        <!--<a href="javascript:;">大小洞天</a>-->
        <!--<a href="javascript:;">分界洲岛</a>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="box">-->
        <!--<div class="box_titel">-->
        <!--<span>海南:</span>-->
        <!--</div>-->
        <!--<div class="box_con">-->
        <!--<a href="javascript:;">三亚</a>-->
        <!--<a href="javascript:;">蜈支洲</a>-->
        <!--<a href="javascript:;">亚龙湾</a>-->
        <!--<a href="javascript:;">海口</a>-->
        <!--<a href="javascript:;">天涯海角</a>-->
        <!--<a href="javascript:;">大东海</a>-->
        <!--<a href="javascript:;">大小洞天</a>-->
        <!--<a href="javascript:;">分界洲岛</a>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="box">-->
        <!--<div class="box_titel">-->
        <!--<span>海南:</span>-->
        <!--</div>-->
        <!--<div class="box_con">-->
        <!--<a href="javascript:;">三亚</a>-->
        <!--<a href="javascript:;">蜈支洲</a>-->
        <!--<a href="javascript:;">亚龙湾</a>-->
        <!--<a href="javascript:;">海口</a>-->
        <!--<a href="javascript:;">天涯海角</a>-->
        <!--<a href="javascript:;">大东海</a>-->
        <!--<a href="javascript:;">大小洞天</a>-->
        <!--<a href="javascript:;">分界洲岛</a>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="box">-->
        <!--<div class="box_titel">-->
        <!--<span>海南:</span>-->
        <!--</div>-->
        <!--<div class="box_con">-->
        <!--<a href="javascript:;">三亚</a>-->
        <!--<a href="javascript:;">蜈支洲</a>-->
        <!--<a href="javascript:;">亚龙湾</a>-->
        <!--<a href="javascript:;">海口</a>-->
        <!--<a href="javascript:;">天涯海角</a>-->
        <!--<a href="javascript:;">大东海</a>-->
        <!--<a href="javascript:;">大小洞天</a>-->
        <!--<a href="javascript:;">分界洲岛</a>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--菜单详情-->
      </li>
        <li>
          <div class="menu">
            <h4>
              <div class="ico_3"></div>
              <span>出境短线</span>
              <div class="pointer"></div>
            </h4>
            <div class="local">
              <a href="javascript:;" v-for="item in outShortAreaList">{{item.ts_gta_Key}}</a>
            </div>
          </div>
          <!--菜单导航-->
          <!--<div id="detail1" class="detail">-->
          <!--<div class="box">-->
          <!--<div class="box_titel">-->
          <!--<span>海南:</span>-->
          <!--</div>-->
          <!--<div class="box_con">-->
          <!--<a href="javascript:;">三亚</a>-->
          <!--<a href="javascript:;">蜈支洲</a>-->
          <!--<a href="javascript:;">亚龙湾</a>-->
          <!--<a href="javascript:;">海口</a>-->
          <!--<a href="javascript:;">天涯海角</a>-->
          <!--<a href="javascript:;">大东海</a>-->
          <!--<a href="javascript:;">大小洞天</a>-->
          <!--<a href="javascript:;">分界洲岛</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="box">-->
          <!--<div class="box_titel">-->
          <!--<span>海南:</span>-->
          <!--</div>-->
          <!--<div class="box_con">-->
          <!--<a href="javascript:;">三亚</a>-->
          <!--<a href="javascript:;">蜈支洲</a>-->
          <!--<a href="javascript:;">亚龙湾</a>-->
          <!--<a href="javascript:;">海口</a>-->
          <!--<a href="javascript:;">天涯海角</a>-->
          <!--<a href="javascript:;">大东海</a>-->
          <!--<a href="javascript:;">大小洞天</a>-->
          <!--<a href="javascript:;">分界洲岛</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="box">-->
          <!--<div class="box_titel">-->
          <!--<span>海南:</span>-->
          <!--</div>-->
          <!--<div class="box_con">-->
          <!--<a href="javascript:;">三亚</a>-->
          <!--<a href="javascript:;">蜈支洲</a>-->
          <!--<a href="javascript:;">亚龙湾</a>-->
          <!--<a href="javascript:;">海口</a>-->
          <!--<a href="javascript:;">天涯海角</a>-->
          <!--<a href="javascript:;">大东海</a>-->
          <!--<a href="javascript:;">大小洞天</a>-->
          <!--<a href="javascript:;">分界洲岛</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="box">-->
          <!--<div class="box_titel">-->
          <!--<span>海南:</span>-->
          <!--</div>-->
          <!--<div class="box_con">-->
          <!--<a href="javascript:;">三亚</a>-->
          <!--<a href="javascript:;">蜈支洲</a>-->
          <!--<a href="javascript:;">亚龙湾</a>-->
          <!--<a href="javascript:;">海口</a>-->
          <!--<a href="javascript:;">天涯海角</a>-->
          <!--<a href="javascript:;">大东海</a>-->
          <!--<a href="javascript:;">大小洞天</a>-->
          <!--<a href="javascript:;">分界洲岛</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="box">-->
          <!--<div class="box_titel">-->
          <!--<span>海南:</span>-->
          <!--</div>-->
          <!--<div class="box_con">-->
          <!--<a href="javascript:;">三亚</a>-->
          <!--<a href="javascript:;">蜈支洲</a>-->
          <!--<a href="javascript:;">亚龙湾</a>-->
          <!--<a href="javascript:;">海口</a>-->
          <!--<a href="javascript:;">天涯海角</a>-->
          <!--<a href="javascript:;">大东海</a>-->
          <!--<a href="javascript:;">大小洞天</a>-->
          <!--<a href="javascript:;">分界洲岛</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="box">-->
          <!--<div class="box_titel">-->
          <!--<span>海南:</span>-->
          <!--</div>-->
          <!--<div class="box_con">-->
          <!--<a href="javascript:;">三亚</a>-->
          <!--<a href="javascript:;">蜈支洲</a>-->
          <!--<a href="javascript:;">亚龙湾</a>-->
          <!--<a href="javascript:;">海口</a>-->
          <!--<a href="javascript:;">天涯海角</a>-->
          <!--<a href="javascript:;">大东海</a>-->
          <!--<a href="javascript:;">大小洞天</a>-->
          <!--<a href="javascript:;">分界洲岛</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
          <!--菜单详情-->
        </li>
        <li>
          <div class="menu">
            <h4>
              <div class="ico_4"></div>
              <span>国内跟团</span>
              <div class="pointer"></div>
            </h4>
            <div class="local">
              <a href="javascript:;" v-for="item in contryAreaList">{{item.ts_gta_Key}}</a>
            </div>
          </div>
          <!--菜单导航-->
          <!--<div id="detail1" class="detail">-->
          <!--<div class="box">-->
          <!--<div class="box_titel">-->
          <!--<span>海南:</span>-->
          <!--</div>-->
          <!--<div class="box_con">-->
          <!--<a href="javascript:;">三亚</a>-->
          <!--<a href="javascript:;">蜈支洲</a>-->
          <!--<a href="javascript:;">亚龙湾</a>-->
          <!--<a href="javascript:;">海口</a>-->
          <!--<a href="javascript:;">天涯海角</a>-->
          <!--<a href="javascript:;">大东海</a>-->
          <!--<a href="javascript:;">大小洞天</a>-->
          <!--<a href="javascript:;">分界洲岛</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="box">-->
          <!--<div class="box_titel">-->
          <!--<span>海南:</span>-->
          <!--</div>-->
          <!--<div class="box_con">-->
          <!--<a href="javascript:;">三亚</a>-->
          <!--<a href="javascript:;">蜈支洲</a>-->
          <!--<a href="javascript:;">亚龙湾</a>-->
          <!--<a href="javascript:;">海口</a>-->
          <!--<a href="javascript:;">天涯海角</a>-->
          <!--<a href="javascript:;">大东海</a>-->
          <!--<a href="javascript:;">大小洞天</a>-->
          <!--<a href="javascript:;">分界洲岛</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="box">-->
          <!--<div class="box_titel">-->
          <!--<span>海南:</span>-->
          <!--</div>-->
          <!--<div class="box_con">-->
          <!--<a href="javascript:;">三亚</a>-->
          <!--<a href="javascript:;">蜈支洲</a>-->
          <!--<a href="javascript:;">亚龙湾</a>-->
          <!--<a href="javascript:;">海口</a>-->
          <!--<a href="javascript:;">天涯海角</a>-->
          <!--<a href="javascript:;">大东海</a>-->
          <!--<a href="javascript:;">大小洞天</a>-->
          <!--<a href="javascript:;">分界洲岛</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="box">-->
          <!--<div class="box_titel">-->
          <!--<span>海南:</span>-->
          <!--</div>-->
          <!--<div class="box_con">-->
          <!--<a href="javascript:;">三亚</a>-->
          <!--<a href="javascript:;">蜈支洲</a>-->
          <!--<a href="javascript:;">亚龙湾</a>-->
          <!--<a href="javascript:;">海口</a>-->
          <!--<a href="javascript:;">天涯海角</a>-->
          <!--<a href="javascript:;">大东海</a>-->
          <!--<a href="javascript:;">大小洞天</a>-->
          <!--<a href="javascript:;">分界洲岛</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="box">-->
          <!--<div class="box_titel">-->
          <!--<span>海南:</span>-->
          <!--</div>-->
          <!--<div class="box_con">-->
          <!--<a href="javascript:;">三亚</a>-->
          <!--<a href="javascript:;">蜈支洲</a>-->
          <!--<a href="javascript:;">亚龙湾</a>-->
          <!--<a href="javascript:;">海口</a>-->
          <!--<a href="javascript:;">天涯海角</a>-->
          <!--<a href="javascript:;">大东海</a>-->
          <!--<a href="javascript:;">大小洞天</a>-->
          <!--<a href="javascript:;">分界洲岛</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="box">-->
          <!--<div class="box_titel">-->
          <!--<span>海南:</span>-->
          <!--</div>-->
          <!--<div class="box_con">-->
          <!--<a href="javascript:;">三亚</a>-->
          <!--<a href="javascript:;">蜈支洲</a>-->
          <!--<a href="javascript:;">亚龙湾</a>-->
          <!--<a href="javascript:;">海口</a>-->
          <!--<a href="javascript:;">天涯海角</a>-->
          <!--<a href="javascript:;">大东海</a>-->
          <!--<a href="javascript:;">大小洞天</a>-->
          <!--<a href="javascript:;">分界洲岛</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
          <!--菜单详情-->
        </li>
        <li>
          <div class="menu">
            <h4>
              <div class="ico_5"></div>
              <span>周边跟团</span>
              <div class="pointer"></div>
            </h4>
            <div class="local">
              <a href="javascript:;" v-for="item in nearAreaList">{{item.ts_gta_Key}}</a>
            </div>
          </div>
          <!--菜单导航-->
          <!--<div id="detail1" class="detail">-->
          <!--<div class="box">-->
          <!--<div class="box_titel">-->
          <!--<span>海南:</span>-->
          <!--</div>-->
          <!--<div class="box_con">-->
          <!--<a href="javascript:;">三亚</a>-->
          <!--<a href="javascript:;">蜈支洲</a>-->
          <!--<a href="javascript:;">亚龙湾</a>-->
          <!--<a href="javascript:;">海口</a>-->
          <!--<a href="javascript:;">天涯海角</a>-->
          <!--<a href="javascript:;">大东海</a>-->
          <!--<a href="javascript:;">大小洞天</a>-->
          <!--<a href="javascript:;">分界洲岛</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="box">-->
          <!--<div class="box_titel">-->
          <!--<span>海南:</span>-->
          <!--</div>-->
          <!--<div class="box_con">-->
          <!--<a href="javascript:;">三亚</a>-->
          <!--<a href="javascript:;">蜈支洲</a>-->
          <!--<a href="javascript:;">亚龙湾</a>-->
          <!--<a href="javascript:;">海口</a>-->
          <!--<a href="javascript:;">天涯海角</a>-->
          <!--<a href="javascript:;">大东海</a>-->
          <!--<a href="javascript:;">大小洞天</a>-->
          <!--<a href="javascript:;">分界洲岛</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="box">-->
          <!--<div class="box_titel">-->
          <!--<span>海南:</span>-->
          <!--</div>-->
          <!--<div class="box_con">-->
          <!--<a href="javascript:;">三亚</a>-->
          <!--<a href="javascript:;">蜈支洲</a>-->
          <!--<a href="javascript:;">亚龙湾</a>-->
          <!--<a href="javascript:;">海口</a>-->
          <!--<a href="javascript:;">天涯海角</a>-->
          <!--<a href="javascript:;">大东海</a>-->
          <!--<a href="javascript:;">大小洞天</a>-->
          <!--<a href="javascript:;">分界洲岛</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="box">-->
          <!--<div class="box_titel">-->
          <!--<span>海南:</span>-->
          <!--</div>-->
          <!--<div class="box_con">-->
          <!--<a href="javascript:;">三亚</a>-->
          <!--<a href="javascript:;">蜈支洲</a>-->
          <!--<a href="javascript:;">亚龙湾</a>-->
          <!--<a href="javascript:;">海口</a>-->
          <!--<a href="javascript:;">天涯海角</a>-->
          <!--<a href="javascript:;">大东海</a>-->
          <!--<a href="javascript:;">大小洞天</a>-->
          <!--<a href="javascript:;">分界洲岛</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="box">-->
          <!--<div class="box_titel">-->
          <!--<span>海南:</span>-->
          <!--</div>-->
          <!--<div class="box_con">-->
          <!--<a href="javascript:;">三亚</a>-->
          <!--<a href="javascript:;">蜈支洲</a>-->
          <!--<a href="javascript:;">亚龙湾</a>-->
          <!--<a href="javascript:;">海口</a>-->
          <!--<a href="javascript:;">天涯海角</a>-->
          <!--<a href="javascript:;">大东海</a>-->
          <!--<a href="javascript:;">大小洞天</a>-->
          <!--<a href="javascript:;">分界洲岛</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--<div class="box">-->
          <!--<div class="box_titel">-->
          <!--<span>海南:</span>-->
          <!--</div>-->
          <!--<div class="box_con">-->
          <!--<a href="javascript:;">三亚</a>-->
          <!--<a href="javascript:;">蜈支洲</a>-->
          <!--<a href="javascript:;">亚龙湾</a>-->
          <!--<a href="javascript:;">海口</a>-->
          <!--<a href="javascript:;">天涯海角</a>-->
          <!--<a href="javascript:;">大东海</a>-->
          <!--<a href="javascript:;">大小洞天</a>-->
          <!--<a href="javascript:;">分界洲岛</a>-->
          <!--</div>-->
          <!--</div>-->
          <!--</div>-->
          <!--菜单详情-->
        </li>
      </ul>
      <div class="carousel">
        <el-carousel style="height: 365px">
          <el-carousel-item v-for="item,index in topPageList" :key="index" style="height: 365px">
            <a href="javascript:;" v-for="item1,index1 in item">
              <img alt="" v-lazy="item1.ts_tsi_Image[0]" :class="{one:index1==0,two:index1==1,three:index1==2,four:index1==3,five:index1==4}">
            </a>
            </el-carousel-item>
        </el-carousel>
      </div>
    </div>


    <!--国内游-->
    <div class="homePageDomesticTour">
      <div class="homePageDomesticTourTitle clearfix">
        <h4 style="float: left;padding-right:120px ">国内旅游</h4>
        <div>
          <a href="javascript:;" v-for="item,index in 4">精选</a>
        </div>
        <router-link to="HeelTourSearchMore">查询更多>></router-link>
      </div>
      <div class="clearfix">
        <div class="homePageDomesticTourLeft">
          <a href="javascript:;" class="clearfix" v-for="item,index in 4">
            <strong>张家界</strong>
            <span><i></i>13121</span>
          </a>
        </div>
        <div class="homePageDomesticTourContent">
          <div class="homePageHotPlaceTour">
          </div>
          <ul class="homePageDomesticTourContentList clearfix">
            <li v-for="item,index in domesticDataList" @click="toDetail(item)">
              <a href="javascript:;">
                <img v-lazy="item.oneImg" width="220" height="125">
              </a>
              <div class="homePageImageContentBox">
                <div class="homePageImageMoneyAndSatisfied clearfix">
                  <span class="homePageImageMoney">￥<strong>{{item.ts_tg_lowestPrice}}</strong> 起</span>
                  <span class="homePageImageSatisfied">满意度 96%</span>
                </div>
                <div class="homePageImageContent">
                  <a href="javascript:;">{{item.ta_tg_Title}}</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--周边游-->
    <div class="homePageDomesticTour">
      <div class="homePageDomesticTourTitle AroundTitle clearfix">
        <h4>周边旅游</h4>
      </div>
      <div class="clearfix">
        <div class="Around">
        </div>
        <div class="homePageDomesticTourContent">
          <div class="homePageHotPlaceTour">
          </div>
          <ul class="homePageDomesticTourContentList clearfix">
            <li v-for="item,index in aroundList" @click="toAroundDetail(item)">

              <a href="javascript:;">
                <img v-lazy="item.oneImg" width="220" height="125">
              </a>
              <div class="homePageImageContentBox">
                <div class="homePageImageMoneyAndSatisfied clearfix">
                  <span class="homePageImageMoney">￥<strong>{{item.ts_tg_lowestPrice}}</strong> 起</span>
                  <span class="homePageImageSatisfied">满意度 96%</span>
                </div>
                <div class="homePageImageContent">
                  <a href="javascript:;">{{item.ta_tg_Title}}</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--境外短线-->
    <div class="homePageDomesticTour">
      <div class="homePageDomesticTourTitle shortLongTitle clearfix">
        <h4>境外短线旅游</h4>
      </div>
      <div class="clearfix">
        <div class="shortLong">
        </div>
        <div class="homePageDomesticTourContent">
          <div class="homePageHotPlaceTour">
          </div>
          <ul class="homePageDomesticTourContentList clearfix">
            <li v-for="item,index in shortLineList" @click="toShortLineDetail(item)">

              <a href="javascript:;">
                <img v-lazy="item.oneImg" width="220" height="125">
              </a>
              <div class="homePageImageContentBox">
                <div class="homePageImageMoneyAndSatisfied clearfix">
                  <span class="homePageImageMoney">￥<strong>{{item.ts_tg_lowestPrice}}</strong> 起</span>
                  <span class="homePageImageSatisfied">满意度 96%</span>
                </div>
                <div class="homePageImageContent">
                  <a href="javascript:;">{{item.ta_tg_Title}}</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--境外长线-->
    <div class="homePageDomesticTour">
      <div class="homePageDomesticTourTitle longtLongTitle clearfix">
        <h4>境外长线旅游</h4>
      </div>
      <div class="clearfix">
        <div class="longtLong">
        </div>
        <div class="homePageDomesticTourContent">
          <div class="homePageHotPlaceTour">
          </div>
          <ul class="homePageDomesticTourContentList clearfix">
            <li v-for="item,index in longLineList" @click="toLongLineDetail(item.ta_tg_ID)">

              <a href="javascript:;">
                <img v-show="item.oneImg" v-lazy="item.oneImg" width="220" height="125">
              </a>
              <div class="homePageImageContentBox">
                <div class="homePageImageMoneyAndSatisfied clearfix">
                  <span class="homePageImageMoney">￥<strong>{{item.ts_tg_lowestPrice}}</strong> 起</span>
                  <span class="homePageImageSatisfied">满意度 96%</span>
                </div>
                <div class="homePageImageContent">
                  <a href="javascript:;">{{item.ta_tg_Title}}</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import $ from 'jquery'
  import {postPromise} from '../../assets/public'
  //  agencies
  export default {
    name: '',
    computed: mapGetters([
      'domesticDataList',
      'getTourSiteListImage',
      'aroundList',
      'shortLineList',
      'longLineList',
      'topPageList',
      'hotAgenciesCityList',
      'outLongAreaList',
      'outShortAreaList',
      'contryAreaList',
      'nearAreaList'
    ]),
    data() {
      return {
        cityName: '',
      }
    },
    created() {

//      this.$store.commit('showLoading');
      this.initCity()
        .then(name => {
          this.initData(name).then(() => {
//            this.$store.commit('hideLoading');
          })
        })
    },
    methods: {
      initCity() {
        return new Promise((relove, reject) => {
          var city = ['北京', '上海', '重庆', '宁夏', '新疆', '台湾', '香港', '澳门'];
          $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', () => {
            let newCity = '';
            for (var i = 0; i < city.length; i++) {
              if (city[i] == remote_ip_info.province) {
                newCity = remote_ip_info.province + '市'
              } else {
                newCity = remote_ip_info.province + '省';
              }
            }
            relove(newCity)
          });
        })
      },
      async initData(name) {
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "provice": name
        };
        await this.$store.dispatch('initAllHomeData', options);
      },
      //点击跳转到产品线路详情
      toDetail(obj) {
        let arr = this.domesticDataList.filter(item => {
          if (item.ta_tg_ID == obj.ta_tg_ID) {
            return true;
          }
          return false;
        });
        sessionStorage.setItem('money', obj.ts_tg_lowestPrice)
        let images = JSON.stringify(arr[0].ta_tg_ShowImage);
        sessionStorage.setItem('images', images);
        this.$router.push({name: 'AgenciesDetail', params: {id: obj.ta_tg_ID}})
      },
      //周边游跳转到产品线路详情
      toAroundDetail(obj) {
        let arr = this.aroundList.filter(item => {
          if (item.ta_tg_ID == obj.ta_tg_ID) {
            return true;
          }
          return false;
        });
        sessionStorage.setItem('money', obj.ts_tg_lowestPrice)
        let images = JSON.stringify(arr[0].ta_tg_ShowImage);
        sessionStorage.setItem('images', images);
        this.$router.push({name: 'AgenciesDetail', params: {id: obj.ta_tg_ID}})
      },
      //境外短线跳转到产品线路详情
      toShortLineDetail(obj) {
        let arr = this.shortLineList.filter(item => {
          if (item.ta_tg_ID == obj.ta_tg_ID) {
            return true;
          }
          return false;
        });
        sessionStorage.setItem('money', obj.ts_tg_lowestPrice)
        let images = JSON.stringify(arr[0].ta_tg_ShowImage);
        sessionStorage.setItem('images', images);
        this.$router.push({name: 'AgenciesDetail', params: {id: obj.ta_tg_ID}})
      },
      //境外长线跳转到产品线路详情
      toLongLineDetail(obj) {
        let arr = this.longLineList.filter(item => {
          if (item.ta_tg_ID == obj.ta_tg_ID) {
            return true;
          }
          return false;
        });
        sessionStorage.setItem('money', obj.ts_tg_lowestPrice)
        let images = JSON.stringify(arr[0].ta_tg_ShowImage);
        sessionStorage.setItem('images', images);
        this.$router.push({name: 'AgenciesDetail', params: {id: obj.ta_tg_ID}})
      }
    },
    mounted() {

    },
  }
</script>
<style lang="scss" scoped>
  /*.el-carousel__container{*/
    /*height: 365px !important;*/
  /*}*/
  .two{
    width: 246px;
  }
  .one{
    width: 493px;
  }
  .three{
    width: 246px;
    height: 182px;
  }
  .four{
    width: 493px;
    height: 182px;
  }
  .five{
    width: 247px;
    height: 366px;
  }
  .movebox {
    position: relative;
    background-color: #e8e8e8;
    width: 300px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    .txt {
      position: absolute;
      top: 0px;
      width: 300px;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      -o-user-select: none;
      -ms-user-select: none;
    }
    .movego {
      background-color: #7ac23c;
      height: 34px;
      width: 0px;
    }
    .move {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 40px;
      height: 34px;
      border: 1px solid #ccc;
      cursor: move;
    }
    .moveBefore {
      background: #fff url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTEyNTVEMURGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTEyNTVEMUNGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MTc5NzNmZS02OTQxLTQyOTYtYTIwNi02NDI2YTNkOWU5YmUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YiRG4AAAALFJREFUeNpi/P//PwMlgImBQkA9A+bOnfsIiBOxKcInh+yCaCDuByoswaIOpxwjciACFegBqZ1AvBSIS5OTk/8TkmNEjwWgQiUgtQuIjwAxUF3yX3xyGIEIFLwHpKyAWB+I1xGSwxULIGf9A7mQkBwTlhBXAFLHgPgqEAcTkmNCU6AL9d8WII4HOvk3ITkWJAXWUMlOoGQHmsE45ViQ2KuBuASoYC4Wf+OUYxz6mQkgwAAN9mIrUReCXgAAAABJRU5ErkJggg==") no-repeat center;

    }
    .moveSuccess {
      background: #fff url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDlBRDI3NjVGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDlBRDI3NjRGMkQ2MTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphNWEzMWNhMC1hYmViLTQxNWEtYTEwZS04Y2U5NzRlN2Q4YTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+k+sHwwAAASZJREFUeNpi/P//PwMyKD8uZw+kUoDYEYgloMIvgHg/EM/ptHx0EFk9I8wAoEZ+IDUPiIMY8IN1QJwENOgj3ACo5gNAbMBAHLgAxA4gQ5igAnNJ0MwAVTsX7IKyY7L2UNuJAf+AmAmJ78AEDTBiwGYg5gbifCSxFCZoaBMCy4A4GOjnH0D6DpK4IxNSVIHAfSDOAeLraJrjgJp/AwPbHMhejiQnwYRmUzNQ4VQgDQqXK0ia/0I17wJiPmQNTNBEAgMlQIWiQA2vgWw7QppBekGxsAjIiEUSBNnsBDWEAY9mEFgMMgBk00E0iZtA7AHEctDQ58MRuA6wlLgGFMoMpIG1QFeGwAIxGZo8GUhIysmwQGSAZgwHaEZhICIzOaBkJkqyM0CAAQDGx279Jf50AAAAAABJRU5ErkJggg==") no-repeat center;

    }
  }

  .Around {
    width: 220px;
    height: 483px;
    background: url("../../assets/img/zhoubian.png") no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    float: left;
    margin: 0 20px 0 -20px;
  }

  .shortLong {
    width: 220px;
    height: 483px;
    background: url("../../assets/img/duanxian.png") no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    float: left;
    margin: 0 20px 0 -20px;
  }

  .longtLong {
    width: 220px;
    height: 483px;
    background: url("../../assets/img/changxian.png") no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    float: left;
    margin: 0 20px 0 -20px;
  }

  .homePageDomesticTour {
    width: 1188px;
    margin: 20px auto;
    background-color: #fff;
  }

  .homePageDomesticTourTitle {
    font: bold 18px/28px "微软雅黑";
    color: #333;
    border-bottom: 3px solid #e694a6;
    border-bottom: 3px solid #e694a6;
  }

  .homePageDomesticTourTitle > h4 {
    margin-left: 10px;
    float: left;
  }

  .homePageDomesticTourTitle > a {
    font: 14px/2 "微软雅黑";
    color: #ccc;
    float: right;
    margin-right: 10px;
  }

  .homePageDomesticTourTitle > a:hover {
    color: #f60;
  }

  .homePageDomesticTourLeft {
    width: 220px;
    height: 483px;
    background: url("../../assets/img/guonei.png") no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    float: left;
    margin: 0 20px 0 -20px;
    padding-top: 10px;
  }

  .homePageDomesticTourContent {
    width: 968px;
    float: left;
  }

  .homePageDomesticTourContentList {
    display: inline-block;
    vertical-align: middle;
  }

  .homePageDomesticTourContentList > li {
    vertical-align: top;
    width: 220px;
    position: relative;
    margin: 20px 11px 0;
    float: left;
  }

  .homePageDomesticTourContentList > li:hover {
    box-shadow: 1px 1px 3px #f60;
  }

  .homePageImageContentBox {
    background-color: #fff;
    padding: 0 5px 5px;
    height: 100%;
  }

  .homePageImageContent {
    height: 40px;
    width: 100%;
    overflow: hidden;
    font: bold 12px/20px "微软雅黑";
  }

  .homePageImageContent:hover a {
    color: #f60;
  }

  .homePageImageContent > a {
    color: #333;
  }

  .homePageImageMoneyAndSatisfied {
    font: 12px/42px "微软雅黑";
  }

  .homePageImageMoneyAndSatisfied > .homePageImageMoney {
    float: left;
    color: #f60;
  }

  .homePageImageMoneyAndSatisfied > .homePageImageMoney > strong {
    font-size: 18px;
    font-weight: bold;
  }

  .homePageImageMoneyAndSatisfied > .homePageImageSatisfied {
    float: right;
    color: #999;
    margin-right: 5px;
  }

  .AroundTitle {
    border-bottom: 3px solid #66d1d2;
  }

  .shortLongTitle {
    border-bottom: 3px solid #7fd3a8;
  }

  .longtLongTitle {
    border-bottom: 3px solid #7fc7ef;
  }

  .body, ul, li, h4 {
    margin: 0;
    padding: 0;
  }

  /*初始化*/
  .continer {
    width: 1190px;
    height: 365px;
    margin: 20px auto 0;
  }

  /*总容器*/
  .continer ul {
    height: 365px;
    width: 200px;
    position: relative;
    z-index: 999;
    list-style: none;
  }

  .continer ul li a {
    display: inline-block;
  }

  .continer ul li {
    width: 200px;
    height: 73px;
    background-color: #575757;
    position: relative;
  }

  .continer ul li:hover {
    background-color: #292929;
  }

  .continer ul li .menu {
    width: 200px;
    /*background-color: red;*/
  }

  .continer ul li .menu h4 {
    color: #fff;
    font-size: 15px;
    font-weight: normal;
    padding-left: 20px;
    padding-top: 6px;
    padding-bottom: 3px;
    box-sizing: content-box;
    /*background-color: aquamarine;*/
    height: 23px;
    position: relative;
  }

  .continer ul li .menu h4 .ico_1 {
    width: 14px;
    height: 16px;
    background-image: url("../../assets/img/ico_mark.png");
    background-repeat: no-repeat;
    background-position: 2px -607px;
    position: absolute;
    top: 5px;
  }

  .continer ul li .menu h4 .ico_2 {
    width: 14px;
    height: 16px;
    background: url("../../assets/img/ico_mark.png") no-repeat -12px -607px;
    position: absolute;
    top: 8px;
  }

  .continer ul li .menu h4 .ico_3 {
    width: 14px;
    height: 16px;
    background: url("../../assets/img/ico_mark.png") no-repeat -28px -607px;
    position: absolute;
    top: 8px;
  }

  .continer ul li .menu h4 .ico_4 {
    width: 14px;
    height: 16px;
    background: url("../../assets/img/ico_mark.png") no-repeat -44px -607px;
    position: absolute;
    top: 8px;
  }

  .continer ul li .menu h4 .ico_5 {
    width: 14px;
    height: 16px;
    background: url("../../assets/img/ico_mark.png") no-repeat -60px -607px;
    position: absolute;
    top: 8px;
  }

  .continer ul li .menu h4 span {
    display: block;
    height: 16px;
    width: 150px;
    margin-left: 22px;
    padding-top: 5px;
  }

  .continer ul li .menu h4 .pointer {
    width: 6px;
    height: 6px;
    border-left: 1px solid #fff;
    border-top: 1px solid #fff;
    position: absolute;
    top: 18px;
    right: 10px;
    transform: rotate(135deg);
  }

  .continer ul li .menu .local {
    width: 180px;
    height: 50px;
    /*background-color: green;*/
    padding-left: 20px;
  }

  .continer ul li .menu .local a {
    height: 20px;
    font-size: 12px;
    color: rgb(187, 187, 187);
    font-weight: normal;
    margin-right: 4px;
    text-decoration: none;
  }

  .continer ul li .menu .local a:hover {
    color: #f60;
  }

  .box_con a:hover {
    color: #f60;
  }

  .detail {
    width: 500px;
    height: 365px;
    background-color: #fff;
    position: absolute;
    left: 200px;
    display: none;
  }

  #detail1 {
    top: 0px;
  }

  #detail2 {
    top: -73px;
  }

  #detail3 {
    top: -146px;
  }

  #detail4 {
    top: -219px;
  }

  #detail5 {
    top: -292px;
  }

  .continer ul {
    float: left;
  }

  .continer ul li:hover .detail {
    display: block;
  }

  .box {
    border: none
  }

  .continer ul li:hover .detail .box {
    width: 250px;
    height: 122px;
    float: left;
  }

  .box_titel {
    width: 250px;
    height: 30px;
    padding-top: 10px;
  }

  .box_titel span {
    display: block;
    margin-left: 20px;
  }

  .box_con {
    width: 230px;
    height: 92px;
    padding-left: 20px;
  }

  .box_con a {
    color: rgb(187, 187, 187);
    font-size: 13px;
    font-weight: normal;
    text-decoration: none;
    margin-right: 6px;
    margin-top: 8px;
    display: block;
    float: left;
    line-height: 13px;
  }

  /*轮播板块*/
  .carousel {
    width: 990px;
    float: left;
    height: 100%;
    position: relative;
  }

  .carousel a {
    position: absolute;
    top: 0;
    left: 0;
  }

  .carousel a:nth-of-type(1) {
    top: 0;
    left: 2px;
  }

  .carousel a:nth-of-type(2) {
    top: 0;
    left: 496px;
  }

  .carousel a:nth-of-type(3) {
    top: 183px;
    left: 2px;
  }

  .carousel a:nth-of-type(4) {
    top: 183px;
    left: 249px;
  }

  .carousel a:nth-of-type(5) {
    top: 0;
    left: 743px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #fff;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #fff;
  }

  .homePageDomesticTourTitle {
    position: relative;
  }

  .homePageDomesticTourTitle > div {
    padding-left: 20px;
    float: left;
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 50%;*/
    /*transform: translateX(-50%);*/
  }

  .homePageDomesticTourTitle > div > a {
    float: left;
    padding: 0 10px;
    color: #666;
    font: 14px/22px "微软雅黑";
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .homePageDomesticTourTitle > div > a:hover {
    background-color: #e694a6;
    color: #fff;
  }

  .homePageDomesticTourLeft > a {
    margin-bottom: 10px;
    width: 140px;
    box-sizing: content-box;
    padding: 10px;
    background-color: #fff;
    margin-left: 40px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    transition: .5s;
    color: #666;
  }

  .homePageDomesticTourLeft > a:hover {
    margin-left: 30px;
  }

  .homePageDomesticTourLeft > a > strong {
    float: left;
  }

  .homePageDomesticTourLeft > a > span {
    float: right;
    position: relative;
  }

  .homePageDomesticTourLeft > a i {
    position: absolute;
    left: -14px;
    top: 0;
    width: 14px;
    height: 13px;
    background: url("../../assets/img/heart.png") no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
  }


</style>
