import React from "react";
import './style.scss';
import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";

export function Home() {
    return (
        <React.Fragment>
            <Header />
            <main>
                <section>
                    <SideBar />
                    <Banner />
                </section>
            </main>
        </React.Fragment>
    );
}