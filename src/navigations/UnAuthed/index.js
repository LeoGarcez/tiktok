import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationEnum } from '../../enums';

import Main from '../../scenes/Main';

const Stack = createNativeStackNavigator();

export function UnAuthed() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        gestureDirection: 'horizontal'
      }}>
      <Stack.Screen name={NavigationEnum.MAIN} component={Main} />
    </Stack.Navigator>
  );
}
