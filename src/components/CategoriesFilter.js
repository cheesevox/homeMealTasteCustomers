import { ScrollView,StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../Constant";
import { getAllArea } from "../Api";


const CategoriesFilter = () => {
	const [active, setActive] = useState(1)
	const [area, setArea] = useState([])
	const [areaId,setAreaId] = useState(area[0]?.areaId)
	const [session,setSession] =useState([])
	useEffect(()=> { 
		getAllArea().then((ref)=>{
			setArea(ref)
		})
	},[]) 

	return (
		<View>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{area.map((area, index) => {
					return (
						<View
							key={index}
							style={{
								backgroundColor: 
									active === index ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
								marginRight: 10,
								borderRadius: 8,
								paddingHorizontal: 16,
								paddingVertical: 10,
								shadowColor: "#000",
								shadowOffset: { width: 0, height: 4 },
								shadowOpacity: 0.1,
								shadowRadius: 7,
								width:"auto",
								marginVertical: 16,
							}}
						>
							<TouchableOpacity onPress={()=>setAreaId(area.areaId) && setActive(index)}>
								<Text style={{fontSize:16 ,
									color:  active === index && colors.COLOR_LIGHT,
								}}>
								{area.areaName}
								</Text>
							</TouchableOpacity>
							
						</View>
					);
				})}
			</ScrollView>
		</View>
	);
};

export default CategoriesFilter;

const styles = StyleSheet.create({});
