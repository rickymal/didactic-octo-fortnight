import Header from "../../../components/Header";
import {
  ScrollView,
  FlatList,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import Gstyles from "../../../components/Gstyles";

const OptionView = (props) => {
    return (
      <SafeAreaView style={{ backgroundColor: "transparent", flex: 1 }}>
        <FlatList
          data={data_input_tests}
          renderItem={({ item }) => (
            <Item title={item.title} date={item.date} time={item.time} />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  };


export default OptionView