import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome'
import { globalStyles } from './global_styles';

const Nav = () => {
  return (
    <View style={styles.container}>
    {/* navbar */}
    {/* logo of the app */}
      <View style={[styles.logo, globalStyles.themecolor]}>
        <Image style={styles.icon} source={require('./Images/k-prep2.webp')}/>
      </View>
      
      {/* searching and navigation */}
      <View style={[styles.nav, globalStyles.themecolor]}>
        <View style={styles.search}>
        <Icon style={{marginLeft: 7, marginRight: 7}} name="search" size={20} color="#9ca3af" />
          <TextInput placeholder='search...'/>
        </View>
        <Icon style={{marginLeft: '8%'}} name="bars" size={30} color="white"/>
      </View>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
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
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: '3%'
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
    backgroundColor: '#ffffffa4',
    width: '70%',
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 40,
    height: 50
  }
});
