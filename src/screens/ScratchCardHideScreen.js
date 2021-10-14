import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import VectorImage from 'react-native-vector-image';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class ScratchCardHideScreen extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({
      headerShown: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <VectorImage
          source={require('../assets/svg/ScratchCardHide.svg')}
          style={{
            height: windowHeight,
            width: windowWidth,
          }}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: windowHeight * 0.28,
          }}
          onPress={() => this.props.navigation.replace('ScratchCardShow')}>
          <VectorImage
            source={require('../assets/svg/ScratchHide.svg')}
            style={{
              height: windowHeight * 0.465,
              width: windowWidth * 0.465,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default ScratchCardHideScreen;
