import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { member } from "../../FieldChecks";
import { object } from "yup";
import { useModalColorPicker } from "../ColorPicker";
import { emptyPlace } from "../../config";

const ChangeSingleMemberForm = ({ onSubmit, onCancel, initialValues = { member: "", color: "#FFFFFF" } }) => (
    <div>
        <Formik
            initialValues={initialValues}
            validationSchema={object().shape({ member })}
            onSubmit={onSubmit}
        >
            {({ setFieldValue }) => {
                const [colorPicker, setColorPickerOpen] = useModalColorPicker(initialValues.color, (color) => setFieldValue("color", color, false));
                return (
                    <>
                        {colorPicker}
                        <Form>
                            <div className="form-group">
                                <label>Участник: </label>
                                <Field autoComplete="off" className="form-control" type="text" name="member" />
                                <ErrorMessage name="member" component="div" />
                            </div>
                            <div className="form-group">
                                <label>Цвет: </label>
                                <Field
                                    className="form-control"
                                    type="color"
                                    name="color"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setColorPickerOpen(true)
                                    }}
                                />
                                <ErrorMessage name="color" component="div" />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                {initialValues.member == emptyPlace.member ? "Добавить" : "Изменить"}
                            </button>
                            <button type="btn" className="btn btn-primary ml-2" onClick={onCancel}>
                                Отмена
                        </button>
                        </Form>
                    </>
                );
            }}
        </Formik>
    </div>
);

export default ChangeSingleMemberForm;