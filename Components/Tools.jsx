import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import React, { useContext } from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';
import themeContext from '../context/themeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles } from './global_styles';
import { COLORS, commonStyles } from './common_styles';

const Tools = () => {
    const { setPyq } = useContext(themeContext);
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
            icon: <Icon name="document-text-outline" size={isTallDevice ? 40 : 24} color="#333" />,
            action: () => redirect('Subject')
        },
        {
            label: 'PYQs',
            subtitle: 'Previous year questions',
            icon: <FAIcon name="question-circle" size={isTallDevice ? 40 : 22} color="#333" />,
            action: () => { redirect('Subject'); setPyq(true); }
        },
        {
            label: 'Online Videos',
            subtitle: 'Topic-wise videos',
            icon: <Icon name="play-circle-outline" size={isTallDevice ? 40 : 24} color="#333" />,
            action: () => redirect('Online Videos')
        },
        {
            label: 'SGPA Calculator',
            subtitle: 'Calculate your SGPA',
            icon: <MCIcon name="calculator-variant" size={isTallDevice ? 40 : 24} color="#333" />,
            action: () => redirect('SGPA')
        },
        {
            label: 'Cheat Sheet',
            subtitle: 'Quick formulas and tips',
            icon: <MCIcon name="clipboard-text-outline" size={isTallDevice ? 40 : 24} color="#333" />,
            action: () => { }
        },
        {
            label: 'Course Details',
            subtitle: 'Complete curriculum info',
            icon: <Icon name="book-outline" size={isTallDevice ? 40 : 24} color="#333" />,
            action: () => redirect('Course Structure')
        },
        {
            label: 'Faculty Details',
            subtitle: 'Know your professors',
            icon: <Icon name="people-outline" size={isTallDevice ? 40 : 24} color="#333" />,
            action: () => redirect('Faculty Details')
        },
    ];

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLORS.background,
            padding: 15,
        },
        cardContainer: {
            overflow: 'hidden',
            borderRadius: 15,
            marginBottom: 15,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.15,
            shadowRadius: 4,
            elevation: 4,
        },
        cardContent: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: isTallDevice ? 18 : 16,
        },
        icon: {
            marginRight: 15,
            width: isTallDevice ? 50 : 40,
            height: isTallDevice ? 50 : 40,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
        },
        textContainer: {
            flex: 1,
        },
        title: {
            fontWeight: 'bold',
            fontSize: isTallDevice ? 26 : 17,
            color: '#333',
        },
        subtitle: {
            fontSize: isTallDevice ? 20 : 13,
            marginTop: 3,
            color: '#555',
        },
        header: {
            fontSize: isTallDevice ? 32 : 24,
            fontWeight: 'bold',
            color: '#333',
            marginBottom: 20,
            marginLeft: 10,
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Tools & Resources</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {tools.map((tool, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.cardContainer}
                        onPress={tool.action}
                        activeOpacity={0.8}
                    >
                        <LinearGradient
                            colors={['#FFFDD0', '#78B961']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                        >
                            <View style={styles.cardContent}>
                                <View style={styles.icon}>{tool.icon}</View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.title}>{tool.label}</Text>
                                    <Text style={styles.subtitle}>{tool.subtitle}</Text>
                                </View>
                                <Icon name="chevron-forward" size={isTallDevice ? 30 : 20} color="#333" />
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default Tools;