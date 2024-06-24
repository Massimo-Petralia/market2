import {StyleSheet, View} from 'react-native';
import {Button, TextInput, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../navigation/navigation-routes';
import React, {useState, useContext} from 'react';
import {User} from '../../models/market-models';
import {DefaultUser} from '../../models/default-values';
import {UserContext} from '../../context/user-context/user-context-provider';
import {UserContextType} from '../../context/user-context/user-context-types';

export const UserSignupView = () => {
  const navigation = useNavigation();
  const useUser = useContext<UserContextType>(UserContext);
  const [user, setUser] = useState<User>(DefaultUser);

  const updateSignupForm = (key: keyof User, value: string) => {
    setUser(previousValue => ({...previousValue, [key]: value}));
  };

  const handleNameChanges = (name: string) => {
    updateSignupForm('name', name);
  };
  const handleEmailChanges = (email: string) => {
    updateSignupForm('email', email);
  };

  const handlePasswordChanges = (password: string) => {
    updateSignupForm('password', password);
  };

  return (
    <View>
      <View id="signup-form" style={{marginHorizontal: 20, marginVertical: 10}}>
        <TextInput
          style={style.input}
          value={user.name}
          onChangeText={name => handleNameChanges(name)}
          label="Name"
        />
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
          onPress={() => useUser.onSignup(user)}>
          Signup
        </Button>
      </View>

      <View style={{alignItems: 'center', marginVertical: 10}}>
        <Text style={{marginVertical: 10}}>If you are already registered</Text>
        <Button
          mode="contained"
          onPress={() =>
            navigation.navigate(Routes.root.main, {
              screen: Routes.root.tab.user.index,
              params: {screen: Routes.root.tab.user.signin},
            })
          }>
          go to signin
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
