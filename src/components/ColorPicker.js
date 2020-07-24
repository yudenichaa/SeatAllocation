import React, { useState } from "react";
import { CirclePicker } from "react-color";
import Modal from "react-modal";
import { modalWindowStyles } from "../config";

const ColorPicker = ({ initialColor = "#ffffff", handleSelectClick, handleCloseClick }) => {
    const [color, setColor] = useState(initialColor);

    return (
        <div className="row">
            <div className="col">
                <CirclePicker
                    colors={[
                        '#E6B0AA', '#F5B7B1', '#D7BDE2', '#D2B4DE', '#A9CCE3', '#AED6F1', 
                        '#A3E4D7', '#A2D9CE', '#A9DFBF', '#ABEBC6', '#F9E79F', '#FAD7A0',
                        '#F5CBA7', '#EDBB99', '#F7F9F9', '#E5E7E9', '#CCD1D1', '#D4E4BC']}
                    color={color}
                    onChange={(color) => setColor(color.hex)}
                />
                <div className="row justify-content-center mt-3">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleSelectClick(color)}>
                        Выбор
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary ml-2"
                        onClick={handleCloseClick}>
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    );
}

export const useModalColorPicker = (initialColor, onSelectClick) => {
    const [colorPickerOpen, setColorPickerOpen] = useState(false);
    const colorPicker = (
        <Modal
            isOpen={colorPickerOpen}
            onRequestClose={() => setColorPickerOpen(false)}
            style={modalWindowStyles}
            contentLabel="Выбор цвета">
            <ColorPicker
                initialColor={initialColor}
                handleSelectClick={(color) => {
                    onSelectClick(color);
                    setColorPickerOpen(false);
                }}
                handleCloseClick={() => setColorPickerOpen(false)} />
        </Modal>);
    return [colorPicker, setColorPickerOpen];
}

export default ColorPicker;