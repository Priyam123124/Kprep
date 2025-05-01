import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const isTallDevice = width >= 800;

// App colors 
export const COLORS = {
    background: '#f5f3d3',
    gradientStart: '#FFFDD0',
    gradientEnd: '#78B961',
    accent: '#78B961',
    text: '#333333',
    textLight: '#555555',
    border: '#EEEEEE',
    buttonBlue: '#3a7bd5',
    buttonBlueEnd: '#446377',
    white: '#FFFFFF'
};

// Common styles to use across components
export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },

    screenContainer: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: 15
    },

    card: {
        backgroundColor: COLORS.background,
        borderRadius: 20,
        padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3
    },

    gradientCard: {
        borderRadius: 15,
        overflow: 'hidden',
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 4
    },

    header: {
        fontSize: isTallDevice ? 32 : 24,
        fontWeight: 'bold',
        color: COLORS.text,
        marginVertical: 10
    },

    subHeader: {
        fontSize: isTallDevice ? 24 : 18,
        fontWeight: 'bold',
        color: COLORS.text,
        marginVertical: 8
    },

    bodyText: {
        fontSize: isTallDevice ? 18 : 14,
        color: COLORS.textLight,
        lineHeight: isTallDevice ? 26 : 20
    },

    buttonContainer: {
        width: isTallDevice ? 180 : 140,
        height: isTallDevice ? 50 : 40,
        borderRadius: 25,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5
    },

    buttonGradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    buttonText: {
        color: COLORS.text,
        fontSize: isTallDevice ? 18 : 14,
        fontWeight: 'bold',
        marginLeft: 8
    },

    inputField: {
        backgroundColor: '#FFFCE4',
        borderRadius: 10,
        padding: 12,
        marginVertical: 8,
        color: COLORS.text,
        borderWidth: 1,
        borderColor: COLORS.accent,
        fontSize: isTallDevice ? 18 : 14
    }
}); 