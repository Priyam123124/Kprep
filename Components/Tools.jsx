import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import React, { useContext } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';
import themeContext from '../context/themeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tools = () => {
  const { dark, setPyq } = useContext(themeContext);
  const navigation = useNavigation();

  const { width, height } = Dimensions.get('window');
  const isTallDevice = width >= 800;

  const redirect = (name) => {
    navigation.dispatch(StackActions.push(name));
  };

  const tools = [
    {
      label: 'Notes',
      subtitle: 'All subject notes',
      icon: <Icon name="document-text-outline" size={isTallDevice?40:24} color={dark ? '#222' : '#fff'} />,
      action: () => redirect('Subject')
    },
    {
      label: 'PYQs',
      subtitle: 'Previous year questions',
      icon: <FAIcon name="question-circle" size={isTallDevice?40:22} color={dark ? '#222' : '#fff'} />,
      action: () => { redirect('Subject'); setPyq(true); }
    },
    {
      label: 'Online Videos',
      subtitle: 'Topic-wise videos',
      icon: <Icon name="play-circle-outline" size={isTallDevice?40:24} color={dark ? '#222' : '#fff'} />,
      action: () => redirect('Online Videos')
    },
    {
      label: 'SGPA Calculator',
      subtitle: 'Calculate your SGPA',
      icon: <MCIcon name="calculator-variant" size={isTallDevice?40:24} color={dark ? '#222' : '#fff'} />,
      action: () => redirect('SGPA')
    },
    {
      label: 'Cheat Sheet',
      subtitle: 'Quick formulas and tips',
      icon: <MCIcon name="clipboard-text-outline" size={isTallDevice?50:24} color={dark ? '#222' : '#fff'} />,
      action: () => {}
    },
    {
      label: 'Course Details',
      subtitle: 'Complete curriculum info',
      icon: <Icon name="book-outline" size={isTallDevice?40:24} color={dark ? '#222' : '#fff'} />,
      action: () => redirect('Course Structure')
    },
    {
      label: 'Faculty Details',
      subtitle: 'Know your professors',
      icon: <Icon name="people-outline" size={isTallDevice?40:24} color={dark ? '#222' : '#fff'} />,
      action: () => redirect('Faculty Details')
    },
  ];

  const styles = StyleSheet.create({
    container: {
      padding: 15,
    },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderRadius: 14,
      marginBottom: 12,
      elevation: 2,
    },
    icon: {
      marginRight: 15,
    },
    textContainer: {
      flex: 1,
    },
    title: {
      fontWeight: 'bold',
      fontSize: isTallDevice?27:17,
    },
    subtitle: {
      fontSize: isTallDevice?23:13,
      marginTop: 3,
    },
  });
  

  return (
    <View style={{ flex: 1, backgroundColor: dark ? 'white' : '#1e1e1e' }}>
      <ScrollView contentContainerStyle={styles.container}>
        {tools.map((tool, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.card, { backgroundColor: dark ? '#AAD198' : '#446377' }]}
            onPress={tool.action}
            activeOpacity={0.7}
          >
            <View style={styles.icon}>{tool.icon}</View>
            <View style={styles.textContainer}>
              <Text style={[styles.title, { color: dark ? '#000' : '#fff' }]}>{tool.label}</Text>
              <Text style={[styles.subtitle, { color: dark ? '#333' : '#ddd' }]}>{tool.subtitle}</Text>
            </View>
            <Icon name="chevron-forward" size={isTallDevice?30:20} color={dark ? '#000' : '#fff'} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Tools;