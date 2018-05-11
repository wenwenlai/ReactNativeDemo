import React from "react";
import { View, StyleSheet,Text } from "react-native";

class List extends React.Component{
    render() {
        return (
            <View style={styles.list_item}>
                <Text stle={styles.list_item_font}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    list_item: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent: 'center'
    },
    list_item_font: {
        fontSize: 16
    }
});

module.exports = List;