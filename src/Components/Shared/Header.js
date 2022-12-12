import React from "react";
import Logo from "../../Assets/logo.svg";
import { Link } from "react-router-dom"
export default function Header(props) {
    const isAccent = props.isAccent;
    const isNotAccent = props.isNotAccent;
    return (
        <div className="Header flex justify-between">
            <div>
                <img src={Logo} alt="logo" width={300} height={100} />
            </div>
            <div className=" width-400 flex justify-around">
                <div className="mt-2">
                    <Link to="/about">
                        <button class="button-52" role="button" style={
                            JSON.parse(localStorage.getItem("settheme"))
                                ? props.isAccent
                                : props.isNotAccent
                        }>About</button></Link>
                </div>
                <div className="mt-2">
                    <Link to='/settings'>
                        <button class="button-52" role="button"
                            style={
                                JSON.parse(localStorage.getItem("settheme"))
                                    ? props.isAccent
                                    : props.isNotAccent
                            }>Settings</button></Link>
                </div>
            </div>
        </div>
    )
}
