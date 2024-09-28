
import useGenres, { Genre } from '../hooks/useGenres'
import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
import GenreSkeleton from './GenreSkeleton';

interface Props{
  onSelectedGenre : (genre : Genre) => void;
  selectedGenre : Genre | null;
}

const GenreList = ({selectedGenre,onSelectedGenre} : Props) => {
    const { data :genres, isLoading, error } = useGenres();
    const skeletons =[1,2,3,4,5,6,7,8,9,10];

    if (error) return null;
   

  return (
    <> 
    <Heading fontSize='2xl' marginBottom={3} >Genres</Heading>
    <List>
      {
        isLoading && skeletons.map((skeleton) =>(
          <ListItem key={skeleton} paddingY='5px' >
            <GenreSkeleton />
          </ListItem>
        ))
      }


        {genres.map(genre => 
            <ListItem key={genre.id} paddingY='5px'> 
              <HStack>
                <Image 
                  boxSize='32px' 
                  borderRadius={8} 
                  objectFit='cover'
                  src ={getCroppedImageUrl(genre.image_background)} 
                />
                <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}  onClick={() => onSelectedGenre(genre)}  fontSize='lg' variant='link'>{genre.name} </Button> 
              </HStack>
            </ListItem>
        )} 
    </List>
    </>
  )
}

export default GenreList
