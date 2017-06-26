// 废弃
import React, { Component } from 'react';
import  {
  StyleSheet,
  Navigator,
  Text,
  AppRegistry,
  View,
  ScrollView,
} from 'react-native'

var NavigatorChildPage  = React.createClass({
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


var iNavigator;

export default class NavigatorDemo extends Component {
  configureScenceAndroid() {
    return Navigator.SceneConfigs.FadeAndroid;
  }

  renderSceneAndroid(route, navigator) {
    iNavigator = navigator;
    switch (route.id) {
      case 'Main':
        return (
          <View style={styles.container}>
            <TouchableOpacity onPress={ () => iNavigator.push({title:'NavigatorChildPage',id:'NavigatorChildPage'}) }>
              <Text style={styles.welcome}>Click Go To NavigatorChildPage Page</Text>
            </TouchableOpacity>
          </View>
        )
        break;
      case 'NavigatorChildPage':
        return (<NavigatorChildPage navigator={navigator} route={route}/>);
        break;
    }
  }

  render() {
    var renderScene = this.renderSceneAndroid;
    var configureScence = this.configureScenceAndroid;
    return (
      <Navigator
        debugOverlay={false}
        initialRoute={{ title: 'Main', id:'Main'}}
        configureScence={{configureScence}}
        renderScene={renderScene}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
