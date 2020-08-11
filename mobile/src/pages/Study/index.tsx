import React from 'react'
import { View, Text, Image } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

import giveClassesIcon from '../../assets/images/icons/give-classes.png'

import styles from './styles'
import TopBar from '../../components/TopBar'
import Header from '../../components/Header'

function Study() {

    return (
        <View style={styles.container}>
            <Header title="Estudar" />
            <TopBar 
                title="Proffys diponíveis"
                icon={ <Ionicons name="ios-easel" size={36} color="#04D361" />}
            >
                <RectButton style={styles.contentFilter}>
                    <Ionicons name="ios-funnel" size={24} color="#04D361" />
                    <Text style={styles.textFilter}>Filtre por dia, hora e matéria</Text>
                    <Feather name="chevron-down" size={24} color="#D4C2FF" />
                </RectButton>
            </TopBar>
        </View>
    )
}


export default Study