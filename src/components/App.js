import React, { useState } from "react";
import Menu from "../containers/Menu";
import Sector from "../containers/Sector";
import ChangeSingleMemberForm from "./forms/ChangeSingleMemberForm";
import Modal from "react-modal";
import { modalWindowStyles } from "../config";
import { wallLineStyle, doorLineStyle } from "../config";

const App = ({ sectors, setMember }) => {
    const [changeSingleMemberForm, setChangeSingleMemberForm] = useState(null);
    const onSectorCellClick = (sector, row, place, member, color) => {
        setChangeSingleMemberForm(
            <Modal
                isOpen={true}
                onRequestClose={() => setChangeSingleMemberForm(null)}
                style={modalWindowStyles}
                contentLabel="Изменить участника">
                <ChangeSingleMemberForm
                    initialValues={{ member, color }}
                    onSubmit={(values) => {
                        setMember({ sector, row, place, ...values });
                        setChangeSingleMemberForm(null);
                    }}
                    onCancel={() => setChangeSingleMemberForm(null)}
                />
            </Modal>);
    };

    return (
        <div className="container-fluid">
            {changeSingleMemberForm}
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
                        <div style={{ width: "25%", marginLeft: "1%", marginRight: "0.5%" }}>
                            <h4 className="lead text-center">Сектор 1</h4>
                            <Sector onCellClick={onSectorCellClick.bind(null, 0)} sectorData={sectors[0]} />
                        </div>
                        <div style={{ width: "45%", marginLeft: "1%", marginRight: "1%" }}>
                            <h4 className="lead text-center">Сектор 2</h4>
                            <Sector onCellClick={onSectorCellClick.bind(null, 1)} sectorData={sectors[1]} />
                        </div>
                        <div style={{ width: "25%", marginLeft: "0.5%", marginRight: "1%" }}>
                            <h4 className="lead text-center">Сектор 3</h4>
                            <Sector onCellClick={onSectorCellClick.bind(null, 2)} sectorData={sectors[2]} />
                        </div>
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