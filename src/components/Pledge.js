import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Platform,
} from 'react-native';
import VectorImage from 'react-native-vector-image';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Pledge = ({pledgeCost, pledegeDescription}) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.androidShadowStyle}>
        <VectorImage
          source={require('../assets/svg/PledgeFrame.svg')}
          style={styles.pledgeBackStyle}
        />
        <Text style={styles.pledgeCostTextStyle}>₹{pledgeCost}/-</Text>
        <Text style={styles.pledegeDescriptionTextStyle}>
          {pledegeDescription}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    ...Platform.select({
      ios: {
        flex: 1,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 5,
        shadowOpacity: 0.2,
        marginVertical: 10,
      },
      android: {
        flex: 1,
        marginVertical: 10,
        alignItems: 'center',
      },
    }),
  },
  pledgeBackStyle: {
    ...Platform.select({
      ios: {
        height: windowHeight * 0.19,
        width: windowWidth * 0.915,
        alignSelf: 'center',
      },
      android: {
        height: windowHeight * 0.22,
        width: windowWidth * 0.95,
        alignSelf: 'center',
      },
    }),
  },
  pledgeCostTextStyle: {
    ...Platform.select({
      ios: {
        fontSize: windowWidth * 0.04,
        fontWeight: 'bold',
        color: '#669BEC',
        position: 'absolute',
        right: 30,
        top: 15,
      },
      android: {
        fontSize: windowWidth * 0.04,
        fontWeight: 'bold',
        color: '#669BEC',
        position: 'absolute',
        right: 30,
        top: 15,
        flex: 1,
      },
    }),
  },
  pledegeDescriptionTextStyle: {
    ...Platform.select({
      ios: {
        fontSize: windowWidth * 0.04,
        fontWeight: '400',
        color: '#838383',
        width: windowWidth * 0.65,
        height: windowHeight * 0.1,
        position: 'absolute',
        top: 45,
        left: 100,
      },
      android: {
        fontSize: windowWidth * 0.04,
        fontWeight: '400',
        color: '#838383',
        width: windowWidth * 0.65,
        height: windowHeight * 0.1,
        position: 'absolute',
        top: 45,
        left: 100,
        flex: 1,
      },
    }),
  },
  androidShadowStyle: {
    ...Platform.select({
      android: {
        width: windowWidth * 0.93,
        borderBottomColor: 'rgba(0,0,0,0.7)',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 1,
        shadowOpacity: 1,
        elevation: 8,
      },
    }),
  },
});

export default Pledge;
