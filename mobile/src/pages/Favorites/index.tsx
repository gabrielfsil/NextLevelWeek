import React from 'react'
import { View, Text, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import TopBar from '../../components/TopBar'
import Header from '../../components/Header'

import styles from './styles'

function Favorites() {

    return (
        <View style={styles.container}>
            <Header title="Estudar" />
            <TopBar 
                title="Proffys Favoritos"
                icon={ <Ionicons name="ios-heart" size={36} color="#04D361" />}
            />
        </View>
    )
}


export default Favorites