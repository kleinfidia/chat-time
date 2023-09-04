import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import React, { useState } from "react";
import { BGimage, Logo } from "../assets";
import { UserinputText } from "../components";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { avatars } from "../utils/supports";
import { MaterialIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

const Signupscreen = () => {
  const screenwidth = Math.round(Dimensions.get("window").width);
  const screenHeight = Math.round(Dimensions.get("window").height);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [avatar, setavatar] = useState(avatars[0]?.image.asset.url);
  const [isAvatarmenu, setisAvatarmenu] = useState(false);
  const [getemailValidationstatus, setgetemailValidationstatus] =
    useState(false);

  const navigation = useNavigation();

  const handleAvatar = (item) => {
    setisAvatarmenu(false);
    setavatar(item?.image.asset.url);
  };

  return (
    <View className=" flex-1 items-center justify-start">
      <Image
        source={BGimage}
        resizeMode="cover"
        className=" h-72 "
        style={{ width: screenwidth }}
      />
      {isAvatarmenu && (
        <>
          {/* list avatars */}
          <View
            className=" absolute inset-0 z-10 "
            style={{ width: screenwidth, height: screenHeight }}
          >
            <ScrollView>
              <BlurView
                className=" w-full h-full px-4 py-16 flex-row flex-wrap items-center justify-evenly"
                tint="light"
                intensity={60}
                style={{ width: screenwidth, height: screenHeight }}
              >
                {avatars?.map((item) => (
                  <TouchableOpacity
                    onPress={() => handleAvatar(item)}
                    key={item._id}
                    className=" w-20 h-20 m-3 p-1 rounded-full border-2 border-primary relative"
                  >
                    <Image
                      source={{ uri: item?.image.asset.url }}
                      resizeMode="contain"
                      className=" w-full h-full"
                    />
                  </TouchableOpacity>
                ))}
              </BlurView>
            </ScrollView>
          </View>
        </>
      )}
      {/* main view */}
      <View className=" w-full h-full bg-white rounded-tl-[90px] -mt-32 flex items-center justify-start py-6 px-6 space-y-4">
        <Image source={Logo} className=" w-16 h-16  " resizeMode="contain" />
        <Text className=" py-2 text-primaryText font-semibold text-xl">
          {" "}
          join us!
        </Text>
        {/* Avatar */}
        <View className=" w-full flex items-center justify-center relative -my-4">
          <TouchableOpacity
            onPress={() => setisAvatarmenu(true)}
            className="w-20 h-20 p-1 rounded-full border-2 border-primary relative"
          >
            <Image
              source={{ uri: avatar }}
              className=" w-full h-full"
              resizeMode="contain"
            />
            <View className=" w-6 h-6 bg-primary rounded-xl absolute top-0 right-0 flex items-center justify-center">
              <MaterialIcons name="edit" size={18} color={"#fff"} />
            </View>
          </TouchableOpacity>
        </View>

        <View className=" w-full flex items-center justify-center">
          {/* full name*/}
          <UserinputText
            placeHolder="Full Name"
            isPass={false}
            setStatValue={setname}
          />
          {/* email */}
          <UserinputText
            placeHolder="Email"
            isPass={false}
            setStatValue={setemail}
            setgetemailValidationstatus={setgetemailValidationstatus}
          />

          {/* password */}
          <UserinputText
            placeHolder="password"
            isPass={true}
            setStatValue={setpassword}
          />

          {/* login */}
          <TouchableOpacity className=" w-full px-4 py-2 rounded-xl bg-primary my-3 flex items-center justify-center">
            <Text className=" py2 text-white text-xl font-semibold">
              Sign up
            </Text>
          </TouchableOpacity>
          <View className=" w-full py12 flex-row items-center justify-center space-x-2">
            <Text className=" text-base text-primaryText">
              {" "}
              Already have an account?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text className=" text-base font-semibold text-primaryBold">
                Login here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signupscreen;
