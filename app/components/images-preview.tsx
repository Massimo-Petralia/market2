import React, {useState} from 'react';
import {pick, types} from 'react-native-document-picker';
import RNFS from 'react-native-fs';

export const ImagePreview = ({
  handleImagesChanges,
}: {
  handleImagesChanges: (images: string[]) => void;
}) => {
  const [images, setImages] = useState<string[]>([]);
  const [counter, setCounter] = useState<number>(0);

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
    } catch (error) {
      console.error('Error: ', error);
    }
  }, []);
};
