import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { member } from "../../FieldChecks";
import { object } from "yup";

const DeleteMemberForm = ({ onSubmit, onCancel, initialValues = { member: "" } }) => (
    <div>
        <Formik
            initialValues={initialValues}
            validationSchema={object().shape({ member })}
            onSubmit={onSubmit}
        >
            {() => (
                <Form>
                    <div className="form-group">
                        <label>Участник: </label>
                        <Field autoComplete="off" className="form-control" type="text" name="member" />
                        <ErrorMessage name="member" component="div" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Удалить
                    </button>
                    <button type="btn" className="btn btn-primary ml-2" onClick={onCancel}>
                        Отмена
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default DeleteMemberForm;