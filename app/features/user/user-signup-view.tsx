import {useContext} from 'react';
import {View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../navigation/navigation-routes';
import {UserContext} from '../../context/user-context/user-context-provider';

export const UserSignupView = () => {
  const context = useContext(UserContext);
  const navigation = useNavigation();
  return (
    <View>
      <View id="signup-form">
        <TextInput
          value={context.user.name}
          onChangeText={name => context.updateName(name)}
          label="Name"
        />
        <TextInput
          value={context.user.email}
          onChangeText={email => context.updateEmail(email)}
          label="E-mail"
        />
        <TextInput
          value={context.user.password}
          onChangeText={password => context.updatePassword(password)}
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
