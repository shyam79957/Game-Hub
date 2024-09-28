import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react';
import {Game} from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import Critic from './Critic';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';

interface Props {
    game : Game
}

const GameCard = ({game} : Props) => {

  return (

    <Card >
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
            <HStack justifyContent={'space-between'} marginBottom={3}>
              <PlatformIconList key={game.id} platforms={game.parent_platforms.map(p => p.platform)} />
              <Critic score={game.metacritic}/>
            </HStack>
            <Heading fontSize='2xl'> 
              {game.name}
              <Emoji rating={game.rating_top }></Emoji>
            </Heading>
        </CardBody>
    </Card> 
  )
}

export default GameCard
