import React from 'react'
import { Text, View } from 'react-native'
import { FullMovie } from '../../../core/entities/movie.entity'
import { Formatter } from '../../../config/adapters/helpers/formatter';

interface Props {
    movie: FullMovie;
}

export const MovieDetails = ({movie }: Props ) => {



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

        </View>


        </>
  )
}
