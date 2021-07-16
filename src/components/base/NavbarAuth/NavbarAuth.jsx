import React from 'react'
import { ButtonNavbarAuth } from '../ButtonNavbarAuth/ButtonNavbarAuth'
import { NavbarTrolly } from '../NavbarTrolly/NavbarTrolly'

export const NavbarAuth = () => {
    return (
        <div className="d-flex align-items-center">
            <NavbarTrolly href='/checkout'/>
            <ButtonNavbarAuth text="Login" css="login" href='/login'/>
            <ButtonNavbarAuth text="Sign Up" css="signup" href='/signup'/>
        </div>
    )
}
