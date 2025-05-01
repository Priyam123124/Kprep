import { Image, StyleSheet, Text, TextInput, View, Animated, Dimensions, TouchableOpacity } from 'react-native';
import React, { useEffect, useContext, useRef, useState } from 'react';
import themeContext from '../context/themeContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from './global_styles';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');
const isTallDevice = width >= 800;

const Nav = () => {
  const context = useContext(themeContext);
  const { dark } = context;
  const [expanded, setExpanded] = useState(false);
  const widthAnim = useRef(new Animated.Value(0)).current;
  const [color, setColor] = useState('');
  const [color2, setColor2] = useState('#78B961');
  const [flag, setFlag] = useState(false);

  const toggleExpand = () => {
    Animated.timing(widthAnim, {
      toValue: expanded ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start();

    setExpanded(!expanded);
  };

  const navigation = useNavigation();
  const redirect = (name2) => {
    navigation.navigate(name2); // Changed from StackActions.push
  };

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: isTallDevice ? 70 : 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f3d3',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
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
      marginRight: '4%',
    },
    text: {
      color: '#333',
      fontSize: 16,
    },
    hello: {
      marginLeft: 10,
      color: '#333',
    },
    search: {
      borderRadius: 25,
      borderWidth: 1,
      borderStyle: 'solid',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFFDD0',
      height: isTallDevice ? 40 : 30,
    },
    icon: {
      width: isTallDevice ? 60 : 40,
      height: isTallDevice ? 70 : 50,
    },
    menuContainer: {
      width: 200,
      borderRadius: 15,
      backgroundColor: '#FFFDD0',
      position: 'absolute',
      zIndex: 2,
      top: '7%',
      right: 20,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 6
    },
    menuItem: {
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#eee'
    },
    menuText: {
      fontFamily: 'ComicNeue-Bold',
      fontSize: 15,
      color: '#333'
    }
  });

  return (
    <>
      <View style={styles.container}>
        {/* Navbar */}
        <View style={[styles.logo]}>
          <Image
            style={styles.icon}
            source={require('./Images/k-prep2.png')}
          />
        </View>
        <View style={styles.nav}>
          <View style={{ width: '70%', flex: 1, flexDirection: 'row-reverse' }}>
            <Animated.View
              style={[
                styles.search,
                {
                  width: widthAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['15%', '100%'],
                  }),
                  borderColor: '#78B961',
                },
              ]}
            >
              <Icon
                style={{ marginLeft: 7, marginRight: 7 }}
                name="search"
                size={isTallDevice ? 30 : 20}
                color="#333"
                onPress={toggleExpand}
              />
              {expanded && <TextInput placeholder="Search..." placeholderTextColor="#777" style={{ color: '#333' }} />}
            </Animated.View>
          </View>
          <Icon
            onPress={() => setFlag(!flag)}
            style={{ marginLeft: '8%' }}
            name="bars"
            size={isTallDevice ? 50 : 30}
            color="#333"
          />
        </View>
      </View>
      {flag && (
        <View style={styles.menuContainer}>
          <LinearGradient
            colors={['#FFFDD0', '#78B961']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ width: '100%', height: '100%' }}
          >
            <TouchableOpacity onPress={() => setFlag(false)} style={styles.menuItem}>
              <Text style={styles.menuText}>Notes Submission</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setFlag(false);
                redirect('focus');
              }}
              style={styles.menuItem}
            >
              <Text style={styles.menuText}>Focus Mode</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      )}
    </>
  );
};

export default Nav;