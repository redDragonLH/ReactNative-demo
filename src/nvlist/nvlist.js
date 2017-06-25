// 废弃
import React from 'react';
import  {
  StyleSheet,
  Navigator,
  Text,
  AppRegistry,
  View,
  ScrollView,
} from 'react-native'

var NList = React.createClass({
  render: function(){
    return (
      <ScrollView style={styles.flex}>
        <Text style={styles.list_item} onPress={this.goTo}>☆ 豪华邮轮济州岛3日游</Text>
        <Text style={styles.list_item} onPress={this.goTo}>☆ 豪华邮轮台湾3日游</Text>
        <Text style={styles.list_item} onPress={this.goTo}>☆ 豪华邮轮地中海8日游</Text>
      </ScrollView>
      );
  },
  goTo: function(){
    const { navigator } = this.props;
    if(navigator) {
      navigator.push({
        component: Detail,
        title: '邮轮详情',
        rightButtonTitle: '购物车',
        onRightButtonPress: function(){
          alert('进入我的购物车');
        }
      });
    }
  }
});

var Detail = React.createClass({
  render: function(){
    return (
      <ScrollView>
        <Text>详情页</Text>
        <Text>尽管信息很少，但这就是详情页</Text>
      </ScrollView>
    );
  }
});

var NV = React.createClass({
  render: function(){
    return(
      <Navigator
        style={{flex:1}}
        initialRoute={{
          component: List,
          title: '邮轮',
          passProps: {},
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  flex:{
    flex: 1,
  },
  list_item:{
    lineHeight:25,
    fontSize:16,
    marginLeft:10,
    marginRight:10
  }
});
module.exports = NList;
