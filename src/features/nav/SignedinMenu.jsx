import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedinMenu({signOut}) {
    return(
        <Menu.Item position="right">
            <Image src='/assets/user.png' avatar spaced='right' />
            <Dropdown pointing='top left' text="bob">
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/createEvent' text='Create event' icon='plus' />
                    <Dropdown.Item text='My profile' icon='user' />
                    <Dropdown.Item onClick={signOut} text='Sign out' icon='power' />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
}