import React, { useState } from "react";
import AddMemberForm from "./forms/AddMemberForm";
import UpdateMemberForm from "./forms/UpdateMemberForm";
import ClearPlacesForm from "./forms/FreePlacesForm";
import FillPlacesForm from "./forms/FillPlacesForm";
import DeleteMemberForm from "./forms/DeleteMemberForm";
import SearchMemberForm from "./forms/SearchMemberForm";
import Modal from "react-modal";
import { modalWindowStyles } from "../config";
import { saveBlobAsFile } from "../utils";

Modal.setAppElement("#app");

const Menu = ({
    sectors, fontSize,
    setMembers, updateMember,
    freePlaces, deleteMember,
    fillPlaces, clearAll,
    loadSectorsData, setFontSize
}) => {
    const [addMemberFormOpen, setAddMemberFormOpen] = useState(false);
    const [updateMemberFormOpen, setUpdateMemberFormOpen] = useState(false);
    const [deleteMemberFormOpen, setDeleteMemberFormOpen] = useState(false);
    const [fillPlacesFormOpen, setFillPlacesFormOpen] = useState(false);
    const [freePlacesFormOpen, setFreePlacesFormOpen] = useState(false);
    const [searchResultModal, setSearchResultModal] = useState(null);

    const addMemberForm = (
        <Modal
            isOpen={addMemberFormOpen}
            onRequestClose={() => setAddMemberFormOpen(false)}
            style={modalWindowStyles}
            contentLabel="Добавить участника">
            <AddMemberForm
                onSubmit={({ member, color, sector, rowFrom, rowTo, placeFrom, placeTo }) => {
                    setAddMemberFormOpen(false);
                    setMembers({
                        member, color,
                        sector: sector - 1,
                        rowFrom: rowFrom - 1,
                        rowTo: rowTo - 1,
                        placeFrom: placeFrom - 1,
                        placeTo: placeTo - 1
                    });
                }}
                onCancel={() => setAddMemberFormOpen(false)}
            />
        </Modal>);

    const updateMemberForm = (
        <Modal
            isOpen={updateMemberFormOpen}
            onRequestClose={() => setUpdateMemberFormOpen(false)}
            style={modalWindowStyles}
            contentLabel="Изменить участника">
            <UpdateMemberForm
                onSubmit={(values) => {
                    setUpdateMemberFormOpen(false);
                    updateMember(values);
                }}
                onCancel={() => setUpdateMemberFormOpen(false)} />
        </Modal>);

    const deleteMemberForm = (
        <Modal
            isOpen={deleteMemberFormOpen}
            onRequestClose={() => setDeleteMemberFormOpen(false)}
            style={modalWindowStyles}
            contentLabel="Удалить участника">
            <DeleteMemberForm
                onSubmit={(values) => {
                    setDeleteMemberFormOpen(false);
                    deleteMember(values);
                }}
                onCancel={() => setDeleteMemberFormOpen(false)}
            />
        </Modal>);

    const freePlacesForm = (
        <Modal
            isOpen={freePlacesFormOpen}
            onRequestClose={() => setFreePlacesFormOpen(false)}
            style={modalWindowStyles}
            contentLabel="Освободить места">
            <ClearPlacesForm
                onSubmit={({ sector, rowFrom, rowTo, placeFrom, placeTo }) => {
                    setFreePlacesFormOpen(false);
                    freePlaces({
                        sector: sector - 1,
                        rowFrom: rowFrom - 1,
                        rowTo: rowTo - 1,
                        placeFrom: placeFrom - 1,
                        placeTo: placeTo - 1
                    });
                }}
                onCancel={() => setFreePlacesFormOpen(false)} />
        </Modal>);

    const fillPlacesForm = (
        <Modal
            isOpen={fillPlacesFormOpen}
            onRequestClose={() => setFillPlacesFormOpen(false)}
            style={modalWindowStyles}
            contentLabel="Заполнить пустые места">
            <FillPlacesForm
                onSubmit={(values) => {
                    setFillPlacesFormOpen(false);
                    fillPlaces(values);
                }}
                onCancel={() => setFillPlacesFormOpen(false)}
            />
        </Modal>);

    const onSaveButtonClick = () => {
        const data = { sectors };
        const blob = new Blob([JSON.stringify(data)], { type: "application/json;charset=utf-8" })
        saveBlobAsFile(blob, "Места.json");
    }

    const onLoadButtonClick = (event) => {
        const file = event.target.files[0];
        let fileReader = new FileReader();
        fileReader.onload = () => {
            const data = JSON.parse(fileReader.result);
            loadSectorsData({ sectors: data.sectors });
        }
        fileReader.readAsText(file, "UTF-8");
    }

    const onSearchClick = (values) => {
        let searchResult = "Указанный участник не найден";
        sectors.some((sector, sectorNumber) =>
            sector.some((row, rowNumber) =>
                row.some((place, placeNumber) => {
                    if (place.member.toLowerCase().includes(values.member.toLowerCase())) {
                        searchResult = `${place.member}: Сектор ${sectorNumber + 1}, ряд ${rowNumber + 1}, место ${placeNumber + 1}.`
                        return true;
                    }
                })
            )
        );
        setSearchResultModal((
            <Modal
                isOpen={true}
                onRequestClose={() => setSearchResultModal(null)}
                style={modalWindowStyles}
                contentLabel="Результаты поиска участника">
                <h4>Результаты поиска</h4>
                <p>{searchResult}</p>
            </Modal>));
    }

    return (
        <>
            {addMemberForm}
            {updateMemberForm}
            {deleteMemberForm}
            {freePlacesForm}
            {fillPlacesForm}
            {searchResultModal}
            <div className="row justify-content-center">
                <div className="col-auto">
                    <button
                        type="button"
                        className="btn btn-primary mr-2"
                        onClick={() => setAddMemberFormOpen(true)}>
                        Добавить участников
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary mr-2"
                        onClick={() => setUpdateMemberFormOpen(true)}>
                        Изменить участника
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary mr-2"
                        onClick={() => setDeleteMemberFormOpen(true)}>
                        Удалить участника
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary mr-2"
                        onClick={() => setFreePlacesFormOpen(true)}>
                        Освободить места
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary mr-2"
                        onClick={() => setFillPlacesFormOpen(true)}>
                        Заполнить пустые
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary mr-2"
                        onClick={() => clearAll()}>
                        Очистить
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary mr-2"
                        onClick={onSaveButtonClick}>
                        Сохранить
                    </button>
                    <label className="btn btn-primary m-0">
                        Загрузить <input type="file" accept="application/json" onChange={onLoadButtonClick} hidden />
                    </label>
                </div>
            </div>
            <div className="row mt-3 justify-content-center align-items-center">
                <div className="col-auto p-0 mr-3">
                    <span className="">Размер шрифта: </span>
                </div>
                <div className="col-2 p-0 d-flex align-items-center">
                    <input
                        type="range"
                        className="custom-range"
                        min="0.5"
                        max="1"
                        step="0.01"
                        value={fontSize}
                        onChange={e => setFontSize({ fontSize: +e.target.value })} />
                </div>
                <div className="col-auto">
                    <SearchMemberForm onSubmit={onSearchClick} />
                </div>
            </div>
        </>
    )
};

export default Menu;