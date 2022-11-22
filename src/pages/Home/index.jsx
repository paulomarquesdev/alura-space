import React from "react";
import './style.scss';
import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import { Gallery } from "../../components/Gallery";
import Error from "../../components/Error";

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
            <Gallery />

            <Error />
        </React.Fragment>
    );
}