import React , {useState}from "react";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticed, setisAuthenticed] = useState(false)

  function handleSignOut(params){
    setisAuthenticed(false)
  }
  function handleSignIn(params){
    setisAuthenticed(true)
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
         <CartSummary/>
         {isAuthenticed?<SignedIn signOut={handleSignOut} bisey="1"/>: <SignedOut signIn={handleSignIn}/>}
           
            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
