import React from 'react';
import {Text, View} from 'react-native';

const Header = props => {
  const {textSyle, viewStyle} = styles;

  return (
    <View style={viewStyle}>
      <Text style={textSyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textSyle: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
};
export default Header;
