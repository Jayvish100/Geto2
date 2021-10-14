import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Button,
  Platform
} from 'react-native';
import RedeemVouchers from '../components/RedeemVouchers';
import PartnerRewards from '../components/PartnerRewards';
import _ from 'lodash';
import {connect} from 'react-redux';
import {pledgeFetch} from '../actions/PledgeActions';
import {redeemVoucherFetch} from '../actions/RedeemVoucherActions';
import * as RootNavigation from '../RootNavigation';
import Pledge from '../components/Pledge';
import HotDealSwiperComponent from '../components/HotDealSwiperComponent';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class DashboardScreen extends Component {
  componentDidMount() {
    this.props.pledgeFetch();
    this.props.redeemVoucherFetch();
  }

  render() {
    const redeemVouchers = Object.assign({}, ...this.props.redeemVouchers);

    return (
      <>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <RedeemVouchers
              activeVouchers={redeemVouchers.activeVouchers}
              rewardBalance={redeemVouchers.rewardBalance}
            />
          </View>
          <View>
            <PartnerRewards onPress={() => RootNavigation.navigate('Scan')} />
          </View>
          <View>
            <Text
              style={{
                flex: 1,
                marginLeft: windowWidth * 0.05,
                fontSize: windowWidth * 0.05,
                fontWeight: 'bold',
                marginVertical: 10,
              }}>
              Hot Deal
            </Text>
            <HotDealSwiperComponent />
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: windowWidth * 0.05,
                marginBottom: 10,
              }}>
              <Text style={{fontSize: windowWidth * 0.05, fontWeight: 'bold'}}>
                Pledges
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Pledge')}>
                <Text style={{fontSize: windowWidth * 0.04, color: '#6399EC'}}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <FlatList
                data={this.props.pledges}
                keyExtractor={pledge => pledge.key}
                renderItem={({item}) => {
                  return (
                    <View style={{width: windowWidth * 1.0}}>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('PledgeDetail', {
                            pledgeDetail: item,
                            redeemVouchers: redeemVouchers,
                          })
                        }>
                        <Pledge
                          onPress={() =>
                            this.props.navigation.navigate('Pledge')
                          }
                          pledgeCost={item.pledgeAmount}
                          pledegeDescription={item.pledgeDescription}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </ScrollView>
          </View>

          {/* <View style={{ marginVertical: 20}}>
                    <Button title="Redeem Voucher Create" onPress={() => navigate('VouchCre')} />
                </View> */}
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = state => {
  const pledges = _.map(state.pledges, (val, uid) => ({...val, key: uid}));

  const redeemVouchers = _.map(state.redeemVouchers, (val, uid) => ({
    ...val,
    key: uid,
  }));

  return {pledges, redeemVouchers};
};

const styles = StyleSheet.create({
  
})

export default connect(mapStateToProps, {pledgeFetch, redeemVoucherFetch})(
  DashboardScreen,
);