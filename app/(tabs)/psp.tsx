import React, { useState } from "react";
import { View, Button, StyleSheet, Modal, Text, Pressable } from "react-native";
// import { Pressable } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";

const Psp = () => {
  const [isWebViewVisible, setWebViewVisible] = useState(false);

    const openWebView = () => {
      setWebViewVisible(true);
    };

    const closeWebView = () => {
      setWebViewVisible(false);
    };

  const toggleWebView = () => {
    isWebViewVisible ? setWebViewVisible(false) : setWebViewVisible(true);
  };

  return (
    <View style={styles.container}>
      <Pressable
        // title="Open Web View"
        hitSlop={10}
        onPress={openWebView}
      >
        <Text style={{ color: 'white' }}>Open</Text>
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
  );
};

const styles = StyleSheet.create({
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
});

export default Psp;
