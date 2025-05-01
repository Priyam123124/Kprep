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

    const styles = StyleSheet.create({
        screen: {
            backgroundColor: '#f5f3d3',
            flex: 1,
        },
        container: {
            alignItems: 'center',
            paddingVertical: 15,
        },
        welcomeCard: {
            width: '90%',
            backgroundColor: '#f5f3d3',
            borderRadius: 20,
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 3 },
            shadowRadius: 6,
            elevation: 5,
            marginVertical: 10,
        },
        welcomeContent: {
            padding: 20,
        },
        greetingRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        greetingImage: {
            width: isTallDevice ? 200 : 120,
            height: isTallDevice ? 150 : 80,
            resizeMode: 'contain'
        },
        greetingTextContainer: {
            alignItems: 'flex-end'
        },
        dateText: {
            fontFamily: 'ComicNeue-Regular',
            fontSize: isTallDevice ? 20 : 14,
            color: '#555',
            marginBottom: 5,
        },
        greetingText: {
            fontFamily: 'Poppins-Bold',
            fontSize: isTallDevice ? 32 : 22,
            color: '#333',
            textAlign: 'right',
        },
        nameText: {
            fontFamily: 'Poppins-Bold',
            fontSize: isTallDevice ? 34 : 24,
            color: '#78B961',
            textAlign: 'right',
        },
        subText: {
            fontSize: isTallDevice ? 18 : 14,
            color: '#666',
            marginTop: 15,
            lineHeight: isTallDevice ? 26 : 20,
            fontFamily: 'ComicNeue-Regular',
        },
        quickAccess: {
            width: '90%',
            backgroundColor: '#f5f3d3',
            borderRadius: 20,
            paddingVertical: 20,
            paddingHorizontal: 20,
            elevation: 5,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 3 },
            shadowRadius: 6,
            marginVertical: 15,
        },
        quickTitle: {
            color: '#333',
            fontFamily: 'Comfortaa-Bold',
            fontSize: isTallDevice ? 28 : 20,
            marginBottom: 15,
            fontWeight: 'bold'
        },
        accessBtn: {
            marginVertical: 8,
            borderRadius: 15,
            overflow: 'hidden',
            height: isTallDevice ? 110 : 90,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 4
        },
        accessGradient: {
            width: '100%',
            height: '100%',
            padding: 16,
            justifyContent: 'flex-start'
        },
        accessTitle: {
            fontSize: isTallDevice ? 22 : 18,
            fontFamily: 'Comfortaa-Bold',
            color: '#333',
            fontWeight: 'bold'
        },
        accessSubtitle: {
            fontSize: isTallDevice ? 16 : 14,
            fontFamily: 'ComicNeue-Regular',
            color: '#444',
            marginTop: 5
        },
        accessIcon: {
            position: 'absolute',
            bottom: 12,
            right: 16
        },
        sectionTitle: {
            fontFamily: 'Comfortaa-Bold',
            fontSize: isTallDevice ? 28 : 18,
            marginTop: 20,
            marginBottom: 10,
            color: '#333',
            width: '90%',
            fontWeight: 'bold'
        },
        recentlyVisitedContainer: {
            paddingHorizontal: 20,
            paddingVertical: 10
        },
        contentIcon: {
            width: isTallDevice ? 160 : 120,
            height: isTallDevice ? 180 : 140,
            borderRadius: 15,
            marginRight: 15,
            backgroundColor: '#f5f3d3',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 3,
            borderWidth: 1,
            borderColor: '#E0E0E0'
        },
        contentImage: {
            width: isTallDevice ? 100 : 70,
            height: isTallDevice ? 100 : 70,
            resizeMode: 'contain'
        },
        contentTitle: {
            marginTop: 10,
            fontSize: isTallDevice ? 16 : 13,
            fontFamily: 'Comfortaa-Bold',
            color: '#333',
            textAlign: 'center',
        },
        feedbackCard: {
            backgroundColor: '#f5f3d3',
            width: '90%',
            height: isTallDevice ? 200 : 150,
            marginTop: 20,
            marginBottom: 30,
            borderRadius: 20,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 3 },
            shadowRadius: 6,
            elevation: 5,
        }
    });

    return (
        <View style={styles.screen}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    {/* Welcome Card */}
                    <View style={styles.welcomeCard}>
                        <LinearGradient
                            colors={['#FFFDD0', '#78B961']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.welcomeContent}
                        >
                            <View style={styles.greetingRow}>
                                <Image
                                    style={styles.greetingImage}
                                    source={require('./Images/topi.png')}
                                />
                                <View style={styles.greetingTextContainer}>
                                    <Text style={styles.dateText}>{day}th {mon} {year}</Text>
                                    <Text style={styles.greetingText}>{greet},</Text>
                                    <Text style={styles.nameText}>Priyam</Text>
                                </View>
                            </View>
                            <Text style={styles.subText}>
                                Did you do anything productive today? Here's a list of every important thing you have ignored this week...
                            </Text>
                        </LinearGradient>
                    </View>

                    {/* Quick Access */}
                    <View style={styles.quickAccess}>
                        <Text style={styles.quickTitle}>Quick Links</Text>
                        {[
                            {
                                title: 'To Do List',
                                subtitle: 'Schedule your tasks',
                                ic: 'clipboard-text-outline'
                            },
                            {
                                title: 'Exam Schedule',
                                subtitle: 'View upcoming exams',
                                ic: 'school'
                            },
                            {
                                title: 'Holiday List',
                                subtitle: 'Check out your holidays',
                                ic: 'calendar'
                            },
                            {
                                title: 'Book Selling',
                                subtitle: 'Sell your books',
                                ic: 'book-open-variant'
                            }
                        ].map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.accessBtn}
                                onPress={() => redirect(item.title)}
                                activeOpacity={0.8}
                            >
                                <LinearGradient
                                    colors={['#FFFDD0', '#78B961']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 0, y: 1 }}
                                    style={styles.accessGradient}>
                                    <Text style={styles.accessTitle}>{item.title}</Text>
                                    <Text style={styles.accessSubtitle}>{item.subtitle}</Text>
                                    <View style={styles.accessIcon}>
                                        <Icon name={item.ic} size={isTallDevice ? 28 : 22} color="#333" />
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Recently Visited */}
                    <Text style={styles.sectionTitle}>Recently Visited</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.recentlyVisitedContainer}
                    >
                        {Array(8).fill(0).map((_, index) => (
                            <TouchableOpacity key={index} activeOpacity={0.7}>
                                <View style={styles.contentIcon}>
                                    <Image
                                        source={require('./Images/freepdf.png')}
                                        style={styles.contentImage}
                                    />
                                    <Text style={styles.contentTitle}>
                                        COA PDF
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    {/* Feedback Form */}
                    <Text style={styles.sectionTitle}>Feedback Form</Text>
                    <LinearGradient
                        colors={['#FFFDD0', '#78B961']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.feedbackCard}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default Landing;
