import React from 'react';
import {Dimensions, Text, StyleSheet, View, Platform} from 'react-native';
import VectorImage from 'react-native-vector-image';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RedeemVouchers = ({activeVouchers, rewardBalance}) => {
  return (
    <View style={styles.containerStyle}>
      <VectorImage
        source={require('../assets/svg/Redeem.svg')}
        style={styles.redeem}
      />
      <View style={styles.activeVoucherView}>
        <View style={styles.activeVouchersView}>
          <VectorImage
            source={require('../assets/svg/Group 389.svg')}
            style={styles.activeVoucher}
          />
          <Text style={styles.activeVouchersTextStyle}>{activeVouchers}</Text>
        </View>
        <View
          style={
            (styles.activeVouchersView,
            {left: Platform.OS === 'ios' ? windowWidth * 0.04 : 0})
          }>
          <VectorImage
            source={require('../assets/svg/Group 390.svg')}
            style={styles.activeVoucher}
          />
          <Text style={styles.activeVouchersTextStyle}>{rewardBalance}</Text>
        </View>
      </View>
    </View>
  );
};

export default RedeemVouchers;

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: windowHeight * 0.015,
  },
  redeem: {
    ...Platform.select({
      ios: {
        height: windowHeight * 0.35,
        width: windowWidth * 0.9,
        left: windowWidth * 0.05,
        right: windowWidth * 0.05,
      },
      android: {
        height: windowHeight * 0.4,
        width: windowWidth * 1.0,
      },
    }),
  },
  activeVoucher: {
    ...Platform.select({
      ios: {
        height: windowHeight * 0.18,
        width: windowWidth * 0.36,
      },
      android: {
        height: windowHeight * 0.2,
        width: windowWidth * 0.4,
      },
    }),
  },
  activeVoucherView: {
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        position: 'absolute',
        top: windowHeight * 0.12,
        left: windowWidth * 0.12,
      },
      android: {
        flexDirection: 'row',
        position: 'absolute',
        top: windowHeight * 0.14,
        left: windowWidth * 0.1,
      },
    }),
  },
  activeVouchersView: {
    ...Platform.select({
      ios: {
        flexDirection: 'column',
        height: windowHeight * 0.18,
        width: windowWidth * 0.36,
      },
      android: {
        flexDirection: 'column',
        height: windowHeight * 0.2,
        width: windowWidth * 0.4,
      },
    }),
  },
  activeVouchersTextStyle: {
    ...Platform.select({
      ios: {
        alignSelf: 'center',
        position: 'absolute',
        top: windowHeight * 0.04,
        fontSize: 40,
        fontWeight: 'bold',
      },
      android: {
        alignSelf: 'center',
        position: 'absolute',
        paddingTop: windowHeight * 0.05,
        fontSize: 40,
        fontWeight: 'bold',
      },
    }),
  },
});
