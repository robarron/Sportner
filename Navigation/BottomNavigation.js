// Navigation/BottomNavigation.js

import React from 'react' // N'oubliez pas l'import de React ici. On en a besoin pour rendre nos components React Native Image !
import { Image } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import AdFeed from '../Components/AdFeed';
import MyPartners from '../Components/MyPartners';
import Css from '../Ressources/Css/Css';
import TopStackNavigator from './TopNavigation';

const BottomTabNavigator = createMaterialTopTabNavigator({
    Annonces: {
        screen: AdFeed,
        navigationOptions: {
            swipeEnabled: false,
            tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
                return <Image
                    source={require('../Ressources/Img/iconNews.png')}
                    style={Css.icon}/> // On applique un style pour les redimensionner comme il faut
            }
        }
    },
    Home: {
        screen: TopStackNavigator,
        navigationOptions: {
            swipeEnabled: false,
            tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
                return <Image
                    source={require('../Ressources/Img/matching.png')}
                    style={Css.icon}/> // On applique un style pour les redimensionner comme il faut
            }
        }
    },
    Partenaires: {
        screen: MyPartners,
        navigationOptions: {
            swipeEnabled: false,
            tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
                return <Image
                    source={require('../Ressources/Img/iconChatTRP.png')}
                    style={Css.icon}/> // On applique un style pour les redimensionner comme il faut
            }
        }
    },
},
    {
        initialRouteName : 'Home',
        tabBarPosition: 'bottom',
        initialLayout: {
            height: 90,
            width: 50
        },
        tabBarOptions: {
            tabBarPosition: 'bottom',
            activeBackgroundColor: '#39A094', // Couleur d'arrière-plan de l'onglet sélectionné
            inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
            inactiveTintColor: '#695D46',
            activeTintColor: '#EA6D00',
            style : {borderWidth: 0,
                borderRadius: 1000,
                backgroundColor: 'white',
                height: 100,
            },
            labelStyle: {
            },
            indicatorStyle: {
                display: "none",
            },
            showLabel: false, // On masque les titres
            showIcon: true, // On informe le TabNavigator qu'on souhaite afficher les icônes définis
        }
    }
);

export default createAppContainer(BottomTabNavigator)