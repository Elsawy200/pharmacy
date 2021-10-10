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
    Items
}
    from './constants';


import Icon from 'react-native-vector-icons/FontAwesome';

import ImagedCardView from "react-native-imaged-card-view";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default class Product extends React.Component {

    constructor() {
        super()
        this.state = {
            label: 'الادويةوالتجميل',

            input: '',


            Items: Items,
            ind: 0,

        }

    }


    search(value) {

        let items = this.state.Items
        for (let i = 0; i < items.length; i++) {
            if (items[i].name.toLowerCase().includes(value.toLowerCase())) {
                items[i].show = true
            }


            else {
                items[i].show = false
            }

        }
        this.setState({ Items: items })
    }


    render() {
        return (
            <>
                <StatusBar
                    backgroundColor={backgroundcolorbar}>
                </StatusBar>
                <View style={{
                    flex: 1,
                    backgroundColor: backgroundColor
                }}>

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



                    <View style={syylee.search}>
                        <Icon
                            style={syylee.iconSearch}
                            name='search'
                        />


                        <TextInput
                            style={syylee.text_input}
                            multiline={true}
                            placeholder='ما الذي تبحث عنه؟'
                            value={this.state.input}
                            onChangeText={(value) => {
                                this.search(value)
                                this.setState({ input: value })

                            }}

                        />



                    </View>



                    <FlatList
                    showsVerticalScrollIndicator={false}
                        data={this.state.Items}
                        contentContainerStyle={{
                            // flexDirection: 'row',
                            // flexWrap: 'wrap'
                        }}

                        renderItem={({ item, index }) => (

                            <>

                                {item.show ?

                                    (





<ImagedCardView 
  
  title={item.name}
  rightSideValue={item.price}
  subtitle="Egypt"
  leftSideValue={item.mg}
  backgroundColor={backgroundcolorbar}
  source={item.image}

/>

                                    ) :

                                    null
                                }
                            </>

                        )}

                    />


                </View>



            </>
        )
    }


}





const syylee = StyleSheet.create(
    {

        // first view
        topPar: {
            width: width,
            height: height * 0.07,
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
            marginLeft: width * 0.34
        },
        search: {
            width: width * 0.9,
            height: height * 0.05,
            backgroundColor: color,
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: height * 0.01,
            flexDirection: 'row',
            elevation: 2
        },
        iconSearch: {
            fontSize: 18,
            marginLeft: width * 0.02,
            marginTop: height * 0.01,

        },

        textSearch: {
            fontSize: 15,
            marginLeft: width * 0.02,
            marginTop: height * 0.01,
            color: '#000'
        },

        text_input: {
            fontSize: 16,
            width: width * 0.84,
            textAlign: 'right'
        },

        flatlist_Touchableopacity: {
            // width: width * 0.4,
            // height: height * 0.28,
            marginTop: height * 0.03,
          //  marginLeft: width * 0.027,
           // borderRadius: 12,
            backgroundColor: color,
           elevation: 2,
         //  borderRadius:15,
            alignItems:'center' ,
            
        },

        imageStyleFlatlist: {
            width: 120,
            height: 120,
            alignSelf: 'center'
        },

        textflatlist: {
            fontSize: fontSize,
            color: '#959595',
            textAlign: 'right',
            fontWeight: 'bold',
            marginRight: width * 0.03,
            marginTop: height * 0.02
        },

        Price: {
            fontSize: fontSize,
            color: backgroundcolorbar,
            fontWeight: 'bold',
            marginLeft: width * 0.20,
            marginTop: height * 0.01

        },



    })













    
//                                         <TouchableOpacity
//                                             onPress={() => {
//                                                 this.setState({ ind: index })

//                                             }}

//                                             activeOpacity={0.7} style={syylee.flatlist_Touchableopacity}>




// {
// /* 
//                                             <Text style={syylee.textflatlist}>
//                                                 {item.name}
//                                             </Text> */}


//                                             {/* <View style={{
//                                                 flexDirection: "row",
//                                             }}>


//                                                 <Icon
//                                                     style={{


//                                                         marginLeft: width * 0.04,
//                                                         marginTop: height * 0.014,
//                                                         fontSize: 20,
//                                                         color: backgroundcolorbar
//                                                     }}
//                                                     name='info'
//                                                 />


//                                                 <Text style={syylee.Price}>
//                                                     {item.price}
//                                                 </Text>

//                                             </View> */}

//                                         </TouchableOpacity>

    