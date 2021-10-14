import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import VectorImage from 'react-native-vector-image';

import {profileUpdate, profileSave} from '../actions/ProfileEditActions';
import {connect} from 'react-redux';
import _ from 'lodash';
import ProfileEditForm from '../components/ProfileComponents/ProfileEditForm';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class ProfileEditScreen extends Component {
  componentDidMount() {
    const profile = Object.assign({}, ...this.props.route.params.profile);
    _.each(profile, (value, prop) => {
      this.props.profileUpdate({prop, value});
    });
  }

  onButtonPress() {
    const profile = Object.assign({}, ...this.props.route.params.profile);

    const {name, email, mobile, address1, address2, city, states, pincode} =
      this.props;

    const pop = this.props.navigation.pop();

    this.props.profileSave({
      name,
      email,
      mobile,
      address1,
      address2,
      city,
      states,
      pincode,
      uid: profile.key,
      pop,
    });
  }

  render() {
    // console.log(this.props.route.params.profile);
    // console.log(this.props);

    return (
      <View style={{flex: 1, marginTop: windowHeight * 0.1}}>
        <ScrollView>
          <ProfileEditForm {...this.props} />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: windowHeight * 0.04,
              marginBottom: 50,
            }}>
            <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
              <VectorImage
                source={require('../assets/ProfileAssets/Submit.svg')}
                style={{
                  height: windowHeight * 0.06,
                  width: windowWidth * 0.8,
                }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: windowHeight * 0.02,
    borderRadius: 10,
  },
});

const mapStateToProps = state => {
  const {name, email, mobile, address1, address2, city, states, pincode} =
    state.profileEdit;

  return {name, email, mobile, address1, address2, city, states, pincode};
};

export default connect(mapStateToProps, {profileUpdate, profileSave})(
  ProfileEditScreen,
);
