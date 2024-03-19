import React from 'react'
import { Text, View } from 'react-native'
import { FullMovie } from '../../../core/entities/movie.entity'
import { Formatter } from '../../../config/adapters/helpers/formatter';
import { Cast } from '../../../core/entities/cast.entity';
import { FlatList } from 'react-native-gesture-handler';
import { CastActor } from '../cast/CastActor';

interface Props {
    movie: FullMovie;
    cast: Cast[];
}

export const MovieDetails = ({movie, cast }: Props ) => {



    return (
        <>
        <View style={{ marginHorizontal: 20 } }>
        <View style={{ flexDirection: 'row'}}>
            <Text style={{ color: 'red'} }>
                { movie.rating }
            </Text>
            <Text style={{ marginLeft: 5, color: 'blue'} }>
                -{ movie.genres.join(', ')}
            </Text>
        </View>
        
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
        Historia
        </Text>
        <Text style={{ fontSize: 11 }}>
        { movie.description }
        </Text>
        
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
        Presupuesto
        </Text>

        <Text style={{ fontSize: 18 }}>
        { Formatter.currency( movie.budget)  }
        </Text>

        {/* Casting */}
        <View style={{ marginTop: 10, marginBottom: 50}}>
        <Text 
        style={{ 
            fontSize: 23,
            marginVertical:10,
            fontWeight: 'bold',
            marginHorizontal: 20,
        }}>Actores
        </Text>

        <FlatList
        data={ cast }
        keyExtractor={ (item) => item.id.toString() }
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={ ({ item }) => <CastActor actor={ item }/>}
        />

        
        </View>
        </View>


        </>
  )
}
