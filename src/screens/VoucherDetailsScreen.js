import React, {Component} from 'react';
import {Platform} from 'react-native';
import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import VectorImage from 'react-native-vector-image';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class VoucherDetailsScreen extends Component {
  render() {
    const {discount, minBill} = this.props.route.params;

    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.containerView}>
          <VectorImage
            source={require('../assets/svg/VoucherDetail.svg')}
            style={styles.voucherBackImageStyle}
          />

          <Text style={styles.discountTextStyle}>₹{discount} OFF</Text>

          <Text style={styles.voucherDescTextStyle}>
            We appreciate you effect to help us in our initiative to save our
            plant by flighting against air pollution. We pleased to reward you
            for your kind initiative.
          </Text>

          <Text style={styles.discountDescTextTitle}>
            We offer ₹{discount}/- off on minimum billing of ₹{minBill}/-
          </Text>

          <View style={styles.buttonViewStyle}>
            <TouchableOpacity
              onPress={() => this.props.navigation.replace('ScratchCardHide')}>
              <VectorImage
                source={require('../assets/svg/RedeemNowButton.svg')}
                style={{
                  height: windowHeight * 0.05,
                  width: windowWidth * 0.5,
                }}
              />
            </TouchableOpacity>
          </View>
          <Image
            style={styles.QRImageStyle}
            source={require('../assets/images/QRCode.png')}
          />
        </View>
      </View>
    );
  }
}

export default VoucherDetailsScreen;

const styles = StyleSheet.create({
  containerView: {
    ...Platform.select({
      ios: {
        flex: 1,
        marginTop: windowHeight * 0.12,

        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 5,

        alignItems: 'center',
        marginVertical: windowHeight * 0.05,
        marginHorizontal: windowWidth * 0.05,
        borderColor: '#000',
        borderRadius: 5,
      },
      android: {
        flex: 1,
        marginTop: windowHeight * 0.05,

        alignSelf: 'center',
        width: windowWidth * 0.86,
        height: windowHeight * 0.9,

        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 5,

        alignItems: 'center',
        marginVertical: windowHeight * 0.05,
        marginHorizontal: windowWidth * 0.05,
        borderRadius: 5,
        elevation: 15,
      },
    }),
  },
  voucherBackImageStyle: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        height: windowHeight * 0.755,
        width: windowWidth * 0.9,
      },
      android: {
        position: 'absolute',

        height: windowHeight * 0.9,
        width: windowWidth * 1,
      },
    }),
  },
  discountTextStyle: {
    ...Platform.select({
      ios: {
        top: windowHeight * 0.12,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6A9EEC',
      },
      android: {
        top: windowHeight * 0.14,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6A9EEC',
      },
    }),
  },
  discountDescTextTitle: {
    ...Platform.select({
      ios: {
        top: windowHeight * 0.24,
        width: windowWidth * 0.7,
        textAlign: 'center',
        fontSize: 16,
        color: '#777777',
      },
      android: {
        top: windowHeight * 0.28,
        width: windowWidth * 0.7,
        textAlign: 'center',
        fontSize: 16,
        color: '#777777',
      },
    }),
  },
  buttonViewStyle: {
    ...Platform.select({
      ios: {
        top: windowHeight * 0.265,
      },
      android: {
        top: windowHeight * 0.31,
      },
    }),
  },
  QRImageStyle: {
    ...Platform.select({
      ios: {
        height: windowHeight * 0.17,
        width: windowWidth * 0.365,
        position: 'absolute',
        top: windowHeight * 0.475,
      },
      android: {
        height: windowHeight * 0.2,
        width: windowWidth * 0.365,
        position: 'absolute',
        top: windowHeight * 0.56,
      },
    }),
  },
  voucherDescTextStyle: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        width: windowWidth * 0.7,
        textAlign: 'center',
        top: windowHeight * 0.165,
        color: '#838383',
      },
      android: {
        position: 'absolute',
        width: windowWidth * 0.7,
        textAlign: 'center',
        top: windowHeight * 0.2,
        color: '#838383',
      },
    }),
  },
});
