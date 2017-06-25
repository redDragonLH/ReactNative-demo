import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import styles from './importantNews.style.js'
var ImportantNews = React.createClass({
  show:function(title){
    alert(title);
  },
  render(){
    var news=[];
    for(var i in this.props.news){
      var text =(
        <Text
          onPress={this.show.bind(this,this.props.news[i])}
          numberOfLines={2}
          style={styles.news_item}
          >{this.props.news[i]}</Text>
      );
      news.push(text);
    }
    return (
      <View style={styles.flex}>
        <Text style={styles.news_title}>今日要闻</Text>
        {news}
      </View>
    )
  }
});
module.exports = ImportantNews;
