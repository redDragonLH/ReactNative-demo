import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    PixelRatio
} from 'react-native';

// 实例化入口
var Header = React.createClass({
    render() {
        return (
          <View style={styles.flex}>
            <View style={styles.container}>
              <View style={[styles.item,styles.center]}>
                <Text style={styles.font}>酒店</Text>
              </View>
              <View style={[styles.item,styles.lineLeftRight]}>
                <View style={[styles.flex,styles.center,styles.lineCenter]}>
                  <Text style={styles.font}>海外酒店</Text>
                </View>
                <View style={[styles.flex,styles.center]}>
                  <Text style={styles.font}>特惠酒店</Text>
                </View>
              </View>
              <View style={styles.item}>
                <View style={[styles.flex,styles.center,styles.lineCenter]}>
                  <Text style={styles.font}>团购</Text>
                </View>
                <View style={[styles.flex,styles.center]}>
                  <Text style={styles.font}>客栈·公寓</Text>
                </View>
              </View>
            </View>
          </View>
        );
    }
});

// 样式
var styles = StyleSheet.create({
    container: {
      marginTop:25,
      marginLeft:5,
      marginRight:5,
      height:84,
      borderRadius:5,
      padding:2,
      backgroundColor:'#ff0067',
      flexDirection:'row'
    },
    item:{
      flex:1,
      height:80,
    },
    center:{
      justifyContent:'center', /* 垂直居中*/
      alignItems:'center'  /*水平剧中*/
    },
    flex:{
      flex:1
    },
    font:{
      color:'#fff',
      fontSize:16,
      fontWeight:'bold'
    },
    lineLeftRight:{
      borderLeftWidth:1/PixelRatio.get(),
      borderRightWidth:1/PixelRatio.get(),
      borderColor:'#fff'
    },
    lineCenter:{
      borderBottomWidth:1/PixelRatio.get(),
      borderColor:'#fff'
    }
});

// 注册输出组件
module.exports = Header;
