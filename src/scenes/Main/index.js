import React, {useRef, useState} from 'react';
import {Dimensions} from 'react-native';
import CustomVideo from '../../commons/CustomVideo';
import {FlashList} from '@shopify/flash-list';

const {height} = Dimensions.get('window');
const videosList = [
  'https://titktoktest.s3.sa-east-1.amazonaws.com/video7.mp4',
  'https://titktoktest.s3.sa-east-1.amazonaws.com/video3.mp4',
  'https://titktoktest.s3.sa-east-1.amazonaws.com/video5.mp4',
  'https://titktoktest.s3.sa-east-1.amazonaws.com/video6.mp4',
  'https://titktoktest.s3.sa-east-1.amazonaws.com/video4.mp4',
  'https://titktoktest.s3.sa-east-1.amazonaws.com/video1.mp4',
  'https://titktoktest.s3.sa-east-1.amazonaws.com/video2.mp4',
];

export default function Main() {
  const [loading, setLoading] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videos, setVideos] = useState(videosList);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 80,
  };
  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged: onViewableItemsChanged.current},
  ]);

  async function loadMoreVideos() {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        setVideos([...videos, ...videosList]);
        setLoading(false);
      }, 1000);
    }
  }

  return (
    <FlashList
      data={videos}
      keyExtractor={(_, index) => index.toString()}
      extraData={currentIndex}
      estimatedItemSize={height}
      pagingEnabled
      snapToInterval={height}
      decelerationRate="fast"
      showsVerticalScrollIndicator={false}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      onEndReached={loadMoreVideos}
      onEndReachedThreshold={0.5}
      initialNumToRender={3}
      maxToRenderPerBatch={3}
      windowSize={4}
      renderItem={({item, index}) => (
        <CustomVideo item={item} index={index} currentIndex={currentIndex} />
      )}
    />
  );
}
