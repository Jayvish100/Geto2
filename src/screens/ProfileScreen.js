import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ProfileCard from '../components/ProfileComponents/ProfileCard';
import {connect} from 'react-redux';
import _ from 'lodash';
import {profileFetch, logout} from '../actions/ProfileActions';
import ProfileDetailList from '../components/ProfileComponents/ProfileDetailList';
import VectorImage from 'react-native-vector-image';
import * as RootNavigation from '../RootNavigation';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class ProfileScreen extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{marginRight: 20}}
            onPress={() =>
              RootNavigation.navigate('ProfileEdit', {
                profile: this.props.profile,
              })
            }>
            <VectorImage
              source={require('../assets/ProfileAssets/edit.svg')}
              style={{
                height: 20,
                width: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginRight: 10}}
            onPress={this.props.logout}>
            <VectorImage
              source={require('../assets/ProfileAssets/exit.svg')}
              style={{
                height: 20,
                width: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      ),
    });
    this.props.profileFetch();
  }

  render() {
    const data = this.props.profile;

    const profileCard = Object.assign({}, ...this.props.profile);

    return (
      <>
        <ScrollView
          style={{backgroundColor: '#fff'}}
          showsVerticalScrollIndicator={false}
          overScrollMode="never">
          <View
            style={{
              width: windowWidth,
              position: 'absolute',
              height: 600,
              top: -500,
              backgroundColor: '#8FBAF8',
            }}
          />
          <View style={{height: windowHeight * 0.58, backgroundColor: '#fff'}}>
            <View style={{height: windowHeight * 0.35}}>
              <LinearGradient
                colors={['#8FBAF8', '#6299EC']}
                style={{flex: 1}}
              />
              <View
                style={{
                  flex: 1,
                  position: 'absolute',
                  top: windowHeight * 0.16,
                  left: windowWidth * 0.07,
                  right: windowWidth * 0.07,
                  // borderWidth: 1
                }}>
                <ProfileCard
                  name={profileCard.name}
                  email={profileCard.email}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
            }}>
            <View
              style={{
                marginHorizontal: windowWidth * 0.05,
                flex: 1,
                backgroundColor: '#fff',
              }}>
              <Text
                style={{
                  fontSize: windowWidth * 0.05,
                  fontWeight: 'bold',
                  marginLeft: windowWidth * 0.02,
                  marginBottom: windowHeight * 0.01,
                }}>
                Profile Info
              </Text>
              <ScrollView horizontal style={{backgroundColor: '#fff'}}>
                <FlatList
                  data={data}
                  keyExtractor={prof => prof.key}
                  renderItem={({item}) => {
                    return (
                      <View
                        style={{
                          flex: 1,
                          width: windowWidth * 0.9,
                          backgroundColor: '#fff',
                          marginBottom: 50,
                        }}>
                        <ProfileDetailList
                          mobile={item.mobile}
                          email={item.email}
                          address1={item.address1}
                          address2={item.address2}
                          city={item.city}
                          state={item.states}
                          pincode={item.pincode}
                        />
                      </View>
                    );
                  }}
                />
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = state => {
  const profile = _.map(state.profile, (val, uid) => ({...val, key: uid}));

  return {profile};
};

export default connect(mapStateToProps, {profileFetch, logout})(ProfileScreen);
