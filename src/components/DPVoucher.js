import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import VectorImage from 'react-native-vector-image';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DPVoucher = ({dpdiscount, dpminBill}) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.logoView}>
        <Image
          source={require('../assets/VoucherAssets/DPLogo.png')}
          style={styles.DPLogoImageStyle}
        />
      </View>
      <View style={styles.mainView}>
        <Image
          source={require('../assets/VoucherAssets/DPBackImg.png')}
          style={styles.DPBackImageStyle}
        />
        <LinearGradient
          colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)']}
          style={styles.linearGradientStyle}
        />
        <VectorImage
          source={require('../assets/VoucherAssets/DPVector.svg')}
          style={styles.DPVectoStyle}
        />
        <VectorImage
          source={require('../assets/VoucherAssets/OfferLogo.svg')}
          style={styles.offerLogoStyle}
        />
        <Text style={styles.discountTextStyle}>₹{dpdiscount} OFF</Text>
        <Text style={styles.discountDescTextStyle}>
          We offer ₹{dpdiscount}/- off on minimum billing of ₹{dpminBill}/-
        </Text>
      </View>
    </View>
  );
};

export default DPVoucher;

const styles = StyleSheet.create({
  containerStyle: {
    ...Platform.select({
      ios: {
        height: windowHeight * 0.2,
        width: windowWidth * 0.9,

        alignSelf: 'center',
        borderRadius: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',

        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      android: {
        height: windowHeight * 0.2,
        width: windowWidth * 0.9,

        alignSelf: 'center',
        borderRadius: 15,
        backgroundColor: '#fff',
        flexDirection: 'row',

        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5
      },
    }),
  },
  logoView: {
    ...Platform.select({
      ios: {
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        width: windowWidth * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
      },
      android: {
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        width: windowWidth * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
      },
    }),
  },
  mainView: {
    ...Platform.select({
      ios: {
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        width: windowWidth * 0.6,
      },
      android: {
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        width: windowWidth * 0.6,
      },
    }),
  },
  DPLogoImageStyle: {
    ...Platform.select({
      ios: {
        height: windowHeight * 0.116,
        width: windowWidth * 0.25,
      },
      android: {
        height: windowHeight * 0.135,
        width: windowWidth * 0.255,
      },
    }),
  },
  DPBackImageStyle: {
    ...Platform.select({
      ios: {
        height: windowHeight * 0.2,
        width: windowWidth * 0.6,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
      },
      android: {
        height: windowHeight * 0.2,
        width: windowWidth * 0.6,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
      },
    }),
  },
  linearGradientStyle: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        height: windowHeight * 0.2,
        width: windowWidth * 0.6,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
      },
      android: {
        position: 'absolute',
        height: windowHeight * 0.2,
        width: windowWidth * 0.6,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
      },
    }),
  },
  offerLogoStyle: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        height: windowHeight * 0.03,
        width: windowWidth * 0.065,
        top: windowHeight * 0.14,
        left: windowWidth * 0.04,
      },
      android: {
        position: 'absolute',
        height: windowHeight * 0.03,
        width: windowWidth * 0.065,
        top: windowHeight * 0.14,
        left: windowWidth * 0.04,
      },
    }),
  },
  discountTextStyle: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        left: windowWidth * 0.06,
        top: windowHeight * 0.02,
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
      },
      android: {
        position: 'absolute',
        left: windowWidth * 0.06,
        top: windowHeight * 0.02,
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
      },
    }),
  },
  discountDescTextStyle: {
    ...Platform.select({
      ios: {
        width: windowWidth * 0.5,
        position: 'absolute',
        left: windowWidth * 0.13,
        top: windowHeight * 0.14,
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
      },
      android: {
        width: windowWidth * 0.5,
        position: 'absolute',
        left: windowWidth * 0.13,
        top: windowHeight * 0.14,
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
      },
    }),
  },
  DPVectoStyle: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        right: 0,
      },
      android: {
        position: 'absolute',
        right: 0,
      },
    }),
  },
});
