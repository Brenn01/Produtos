import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../src/styles/LoginScreenStyles'; // Importe o arquivo de estilos

// Constantes para strings
const LOGIN_BUTTON_TEXT = 'Login';
const REGISTER_LINK_TEXT = 'Cadastre-se';
const FORGOT_PASSWORD_LINK_TEXT = 'Esqueci minha senha';
const USERNAME_PLACEHOLDER = 'Usuário';
const PASSWORD_PLACEHOLDER = 'Senha';
const WELCOME_TITLE = 'Bem-vindo!';
const INCORRECT_CREDENTIALS_ERROR = 'Usuário ou senha incorretos.';
const LOGO_TEXT = 'Logo';
const COMPANY_TEXT = 'Empresa';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const navigateToAdminHome = () => {
    navigation.navigate('AdminHome');
  };

  const navigateToRegister = () => {
    navigation.navigate('Cadastro');
  };

  const navigateToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleLogin = () => {
    // Lógica de autenticação
    if (username === 'aluno' && password === 'Senai1234') {
      navigateToHome();
    } else if (username === 'root' && password === 'root') {
      navigateToAdminHome();
    } else {
      setErrorMessage(INCORRECT_CREDENTIALS_ERROR);
      setTimeout(() => setErrorMessage(''), 2000);
    }
  };

  return (
    <View style={styles.container}>
      {/* Balão estilizado com logo e nome da empresa */}
      <View style={styles.bubbleContainer}>
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>{LOGO_TEXT}</Text>
          <Text style={styles.bubbleText}>{COMPANY_TEXT}</Text>
        </View>
      </View>

      {/* Título da tela de login */}
      <Text style={styles.title}>{WELCOME_TITLE}</Text>

      <TextInput
        style={styles.input}
        placeholder={USERNAME_PLACEHOLDER}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder={PASSWORD_PLACEHOLDER}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>{LOGIN_BUTTON_TEXT}</Text>
      </TouchableOpacity>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <TouchableOpacity onPress={navigateToRegister}>
        <Text style={styles.link}>{REGISTER_LINK_TEXT}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToForgotPassword}>
        <Text style={styles.link}>{FORGOT_PASSWORD_LINK_TEXT}</Text>
      </TouchableOpacity>
    </View>
  );
}