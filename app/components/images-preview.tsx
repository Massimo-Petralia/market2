import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import {pick, types} from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import PagerView from 'react-native-pager-view';
import {Button, Card, Divider, Text} from 'react-native-paper';
import {DotIndicator} from './dot-indicator';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useTheme} from 'react-native-paper';

export const ImagesPreview = ({
  handleImagesChanges,
  _images,
}: {
  handleImagesChanges: (images: string[]) => void;
  _images: string[];
}) => {
  const theme = useTheme();
  const [images, setImages] = useState<string[]>([]);
  const [counter, setCounter] = useState<number>(0);

  const assignImages = (images: string[]) => {
    setImages(images);
    handleImagesChanges(images);
  };
  useEffect(() => {
    setImages(_images);
  }, [_images]);

  const handleImagesSelection = React.useCallback(async () => {
    try {
      const response = await pick({
        type: [types.images],
        allowMultiSelection: true,
      });
      const images: string[] = [];
      for (let image of response) {
        const base64String = await RNFS.readFile(image.uri, 'base64');
        images.push(`data:image/${image.type};base64,${base64String}`);
      }
      assignImages(images);
    } catch (error) {
      console.error('Error: ', error);
    }
  }, []);
  return (
    <View>
      <PagerView
        useNext
        initialPage={0}
        pageMargin={10}
        onPageSelected={e => setCounter(e.nativeEvent.position)}>
        {images.map((image, index) => (
          <Card key={index} style={{borderRadius: 6, marginHorizontal: 20}}>
            <Card.Title title={`Preview .${index + 1}`} />
            <Divider style={{marginBottom: 10, marginHorizontal: 10}} />
            <Card.Content>
              <Image
                style={{height: 140}}
                source={{uri: image}}
                resizeMode="contain"
              />
            </Card.Content>
          </Card>
        ))}
      </PagerView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {images.map((item, index) => {
          return (
            <View key={index}>
              <DotIndicator index={index} counter={counter} />
            </View>
          );
        })}
      </View>

      <Button
        mode="contained"
        style={{
          marginHorizontal: 20,
          marginVertical: 10,
          alignSelf: 'flex-start',
        }}
        onPress={() => handleImagesSelection()}>
        <FontAwesome5 name="images" size={16} />
        <Text
          style={{
            color: theme.colors.onPrimary,
          }}>
          {' '}
          Select
        </Text>
      </Button>
    </View>
  );
};
