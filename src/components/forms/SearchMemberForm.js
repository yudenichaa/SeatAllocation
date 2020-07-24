import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { member } from "../../FieldChecks";
import { object } from "yup";

const SearchMemberForm = ({ onSubmit }) => (
    <div>
        <Formik
            initialValues={{ member: "" }}
            validationSchema={object().shape({ member })}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={onSubmit}
        >
            {() => (
                <Form>
                    <div className="row">
                        <div className="col-auto p-0 ml-3 mr-2 d-flex align-items-center">
                            <span className="">Поиск участника: </span>
                        </div>
                        <div className="col-auto p-0">
                            <Field autoComplete="off" className="form-control" type="text" name="member" />
                            <ErrorMessage name="member" component="div" />
                        </div>
                        <div className="col-auto p-0 ml-2">
                            <button
                                className="btn btn-primary"
                                type="submit">
                                Поиск
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    </div >
);

export default SearchMemberForm;