import React, {useState} from 'react'
import Background from "../components/Background"
import TitleCard from "../components/TitleCard"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Background>
      <TitleCard title={"Cardle.io"}/>
    </Background>
  )
}

export default Home