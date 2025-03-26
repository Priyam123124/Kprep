import { StyleSheet, useColorScheme } from 'react-native';

const colour = ()=>{
  const theme = useColorScheme()
  return theme
}

export const globalStyles = StyleSheet.create({
  themecolor: {
    backgroundColor: "#587C4D",
  },
  themecolorDark: {
    backgroundColor: '#5D8CAB'
  },
  textcolor: {
    color: "#74AA63"
  },

  textcolorDark: {
    color: "#405868"
  },

  container_background: {
    backgroundColor: '#587C4E'
  },

  bgGround: {
    // marginLeft: "3.5%",
    // marginRight: "3.5%",
    height: "100%",
    // borderRadius: 10
  },
  branchNameMiniContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: 'black',
    borderStyle: 'solid',
    width: 270,
    height: 70,
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: '#587C4E'
},

content_icon: {
  width: 138,
  height: 100,
  marginTop: 20,
  marginRight: 10,
  borderEndEndRadius: 5,
  borderColor: "#487639",
  borderWidth: 3,
  borderStyle: 'solid',
  borderRadius: 5
},

content_title: {
  height: 35,
  marginTop: -7,
  borderTopWidth: 0
}
});
