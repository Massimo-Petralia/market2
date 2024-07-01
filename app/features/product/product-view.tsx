import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TextInput, RadioButton} from 'react-native-paper';
import {Currency, Product} from '../../models/market-models';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ImagesPreview} from '../../components/images-preview';
import {MD3LightTheme, MD3DarkTheme} from 'react-native-paper';
import {MarketContext} from '../../context/market-context/market-context-provider';
import {MarketContextType} from '../../context/market-context/market-context-type';
import {FormControlSave} from '../../components/form-controls/form-control-save';
import {UserContext} from '../../context/user-context/user-context-provider';
import {UserContextType} from '../../context/user-context/user-context-types';
import {FormControlDelete} from '../../components/form-controls/form-control-delete';
import {FormControlAddToCart} from '../../components/form-controls/form-control-add-to-cart';
export const ProductView = ({
  product,
  setFormProduct,
}: {
  product: Product;
  setFormProduct: React.Dispatch<React.SetStateAction<Product>>;
}) => {
  const {marketState} = useContext<MarketContextType>(MarketContext);
  const {user} = useContext<UserContextType>(UserContext);
  const updateFormProduct = (key: keyof Product, value: string | string[]) => {
    setFormProduct(previousState => {
      return {...previousState, [key]: value};
    });
  };
  const handleNameChanges = (name: string) => updateFormProduct('name', name);
  const handleDescriptionChanges = (description: string) =>
    updateFormProduct('description', description);
  const handlePriceChanges = (price: string) =>
    updateFormProduct('price', price);
  const handleImagesChanges = (images: string[]) => {
    updateFormProduct('images', images);
  };
  const handleCurrencyChanges = (currency: string) => {
    updateFormProduct('currency', currency);
  };
  useEffect(() => {
    setFormProduct(product);
  }, [product]);
  return (
    <View>
      <View
        id="form-product"
        style={{marginHorizontal: 20, marginVertical: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <MaterialIcons
              name="add-circle"
              color={
                !marketState.isDarkTheme
                  ? MD3LightTheme.colors.primary
                  : MD3DarkTheme.colors.primary
              }
              size={16}
            />
            <Text style={{margin: 10, fontWeight: 'bold'}}>
              {!product.id ? 'Add Product' : product.name}
            </Text>
          </View>
          <FormControlDelete />
        </View>
        <TextInput
          label="Name"
          value={product.name}
          onChangeText={name => handleNameChanges(name)}
          style={style.input}
        />
        <TextInput
          label="Description"
          value={product.description}
          onChangeText={description => handleDescriptionChanges(description)}
          style={style.input}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            label="Price"
            value={product.price}
            onChangeText={price => handlePriceChanges(price)}
            style={[style.input, {width: '50%'}]}
          />
          <RadioButton.Group
            onValueChange={newCurrency => {
              handleCurrencyChanges(newCurrency);
            }}
            value={product.currency}>
            <View style={{flexDirection: 'row', marginRight: 30}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 5,
                }}>
                <Text style={{fontSize: 20}}>€</Text>
                <RadioButton value="€" />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 5,
                }}>
                <Text style={{fontSize: 20}}>$</Text>
                <RadioButton value="$" />
              </View>
            </View>
          </RadioButton.Group>
        </View>
      </View>
      <ImagesPreview
        handleImagesChanges={handleImagesChanges}
        _images={product.images}
      />
      <FormControlSave
        product={{...product, userId: user.id}}
        accessToken={user.accessTokken}
      />
      <FormControlAddToCart product={product} />
    </View>
  );
};
const style = StyleSheet.create({
  input: {
    marginVertical: 5,
  },
});
