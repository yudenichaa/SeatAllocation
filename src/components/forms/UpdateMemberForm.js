import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { member } from "../../FieldChecks";
import { object } from "yup";
import { useModalColorPicker } from "../ColorPicker";

const UpdateMemberForm = ({ onSubmit, onCancel, initialValues = { oldMember: "", newMember: "", color: "#FFFFFF" } }) => (
    <div>
        <Formik
            initialValues={initialValues}
            validationSchema={object().shape({ oldMember: member, newMember: member })}
            onSubmit={onSubmit}
        >
            {({ setFieldValue }) => {
                const [colorPicker, setColorPickerOpen] = useModalColorPicker(initialValues.color, (color) => setFieldValue("color", color, false));
                return (
                    <>
                        {colorPicker}
                        <Form>
                            <div className="form-group">
                                <label>Имя участника: </label>
                                <Field autoComplete="off" className="form-control" type="text" name="oldMember" />
                                <ErrorMessage name="oldMember" component="div" />
                            </div>
                            <div className="form-group">
                                <label>Новое имя участника: </label>
                                <Field autoComplete="off" className="form-control" type="text" name="newMember" />
                                <ErrorMessage name="newMember" component="div" />
                            </div>
                            <div className="form-group">
                                <label>Новый цвет: </label>
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
                                Изменить
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

export default UpdateMemberForm;