import {memo, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Pressable,
  View,
} from 'react-native';

import Video from 'react-native-video';
import LikeButton from '../LikeButton';
import Colors from '../../styles/Colors';

const {height, width} = Dimensions.get('window');

export default memo(function CustomVideo({item, index, currentIndex}) {
  const [loading, setLoading] = useState(true);
  const [doAction, setDoAction] = useState(-1);
  const lastTap = useRef(0);

  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap.current && now - lastTap.current < DOUBLE_PRESS_DELAY) {
      setDoAction(doAction + 1);
    }
    lastTap.current = now;
  };

  return (
    <Pressable
      onPress={handleDoubleTap}
      style={{
        height: height,
        width: width,
        backgroundColor: Colors.black,
      }}>
      <Video
        source={{uri: item}}
        style={{width: width, height: height}}
        resizeMode="cover"
        repeat
        paused={currentIndex !== index}
        onBuffer={() => setLoading(false)}
        onError={e => Alert.alert('Erro ao carregar vídeo', JSON.stringify(e))}>
        <View
          style={{
            height: height,
            width: width,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {loading && <ActivityIndicator size="large" />}
        </View>
      </Video>

      <LikeButton doAction={doAction} id={index} />
    </Pressable>
  );
})