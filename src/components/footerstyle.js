import React from 'react'
import { StyleSheet } from 'react-native';
const styles1 = StyleSheet.create({
    mainfooter:{
        height:60,
        width:"100%",
        position:"absolute",
        bottom:0,
    },
    footer:{
        // borderWidth:2,
        // borderColor:"red",
        display:"flex",
        flexDirection:"row",
        height:60,
        alignSelf:"center"
    },
    leftfooter:{
        paddingTop:10,
        display:"flex",
        flexDirection:"row",
        borderTopLeftRadius:20,
        borderTopRightRadius:38,
        backgroundColor:"#293556",
        width:"43%"
    },
    rightfooter:{
        paddingTop:10,
        display:"flex",
        flexDirection:"row",
        borderTopRightRadius:20,
        borderTopLeftRadius:38,
        backgroundColor:"#293556",
        width:"43%"
    },
    midfooter:{
        
        width:49,
        height:100,
    },
    profileicon:{
        // borderWidth:2,
        // borderColor:"red",
        position:"absolute",
        alignSelf:"center",
        height:50,
        width:54,
        bottom:15,
        borderRadius:100,
        backgroundColor:"white"
    },
    midback:{
        position:"absolute",
        zIndex:-1,
        backgroundColor:"#293556",
        width:100,
        marginTop:25,
        height:45,
        alignSelf:"center"
    },
    desc:{
        color:"white",
        fontSize:8
    },
    icons:{
        // borderWidth:2,
        // borderColor:"red",
        alignItems:"center",
        paddingTop:5,
        width:50
    }
  });
  
  export default styles1;
  

