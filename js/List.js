import React from 'react';
import { ScrollView, StyleSheet,Text } from "react-native";
import Detail from 'Detail';

class List extends React.Component {
    goTo() {
        this.props.navigator.push({
            component: Detail,
            title: '邮轮详情',
            rightButtonTitle: '购物车',
            onRightButtonPress: () => alert('进入我的购物车')
        })
    };
    render() {
        return (
            <ScrollView style={styles.flex}>
                <Text style={styles.list_item} onPress={this.goTo}>☆ 豪华邮轮济州岛3日游</Text>
                <Text style={styles.list_item} onPress={this.goTo}>☆ 豪华邮轮台湾3日游</Text>
                <Text style={styles.list_item} onPress={this.goTo}>☆ 豪华邮轮地中海3日游</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    list_item:{
        lineHeight:25,
        fontSize:16,
        marginLeft:10,
        marginRight:10
    }
});

module.exports = List;