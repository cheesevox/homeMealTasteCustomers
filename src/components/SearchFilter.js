import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";


const SearchFilter = ({ placeholder }) => {

	return (
		<View
			style={{
				flexDirection: "row",
				backgroundColor: "#fff",
				paddingVertical: 16,
				borderRadius: 8,
				paddingHorizontal: 16,
				marginVertical: 16,
				shadowColor: "#000",
				width: "60%",
				shadowOffset: { width: 0, height: 4 },
				shadowOpacity: 0.1,
				shadowRadius: 7,
				justifyContent: "space-between",
				alignItems: "center"
			}}
		>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<Ionicons name="search-outline" size={15} />
				<TextInput placeholder=" Mon Ngon Me Lam" style={{ paddingLeft: 10, fontSize: 16, color: "#808080", }}>
					{/* {placeholder} */}
				</TextInput>

			</View>
		</View>

	);
};

export default SearchFilter;

const styles = StyleSheet.create({
	dropdown: {
		margin: 16,
		height: 50,
		backgroundColor: 'white',
		borderRadius: 12,
		padding: 12,
		shadowColor: '#000',
		shadowOffset: {
		  width: 0,
		  height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
  
		elevation: 2,
	  },
	  icon: {
		marginRight: 5,
	  },
	  item: {
		padding: 17,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	  },
	  textItem: {
		flex: 1,
		fontSize: 16,
	  },
	  placeholderStyle: {
		fontSize: 16,
	  },
	  selectedTextStyle: {
		fontSize: 16,
	  },
	  iconStyle: {
		width: 20,
		height: 20,
	  },
	  inputSearchStyle: {
		height: 40,
		fontSize: 16,
	  },
});
