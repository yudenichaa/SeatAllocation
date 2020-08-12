import React from "react";
import Menu from "../containers/Menu";
import Sectors from "../containers/Sectors";
import { wallLineStyle, doorLineStyle } from "../config";

const App = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-2">
                <div className="col">
                    <Menu />
                </div>
            </div>
            <div style={{
                borderLeft: "0.1em solid black",
                borderRight: "0.1em solid black"
            }} className="mt-3 mb-3">
                <svg height="2em" width="100%">
                    <line x1="0" y1="0" x2="20%" y2="0" style={wallLineStyle} />
                    <line x1="20%" y1="0" x2="25%" y2="100%" style={doorLineStyle} />
                    <line x1="28%" y1="0" x2="70%" y2="0" style={wallLineStyle} />
                    <line x1="70%" y1="0" x2="75%" y2="100%" style={doorLineStyle} />
                    <line x1="78%" y1="0" x2="100%" y2="0" style={wallLineStyle} />
                </svg>
                <div className="pl-3 pr-3">
                    <div className="row mt-2 justify-content-between">
                        <div className="col-auto">
                            <div className="screen">Экран</div>
                        </div>
                        <div className="col-auto">
                            <div className="screen">Экран</div>
                        </div>
                        <div className="col-auto">
                            <div className="screen">Экран</div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <Sectors />
                    </div>
                    <div className="row mt-3 mb-1 justify-content-center">
                        <div className="col-auto">
                            <div className="screen">Экран</div>
                        </div>
                    </div>
                </div>
                <svg height="2em" width="100%">
                    <line x1="0" y1="100%" x2="20%" y2="100%" style={wallLineStyle} />
                    <line x1="20%" y1="100%" x2="25%" y2="0" style={doorLineStyle} />
                    <line x1="28%" y1="100%" x2="70%" y2="100%" style={wallLineStyle} />
                    <line x1="70%" y1="100%" x2="75%" y2="0" style={doorLineStyle} />
                    <line x1="78%" y1="100%" x2="100%" y2="100%" style={wallLineStyle} />
                </svg>
            </div>
        </div>
    );
};

export default App;