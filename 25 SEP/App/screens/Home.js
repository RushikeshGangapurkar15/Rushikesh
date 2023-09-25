import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  Text,
} from "react-native";

import { Button } from "../components/Button";
import colors from "../constants/colors";
import { ConversionInput } from "../components/ConversionInput";
import { format } from "date-fns";
const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: "center",
  },
  content: { paddingTop: screen.height * 0.2 },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 20,
    textAlign: "center",
  },
  text: {
    color: colors.white,
    fontSize: 13,
    textAlign: "center",
  },
});

export default () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  // let baseCurrency = "USD";
  // let quoteCurrency = "INR";
  const [quoteCurrency, setQuoteCurrency] = useState("INR");
  let off = 0;

  const [value, setValue] = useState("1");

  let conversionRate = 83.1;

  const swapCurrencies = () => {
    // baseCurrency = quoteCurrency;
    // quoteCurrency = baseCurrency;

    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
    off = 1;
  };
  const date = new Date();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/background.png")}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.textHeader}>Currency Converter</Text>
      <ConversionInput
        text={baseCurrency}
        value={value}
        onButtonPress={() => alert("todo!")}
        keyboardType="numeric"
        onChangeText={(text) => setValue(text)}
      />
      <ConversionInput
        text={quoteCurrency}
        value={value && `${(parseFloat(value) * conversionRate).toFixed(2)}`}
        onButtonPress={() => alert("todo!")}
        editable={false}
      />

      <Text
        style={styles.text}
      >{`1 ${baseCurrency} = ${conversionRate} * ${quoteCurrency} as of ${format(
        date,
        "MMM do , yyyy"
      )}`}</Text>

      <Button text="Reverse currency" onPress={() => swapCurrencies()} />
    </View>
  );
};
