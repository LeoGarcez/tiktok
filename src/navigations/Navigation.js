import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {NavigationEnum} from '../enums';
import Loader from '../scenes/Loader';
import {UnAuthed} from './UnAuthed';

const Stack = createNativeStackNavigator();

export function Navigation() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          gestureDirection: 'horizontal',
        }}>
        {loading ? (
          <Stack.Screen name={NavigationEnum.LOADER} component={Loader} />
        ) : (
          <Stack.Screen name={NavigationEnum.UNAUTHED} component={UnAuthed} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
