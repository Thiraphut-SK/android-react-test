import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { TouchableOpacity } from "react-native";

interface PersonProps {
  name: string;
  fullName: string;
  age?: number;
}

export default function Person({ props, showData }: { props: PersonProps, showData: (name:string) => void }) {
  return (
    <ThemedView>
      <TouchableOpacity onPress={() => showData(props.name)}>
        <ThemedText type="defaultSemiBold">
          {props.name} - {props.fullName} - {props.age}
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}
