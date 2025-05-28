// screens/AboutScreen.js
import React from 'react';
import { View, Text,TouchableOpacity, Linking } from 'react-native';
import styles from '../src/styles/AboutScreenStyles'; // Certifique-se que o caminho está correto

const APP_NAME = 'Meu Aplicativo';
const APP_VERSION = 'Versão 1.0.0';
const DEVELOPER = 'Nome de sua Squad';
const WEBSITE_URL = 'https://seusite.com';
const EMAIL = 'contato@seusite.com';

function AboutScreen() {
    const openWebsite = () => {
        Linking.openURL(WEBSITE_URL).catch((err) => console.error('Erro ao abrir o site:', err));
    };

    const sendEmail = () => {
        Linking.openURL(`mailto:${EMAIL}`).catch((err) => console.error('Erro ao abrir o email:', err));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.appName}>{APP_NAME}</Text>
            <Text style={styles.version}>Versão: {APP_VERSION}</Text>
            <Text style={styles.developer}>Desenvolvido por: {DEVELOPER}</Text>

            <TouchableOpacity style={styles.linkContainer} onPress={openWebsite}>
                <Text style={styles.linkText}>Visite nosso site</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.linkContainer} onPress={sendEmail}>
                <Text style={styles.linkText}>Entre em contato por email</Text>
            </TouchableOpacity>

            <Text style={styles.copyright}>© {new Date().getFullYear()} {DEVELOPER}. Todos os direitos reservados.</Text>
        </View>
    );
}

export default AboutScreen;