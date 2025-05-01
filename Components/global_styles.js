import { StyleSheet, useColorScheme } from 'react-native';
import { Dimensions } from 'react-native';

const colour = () => {
  const theme = useColorScheme()
  return theme
}

const { width, height } = Dimensions.get('window')
const isTallDevice = width >= 800

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
    width: '80%',
    height: isTallDevice ? 100 : 70,
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: '#587C4E',
  },

  content_icon: {
    width: isTallDevice ? 200 : 130,
    height: isTallDevice ? 200 : 130,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content_title: {
    height: isTallDevice ? 45 : 35,
    marginTop: -7,
    borderTopWidth: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
