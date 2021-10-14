import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import VectorImage from 'react-native-vector-image';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Scan = ({onPress}) => {
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity onPress={onPress}>
        <VectorImage
          source={require('../assets/svg/scan.svg')}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: windowHeight * 0.015,
  },
  imageStyle: {
    ...Platform.select({
      ios: {
        height: windowHeight * 0.12,
        width: windowWidth * 0.95,
        alignSelf: 'center',
      },
      android: {
        height: windowHeight * 0.15,
        width: windowWidth * 1.0,
      },
    }),
  },
});

export default Scan;
