/**
 * 30 Days of React Native
 * Icons made by <a href="http://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
 */
// 'use strict';
import React, { Component } from 'react';
import {AppRegistry, DeviceEventEmitter, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View, NavigatorIOS, FlatList} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'


import Util from './view/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
// https://blog.csdn.net/haoranli/article/details/71774500

import Day1 from './view/day1'; 
import Day2 from './view/day2';
import Day3 from './view/day3';
import Day4 from './view/day4';  //没有实现
import Day5 from './view/day5';  //MapView 这个控件有问题########
import Day6 from './view/day6';  //播放视频的，没有视频链接
import Day7 from './view/day7';
import Day8 from './view/day8';  //使用啦Day5中的控件########
import Day9 from './view/day9';
import Day10 from './view/day10';
// import Day11 from './view/day11'; //第三方的库有问题啦，不知道怎么处理########
import Day12 from './view/day12'; //没有实现
import Day13 from './view/day13';
// import Day14 from './view/day14';
import Day15 from './view/day15'; //to update to snapchat
// import Day16 from './view/day16';
import Day17 from './view/day17';
import Day18 from './view/day18';
// import Day19 from './view/day19';
import Day20 from './view/day20';
import Day21 from './view/day21';
import Day22 from './view/day22';
import Day23 from './view/day23';
import Day24 from './view/day24';
import Day25 from './view/day25'; // to update imessage UI
import Day26 from './view/day26'; // to update imessage UI
// import Day27 from './view/day27';
import Day28 from './view/day28';
import Day29 from './view/day29'; //to update
import Day30 from './view/day30';
import Temp from './view/dayTemplate'

class MainView extends Component {
  constructor() {
    super();
    this.state = {
      days:[{
        key:0,
        title:"A stopwatch",
        component: Day1,
        isFA: false,
        icon: "ios-stopwatch",
        size: 48,
        color: "#ff856c",
        hideNav: false,
      },{
        key:1,
        title:"A weather app",
        component: Day2,
        isFA: false,
        icon: "ios-partly-sunny",
        size:60,
        color:"#90bdc1",
        hideNav: true,
      },{
        key:2,
        title:"twitter",
        component: Day3,
        isFA: false,
        icon: "logo-twitter",
        size:50,
        color:"#2aa2ef",
        hideNav: true,
      },{
        key:3,
        title:"cocoapods",
        component: Temp,
        isFA: true,
        icon: "contao",
        size:50,
        color:"#FF9A05",
        hideNav: false,
      },{
        key:4,
        title:"find my location",
        component: Temp,
        isFA: false,
        icon: "md-pin",
        size:50,
        color:"#00D204",
        hideNav: false,
      },{
        key:5,
        title:"Spotify",
        component: Day6,
        isFA: true,
        icon: "spotify",
        size:50,
        color:"#777",
        hideNav: true,
      },{
        key:6,
        title:"Moveable Circle",
        component: Day7,
        isFA: false,
        icon: "ios-baseball",
        size:50,
        color:"#5e2a06",
        hideNav: true,
      },{
        key:7,
        title:"Swipe Left Menu",
        component: Temp,
        isFA: true,
        icon: "google",
        size:50,
        color:"#4285f4",
        hideNav: true,
      },{
        key:8,
        title:"Twitter Parallax View",
        component: Day9,
        isFA: true,
        icon: "twitter-square",
        size:50,
        color:"#2aa2ef",
        hideNav: true,
      },{
        key:9,
        title:"Tumblr Menu",
        component: Day10,
        isFA: false,
        icon: "logo-tumblr",
        size:50,
        color:"#37465c",
        hideNav: true,
      },{
        key:10,
        title:"OpenGL",
        component: Temp,
        isFA: false,
        icon: "md-contrast",
        size:50,
        color:"#2F3600",
        hideNav: false,
      },{
        key:11,
        title:"charts",
        component: Temp,
        isFA: false,
        icon: "ios-stats",
        size:50,
        color:"#fd8f9d",
        hideNav: false,
      },{
        key:12,
        title:"tweet",
        component: Day13,
        isFA: false,
        icon: "md-chatboxes",
        size:50,
        color:"#83709d",
        hideNav: true,
      },{
        key:13,
        title:"tinder",
        component: Temp,
        isFA: true,
        icon: "fire",
        size:50,
        color:"#ff6b6b",
        hideNav: true,
      },{
        key:14,
        title:"Time picker",
        component: Day15,
        isFA: false,
        icon: "ios-calendar-outline",
        size:50,
        color:"#ec240e",
        hideNav: false,
      },{
        key:15,
        title:"Gesture unlock",
        component: Day10,
        isFA: false,
        icon: "ios-unlock",
        size:50,
        color:"#32A69B",
        hideNav: true,
      },{
        key:16,
        title:"Fuzzy search",
        component: Day17,
        isFA: false,
        icon: "md-search",
        size:50,
        color:"#69B32A",
        hideNav: false,
      },{
        key:17,
        title:"Sortable",
        component: Day18,
        isFA: false,
        icon: "md-move",
        size:50,
        color:"#68231A",
        hideNav: true,
      },{
        key:18,
        title:"TouchID to unlock",
        component: Day10,
        isFA: false,
        icon: "ios-log-in",
        size:50,
        color:"#fdbded",
        hideNav: true,
      },{
        key:19,
        title:"Single page Reminder",
        component: Day20,
        isFA: false,
        icon: "ios-list-outline",
        size:50,
        color:"#68d746",
        hideNav: true,
      },{
        key:20,
        title:"Multi page Reminder",
        component: Day21,
        isFA: false,
        icon: "ios-paper-outline",
        size:50,
        color:"#fe952b",
        hideNav: true,
      },{
        key:21,
        title:"Google Now",
        component: Day22,
        isFA: false,
        icon: "ios-mic-outline",
        size:50,
        color:"#4285f4",
        hideNav: true,
      },{
        key:22,
        title:"Local WebView",
        component: Day23,
        isFA: true,
        icon: "safari",
        size:50,
        color:"#23bfe7",
        hideNav: false,
      },{
        key:23,
        title:"Youtube scrollable tab",
        component: Day24,
        isFA: false,
        icon: "logo-youtube",
        size:50,
        color:"#e32524",
        hideNav: true,
      },{
        key:24,
        title:"custome in-app browser",
        component: Day25,
        isFA: false,
        icon: "ios-globe",
        size:50,
        color:"#00ab6b",
        hideNav: true,
      },{
        key:25,
        title:"swipe and switch",
        component: Day26,
        isFA: false,
        icon: "md-shuffle",
        size:50,
        color:"#893D54",
        hideNav: true,
      },{
        key:26,
        title:"iMessage Gradient",
        component: Day10,
        isFA: false,
        icon: "ios-chatbubbles",
        size:50,
        color:"#248ef5",
        hideNav: false,
      },{
        key:27,
        title:"iMessage image picker",
        component: Day28,
        isFA: false,
        icon: "md-images",
        size:50,
        color:"#f5248e",
        hideNav: true,
      },{
        key:28,
        title:"3d touch",
        component: Day29,
        isFA: false,
        icon: "ios-navigate",
        size:50,
        color:"#48f52e",
        hideNav: false,
      },{
        key:29,
        title:"Push Notifications",
        component: Day30,
        isFA: false,
        icon: "md-notifications",
        size:50,
        color:"#f27405",
        hideNav: false,
      }]
    }
  }

  _jumpToDay(index){
    this.props.navigator.push({
      title: this.state.days[index].title,
      index: index + 1,
      display: !this.state.days[index].hideNav,
      component: this.state.days[index].component,
    })
  }

  render() {
    var onThis = this;

    //每一天的小方块入口
    var boxs = this.state.days.map(function(elem, index) {
      return(
        <TouchableHighlight key={elem.key} style={[styles.touchBox, index%3==2?styles.touchBox2:styles.touchBox1]} underlayColor="#eee" onPress={()=> onThis._jumpToDay(index)}>
          <View style={styles.boxContainer}>
            <Text style={styles.boxText}>Day{index+1}</Text>
            {elem.isFA? <IconFA size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></IconFA>:
              <Icon size={elem.size} name={elem.icon} style={[styles.boxIcon,{color:elem.color}]}></Icon>}
          </View>
        </TouchableHighlight>
      );
    })

    return(
      <ScrollView style={styles.mainView} title={this.props.title}>
        <Swiper height={150} showsButtons={false} autoplay={true}
          activeDot={<View style={{backgroundColor: 'rgba(255,255,255,0.8)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>

          <TouchableHighlight onPress={()=> onThis._jumpToDay(0)}>
            <View style={styles.slide}>
              <Image style={[styles.image, {backgroundColor: 'yellow'}]}></Image>
              <Text style={styles.slideText}>Day1: Timer</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={()=> onThis._jumpToDay(1)}>
            <View style={styles.slide}>
              <Image style={[styles.image, {backgroundColor: 'red'}]}></Image>
              <Text style={styles.slideText}>Day2: Weather</Text>
            </View>
          </TouchableHighlight>
        </Swiper>

        <View style={styles.touchBoxContainer}>
          {boxs}
        </View>
      </ScrollView>
    );
  }
}

class NavigationBar extends Navigator.NavigationBar {
  render() {
    var routes = this.props.navState.routeStack;

    if (routes.length) {
      var route = routes[routes.length - 1];

      if (route.display === false) {
        return null;
      }
    }

    return super.render();
  }
}

class ThirtyDaysOfReactNative extends Component{

  componentDidMount() {
    StatusBar.setBarStyle(0);
  }

  configureScene(route, routeStack) {
    if (route.type == 'Bottom') {
      return Navigator.SceneConfigs.FloatFromBottom; 
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  routeMapper = {
    LeftButton: (route, navigator, index, navState) =>
      { 
        // 左边的按钮
        if(route.index > 0) {
          return <TouchableOpacity
            underlayColor='transparent'
            onPress={() => {if (index > 0) {navigator.pop()}}}>
            <Text style={styles.navBackBtn}>
            <Icon size={18} name="ios-arrow-back"></Icon> back</Text>
          </TouchableOpacity>;
        }else{
          return null;
        }
      },
      // 右边的按钮
    RightButton: (route, navigator, index, navState) =>
      { return null; },
      //标题
    Title: (route, navigator, index, navState) =>
      { return (<Text style={styles.navTitle}>{route.title}</Text>); },
  };
  
  render(){
    return (
      //导航控制器
      <Navigator
        // 初始路由
        initialRoute={{ 
          title: '30 Days of RN',
          index: 0,
          display: true,
          component: MainView,
        }}
        // 跳转方式
        configureScene={this.configureScene}
        // 目标场景
        renderScene={(route, navigator) => {
          return <route.component navigator={navigator} title={route.title} index={route.index} />
        }}
        // 导航栏样式
        navigationBar={
          <NavigationBar
            // 路由Mapper
            routeMapper={this.routeMapper}
            style={styles.navBar}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flexGrow:1,
  },
  mainView: {
    marginTop: 63
  },
  navBar: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: 'white'
  },
  navTitle: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  navBackBtn: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 18,
    color: "#555",
  },
  itemWrapper:{
    backgroundColor: '#f3f3f3'
  },
  touchBox:{
    width: Util.size.width/3-0.33334,
    height:Util.size.width/3,
    backgroundColor:"#fff",
  },
  
  touchBoxContainer:{
    flexDirection: "row", 
    flexWrap:"wrap",
    width: Util.size.width,
    borderTopWidth: Util.pixel,
    borderTopColor:"#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },
  touchBox1:{
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },
  touchBox2:{
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor:"#ccc",
  },
  boxContainer:{
    alignItems:"center",
    justifyContent:"center",
    width: Util.size.width/3,
    height:Util.size.width/3,
  },
  boxIcon:{
    position:"relative",
    top:-10
  },
  boxText:{
    position:"absolute",
    bottom:15,
    width:Util.size.width/3,
    textAlign:"center",
    left: 0,
    backgroundColor:"transparent"
  },
  slide: {
    flexGrow: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideText:{
    position:"absolute",
    bottom: 0,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"rgba(255,255,255,0.5)",
    width: Util.size.width,
    textAlign:"center",
    fontSize: 12
  },
  image:{
    width: Util.size.width,
    flexGrow: 1,
    alignSelf: 'stretch',
  }
});

// const styles = StyleSheet.create({
//   container:{
//       flex: 1,
//       paddingTop: 22,
//   },

//   sectionHeader:{
//       paddingTop: 2,
//       paddingLeft: 10,
//       paddingRight: 10,
//       paddingBottom: 2,
//       fontSize: 14,
//       fontWeight: 'bold',
//       backgroundColor: 'rgba(247,247,247,1.0)',
//   },

//   item:{
//       padding: 10,
//       fontSize: 18,
//       height: 44,
//       backgroundColor: '#FABE3B',
//   },
// })

// class MyTest extends Component{
//   render(){
//     return(
//       <NavigatorIOS initialRoute={{
//         component: MyScene,
//         title: "NavigatorIOS"
//       }}
//       style = {{flex: 1}}>
//       </NavigatorIOS>
//     )
//   }
// }

// class MyScene extends Component{

//   _jumpToDay(index){

//     days = [
//       {title: 'Day1', component: Day1},
//       {title: 'Day2', component: Day2},
//       {title: 'Day3', component: Day3},
//       {title: 'Day4', component: Day4},
//       {title: 'Day5', component: Day5},
//       {title: 'Day6', component: Day6},
//       {title: 'Day7', component: Day7},
//       {title: 'Day8', component: Day8},
//       {title: 'Day9', component: Day9},
//       {title: 'Day10', component: Day10},
//       {title: 'Day11', component: Day2},
//       {title: 'Day12', component: Day3},
//       {title: 'Day13', component: Day4},
//       {title: 'Day14', component: Day5},
//       {title: 'Day15', component: Day6},
//       {title: 'Day16', component: Day7},
//       {title: 'Day17', component: Day8},
//       {title: 'Day18', component: Day9},
//     ]

//     // alert("NavigatorIOS")
//     this.props.navigator.push({
//       title: days[index].title,
//       component: days[index].component,
//       // index: index + 1,
//       // display: !this.state.days[index].hideNav,
//     })
//   }


//   render(){
//     return(
//       <ScrollView>
//         <Text onPress={()=> this._jumpToDay(0)} >day1</Text>
//         <Text onPress={()=> this._jumpToDay(1)} >day2</Text>
//         <Text onPress={()=> this._jumpToDay(2)} >day3</Text>
//         <Text onPress={()=> this._jumpToDay(3)} >day4(没有实现)</Text>
//         <Text onPress={()=> this._jumpToDay(4)} >day5(MapView这个狗逼不能用啦)</Text>
//         <Text onPress={()=> this._jumpToDay(5)} >day6</Text>
//         <Text onPress={()=> this._jumpToDay(6)} >day7</Text>
//         <Text onPress={()=> this._jumpToDay(7)} >day8(使用了Day5的东西)</Text>
//         <Text onPress={()=> this._jumpToDay(8)} >day9</Text>
//       </ScrollView>
//     )
//   }
// }

AppRegistry.registerComponent('MyDayDemo', () => ThirtyDaysOfReactNative);
