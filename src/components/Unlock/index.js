// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  ImageContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const lockImg = 'https://assets.ccbp.in/frontend/hooks/lock-img.png '
const unlockImg = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState('')
  const imageUrl = isUnlocked ? unlockImg : lockImg
  const altText = isUnlocked ? 'Unlock' : 'Lock'
  const text = isUnlocked ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttonText = isUnlocked ? 'Lock' : 'Unlock'

  const onClickButton = () => setIsUnlocked(prevState => !prevState)
  return (
    <MainContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={altText} />
        <Text>{text}</Text>
      </ImageContainer>
      <Button onClick={onClickButton}>{buttonText}</Button>
    </MainContainer>
  )
}

export default Unlock
