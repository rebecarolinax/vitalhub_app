import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "./src/screens/Navigation/Navigation";
import { Login } from "./src/screens/Login/Login";
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium } from '@expo-google-fonts/quicksand';
import { PasswordRecover } from "./src/screens/PasswordRecover/PasswordRecover";
import { PasswordReset } from "./src/screens/PasswordReset/PasswordReset";
import { CreateAccount } from "./src/screens/CreateAccount/CreateAccount";

const Stack = createNativeStackNavigator();

export default function App() {

  // hook para uso das fontes 
  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    //  container - envolve toda estrutura de navegação
    // navigator - componente para a navegação
    // screen - tela
    // name: nome da tela
    // component: componente que será chamado
    // options(title): título da tela

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{ title: 'Navegação' }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />

        <Stack.Screen
          name="PasswordRecover"
          component={PasswordRecover}
          options={{ title: 'Recuperar Senha' }}
        />

        <Stack.Screen
          name="PasswordReset"
          component={PasswordReset}
          options={{ title: 'Redefinir Senha' }}
        />

        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ title: 'Criar conta' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

