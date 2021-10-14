import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import VectorImage from 'react-native-vector-image';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class ScannerScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainerStyle}>
          <VectorImage
            source={require('../assets/svg/Scan1.svg')}
            style={styles.scanBackImgStyle}
          />

          <Image
            style={styles.QRCodeImgStyle}
            source={require('../assets/images/QRCode.png')}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter Code"
            onChangeText={() => {}}
          />
          <TouchableOpacity
            style={styles.validateTouchStyle}
            onPress={() => {}}>
            <VectorImage
              source={require('../assets/svg/Validate.svg')}
              style={styles.validateImageStyle}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.scanCodeButtonTouchStyle}
          onPress={() => {}}>
          <VectorImage
            source={require('../assets/svg/ScanCode.svg')}
            style={styles.scanCodeButtonImageStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default ScannerScreen;

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // backgroundColor: '#000',
      },
      android: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
    }),
  },
  cardContainerStyle: {
    ...Platform.select({
      ios: {
        marginTop: windowHeight * 0.15,
        height: windowHeight * 0.55,
        width: windowWidth * 0.85,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
        // borderWidth: 1,

        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      android: {
        marginTop: windowHeight * 0.1,
        height: windowHeight * 0.65,
        width: windowWidth * 0.9,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
        // borderWidth: 1,

        shadowColor: '#000',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10
      },
    }),
  },
  scanBackImgStyle: {
    ...Platform.select({
      ios: {
        height: windowHeight * 0.55,
        width: windowWidth * 0.85,
      },
      android: {
        height: windowHeight * 0.65,
        width: windowWidth * 0.92,
      },
    }),
  },
  QRCodeImgStyle: {
    ...Platform.select({
      ios: {
        height: windowHeight * 0.18,
        width: windowWidth * 0.38,
        position: 'absolute',
        top: windowHeight * 0.135,
      },
      android: {
        height: windowHeight * 0.2,
        width: windowWidth * 0.38,
        position: 'absolute',
        top: windowHeight * 0.16,
      },
    }),
  },
  textInputStyle: {
    ...Platform.select({
      ios: {
        // borderWidth: 1,
        color: '#838383',
        position: 'absolute',
        top: windowHeight * 0.46,
        width: windowWidth * 0.475,
        paddingVertical: windowHeight * 0.011,
        borderTopLeftRadius: windowHeight * 0.025,
        borderBottomLeftRadius: windowHeight * 0.025,
        textAlign: 'center',
        left: windowWidth * 0.06,
        fontSize: windowWidth * 0.04,
      },
      android: {
        // borderWidth: 1,
        color: '#838383',
        position: 'absolute',
        top: windowHeight * 0.542,
        width: windowWidth * 0.475,
        paddingVertical: windowHeight * 0.011,
        borderTopLeftRadius: windowHeight * 0.03,
        borderBottomLeftRadius: windowHeight * 0.03,
        textAlign: 'center',
        left: windowWidth * 0.07,
        fontSize: windowWidth * 0.04,
      },
    }),
  },
  validateTouchStyle: {
    ...Platform.select({
      ios: {
        // borderWidth: 1,
        borderRadius:22,
        position: 'absolute',
        top: windowHeight * 0.459,
        left: windowWidth * 0.535,
      },
      android: {
        borderRadius:30,
        // borderWidth: 1,
        position: 'absolute',
        top: windowHeight * 0.54,
        left: windowWidth * 0.54,
      },
    }),
  },
  validateImageStyle: {
    ...Platform.select({
      ios: {
        height: windowHeight * 0.047,
        width: windowWidth * 0.255,
      },
      android: {
        height: windowHeight * 0.06,
        width: windowWidth * 0.28,
      },
    }),
  },
  scanCodeButtonTouchStyle: {
    ...Platform.select({
      ios: {
        // borderWidth: 1,
        borderRadius:22,
        marginTop: windowHeight * 0.05,
      },
      android: {
        // borderWidth: 1,
        borderRadius:30,
        marginTop: windowHeight * 0.05,
      },
    }),
  },
  scanCodeButtonImageStyle: {
    ...Platform.select({
      ios: {
        height: windowHeight * 0.049,
        width: windowWidth * 0.7,
      },
      android: {
        height: windowHeight * 0.07,
        width: windowWidth * 0.85,
      },
    }),
  },
});

// ...Platform.select({
//       ios: {

//       },
//       android: {

//       }
//     })
