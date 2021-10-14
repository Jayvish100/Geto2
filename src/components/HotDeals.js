import React from 'react';
import {
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';
import VectorImage from 'react-native-vector-image';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HotDeals = () => {
  return (
    <View style={styles.containerStyle}>
      <Image
        source={require('../assets/HotDealsAssets/HotDealBackImage4x.png')}
        style={styles.backImageStyle}
      />
      <LinearGradient
        style={styles.linearGradientStyle}
        colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.7)']}
      />
      <VectorImage
        source={require('../assets/HotDealsAssets/HotDealTopRightVector.svg')}
        style={{position: 'absolute', height: 80, width: 80, right: 0}}
      />
      <VectorImage
        source={require('../assets/HotDealsAssets/HotDealGiftVectorCenter.svg')}
        style={{
          position: 'absolute',
          alignSelf: 'center',
          top: windowHeight * 0.17,
        }}
      />
      <VectorImage
        source={require('../assets/HotDealsAssets/HotDealHeadText.svg')}
        style={{
          position: 'absolute',
          alignSelf: 'center',
          top: windowHeight * 0.21,
        }}
      />
      <Text
        style={{
          position: 'absolute',
          alignSelf: 'center',
          top: windowHeight * 0.24,
          color: '#fff',
          fontSize: 16,
          fontWeight: '600',
        }}>
        Rs. 50/- off on purchase of Rs. 500/-
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: windowWidth * 0.9,
    marginHorizontal: windowWidth * 0.05,
    borderRadius: 15,
  },
  backImageStyle: {
    ...Platform.select({
      ios: {
        height: windowHeight * 0.3,
        width: windowWidth * 0.9,
        borderRadius: 15,
      },
      android: {
        height: windowHeight * 0.3,
        width: windowWidth * 0.9,
        borderRadius: 15,
      },
    }),
  },
  linearGradientStyle: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        height: windowHeight * 0.3,
        width: windowWidth * 0.9,
        borderRadius: 15,
      },
      android: {
        position: 'absolute',
        height: windowHeight * 0.3,
        width: windowWidth * 0.9,
        borderRadius: 15,
      },
    }),
  },
});

export default HotDeals;
