import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import PledgeReducer from './PledgeReducer';
import RedeemVoucherReducer from './RedeemVoucherReducer';
import VouchersReducer from './VouchersReducer';
import ProfileReducer from './ProfileReducer';
import ProfileEditReducer from './ProfileEditReducer';

export default combineReducers({
  auth: AuthReducer,
  pledges: PledgeReducer,
  redeemVouchers: RedeemVoucherReducer,
  vouchers: VouchersReducer,
  profile: ProfileReducer,
  profileEdit: ProfileEditReducer,
});
