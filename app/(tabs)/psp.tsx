import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  Modal,
  Text,
  Pressable,
  Image,
} from "react-native";
// import { Pressable } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { IconSymbol } from "@/components/ui/IconSymbol";

const Psp = () => {
  const [isWebViewVisible, setWebViewVisible] = useState(false);

  const openWebView = () => {
    setWebViewVisible(true);
  };

  const closeWebView = () => {
    setWebViewVisible(false);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial_ipayLogo_cutout.png")}
          style={styles.ipayLogo}
        />
      }
    >
      <View style={styles.container}>
        <Pressable
          // title="Open Web View"
          hitSlop={10}
          onPress={openWebView}
        >
          <Text style={{ color: "white" }}>Open</Text>
        </Pressable>
        {/* Modal to hold the WebView */}
        <Modal
          visible={isWebViewVisible}
          animationType="slide"
          onRequestClose={closeWebView}
        >
          <View style={styles.modalContainer}>
            <Button title="Close" onPress={closeWebView} />
            <WebView
              source={{ uri: "https://example.com" }}
              style={styles.webview}
            />
          </View>
        </Modal>
      </View>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  ipayLogo: {
    // height: "100%",
    // height: 200,
    width: "100%",
    objectFit: "contain",
    // bottom: 0,
    // left: 0,
    // position: "absolute",
  },
});

export default Psp;
