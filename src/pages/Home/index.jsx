import React from "react";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

export function Home() {
    return (
        <React.Fragment>
            <Header />
            <SideBar />
        </React.Fragment>
    );
}