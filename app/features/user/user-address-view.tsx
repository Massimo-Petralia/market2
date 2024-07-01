import {View, StyleSheet} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {User, Address} from '../../models/market-models';
import {UserContext} from '../../context/user-context/user-context-provider';
import {UserContextType} from '../../context/user-context/user-context-types';
import {useContext} from 'react';

export const AddressFormView = () =>
  //  {address, setUser}:{address: Address, setUser: React.Dispatch<React.SetStateAction<User>>}
  {
    const {user} = useContext<UserContextType>(UserContext);
    const updateFormAddress = (key: keyof Address, value: string) => {
      // setUser(prevState => ({...prevState, address: {...address, [key]: value}}))
    };

    return (
      <View id="address-form" style={{marginHorizontal: 20}}>
        <Text variant='titleMedium' style={{marginVertical: 5}}>Your address</Text>
        <TextInput style={style.input} label="Address" />
        <TextInput style={style.input} label="City" />
        <TextInput style={style.input} label="State" />
        <TextInput style={style.input} label="Country" />
        <TextInput style={style.input} label="Zip code" />
        <Button style={style.input}  mode='contained'>Save</Button>
      </View>
    );
  };

  const style = StyleSheet.create({
    input: {
        marginVertical: 5
    }
  })