import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatPost";
import Perfil from "../screens/Profile";

const Tab=createBottomTabNavigator();

const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator ScreenOptions={({route})=>({
            tabBarIcon:({
                focused,
                color,
                size
            })=>{
                let iconName
                if(route.name==="feed"){
                    iconName=focused? "book":"book-outline";
                }else if(route.name==="createPost"){
                    iconName=focused? "create":"create-outline";
                }else if(route.name==="perfil"){
                    iconName=focused? "profile":"profile-outline";
                }
                return <Ionicons name={iconName} size={size} color={color}/>

            },
        })} tabBarOptions={{activeTintColor:"white", inactiveTintColor:"gray"}}>
            <Tab.Screen name="createPost" component={CreatePost}/>
            <Tab.Screen name="perfil" component={Perfil}/>
            <Tab.Screen name="feed" component={Feed}/>
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;