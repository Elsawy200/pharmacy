import *as React from 'react'
import {
    StyleSheet,
    Text,
    Image,
    ImageBackground,
    TextInput,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
    ScrollView,
    Button,
    EventSubscriptionVendor,
    Modal,
    Dimensions,
    FlatList,
    PermissionsAndroid,
    AsyncStorage,
    StatusBar,
    SafeAreaView
}
    from 'react-native'


import {
    backgroundcolorbar,
    backgroundColor,
    color,
    iconSize,
    fontSize,
    Items,
    photo
}
    from './constants';


import Icon from 'react-native-vector-icons/FontAwesome';
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default class Product2 extends React.Component {

    constructor() {
        super()
        this.state = {
            label: 'التفاصيل',

            photo: photo,
            Items: Items,
            name: 'panadol',
            prc: '150 EGP'

        }

    }



    render() {
        return (
            <>
                <StatusBar
                    backgroundColor={backgroundcolorbar}>
                </StatusBar>


                <View
                    style={syylee.topPar}>

                    <View style={syylee.left_icon}>

                        <TouchableOpacity >

                            <Icon
                                name='angle-right'
                                size={iconSize}
                                color='#fff'
                            />

                        </TouchableOpacity>

                    </View>

                    <View style={{
                        alignSelf: 'center'
                    }}>

                        <Text style={syylee.label_text}>
                            {this.state.label}
                        </Text>

                    </View>





                </View>

                <View style={syylee.viewImage}>

                    <Image style={syylee.imageStyle}

                        source={this.state.photo}


                    />
                </View>

                <Text style={syylee.name_text}>
                    {this.state.name}
                </Text>

                <Text style={syylee.Price}>
                    {this.state.prc}

                </Text>

                <Text style={syylee.Price}>
                    Discription
                </Text>

                <View style={syylee.viewdiscription}>
                    <Text style={syylee.dis_text}>
                        dcdjldbvlbdlvbvbldbvblvdcdjldbvlbdlvbvbldbvblvdcdjldbvlbdlvbvbldbvblvdcdjldbvlbdlvbvbldbvblvdcdjldbvlbdlvbvbldbvblvdcdjldbvlbdlvbvbldbvblvdcdjldbvlbdlvbvbldbvblvdcdjldbvlbdlvbvbldbvblvdcdjldbvlbdlvbvbldbvblv
                    </Text>
                </View>

            </>
        )
    }


}


const syylee = StyleSheet.create({

    topPar: {
        width: width,
        height: height * 0.08,
        backgroundColor: backgroundcolorbar,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: width * 0.03
    },


    label_text: {

        fontSize: fontSize,
        fontFamily: 'Cairo-Bold',
        fontWeight: 'bold',
        color: color,
        textAlign: 'center',
        marginLeft: width * 0.41
    },


    viewImage: {
        width: width,
        height: height * 0.3,
        backgroundColor: color,
        elevation: 2,
        marginTop: height * 0.04

    },


    imageStyle: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: height * 0.02
    },

    name_text: {

        fontSize: 20,
        color: '#959595',
        fontWeight: 'bold',
        marginTop: width * 0.05,
        marginRight: width * 0.06

    },

    Price: {
        fontSize: fontSize,
        color: backgroundcolorbar,
        marginTop: width * 0.03,
        marginRight: width * 0.06

    },

    viewdiscription: {
        width: width * 0.94,
        height: height * 0.23,
        marginTop: height * 0.03,
        backgroundColor: color,

    },


    dis_text: {

        marginTop: height * 0.01,
        fontSize: fontSize,
        color: '#000 '
    }


})