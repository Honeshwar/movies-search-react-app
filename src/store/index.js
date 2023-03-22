import { useContext } from "react";
import { ReactReduxContext } from "react-redux";

export default function () {
    return  useContext(ReactReduxContext).store;
}