import React from 'react'
import { View, Text, Image } from 'react-native'


import styles from './styles'

interface TopBarProps {
    title: string,
    icon?: React.ReactElement
}

const TopBar: React.FC<TopBarProps> = ({ title, icon, children }) => {

    return (
        <View style={styles.header}>
            <View style={styles.contentTitle}>
                <Text style={styles.title}>{title}</Text>
                {icon}
            </View>
            {children}
        </View>
    )
}

export default TopBar