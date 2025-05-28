// screens/SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import styles from '../src/styles/SettingsScreenStyles'; // Certifique-se que o caminho está correto

function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Aqui você implementaria a lógica para mudar o tema da sua aplicação
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    // Aqui você implementaria a lógica para ativar/desativar notificações
  };

  const handleLogout = () => {
    // Aqui você implementaria a lógica de logout
    alert('Sair');
  };

  const handleAbout = () => {
    // Aqui você implementaria a lógica para mostrar informações sobre o app
    alert('Sobre o Aplicativo');
  };

  return (
    <View style={[styles.container, darkMode && styles.darkModeContainer]}>
      <Text style={[styles.title, darkMode && styles.darkModeText]}>Configurações</Text>

      <View style={styles.settingItem}>
        <Text style={[styles.settingLabel, darkMode && styles.darkModeText]}>Modo Escuro</Text>
        <Switch
          value={darkMode}
          onValueChange={toggleDarkMode}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={[styles.settingLabel, darkMode && styles.darkModeText]}>Notificações</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleAbout}>
        <Text style={styles.buttonText}>Sobre</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SettingsScreen;