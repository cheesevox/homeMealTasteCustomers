import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { user } from "../Constant";

const Header = ({ headerText, headerIcon }) => {
	return (
		<View style={{ flexDirection: "row" }}>
			<Text style={{ fontSize: 22, fontWeight: "700", paddingLeft:10}}>
				{headerText}
				</Text>
			<FontAwesome name={headerIcon} size={24} color="#f96163" />
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({});
