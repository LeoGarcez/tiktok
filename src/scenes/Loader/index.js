import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import {View, ActivityIndicator, Text} from 'react-native';

export default function Loader() {
  return (
    <View
      style={{
        justifyContent: 'center',
        padding: 64,
        height: '100%',
        backgroundColor: Colors.black,
      }}>
      <View
        style={{
          justifyContent: 'center',
          height: '80%',
          gap: 12,
        }}>
        <ActivityIndicator />
        <Text
          style={{
            ...Fonts.title,
            color: Colors.white,
            textAlign: 'center',
          }}>
          carregando...
        </Text>
      </View>
    </View>
  );
}
