import React from 'react';
import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from 'formik';
import { sector, rowFrom, rowTo, placeFrom, placeTo } from "../../FieldChecks";
import { object } from "yup";
import { sectorSizes } from "../../config";

const validate = (values) => {
    const schema = object().shape({ sector, rowFrom, rowTo, placeFrom, placeTo });
    try { schema.validateSync(values, { abortEarly: false, context: { sectorSizes } }); }
    catch (errors) { return yupToFormErrors(errors); };
}

const FreePlacesForm = ({
    onSubmit,
    onCancel,
    initialValues = {
        sector: "",
        rowFrom: "",
        rowTo: "",
        placeFrom: "",
        placeTo: "",
    },
}) => {
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
            >
                {() => (
                    <Form>
                        <div className="form-group">
                            <label>Сектор: </label>
                            <Field autoComplete="off" className="form-control" type="text" name="sector" />
                            <ErrorMessage name="sector" component="div" />
                        </div>
                        <label>Ряд: </label>
                        <div className="form-row">
                            <div className="col-6">
                                <div className="form-group">
                                    <Field autoComplete="off" className="form-control" type="text" name="rowFrom" placeholder="от" />
                                    <ErrorMessage name="rowFrom" component="div" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <Field autoComplete="off" className="form-control" type="text" name="rowTo" placeholder="до" />
                                    <ErrorMessage name="rowTo" component="div" />
                                </div>
                            </div>
                        </div>
                        <label>Место: </label>
                        <div className="form-row">
                            <div className="col-6">
                                <div className="form-group">
                                    <Field autoComplete="off" className="form-control" type="text" name="placeFrom" placeholder="от" />
                                    <ErrorMessage name="placeFrom" component="div" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <Field autoComplete="off" className="form-control" type="text" name="placeTo" placeholder="до" />
                                    <ErrorMessage name="placeTo" component="div" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Освободить
                        </button>
                        <button type="btn" className="btn btn-primary ml-2" onClick={onCancel}>
                            Отмена
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default FreePlacesForm;