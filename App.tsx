import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { withAuthenticator } from 'aws-amplify-react-native';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import { getTodo } from './src/graphql/queries';
import { createTodo } from './src/graphql/mutations';
import config from './src/aws-exports';
Amplify.configure(config)

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  
  //Rodas esse snippet apenas quando o App for montado a primeira vez
  useEffect(async() => {
    const fetchUser = async () => {
      // Pegar a autenticação do usuário
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true })
      console.log(userInfo);
      if (userInfo) {

         //Pegar o usuário pelo id
        const userData = await API.graphql(graphqlOperation(getTodo, { id: userInfo.attributes.sub }))

        if (userData.data.getUser) {
          return;
        }

        const newUser = {
          id: userInfo.attributes.sub,
          name: ,
          imageUri:  ,
          status: 'Olá, estou usando o WhatsApp' ,
        }
      }
      
      

      //Se não tiver um usuario no BD fazer a inscrição

    }
    fetchUser();
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App)