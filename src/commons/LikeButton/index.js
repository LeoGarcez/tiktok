import {useEffect, useRef, useState} from 'react';
import {Animated, Easing, Pressable} from 'react-native';

import CommonSvg from '../CommonSvg';
import {useUser} from '../../hooks/useUser';

export default function LikeButton({id, doAction}) {
  const {likes, addLike} = useUser();

  const [liked, setLiked] = useState(likes.includes(id));
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (doAction !== -1) handleLike();
  }, [doAction]);

  const handleLike = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.5,
        duration: 100,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();

    addLike(id);
    setLiked(!liked);
  };

  return (
    <Pressable
      onPress={handleLike}
      style={{
        position: 'absolute',
        right: 40,
        bottom: 80,
        width: 20,
        height: 20,
        zIndex: 9999,
      }}>
      <Animated.View style={{transform: [{scale}]}}>
        <CommonSvg name={liked ? 'liked' : 'like'} />
      </Animated.View>
    </Pressable>
  );
}
