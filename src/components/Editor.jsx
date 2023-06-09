import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from "react-codemirror2";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import "../App.css";

const Container = styled(Box)`
    ${'' /* display: flex;
    flex-direction : column; */}
    padding : 0 8px 8px;
    flex: 1 1 200px;

    @media screen and (max-width: 800px) {
        flex: 1 1 150px;
}
`;

const Heading = styled(Box)`
    background : #1d1e22;
    display : flex;
    padding : 9px 12px;
`;

const Header = styled(Box)`
    display : flex;
    background : #060606;
    color: #AAAEBC;
    justify-content: space-between;
    font-weight: 500;
`;

const Editor = (props) => {

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        props.onChange(value);
    }

    return (
        <>
            <Container style={ open ? null : {flexGrow : 0 }}>
                <Header>
                    <Heading>
                        <Box
                            components="span"
                            style={{
                                background: props.color,
                                color: "#000" ,
                                height: 20,
                                width: 20,
                                display: "flex",
                                placeContent: "center",
                                borderRadius: 5,
                                marginRight: 5,
                                paddingBottom: 2
                            }}
                        >{props.icon}</Box>
                        {props.heading}
                    </Heading>

                    <CloseFullscreenIcon 
                        fontSize = "small"
                        style = {{alignSelf: 'center', cursor: "pointer", padding:"0px 10px"}}
                        onClick={() => setOpen(prevState => !prevState)}
                    />
                </Header>

                <ControlledEditor
                    className="controlled-editor"
                    onBeforeChange={handleChange}
                    value = {props.value}
                    options={{
                        theme: 'material',
                        lineNumbers: true,
                        lineWrapping : true,
                    }}
                />
            </Container>
        </>
    );
}

export default Editor;