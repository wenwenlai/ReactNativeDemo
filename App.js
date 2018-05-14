/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component,
} from 'react';

import {
    StyleSheet,
    View
} from 'react-native';

import ImageTest from './js/component/Image'

export default class NewsList extends Component {

    render() {
        return (
            <View style={styles.flex}>
               <ImageTest> </ImageTest>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    }
});

