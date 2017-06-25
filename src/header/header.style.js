import {
    StyleSheet,
    PixelRatio //获取高清设备像素比
} from 'react-native';

// 样式
var HeaderStyle = StyleSheet.create({
    flex:{
      marginTop:25,
      height:50,
      borderBottomWidth:3/PixelRatio.get(),
      borderBottomColor:'#EF2D36',
      alignItems:'center' /* 使 Text 组件水平居中 */
    },
    font:{
      fontSize:25,
      fontWeight:'bold',
      textAlign:'center' /* 使文字在Text组件中居中 */
    },
    font_1:{
      color:'#CD1D1C'
    },
    font_2:{
      color:'#fff',
      backgroundColor:'#CD1D1C'
    }
});
module.exports = HeaderStyle;
