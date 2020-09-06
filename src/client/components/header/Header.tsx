import * as React from "react";
import {FC} from "react";
import './header.styles.less';
import {Logo} from "../logo";
import {Navigation} from "../navigation";
import {AuthController} from "../../features/authController";

export const Header: FC = () => {
  return (
      <div className='header'>
        <div className='header__content'>
            <Logo/>
            <Navigation/>
            <AuthController/>
        </div>
      </div>
  )
};