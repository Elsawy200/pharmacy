import React  from "react";
import { create } from "react-test-renderer";
import { Icon } from 'react-native-vector-icons/FontAwesome';
import Product from "./pages/product1";
import Product2 from "./pages/product2";
export default class App extends React.Component{

render()
{
    return(
        <>

<Product/>
        </>
    )
}

}