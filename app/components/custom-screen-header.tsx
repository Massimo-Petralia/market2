import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";
import { MarketContext } from "../context/market-context/market-context-provider";
import { MarketContextType } from "../context/market-context/market-context-type";
import { useContext } from "react";
import {View,Text} from "react-native"
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import Routes from "../navigation/navigation-routes";
import { ToggleLightDarkTheme } from "../modules/theme-provider";
export const CustomHeader = (props: NativeStackHeaderProps) => {
    const {state} = useContext<MarketContextType>(MarketContext);
  
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          backgroundColor: !state.isDarkTheme
            ? MD3LightTheme.colors.background
            : MD3DarkTheme.colors.background,
        }}>
        <Text
          style={{
            color: !state.isDarkTheme
              ? MD3LightTheme.colors.onBackground
              : MD3DarkTheme.colors.onBackground,
          }}>
          {Routes.root.main}
        </Text>
        <ToggleLightDarkTheme />
      </View>
    );
  };