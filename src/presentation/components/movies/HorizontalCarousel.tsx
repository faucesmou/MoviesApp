import React, { useEffect, useRef } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entity';
import { FlatList } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';

interface Props {
    movies: Movie[];
    title?: string;
    loadNextPage?: () => void;
}


export const HorizontalCarousel = ({movies, title, loadNextPage }: Props ) => {

const isLoading = useRef(false);

/* acà usa useEffect pero si queremos agregar un loading algo que indique que esta cargando, deberìamos usar use state y no useRef porque useRef no dispara re renders cuando cambia su valor */
useEffect(() => {
    setTimeout(() => {
        isLoading.current = false;
    }, 200);
}, [ movies ])



const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

if ( isLoading.current) return;

const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

const isEndReach = ( contentOffset.x + layoutMeasurement.width + 600 ) >= contentSize.width;

if ( !isEndReach ) return;

isLoading.current = true;

// Cargar las siguientes pelìculas
loadNextPage && loadNextPage();

/* console.log( { contentOffset, layoutMeasurement, contentSize }); */


}

    return (
        <View
        style={{ height: title ? 260 : 220 }}        
        >
            {
                title && (
                    <Text
                    style= {{
                        fontSize:  30,
                        fontWeight: '300',
                        marginLeft: 10,
                        marginBottom: 10,
                        
                    }}>
                            { title }
                    </Text>
                )
            }


            <FlatList
            data={ movies }
            renderItem={ ({ item })=> (
                <MoviePoster movie={ item } width={140} height={ 200} />
            )}
            keyExtractor={ (item, index) => `${item.id}-${ index }` }
            horizontal
            showsVerticalScrollIndicator={false}
            onScroll={ onScroll }

            
            />

        </View>
    )
}
