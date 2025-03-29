import { Image, StyleSheet, Text, TextInput, View, Animated, Dimensions} from 'react-native';
import React, { useEffect, useContext } from 'react';
import themeContext from '../context/themeContext';
import Icon from 'react-native-vector-icons/FontAwesome'
import { globalStyles } from './global_styles';
import { useRef, useState } from 'react';

    const {width, height} = Dimensions.get('window')
    const isTallDevice = width >=800 
const Nav = () => {
  const context = useContext(themeContext)
  const {dark} = context
  const [expanded, setExpanded] = useState(false);
  const widthAnim = useRef(new Animated.Value(0)).current; // Initial value for animation
  const [color, setColor] = useState('')
  const [color2, setColor2] = useState(!dark? '#1C1C1C':'#FFFDF1')

  useEffect(()=>{
    setColor2(!dark? '#1C1C1C':'#FFFDF1')
  },[dark])
  const toggleExpand = () => {
    Animated.timing(widthAnim, {
      toValue: expanded ? 0 : 1, // Toggle between 15% and 100%
      duration: 500, // Animation duration
      useNativeDriver: false, // Required for width animation
    }).start();

    setExpanded(!expanded);

    if(expanded) {
      setColor2(color2=>dark?'#FFFDF1':'#1C1C1C')
    } else {
      setColor2(color2=> dark? '#1C1C1C': 'white')
    }
  };

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: isTallDevice?70:50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: dark? '#FFFDF1': '#1C1C1C',
      elevation: 5
    },
    nav: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      width: '75%',
      height: 60,
      borderRadius: 10,
    },
    logo: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
      height: 50,
      borderRadius: 10,
      marginRight: '4%'
    },
    text: {
      color: 'white',
      fontSize: 16,
    },
    hello: {
      marginLeft: 10,
      color: 'black',
    },
    search: {
      // backgroundColor: color,
      // width: `${widthAnim}`,
      borderRadius: 50,
      borderWidth: 1, borderStyle: 'solid',
      flexDirection: 'row',
      alignItems: 'center'
    },
    icon: {
      width: isTallDevice?60:40,
      height: isTallDevice?70:50,
    }
    
  });
  

  return (
    <View style={styles.container}>
      {/* navbar */}
      {/* logo of the app */}
      <View style={[styles.logo]}>
        <Image style={styles.icon} source={dark? require('./Images/k-prep2.png'): require('./Images/Kprep-dark.png')} />
      </View>

      {/* searching and navigation */}
      <View style={styles.nav}>
        <View style={{width: '70%', flex: 1, flexDirection: 'row-reverse'}}>
      <Animated.View
        style={[
          styles.search,
          {
            width: widthAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ["15%", "100%"], // Width expands from 15% to 100%
          }), backgroundColor: `${color}`
          }, {borderColor: `${color2}`}
        ]}
      >

            <Icon style={{ marginLeft: 7, marginRight: 7 }} name="search" size={isTallDevice?30:20} color={!dark?"white": "black"} onPress={toggleExpand}/>
            {expanded && <TextInput placeholder='search...' />}
          </Animated.View>
        </View>
        <Icon style={{ marginLeft: '8%' }} name="bars" size={isTallDevice?50:30} color={!dark?"white": "black"} />
      </View>
    </View>
  );
};

export default Nav;

