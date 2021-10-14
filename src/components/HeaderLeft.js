import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const HeaderLeft = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Mumbai', value: 'mumbai'},
    {label: 'Delhi', value: 'delhi'},
  ]);

  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          borderWidth: 0,
          height: 50,
          width: 50,
          left: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/HeaderLeftAssets/Flag4x.png')}
          style={{
            height: 35,
            width: 35,
            borderWidth: 2,
            borderRadius: 25,
            borderColor: '#7C7C7C',
          }}
        />
      </View>
      <View
        style={{
          width: 115,
          left: 10,
          alignSelf: 'center'
        }}>
        <DropDownPicker
          style={{borderWidth: 0, height: 40}}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
    </View>
  );
};

export default HeaderLeft;
