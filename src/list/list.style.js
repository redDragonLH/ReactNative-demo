import {
    StyleSheet,
    PixelRatio //获取高清设备像素比
} from 'react-native';

let style = StyleSheet.create({
  flex:{
    flex:1
  },
  list_item:{
    height:40,
    marginRight:10,
    marginLeft:10,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    justifyContent:'center'
  },
  list_item_font:{
    fontSize:16
  }
});
module.exports = style;
