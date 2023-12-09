import {ScrollView, Pressable,FlatList,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Option } from '../Constant'

const OptionCard = () => {
    return (
        <View style={{justifyContent:"center"}}>
			<FlatList 
				data={Option}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => navigation.navigate("Method", { item: item })}
						style={{
							shadowColor: "#fff",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.1,
							shadowRadius: 7,
							borderRadius: 16,
                            borderWidth:3,
							marginVertical: 16,
							alignItems: "center",
							paddingHorizontal: 8,
							paddingVertical: 26,
							marginRight:20
						}}
					>
						<Text>{item.name}</Text>
					</Pressable>
				)}
                numColumns={2}
				columnWrapperStyle={{
					justifyContent: "space-around", flexWrap: "wrap", flexDirection:"row"
				}}
				showsVerticalScrollIndicator={false}
                
			/>
		</View>
    )
}

export default OptionCard

const styles = StyleSheet.create({})