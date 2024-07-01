import {View, StyleSheet} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {User, Address} from '../../models/market-models';
import {UserContext} from '../../context/user-context/user-context-provider';
import {UserContextType} from '../../context/user-context/user-context-types';
import React, {useContext, useEffect} from 'react';
import { useFocusEffect } from '@react-navigation/native';

export const AddressFormView = () => {
  const {user, userAddress, setUserAddress, onAddAddress} =
    useContext<UserContextType>(UserContext);
  const updateFormAddress = (key: keyof Address, value: string) => {
    setUserAddress(prevState => {
      return {...prevState, [key]: value};
    });
  };

  const handleAddressChanges = (address: string) => {
    updateFormAddress('address', address);
  };
  const handleCityChanges = (city: string) => {
    updateFormAddress('city', city);
  };

  const handleStateChanges = (state: string) => {
    updateFormAddress('state', state);
  };

  const handleCountryChanges = (country: string) => {
    updateFormAddress('country', country);
  };

  const handleZipcodeChanges = (zipcode: string) => {
    updateFormAddress('zipcode', zipcode);
  };

useFocusEffect(
  React.useCallback(()=> {
    setUserAddress(userAddress)
  },[userAddress])
)

  return (
    <View id="address-form" style={{marginHorizontal: 20}}>
      <Text variant="titleMedium" style={{marginVertical: 5}}>
        Your address
      </Text>
      <TextInput
        style={style.input}
        label="Address"
        onChangeText={address => handleAddressChanges(address)}
        value={userAddress.address}
      />
      <TextInput
        style={style.input}
        label="City"
        onChangeText={city => handleCityChanges(city)}
        value={userAddress.city}
      />
      <TextInput
        style={style.input}
        label="State"
        onChangeText={state => handleStateChanges(state)}
        value={userAddress.state}
      />
      <TextInput
        style={style.input}
        label="Country"
        onChangeText={country => handleCountryChanges(country)}
        value={userAddress.country}
      />
      <TextInput
        style={style.input}
        label="Zip code"
        onChangeText={zipcode => handleZipcodeChanges(zipcode)}
        value={userAddress.zipcode}
      />
      <Button
        style={style.input}
        mode="contained"
        onPress={() => {
          if (user.id) {
            onAddAddress(userAddress, user.id);
          }
        }}>
        Save
      </Button>
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    marginVertical: 5,
  },
});
