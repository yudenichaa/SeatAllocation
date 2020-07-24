import React from "react";

const SectorCell = ({ placeData, onClick }) => (
    <td
        style={{ backgroundColor: placeData.color }}
        onClick={onClick}>
        <div className="table-places-cell">
            {placeData.member}
        </div>
    </td>
);

export default SectorCell;