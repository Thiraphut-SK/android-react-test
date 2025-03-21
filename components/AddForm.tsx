import React from "react";
import { ThemedView } from "./ThemedView";
import { Button, TextInput, StyleSheet } from "react-native";

export default function AddForm({
  addData,
}: {
  addData: (name: string, fullName: string, age: number) => void;
}) {
  const [name, setName] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [age, setAge] = React.useState(0);

  return (
    <ThemedView>
      <TextInput
        style={styles.input}
        placeholder="Name"
        keyboardType="default"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        keyboardType="name-phone-pad"
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="number-pad"
        onChangeText={(value) => setAge(parseInt(value))}
      />
      <Button title="เพิ่มข้อมูล" onPress={() => addData(name,fullName,age)} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 5,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
});
