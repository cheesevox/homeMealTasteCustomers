import React from "react";
import BackIcon from "../../components/Icons/BackIcon";
import { Pressable, Text } from "react-native";
import { View } from "react-native";
import BellIcon from "../../components/Icons/BellIcon";
import MessageIcon from "../../components/Icons/MessageIcon";

const HeaderComp = (props) => {
  const {
    label,
    isHasBackIcon = true,
    isHasBellIcon = false,
    isHasMessageIcon = false,
    onBack,
    onClickBellIcon,
    onClickMessageIcon,
  } = props;
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "#FFAB01",
        flexDirection: "row",
        paddingVertical: 20,
      }}
    >
      <View
        style={{
          alignItems: "center",
          flex: 1,
          paddingLeft: 12,
        }}
      >
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
          ]}
          onPress={onBack}
        >
          {isHasBackIcon && <BackIcon />}
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
          ]}
          onPress={onClickBellIcon}
        >
          {isHasBellIcon && <BellIcon color="#FFF" />}
        </Pressable>
      </View>

      <Text
        style={{
          color: "#FFF",
          textAlign: "center",
          fontFamily: "Poppins",
          fontSize: 20,
          fontWeight: "700",
          flex: 8,
        }}
      >
        {label}
      </Text>
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
            alignItems: "center",
            flex: 1,
            paddingRight: 12,
          },
        ]}
        onPress={onClickMessageIcon}
      >
        {isHasMessageIcon && (
          <View style={{ justifyContent: "flex-end" }}>
            <MessageIcon color={"#FFF"} />
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default React.memo(HeaderComp);
