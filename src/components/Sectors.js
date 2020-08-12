import React, { useState } from "react";
import Sector from "../containers/Sector";
import ChangeSingleMemberForm from "./forms/ChangeSingleMemberForm";
import Modal from "react-modal";
import { modalWindowStyles } from "../config";

const Sectors = ({ sectors, setMember }) => {
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
        <>
            {changeSingleMemberForm}
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
        </>
    );
}

export default Sectors;