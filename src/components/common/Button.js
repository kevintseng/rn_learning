import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { textStyle, touchableStyle, buttonStyle } = styles;

  return (
      <TouchableOpacity onPress={onPress} style={touchableStyle}>
        <View style={buttonStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
        </View>
      </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  touchableStyle: {
    flexGrow: 1,
    alignSelf: 'stretch',
    height: 43,
    marginBottom: 15,
  },
  buttonStyle: {
    flexGrow: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 15,
    height: 43,
  }
};

export { Button };
