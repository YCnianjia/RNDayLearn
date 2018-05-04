/**
 * Day 7
 * Basic pan gesture
 */
'use strict';

import React,{ Component } from 'react';
import { Platform,Image,StyleSheet,StatusBar,Text,TouchableHighlight,PanResponder,View } from 'react-native';
import Util from './utils';
import Icon from 'react-native-vector-icons/Ionicons';

//ref和setNativeProps使用
//https://blog.csdn.net/lu1024188315/article/details/73733840

class MoveableCircle extends Component{
  constructor() {
    super();
    this.state = {
      color: "rgba(255,255,255,0.7)",
    };
  }

  _previousLeft = Util.size.width/2-40;
  _previousTop = Util.size.height/2-50;
  _maxTop = Util.size.height-110;
  _maxLeft = Util.size.width-98;

  _circleStyles = {};
  
  _updatePosition() {
    // 直接改动组件并触发局部的刷新
    this.circle && this.circle.setNativeProps(this._circleStyles);
  }

  //手势结束后的位置处理
  _endMove(evt, gestureState) {
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
    this.setState({
      color: "rgba(255,255,255,0.7)"
    });
  }

  componentWillMount() {
    // 拖动手势的处理
    this._panResponder = PanResponder.create({
      // 要求成为响应者：
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

        // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
        onPanResponderGrant: (evt, gestureState) => {
          this.setState({
            color: "white",
          })
        },
        onPanResponderMove: (evt, gestureState) => {
          // 最近一次的移动距离为gestureState.move{X,Y}
          // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
          
           this._circleStyles.style.left = this._previousLeft + gestureState.dx;
           this._circleStyles.style.top = this._previousTop + gestureState.dy;
           if (this._circleStyles.style.left<0) {
              this._circleStyles.style.left = 0;
           };
           if (this._circleStyles.style.top<5) {
              this._circleStyles.style.top = 5;
           };
           if (this._circleStyles.style.left>this._maxLeft) {
              this._circleStyles.style.left = this._maxLeft;
           };
           if (this._circleStyles.style.top>this._maxTop) {
              this._circleStyles.style.top = this._maxTop;
           };
           this._updatePosition();
        },
        
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderRelease: (evt, gestureState) => this._endMove(evt, gestureState),
        // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
        // 一般来说这意味着一个手势操作已经成功完成。
        onPanResponderTerminate: (evt, gestureState) => this._endMove(evt, gestureState),
        // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
    });

    this._circleStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
      },
    };

  }

  componentDidMount() {
    this._updatePosition();
  }

  render() {
    return(
      // 将组件view作为参数赋值给了this.circle
      <View ref={(circle) => {this.circle = circle;}} style={styles.MoveableCircle} {...this._panResponder.panHandlers}>
        <Icon ref="baseball" name="ios-baseball" color={this.state.color} size={120}></Icon>
      </View>
    )
  }
}

export default class extends Component{
  componentWillMount() {
    if(Platform.OS === "ios"){
      StatusBar.setBarStyle(1);
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Image source={require('./img/agrass.png')} style={styles.bg}></Image>
        <View style={styles.circleContainer}>
          <MoveableCircle></MoveableCircle>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:Util.size.height,
    width: Util.size.width
  },
  bg:{
    width: Util.size.width,
    resizeMode:"stretch",
    position:"absolute"
  },
  circleContainer:{
    height:Util.size.height,
    width: Util.size.width,
  },
  MoveableCircle:{
    backgroundColor:"transparent",
    position:"absolute",
    left:0,
    right:0
  },
});