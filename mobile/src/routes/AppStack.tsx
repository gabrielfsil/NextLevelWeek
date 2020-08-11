import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const { Screen, Navigator } = createStackNavigator()

import Landing from '../pages/Landing'
import GiveClasses from '../pages/GiveClasses'
import StudyTabs from '../routes/StudyTabs'


function Routes() {

    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false
            }}>
                <Screen name="Landing" component={Landing}  />
                <Screen name="GiveClasses" component={GiveClasses}  />
                <Screen name="Study" component={StudyTabs}   />
            </Navigator>
        </NavigationContainer>
    )
}

export default Routes
