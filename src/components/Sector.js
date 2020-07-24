import React from "react";
import SectorCell from "./SectorCell";

const Sector = ({ sectorData, onCellClick, fontSize }) => {
    const rows = sectorData.length, cols = sectorData[0].length;
    return (
        <table className="table-places" style={{ fontSize: fontSize + "em" }}>
            <thead>
                <tr>
                    {[<th key={0}>Место</th>, ...Array.from({ length: cols }, (_, k) => <th key={k + 1}>{k + 1}</th>)]}
                </tr>
            </thead>
            <tbody>
                {Array.from({ length: rows }, (_, row) => {
                    return <tr key={row}>{[<th key={0}>Ряд {row + 1}</th>, ...Array.from({ length: cols }, (_, place) => {
                        return <SectorCell
                            onClick={() => onCellClick(row, place, sectorData[row][place].member, sectorData[row][place].color)}
                            key={place + 1}
                            placeData={sectorData[row][place]} />
                    })]}</tr>;
                })}
            </tbody>
        </table>
    );
};

export default Sector;