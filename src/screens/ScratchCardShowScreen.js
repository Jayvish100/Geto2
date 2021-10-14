import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import VectorImage from 'react-native-vector-image';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class ScratchCardShowScreen extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({
      headerShown: false,
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigation.pop()}>
        <View style={styles.container}>
          <VectorImage
            source={require('../assets/svg/ScratchCardShow.svg')}
            style={{
              height: windowHeight,
              width: windowWidth,
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: windowHeight * 0.28,
            }}>
            <VectorImage
              source={require('../assets/svg/ScratchShow.svg')}
              style={{
                height: windowHeight * 0.465,
                width: windowWidth * 0.465,
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
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

export default ScratchCardShowScreen;
