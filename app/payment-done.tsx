import { View, Button, StyleSheet, Modal, Text, Pressable } from "react-native";

const paymentDone = () => {
  return (
    <View style={styles.container}>
      <Text>Congratulations! Payment is Done!</Text>
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

export default paymentDone;
