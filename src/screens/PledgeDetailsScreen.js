import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradientComponent from '../components/LinearGradientComponent';
import VectorImage from 'react-native-vector-image';
import {Platform} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class PledgeDetailsScreen extends Component {
  render() {
    const pledgeDetail = this.props.route.params.pledgeDetail;
    const redeemVouchers = this.props.route.params.redeemVouchers;

    return (
      <LinearGradientComponent color={['#8FBAF8', '#6299EC']}>
        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
            <View style={styles.cardView}>
              <VectorImage
                source={require('../assets/svg/PledgeDetailCard.svg')}
                style={styles.pledegDetailCardStyle}
              />
              <Text style={styles.pledgeDescriptionTextStyle}>
                {pledgeDetail.pledgeDescription}
              </Text>
              <Text style={styles.pledgeAmountTextStyle}>
                ₹{pledgeDetail.pledgeAmount}/-
              </Text>
              <Text style={styles.rewardValueTextStyle}>
                ₹{pledgeDetail.rewardValue}/-
              </Text>
              <Text style={styles.rewardBalanceTextStyle}>
                ₹{redeemVouchers.rewardBalance}/-
              </Text>
              <Text style={styles.pledgeValidityDescTextStyle}>
                {pledgeDetail.pledgeValidityDesc}
              </Text>
              <View style={styles.buttonStyle}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.replace('ScratchCardHide')
                  }>
                  <VectorImage
                    source={require('../assets/svg/PledgeButton.svg')}
                    style={styles.pledgeButtonStyle}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </LinearGradientComponent>
    );
  }
}

const styles = StyleSheet.create({
  cardView: {
    ...Platform.select({
      ios: {
        alignSelf: 'center',
        marginTop: 80,
        height: windowHeight * 0.642,
        width: windowWidth * 0.905,

        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
      },
      android: {
        alignSelf: 'center',
        borderWidth: 0.00001,
        top: 80,
        height: windowHeight * 0.71,
        width: windowWidth * 0.9,

        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 15,
      },
    }),
  },
  pledegDetailCardStyle: {
    ...Platform.select({
      ios: {
        height: windowHeight * 0.64,
        width: windowWidth * 0.9,
        borderRadius: 10,
      },
      android: {
        height: windowHeight * 0.715,
        width: windowWidth * 0.895,
      },
    }),
  },
  pledgeDescriptionTextStyle: {
    ...Platform.select({
      ios: {
        fontSize: 16,
        position: 'absolute',
        top: windowHeight * 0.14,
        left: windowWidth * 0.1,
        right: windowWidth * 0.1,
        textAlign: 'center',
        color: '#838383',
      },
      android: {
        fontSize: 17,
        position: 'absolute',
        top: windowHeight * 0.15,
        left: windowWidth * 0.1,
        right: windowWidth * 0.1,
        textAlign: 'center',
        color: '#838383',
      },
    }),
  },
  pledgeAmountTextStyle: {
    ...Platform.select({
      ios: {
        fontSize: 16,
        position: 'absolute',
        top: windowHeight * 0.28,
        left: windowWidth * 0.05,
        color: '#535353',
      },
      android: {
        fontSize: 18,
        position: 'absolute',
        top: windowHeight * 0.31,
        left: windowWidth * 0.055,
        color: '#535353',
      },
    }),
  },
  rewardValueTextStyle: {
    ...Platform.select({
      ios: {
        fontSize: 16,
        position: 'absolute',
        top: windowHeight * 0.28,
        left: windowWidth * 0.25,
        color: '#535353',
      },
      android: {
        fontSize: 18,
        position: 'absolute',
        top: windowHeight * 0.31,
        left: windowWidth * 0.255,
        color: '#535353',
      },
    }),
  },
  rewardBalanceTextStyle: {
    ...Platform.select({
      ios: {
        fontSize: 16,
        position: 'absolute',
        top: windowHeight * 0.28,
        left: windowWidth * 0.57,
        color: '#535353',
      },
      android: {
        fontSize: 18,
        position: 'absolute',
        top: windowHeight * 0.31,
        left: windowWidth * 0.57,
        color: '#535353',
      },
    }),
  },
  pledgeValidityDescTextStyle: {
    ...Platform.select({
      ios: {
        fontSize: 16,
        position: 'absolute',
        top: windowHeight * 0.45,
        left: windowWidth * 0.1,
        right: windowWidth * 0.1,
        textAlign: 'center',
        color: '#838383',
      },
      android: {
        fontSize: 17,
        position: 'absolute',
        top: windowHeight * 0.51,
        left: windowWidth * 0.1,
        right: windowWidth * 0.1,
        textAlign: 'center',
        color: '#838383',
      },
    }),
  },
  pledgeButtonStyle: {
    ...Platform.select({
      ios: {
        height: windowHeight * 0.06,
        width: windowWidth * 0.55,
      },
      android: {
        height: windowHeight * 0.1,
        width: windowWidth * 0.6,
        alignSelf: 'center',
        top: windowHeight * -0.018,
      },
    }),
  },
  buttonStyle: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        top: windowHeight * 0.53,
        alignSelf: 'center',
      },
      android: {
        position: 'absolute',
        top: windowHeight * 0.6,
        alignSelf: 'center',
        height: windowHeight * 0.06,
        width: windowWidth * 0.5,
        borderRadius: 25,
      },
    }),
  },
});

export default PledgeDetailsScreen;
