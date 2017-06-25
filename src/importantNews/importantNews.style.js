import {
    StyleSheet,
    PixelRatio //获取高清设备像素比
} from 'react-native';

let style = StyleSheet.create({
  flex:{
    flex:1
  },
  news_title:{
    fontSize:20,
    fontWeight:'bold',
    color:'#DC1D1C',
    marginLeft:10,
    marginTop:15,
    marginBottom:20,
  },
  news_item:{
    marginLeft:10,
    marginRight:10,
    fontSize:15,
    lineHeight:20,
    marginBottom:8,

  }
});
module.exports = style;
