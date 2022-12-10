import React,{useContext} from "react";
import mockData from "../Assets/data.json";
import { Link } from "react-router-dom";
import {Context} from "../Context";
import { Button } from "primereact/button";
const HintBox = () => {
    const { val } = useContext(Context);
    const [value, setValue] = val;
    return (
        <div>
             <div className="cityList border width-400 m-auto hidden" style={{ color: '#282120' }}>
                {
                    mockData
                        .filter((data) => {
                            if (value === "")
                                return data;
                            else if (data.name.toLowerCase().includes(value.toLowerCase()))
                                return data;
                        })
                        .map((data) => (
                            <div className="items">
                                <Link to="/weather" id="link">
                                    <Button
                                        className=" btn p-button-raised p-button-primary p-button-text "
                                        onClick={() => { setValue(data.id) }}
                                    >
                                        <li className="list m-0" id="cityName">
                                            {data.name}
                                        </li>
                                        <li className="list m-0 hidden" id="cityId">
                                            {data.id}
                                        </li>
                                    </Button>
                                </Link>
                            </div>
                        ))}
            </div>
        </div>
    )
}
export default HintBox;