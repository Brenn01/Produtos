import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 30, // Aumentando o padding para mais espaço
      backgroundColor: '#E0F7FA', // Um tom de azul claro moderno
    },
    bubbleContainer: {
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      top: 40, // Ajustando a posição
      left: 0,
      paddingHorizontal: 20, // Adicionando padding horizontal
      flexDirection: 'row', // Alinhando os textos horizontalmente
      justifyContent: 'flex-start', // Alinhando à esquerda
    },
    bubble: {
      backgroundColor: '#81D4FA', // Azul mais vibrante para o balão
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 20, // Cantos mais arredondados
      elevation: 3, // Sombra sutil
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 2 },
    },
    bubbleText: {
      color: '#FFFFFF', // Texto branco no balão
      fontWeight: 'bold',
      fontSize: 18,
      marginRight: 5, // Espaçamento entre os textos
    },
    title: {
      fontSize: 28, // Aumentando o tamanho da fonte do título
      marginBottom: 30,
      textAlign: 'center',
      color: '#1E88E5', // Azul mais escuro para o título
      fontWeight: 'bold',
    },
    input: {
      height: 45, // Aumentando a altura do input
      borderColor: '#BDBDBD', // Borda mais clara
      borderWidth: 1,
      marginBottom: 25,
      paddingHorizontal: 15,
      borderRadius: 8, // Cantos arredondados para o input
      backgroundColor: '#FFFFFF', // Fundo branco para o input
    },
    loginButton: {
      backgroundColor: '#1E88E5', // Azul vibrante para o botão
      paddingVertical: 15,
      borderRadius: 10, // Cantos mais arredondados
      alignItems: 'center',
      marginBottom: 15,
      elevation: 2, // Sombra sutil no botão
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
    },
    loginButtonText: {
      color: '#FFFFFF', // Texto branco no botão
      fontSize: 18,
      fontWeight: 'bold',
    },
    link: {
      color: '#1E88E5', // Azul para os links
      textAlign: 'center',
      marginTop: 15,
      fontSize: 16,
    },
    error: {
      color: '#E53935', // Vermelho mais chamativo para o erro
      textAlign: 'center',
      marginTop: 15,
      fontSize: 16,
    },
  });

export default styles;