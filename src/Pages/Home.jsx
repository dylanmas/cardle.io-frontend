import React, {useState} from 'react'
import Background from "../components/Background"
import TitleCard from "../components/TitleCard"
import HomepageLogo from "../images/HomepageLogo.png"
import InputComponent from '../components/InputComponent'
import Button from '../components/Button'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Background>
      <TitleCard title={"Cardle.io"} />
      <img
        src={HomepageLogo}
        style={{ objectFit: "contain", width: "225px", marginTop: "20px" }}
      />
      <form>
        <InputComponent password={false} placeholder={"Username"} />
        <InputComponent password={true} placeholder={"Password"} />
        <Button>Login</Button>
      </form>
    </Background>
  );
}

export default Home