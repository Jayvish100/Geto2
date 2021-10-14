import React from 'react';

import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  View,
  Platform,
} from 'react-native';
import VectorImage from 'react-native-vector-image';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PartnerRewards = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <VectorImage
        source={require('../assets/svg/PartnerRewards.svg')}
        style={styles.imageStyle}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    ...Platform.select({
      ios: {
        height: windowHeight * 0.12,
        width: windowWidth * 0.9,
        marginLeft: windowWidth * 0.05,
        marginRight: windowWidth * 0.05,
      },
      android: {
        height: windowHeight * 0.14,
        width: windowWidth * 1.0,
      },
    }),
  },
});

export default PartnerRewards;
