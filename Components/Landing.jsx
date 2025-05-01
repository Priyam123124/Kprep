import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
    Dimensions,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import themeContext from '../context/themeContext';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles } from './global_styles';
import { useNavigation } from '@react-navigation/native';
import ToDoList from './ToDoList';
import Holidaylist from './Holidaylist';
import Upcomingexams from './Upcomingexams';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Landing = () => {
    const context = useContext(themeContext);
    const [greet, setGreet] = useState('');
    const [day, setDay] = useState(0);
    const [mon, setMon] = useState('October');
    const [year, setYear] = useState(0);
    const { dark } = context;
    const { width, height } = Dimensions.get('window');
    const isTallDevice = width >= 800;
    const navigation = useNavigation();

    const redirect = (name2) => {
        if (name2 == 'To Do List') {
            navigation.navigate(ToDoList);
        }

        if (name2 == 'Holiday List') {
            navigation.navigate(Holidaylist);
        }

        if (name2 == 'Upcoming Exams') {
            navigation.navigate(Upcomingexams);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const a = new Date();
            const h = a.getHours();
            const m = a.getMonth();
            const y = a.getFullYear();
            const d = a.getDate();

            if (h >= 0 && h <= 11) {
                setGreet('Good Morning');
            }
            if (h >= 12 && h <= 17) {
                setGreet('Good Afternoon');
            }
            if (h >= 18 && h <= 23) {
                setGreet('Good Evening');
            }

            const months = [
                'January', 'February', 'March', 'April',
                'May', 'June', 'July', 'August',
                'September', 'October', 'November', 'December',
            ];
            setMon(months[m]);
            setDay(d);
            setYear(y);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const gradientColor = dark
        ? ['#75A665', '#9DC17B', '#CAE5B0', '#9DC17B', '#75A665']
        : ['#333333', '#5F727F', '#8DB4CE'];

    const styles = StyleSheet.create({
        screen: {
            backgroundColor: dark ? '#FFFFFF' : '#1E1E1E',
            flex: 1,
        },
        container: {
            alignItems: 'center',
            paddingVertical: 15,
        },
        welcomeCard: {
            width: '90%',
            backgroundColor: dark ? '#F7FFEB' : '#2D2D2D',
            borderRadius: 12,
            padding: 16,
            marginVertical: 10,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 5,
        },
        greetingText: {
            fontFamily: 'Poppins-Bold',
            fontSize: isTallDevice ? 50 : 22,
            color: dark ? '#000' : '#FFF',
            textAlign: 'right',
        },
        dateText: {
            fontFamily: 'ComicNeue-Regular',
            fontSize: isTallDevice ? 30 : 14,
            color: dark ? '#000' : '#FFF',
            marginBottom: 5,
            textAlign: 'right',
        },
        subText: {
            fontSize: isTallDevice ? 22 : 12,
            color: dark ? '#000000' : '#CCCCCC',
            marginTop: 15,
            textAlign: 'right',
            fontFamily: 'ComicNeue-Regular',
        },
        profileImage: {
            width: 60,
            height: 60,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: '#000',
            margin: 10,
        },
        quickAccess: {
            width: '90%',
            backgroundColor: dark ? '#FFF9D0' : '#1F1F1F',
            borderRadius: 12,
            paddingVertical: 10,
            paddingHorizontal: 8,
            elevation: 6,
            marginVertical: 15,
        },
        quickTitle: {
            color: '#5B8699',
            fontFamily: 'Comfortaa-Bold',
            fontSize: isTallDevice ? 30 : 18,
            marginBottom: 10,
        },
        accessBtn: {
            marginVertical: 5,
            borderRadius: 10,
            overflow: 'hidden',
        },
        accessInner: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 12,
            paddingLeft: 18,
        },
        accessText: {
            fontSize: isTallDevice ? 28 : 18,
            marginLeft: 12,
            fontFamily: 'Comfortaa-Bold',
            color: '#000',
        },
        sectionTitle: {
            fontFamily: 'Comfortaa-Bold',
            fontSize: isTallDevice ? 30 : 18,
            marginTop: 15,
            marginBottom: 5,
            color: dark ? '#1F3418' : '#5D8CAB',
            width: '90%',
        },
        card: {
            width: isTallDevice?200:130,
            height: isTallDevice?200:130,
            borderRadius: 10,
            marginRight: 10,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        feedbackCard: {
            backgroundColor: dark ? '#F7F7F7' : '#2A2A2A',
            width: '90%',
            height: isTallDevice ? 250 : 150,
            marginTop: 20,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#888',
        },
    });

    return (
        <View style={styles.screen}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    {/* Welcome */}
                    <View style={styles.welcomeCard}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image
                                style={{
                                    width: isTallDevice ? 250 : 120,
                                    height: isTallDevice ? 180 : 70
                                }}
                                source={dark ? require('./Images/topi.png') : require('./Images/topi-dark.png')}
                            />
                            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                                <Text style={styles.dateText}>{day}th {mon} {year}</Text>
                                <Text style={styles.greetingText}>{greet},</Text>
                                <Text style={[styles.greetingText, { fontSize: isTallDevice ? 50 : 20, color: '#74AA63' }]}>Priyam</Text>
                            </View>
                        </View>
                        <Text style={styles.subText}>
                            Did you do anything productive today? Here’s a list of every important thing you have ignored this week...
                        </Text>
                    </View>

                    {/* Quick Access */}
                    <View style={styles.quickAccess}>
                        <Text style={styles.quickTitle}>Quick Access</Text>
                        {[
                            { write: 'To Do List', ic: 'checkbox-marked-outline' },
                            { write: 'Upcoming Exams', ic: 'calendar-outline' },
                            { write: 'Holiday List', ic: 'palm-tree' },
                        ].map((item, index) => (
                            <TouchableOpacity key={index} style={styles.accessBtn} onPress={() => redirect(item.write)}>
                                <LinearGradient
                                    colors={gradientColor}
                                    start={{ x: 0, y: 0.5 }}
                                    end={{ x: 1, y: 0.5 }}
                                    locations={[0, 0.25, 0.55, 0.75, 1]}>
                                    <View style={styles.accessInner}>
                                        <Icon name={item.ic} size={isTallDevice?50:30} color="#000" />
                                        <Text style={styles.accessText}>{item.write}</Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Recently Visited */}
                    <Text style={styles.sectionTitle}>Recently Visited</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 10 }}>
                        {Array(8).fill(0).map((_, index) => (
                            <TouchableOpacity key={index}>
                                <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB' }]}>
                                    <Image
                                        source={require('../Components/Images/freepdf.png')}
                                        style={{ width: isTallDevice?120:70, height: isTallDevice?120:70 }}
                                        resizeMode="contain"
                                    />
                                    <Text
                                        style={{
                                            marginTop: 8,
                                            fontSize: isTallDevice ? 20 : 12,
                                            fontFamily: 'Comfortaa-Bold',
                                            color: dark ? '#000' : '#FFF',
                                            textAlign: 'center',
                                        }}>
                                        COA PDF
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    {/* Feedback Form */}
                    <Text style={styles.sectionTitle}>Feedback Form</Text>
                    <View style={styles.feedbackCard} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Landing;
