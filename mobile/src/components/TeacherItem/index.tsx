import React, { useState } from 'react'
import { View, Image, Text, Linking } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'


import styles from './styles'
import api from '../../services/api'

export interface Classe {
    avatar: string
    bio: string
    cost: number
    id: number
    name: string
    subject: string
    user_id: number
    whatsapp: string
}

interface TeacherItemProps {
    classe: Classe,
    favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ classe, favorited }) => {

    const [isFavorited, setIsFavorited] = useState(favorited)

    function handleLinkToWhatsapp() {

        api.post('/connections', {
            user_id: classe.id
        })

        Linking.openURL(`whatsapp://send?phone=+55${classe.whatsapp}`)

    }

    async function handleToggleFavorite() {

        const favorites = await AsyncStorage.getItem("favorites");

        let favoritesArray = []

        if (favorites) {
            favoritesArray = JSON.parse(favorites)
        }

        if (isFavorited) {
            // Remover dos favoritos

            const favoriteIndex = favoritesArray.findIndex((teacherItem: Classe) => {
                return teacherItem.id === classe.id
            })

            favoritesArray.splice(favoriteIndex, 1)

            setIsFavorited(false)

        } else {
            // Adicionar aos favoritos

            favoritesArray.push(classe)

            setIsFavorited(true)


        }
        await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray))
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: classe.avatar }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{classe.name}</Text>
                    <Text style={styles.subject}>{classe.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                {classe.bio}
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'   '}
                    <Text style={styles.priceValue}>R$ {classe.cost}</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, isFavorited && styles.favorited]} onPress={() => handleToggleFavorite()}>
                        {
                            isFavorited ?
                                <Image source={unFavoriteIcon} />
                                :
                                <Image source={heartOutlineIcon} />
                        }

                    </RectButton>
                    <RectButton style={styles.contactButton} onPress={() => handleLinkToWhatsapp()}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>

    )
}

export default TeacherItem