import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://www.google.com/search?q=bilgisayar+resmi&sxsrf=ALeKk01wzfgVNQ683wdXFqYn9Ode5a5Wgw:1623265759483&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjS7OCXoIvxAhXhkYsKHeZdD6UQ_AUoAXoECAEQAw#imgrc=m7V558ZaS-9u5M"
        />
        <Dropdown pointing="top left" text="Esra">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
