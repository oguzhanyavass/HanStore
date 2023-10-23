import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor:'#dda15e',
    borderColor:'#dda15e',
    borderWidth:0.3,
    margin:10,
    flexDirection:'row',
    borderRadius:10,

  },
  image: {
    resizeMode:'contain',
    width:120,
    minHeight:120,
    borderColor:'#dda15e',
    borderWidth:3,
    backgroundColor:'white',
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
  },
  body_container: {
    flex:1,
    padding:5,
    justifyContent:'space-between'
  },
  title: {
    fontWeight:'bold',
    fontSize:16,
    color:'#562c2c'
  },
  price: {
    textAlign:'right',
    fontSize:14,
    fontStyle:'italic',
    color:'#562c2c'
  },
});
