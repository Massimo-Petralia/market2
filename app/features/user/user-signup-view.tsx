import {View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../navigation/navigation-routes';
import {useState} from 'react';
import {User} from '../../models/market-models';
import {DefaultUser} from '../../models/default-values';

export const UserSignupView = () => {
  const navigation = useNavigation();
  const [formUser, setFormUser] = useState<User>(DefaultUser);

  const updateSignupForm = (key: keyof User, value: string) => {
    setFormUser(previousValue => ({...previousValue, [key]: value}));
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
      <View id="signup-form">
        <TextInput
          value={DefaultUser.name}
          onChangeText={name => handleNameChanges(name)}
          label="Name"
        />
        <TextInput
          value={DefaultUser.email}
          onChangeText={email => handleEmailChanges(email)}
          label="E-mail"
        />
        <TextInput
          value={DefaultUser.password}
          onChangeText={password => handlePasswordChanges(password)}
          label="Password"
        />
      </View>
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
  );
};
