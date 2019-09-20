/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Header from './src/components/header';
import {View} from 'react-native';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View style={{flex: 1}}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

export default App;
