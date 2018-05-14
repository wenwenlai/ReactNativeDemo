import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

const imgs = [
    'http://www.ituring.com.cn/bookcover/1668.553.jpg',
    'http://www.ituring.com.cn/bookcover/1442.796.jpg',
    'http://www.ituring.com.cn/bookcover/1521.260.jpg'
];

class ImageTest extends React.Component {
    constructor(props) {
        super(props);
        this.state={imgs: imgs,count: 0}
    }

    goNext() {
        let count = this.state.count;
        count ++;
        if (count < imgs.length){
            this.setState({
                count: count
            })
        }
    }
    goPreview() {
        let count = this.state.count;
        count --;
        if (count >= 0){
            this.setState({
                count: count
            })
        }
    }
    render() {
        return (
            <View style={styles.flex}>
                <View style={styles.image}>
                    <Image style={styles.img}
                           source={{uri: this.state.imgs[this.state.count]}}
                           resizeMode="contain"
                    />
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity onPress={() => this.goPreview()}>
                        <Text style={styles.btn}>上一张</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity onPress={() => this.goNext(this.props.count)}>
                        <Text style={styles.btn}>下一张</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    image: {
        borderWidth: 1,
        width: 300,
        height: 200,
        borderRadius: 5,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: 150,
        width: 200
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    btn: {
        width: 60,
        height: 30,
        lineHeight: 30,
        borderColor: '#0089ff',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginRight: 20,
        textAlign: 'center'
    }
});

module.exports = ImageTest;