import React from "react";
import { Box, styled } from "@mui/material";
import Editor from "./Editor";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`   
    background-color : #060606;
    justify-content:space-around;
    flex-warp: wrap;
    transition: all 1 linear;

    @media screen and (min-width: 600px) {
        display: flex;
}
`;

const Codes = () => {
    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

    return (
        <Container>
            <Editor heading="HTML" icon="/" color="#FF3C41" value={html} onChange={setHtml} />
            <Editor heading="CSS" icon="*" color="#0EBEFF" value={css} onChange={setCss} />
            <Editor heading="JS" icon="( )" color="#FCD000" value={js} onChange={setJs} />
        </Container>
    );
}

export default Codes;