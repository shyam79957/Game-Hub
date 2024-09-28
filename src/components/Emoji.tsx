import meh  from '../assets/Emojis/meh.webp';
import bullsEye from '../assets/Emojis/bulls-eye.webp' 
import thumbsup from '../assets/Emojis/thumbs-up.webp'
import { ImageProps,Image } from '@chakra-ui/react';


interface Props{
    rating :number;
}

const Emoji = ({rating}: Props) => {
    if(rating < 3) return null;

    const emojiMap:{  [key: number]: ImageProps } = {
        3: {src: meh ,alt: 'meh', boxSize: '25px'},
        4: {src: thumbsup ,alt: 'thumbsup', boxSize: '25px' },
        5: {src: bullsEye ,alt: 'bullsEye', boxSize: '35px'}
    } 

  return (
    <Image {...emojiMap[rating]} marginTop={1}  />
  )
}

export default Emoji
