import React from 'react';
import { FlatList,View, StyleSheet,Text } from "react-native";

class ImportantNews extends React.Component {
    static show(title) {
        alert(title);
    };
    render() {
        return (
            <View style={styles.flex}>
                <Text style={styles.news_title}>今日要闻</Text>
                <FlatList
                  data={this.props.news}
                  renderItem ={({item}) => <Text
                      style ={styles.news_item}
                      numberOfLines ={2}
                      onPress ={ImportantNews.show.bind(this, item.key)}>{item.key}</Text>}>
                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    news_title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#cd1d1c',
        marginLeft: 10,
        marginTop:15
    },
    news_item: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        lineHeight: 20
    }
});

module.exports = ImportantNews;