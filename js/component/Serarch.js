import React from 'react';
import {View, StyleSheet,Text,TextInput} from 'react-native';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state={text: '',show: false}
    }
    getValue(text) {
        this.setState({
            show: true,
            text: text
        })
    }
    hide(val) {
        this.setState({
            show: false,
            value: val
        })
    }
    render() {
        return (
            <View style={[styles.flex,styles.flexDirection]}>
                <View style={styles.flex}>
                    <TextInput
                        style={styles.input}
                        returnKeyType="search"
                        placeholder="请输入关键字"
                        underlineColorAndroid="transparent"
                        onEndEditing={this.hide.bind(this,this.state.text)}
                        value={this.state.text}
                        onChangeText={()=>this.getValue()}
                    />
                </View>
                <View style={styles.btn}>
                    <Text
                        style={styles.search}
                        onPress={this.hide.bind(this,this.state.value)}>搜索</Text>
                </View>
                {this.state.show?
                <View style={styles.result}>
                    <Text
                        style={styles.item}
                        numberOfLines={1}
                        onPress={this.hide.bind(this,this.state.text+'庄')}>
                        {this.state.text}庄
                    </Text>
                    <Text
                        style={styles.item}
                        numberOfLines={1}
                        onPress={this.hide.bind(this,this.state.text+'园街')}
                    >
                        {this.state.text}园街
                    </Text>
                    <Text
                        style={styles.item}
                        numberOfLines={1}
                        onPress={this.hide.bind(this,80+this.state.text+'综合商店')}
                    >
                        80{this.state.text}综合商店
                    </Text>
                </View>
                    :null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    flexDirection: {
        flexDirection: 'row'
    },
    inputHeight: {
        marginTop: 45
    },
    input: {
        height: 45,
        borderWidth: 1,
        padding: 0,
        marginLeft: 5,
        paddingLeft: 5,
        borderColor: '#ccc',
        borderRadius: 4
    },
    btn: {
        width: 55,
        marginLeft: -5,
        marginRight: 5,
        backgroundColor: '#23beff',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    result: {
        marginTop: 45,
        marginLeft: 5,
        marginRight: 5,
        height: 200,
        borderColor: '#ccc',
        borderTopWidth: 1
    },
    item: {
        fontSize: 16,
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderTopWidth: 0
    }
});

module.exports = Search;