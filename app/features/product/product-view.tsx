import {useState} from 'react';
import {View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {Product} from '../../models/market-models';
import {DefaultProduct} from '../../models/default-values';

export const ProductView = () => {
  const [product, setProduct] = useState<Product>(DefaultProduct);
  const [images, setImages] = useState<string[]>([]);
  const handleImages = (images: string[]) => {
    setImages(images);
  };

  const updateFormProduct = (key: keyof Product, value: string | string[]) => {
    setProduct(previousState => {
      return {...previousState, [key]: value};
    });
  };

  const handleNameChanges = (name: string) => updateFormProduct('name', name);
  const handleDescriptionChanges = (description: string) =>
    updateFormProduct('description', description);
  const handlePriceChanges = (price: string) =>
    updateFormProduct('price', price);

  return (
    <View>
      <View id="form-product">
        <TextInput
          value={product.name}
          onChangeText={name => handleNameChanges(name)}
        />
        <TextInput
          value={product.description}
          onChangeText={description => handleDescriptionChanges(description)}
        />
        <TextInput
          value={product.price}
          onChangeText={price => handlePriceChanges(price)}
        />
      </View>
    </View>
  );
};
