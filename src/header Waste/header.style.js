import {
    StyleSheet,
    PixelRatio //获取高清设备像素比
} from 'react-native';

// 样式
var HeaderStyle = StyleSheet.create({
    container: {
      marginTop:25,  // 所有单位是pt ,pt印刷页常用单位 1pt等于 1/72英寸
      marginLeft:5,
      marginRight:5,
      height:84,
      borderRadius:5,
      padding:2,
      backgroundColor:'#ff0067',
      flexDirection:'row'  // 设置元素方向， 水平显示
    },
    item:{
      flex:1,  //
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
      fontSize:16, // 单位是 pt
      fontWeight:'bold'
    },
    lineLeftRight:{
      borderLeftWidth:1/PixelRatio.get(),  // 边框 1px 宽度
      borderRightWidth:1/PixelRatio.get(),
      borderColor:'#fff'
    },
    lineCenter:{
      borderBottomWidth:1/PixelRatio.get(),
      borderColor:'#fff'
    }
});
module.exports = HeaderStyle;
