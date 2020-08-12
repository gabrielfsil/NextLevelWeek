import React, { useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useFocusEffect } from '@react-navigation/native'

import TopBar from '../../components/TopBar'
import Header from '../../components/Header'

import styles from './styles'
import TeacherItem, { Classe } from '../../components/TeacherItem'
import AsyncStorage from '@react-native-community/async-storage'

function Favorites() {

    const [ favorites, setFavorites] = useState([])

    useFocusEffect(() => {

        getFavoritesTeachers()
    })
    
    async function getFavoritesTeachers() {

        AsyncStorage.getItem("favorites").then(response => {

            if (response) {

                const favoritedTeachers = JSON.parse(response)

                setFavorites(favoritedTeachers)
            }
        })
    }

    return (
        <View style={styles.container}>
            <Header title="Estudar" />
            <TopBar
                title="Proffys Favoritos"
                icon={<Ionicons name="ios-heart" size={36} color="#04D361" />}
            />
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {
                    favorites &&

                    favorites.map((classe: Classe) => {
                        return (
                            <TeacherItem 
                                key={classe.id}
                                classe={classe}
                                favorited={true}
                            />

                        )
                    })
                }

            </ScrollView>
        </View>
    )
}


export default Favorites