import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class ProfileCard extends Component {
  render() {
    const {name, email} = this.props;

    return (
      <View>
        <View style={styles.cardBackContainerStyle}>
          <Image
            style={styles.imageBackStyle}
            source={require('../../assets/ProfileAssets/Subtract.png')}
          />
          <Image
            style={styles.photo}
            source={require('../../assets/ProfileAssets/Photo.png')}
          />
          <View style={styles.cardBackViewStyle}>
            <View style={{borderRightWidth: 1, borderColor: '#DCDCDC'}} />
            <View style={{borderLeftWidth: 1, borderColor: '#DCDCDC'}} />
          </View>
        </View>

        <View style={styles.cardNameViewStyle}>
          <Text style={styles.cardNameViewTextStyle}>{name}</Text>
        </View>

        <View style={styles.cardEmailViewStyle}>
          <Text style={styles.cardEmailViewTextStyle}>{email}</Text>
        </View>

        <View style={styles.cardViewCongratsViewStyle}>
          <Text style={styles.cardViewCongratsTextStyle}>Congratulations!</Text>
        </View>

        <View style={styles.cardViewTreeCountViewStyle}>
          <Text style={styles.cardViewTreeCountTextStyle}>20</Text>
        </View>

        <View style={styles.cardViewTreeTextViewStyle}>
          <Text style={styles.cardViewTreeTextStyle}>Planted Tree</Text>
        </View>

        <View style={styles.cardViewWaterCountViewStyle}>
          <Text style={styles.cardViewWaterCountTextStyle}>300</Text>
        </View>

        <View style={styles.cardViewWaterTextViewStyle}>
          <Text style={styles.cardViewWaterTextStyle}>Saved Ltr of Water</Text>
        </View>

        <View style={styles.cardViewDaysCountViewStyle}>
          <Text style={styles.cardViewDaysCountTextStyle}>20</Text>
        </View>

        <View style={styles.cardViewDaysTextViewStyle}>
          <Text style={styles.cardViewDaysTextStyle}>Days of Clean Air</Text>
        </View>
      </View>
    );
  }
}

export default ProfileCard;

const styles = StyleSheet.create({
  imageBackStyle: {
    ...Platform.select({
      ios: {
        height: windowHeight * 0.38,
        width: windowWidth * 0.9,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        height: windowHeight * 0.4,
        width: windowWidth * 0.85,
        borderRadius: 20,
      },
    }),
  },
  photo: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        height: windowHeight * 0.18,
        width: windowWidth * 0.38,
        top: windowHeight * -0.08,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        position: 'absolute',
        height: windowHeight * 0.18,
        width: windowWidth * 0.38,
        top: windowHeight * -0.08,
      },
    }),
  },
  cardBackContainerStyle: {
    ...Platform.select({
      ios: {
        // width: windowWidth * 0.9,
        alignSelf: 'center',
        alignItems: 'center',
      },
      android: {
        width: windowWidth * 0.9,
        alignSelf: 'center',
        alignItems: 'center',
      },
    }),
  },
  cardBackViewStyle: {
    ...Platform.select({
      ios: {
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: windowWidth * 0.85,
        height: windowHeight * 0.12,
        position: 'absolute',
        top: windowHeight * 0.245,
        borderColor: '#DCDCDC',
      },
      android: {
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: windowWidth * 0.815,
        height: windowHeight * 0.12,
        position: 'absolute',
        top: windowHeight * 0.262,
        borderColor: '#DCDCDC',
      },
    }),
  },
  cardNameViewStyle: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        top: windowHeight * 0.1,
        alignSelf: 'center',

        // left: windowWidth * 0.15,
        // width: windowWidth * 0.6,
      },
      android: {
        position: 'absolute',
        top: windowHeight * 0.1,
        alignSelf: 'center',
        // left: windowWidth * 0.15,
        // width: windowWidth * 0.6,
      },
    }),
  },
  cardNameViewTextStyle: {
    ...Platform.select({
      ios: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#292929',
      },
      android: {
        fontSize: windowWidth * 0.065,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#292929',
      },
    }),
  },
  cardEmailViewStyle: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        top: windowHeight * 0.16,
        alignSelf: 'center',
        // left: windowWidth * 0.1,
        // width: windowWidth * 0.7,
      },
      android: {
        position: 'absolute',
        top: windowHeight * 0.16,
        alignSelf: 'center',
        // left: windowWidth * 0.1,
        // width: windowWidth * 0.7,
      },
    }),
  },
  cardEmailViewTextStyle: {
    ...Platform.select({
      ios: {
        fontSize: windowWidth * 0.045,
        textAlign: 'center',
        color: '#838383',
      },
      android: {
        fontSize: windowWidth * 0.045,
        textAlign: 'center',
        color: '#838383',
      },
    }),
  },
  cardViewCongratsViewStyle: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        top: windowHeight * 0.195,
        alignSelf: 'center',
        // left: windowWidth * 0.1,
        // width: windowWidth * 0.7,
      },
      android: {
        position: 'absolute',
        top: windowHeight * 0.2,
        alignSelf: 'center',
        // left: windowWidth * 0.1,
        // width: windowWidth * 0.7,
      },
    }),
  },
  cardViewCongratsTextStyle: {
    ...Platform.select({
      ios: {
        fontSize: windowWidth * 0.07,
        color: '#639AEC',
        textAlign: 'center',
      },
      android: {
        fontSize: windowWidth * 0.07,
        color: '#639AEC',
        textAlign: 'center',
      },
    }),
  },
  cardViewTreeCountViewStyle: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        top: windowHeight * 0.26,
        left: windowWidth * 0.08,
        width: windowWidth * 0.13,
      },
      android: {
        position: 'absolute',
        top: windowHeight * 0.275,
        left: windowWidth * 0.1,
        width: windowWidth * 0.13,
      },
    }),
  },
  cardViewTreeCountTextStyle: {
    ...Platform.select({
      ios: {
        fontSize: windowWidth * 0.07,
        color: '#639AEC',
        textAlign: 'center',
      },
      android: {
        fontSize: windowWidth * 0.07,
        color: '#639AEC',
        textAlign: 'center',
      },
    }),
  },
  cardViewTreeTextViewStyle: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        top: windowHeight * 0.31,
        left: windowWidth * 0.08,
        width: windowWidth * 0.14,
      },
      android: {
        position: 'absolute',
        top: windowHeight * 0.325,
        left: windowWidth * 0.1,
        width: windowWidth * 0.14,
      },
    }),
  },
  cardViewTreeTextStyle: {
    ...Platform.select({
      ios: {
        fontSize: windowWidth * 0.035,
        color: '#838383',
        textAlign: 'center',
      },
      android: {
        fontSize: windowWidth * 0.035,
        color: '#838383',
        textAlign: 'center',
      },
    }),
  },
  cardViewWaterCountViewStyle: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        top: windowHeight * 0.26,
        left: windowWidth * 0.36,
        width: windowWidth * 0.13,
      },
      android: {
        position: 'absolute',
        top: windowHeight * 0.275,
        left: windowWidth * 0.38,
        width: windowWidth * 0.13,
      },
    }),
  },
  cardViewWaterCountTextStyle: {
    ...Platform.select({
      ios: {
        fontSize: windowWidth * 0.07,
        color: '#639AEC',
        textAlign: 'center',
      },
      android: {
        fontSize: windowWidth * 0.07,
        color: '#639AEC',
        textAlign: 'center',
      },
    }),
  },
  cardViewWaterTextViewStyle: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        top: windowHeight * 0.31,
        left: windowWidth * 0.35,
        width: windowWidth * 0.16,
      },
      android: {
        position: 'absolute',
        top: windowHeight * 0.325,
        left: windowWidth * 0.38,
        width: windowWidth * 0.15,
      },
    }),
  },
  cardViewWaterTextStyle: {
    ...Platform.select({
      ios: {
        fontSize: windowWidth * 0.035,
        color: '#838383',
        textAlign: 'center',
      },
      android: {
        fontSize: windowWidth * 0.035,
        color: '#838383',
        textAlign: 'center',
      },
    }),
  },
  cardViewDaysCountViewStyle: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        top: windowHeight * 0.26,
        left: windowWidth * 0.645,
        width: windowWidth * 0.13,
      },
      android: {
        position: 'absolute',
        top: windowHeight * 0.275,
        left: windowWidth * 0.66,
        width: windowWidth * 0.13,
      },
    }),
  },
  cardViewDaysCountTextStyle: {
    ...Platform.select({
      ios: {
        fontSize: windowWidth * 0.07,
        color: '#639AEC',
        textAlign: 'center',
      },
      android: {
        fontSize: windowWidth * 0.07,
        color: '#639AEC',
        textAlign: 'center',
      },
    }),
  },
  cardViewDaysTextViewStyle: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        top: windowHeight * 0.31,
        left: windowWidth * 0.64,
        width: windowWidth * 0.15,
      },
      android: {
        position: 'absolute',
        top: windowHeight * 0.325,
        left: windowWidth * 0.66,
        width: windowWidth * 0.15,
      },
    }),
  },
  cardViewDaysTextStyle: {
    ...Platform.select({
      ios: {
        fontSize: windowWidth * 0.035,
        color: '#838383',
        textAlign: 'center',
      },
      android: {
        fontSize: windowWidth * 0.035,
        color: '#838383',
        textAlign: 'center',
      },
    }),
  },
});
