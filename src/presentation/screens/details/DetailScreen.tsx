import { useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'Details'>{};


export const DetailScreen = ({ route }: Props ) => {

//const {top } = useSafeAreaInsets();
const { movieId } = route.params;
/* alternativa para traer el movieId:  */
  //const { movieId } = useRoute().params;

  console.log( {movieId });
  const { isLoading, movie } = useMovie( movieId )

if ( isLoading ){
  return <Text>Loading ..</Text>
}

  return (
    <ScrollView
 /*    style={{
      marginTop:top + 40,
      paddingBottom: 30
    }} */>

      {/* header */}
      <MovieHeader  
      originalTitle={movie!.title}
      title={movie!.title}
      poster={movie!.poster}
      description={ movie!.description }      
      /* movie={ movie! }   *//>

      {/* Details: */}

    <MovieDetails movie={ movie! } />

    </ScrollView>
    
  )
}