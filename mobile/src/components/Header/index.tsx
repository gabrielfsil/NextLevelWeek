import React from 'react'
import { View, Text, Image } from 'react-native'

import backIcon from '../../assets/images/icons/back.png'
import logoIcon from '../../assets/images/logo.png'

import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'

interface HeaderProps {
    title?: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {

    const navigation = useNavigation()

    return (
        <View style={styles.header}>
            <BorderlessButton onPress={() => navigation.navigate("Landing") } >
                <Image source={backIcon} style={styles.image} />
            </BorderlessButton>
            <Text style={styles.title}>{title}</Text>
            <Image source={logoIcon} style={styles.image} />

        </View>
    )
}


export default Header