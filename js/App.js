/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component,
} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Header from './js/component/Header';
import List from './js/component/List';
import ImportantNews from './js/component/ImportantNews';

export default class NewsList extends Component {
    render() {
        const news = [
            {key:'1、刘慈欣《三体》获“雨果奖”为中国作家首次'},
            {key:'2、京津冀协同发展定位明确：北京无经济中心表述'},
            {key:'3、好奇宝宝第一次淋雨，父亲用镜头记录了下来'},
            {key:'4、京津冀协同发展定位明确：:北京无经济中心表述+好奇宝宝第一次淋雨，父亲用镜头记录了下来,超过两行'}
        ];
        return (
            <View style={styles.flex}>
                <Header> </Header>
                <List title='宇航员在太空宣布“三体”获奖'> </List>
                <List title='NASA发短片纪念火星征程50年'> </List>
                <List title='NASA发短片纪念火星征程50年'> </List>
                <List title='NASA发短片纪念火星征程50年'> </List>
                <ImportantNews news={news}> </ImportantNews>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    }
});

