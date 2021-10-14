import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet, Platform} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import VectorImage from 'react-native-vector-image';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class RedeemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: '',
    };
  }

  render() {
    return (
      <View style={{flex: 1, marginBottom: windowHeight * 0.015}}>
        <View style={styles.pickerViewStyle}>
          <Picker
            style={{flex: 1, color: '#838383', top: -10}}
            selectedValue={this.state.selectedCity}
            onValueChange={itemValue =>
              this.setState({selectedCity: itemValue})
            }
            // selectedValue={this.props.shift}
            // onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Mumbai" value="Mumbai" />
            <Picker.Item label="New Delhi" value="New Delhi" />
            <Picker.Item label="Bangalore" value="Bangalore" />
            <Picker.Item label="Hyderabad" value="Hyderabad" />
            <Picker.Item label="Bhopal" value="Bhopal" />
            <Picker.Item label="Chennai" value="Chennai" />
            <Picker.Item label="Visakhapatnam" value="Visakhapatnam" />
            <Picker.Item label="Patna" value="Patna" />
            <Picker.Item label="Jaipur" value="Jaipur" />
            <Picker.Item label="Lucknow" value="Lucknow" />
            <Picker.Item label="Ranchi" value="Ranchi" />
            <Picker.Item label="Srinagar" value="Srinagar" />
          </Picker>
        </View>

        <View style={styles.serviceOptionViewStyle}>
          <VectorImage
            source={require('../assets/svg/CarService.svg')}
            style={styles.serviceStyle}
          />
          <VectorImage
            source={require('../assets/svg/Foods.svg')}
            style={styles.serviceStyle}
          />
          <VectorImage
            source={require('../assets/svg/LifeStyle.svg')}
            style={styles.serviceStyle}
          />
          <VectorImage
            source={require('../assets/svg/ChildFun.svg')}
            style={styles.serviceStyle}
          />
          <VectorImage
            source={require('../assets/svg/Store.svg')}
            style={{marginRight: 15}}
          />
        </View>
      </View>
    );
  }
}

export default RedeemList;

const styles = StyleSheet.create({
  pickerViewStyle: {
    ...Platform.select({
      ios: {
        paddingVertical: windowHeight * 0.015,
        paddingLeft: windowWidth * 0.02,
        borderWidth: 1,
        marginHorizontal: windowWidth * 0.04,
        borderColor: '#d5d5d5',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#ffffff',
      },
      android: {
        flex: 1,
        paddingVertical: windowHeight * 0.015,
        paddingLeft: windowWidth * 0.02,
        borderWidth: 1,
        marginHorizontal: windowWidth * 0.04,
        borderColor: '#d5d5d5',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#ffffff',
        height: windowHeight *  0.075
      },
    }),
  },
  serviceOptionViewStyle: {
    ...Platform.select({
      ios: {
        height: windowHeight * 0.115,
        width: windowWidth * 0.925,
        flexDirection: 'row',
        paddingVertical: windowHeight * 0.015,
        paddingLeft: windowWidth * 0.02,
        borderWidth: 1,
        marginHorizontal: windowWidth * 0.04,
        borderColor: '#d5d5d5',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
      },
      android: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: windowHeight * 0.015,
        paddingLeft: windowWidth * 0.02,
        borderWidth: 1,
        marginHorizontal: windowWidth * 0.04,
        borderColor: '#d5d5d5',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
      },
    }),
  },
  serviceStyle1: {
    ...Platform.select({
      ios: {
        height: windowHeight * 0.1,
        width: windowWidth * 0.18,
      },
      android: {
        height: windowHeight * 0.1,
        width: windowWidth * 0.18,
      },
    }),
  },
});
