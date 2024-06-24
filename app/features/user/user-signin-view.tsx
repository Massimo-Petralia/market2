import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../navigation/navigation-routes';
import {useFocusEffect} from '@react-navigation/native';
import {useContext, useState} from 'react';
import {UserContext} from '../../context/user-context/user-context-provider';
import {UserContextType} from '../../context/user-context/user-context-types';
import {DefaultUser} from '../../models/default-values';
import {User} from '../../models/market-models';

export const UserSigninView = () => {
  const navigation = useNavigation();
  const useUser = useContext<UserContextType>(UserContext);
  const [user, setUser] = useState<User>(DefaultUser);

  const updateSigninForm = (key: keyof User, value: string) => {
    setUser(previousValue => ({...previousValue, [key]: value}));
  };

  const handleEmailChanges = (email: string) => {
    updateSigninForm('email', email);
  };

  const handlePasswordChanges = (password: string) => {
    updateSigninForm('password', password);
  };

  useFocusEffect(
    React.useCallback(() => {
      setUser(useUser.user);
    }, [useUser.user]),
  );

  return (
    <View>
      <View id="signin-form" style={{marginHorizontal: 20, marginVertical: 10}}>
        <TextInput
          style={style.input}
          value={user.email}
          onChangeText={email => handleEmailChanges(email)}
          label="E-mail"
        />
        <TextInput
          style={style.input}
          value={user.password}
          onChangeText={password => handlePasswordChanges(password)}
          label="Password"
        />
        <Button
          style={{marginVertical: 10}}
          mode="contained"
          onPress={() => useUser.onSignin(user)}>
          Signin
        </Button>
      </View>

      {useUser.user.id !== undefined ? (
        <View style={{alignItems: 'center'}}>
          <Text style={{color: 'dodgerblue'}}>{`Hello ${user.name} !`}</Text>
        </View>
      ) : null}
      <View style={{alignItems: 'center', marginVertical: 10}}>
        <Text style={{marginVertical: 10}}>If you are new</Text>
        <Button
          mode="contained"
          onPress={() =>
            navigation.navigate(Routes.root.main, {
              screen: Routes.root.tab.user.index,
              params: {screen: Routes.root.tab.user.signup},
            })
          }>
          go to signup
        </Button>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    marginVertical: 5,
  },
});
