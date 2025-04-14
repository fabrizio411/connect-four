import { A } from "@solidjs/router";
import { Component } from "solid-js";
import SmallButton from "./SmallButton";
import Restart from "./Restart";
import Logo from "../assets/logo.svg";

const Header: Component = () => {
  return (
    <header class="flex justify-between my-8 mb-14 w-full max-w-[632px] items-center">
      <A href="/">
        <SmallButton>MENU</SmallButton>
      </A>
      <img src={Logo} alt="Logo" class="size-14" />
      <Restart restart={() => {}} />
    </header>
  );
};

export default Header;
