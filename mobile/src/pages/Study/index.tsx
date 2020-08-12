import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RectButton, ScrollView, TextInput, BorderlessButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'
import TopBar from '../../components/TopBar'
import Header from '../../components/Header'
import TeacherItem, { Classe } from '../../components/TeacherItem'
import api from '../../services/api'
import { useFocusEffect } from '@react-navigation/native'

function Study() {

    const [teachers, setTeachers] = useState([])
    const [favorites, setFavorites] = useState<number[]>([])


    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')

    const [isFilterVisible, setIsFilterVisible] = useState(true)

    useFocusEffect(() => {
        getFavoritesTeachers()
    })


    async function getFavoritesTeachers() {

        AsyncStorage.getItem("favorites").then(response => {

            if (response) {

                const favoritedTeachers = JSON.parse(response)
                const favoritedTeacherIds = favoritedTeachers.map((teacher: any) => {
                    return teacher.id
                })

                setFavorites(favoritedTeacherIds)
            }
        })
    }

    async function handleFilterSubmit() {
        
        getFavoritesTeachers()
        
        const response = await api.get('/classes', {
            params: {
                subject,
                week_day,
                time
            }
        })

        setTeachers(response.data)
        setIsFilterVisible(false)


    }





    return (
        <View style={styles.container}>
            <Header title="Estudar" />
            <TopBar
                title="Proffys diponíveis"
                icon={(
                    <BorderlessButton onPress={() => setIsFilterVisible(!isFilterVisible)}>
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                )}
            >
                {
                    isFilterVisible &&

                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            value={subject}
                            onChangeText={setSubject}
                            placeholderTextColor="#c1bccc"
                            style={styles.input}
                            placeholder="Qual a matéria?"

                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana</Text>
                                <TextInput
                                    value={week_day}
                                    onChangeText={setWeekDay}
                                    placeholderTextColor="#c1bccc"
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    value={time}
                                    onChangeText={setTime}
                                    placeholderTextColor="#c1bccc"
                                    style={styles.input}
                                    placeholder="Qual o horário?"
                                />
                            </View>
                        </View>
                        <View style={styles.buttonSearchContainer}>
                            <RectButton style={styles.buttonSearch} onPress={() => handleFilterSubmit()}>
                                <Text style={styles.buttonSearchText}>Buscar</Text>
                            </RectButton>
                        </View>
                    </View>
                }
            </TopBar>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {teachers &&
                    teachers.map((classe: Classe) => (
                        <TeacherItem
                            key={classe.id}
                            classe={classe}
                            favorited={favorites.includes(classe.id)}
                        />)
                    )


                }


            </ScrollView>
        </View>
    )
}


export default Study