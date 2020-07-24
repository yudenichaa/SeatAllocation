import { number, string } from "yup";

const checkIsSectorValid = (sector, sectorSizes) => sector && sector > 0 && sector <= sectorSizes.length;

export const member = string()
    .required("Поле обязательно для заполнения")
    .min(2, "Поле должно содержать минимум 2 символа");

export const sector = number()
    .typeError("Значение должно быть числом")
    .required("Поле обязательно для заполнения")
    .integer("Значение должно быть целым числом")
    .positive("Значение должно быть положительным")
    .min(1, "Значение должно быть больше либо равно 1")
    .test("sector > number of sectors", "Номер сектора превышает количество секторов", function (sector) {
        return sector <= this.options.context.sectorSizes.length;
    });

export const rowFrom = number()
    .typeError("Значение должно быть числом")
    .required("Поле обязательно для заполнения")
    .integer("Значение должно быть целым числом")
    .positive("Значение должно быть положительным")
    .min(1, "Значение должно быть больше либо равно 1")
    .test("rowFrom > number of rows", "Номер начального ряда превышает количество рядов в секторе", function (rowFrom) {
        return !checkIsSectorValid(this.parent.sector, this.options.context.sectorSizes) ||
            rowFrom <= this.options.context.sectorSizes[this.parent.sector - 1].rows;
    })
    .test("rowFrom > rowTo", "Номер начального ряда превышает номер конечного ряда", function (rowFrom) {
        return !this.parent.rowTo || rowFrom <= this.parent.rowTo;
    });

export const rowTo = number()
    .typeError("Значение должно быть числом")
    .required("Поле обязательно для заполнения")
    .integer("Значение должно быть целым числом")
    .positive("Значение должно быть положительным")
    .min(1, "Значение должно быть больше либо равно 1")
    .test("rowTo > number of rows", "Номер конечного ряда превышает количество рядов в секторе", function (rowTo) {
        return !checkIsSectorValid(this.parent.sector, this.options.context.sectorSizes) ||
            rowTo <= this.options.context.sectorSizes[this.parent.sector - 1].rows;
    });

export const placeFrom = number()
    .typeError("Значение должно быть числом")
    .required("Поле обязательно для заполнения")
    .integer("Значение должно быть целым числом")
    .positive("Значение должно быть положительным")
    .min(1, "Значение должно быть больше либо равно 1")
    .test("placeFrom > number of cols", "Номер начального места превышает количество мест в ряду", function (placeFrom) {
        return !checkIsSectorValid(this.parent.sector, this.options.context.sectorSizes) ||
            placeFrom <= this.options.context.sectorSizes[this.parent.sector - 1].cols;
    })
    .test("placeFrom > placeTo", "Номер начального места превышает номер конечного места", function (placeFrom) {
        return !this.parent.placeTo || placeFrom <= this.parent.placeTo;
    });

export const placeTo = number()
    .typeError("Значение должно быть числом")
    .required("Поле обязательно для заполнения")
    .integer("Значение должно быть целым числом")
    .positive("Значение должно быть положительным")
    .min(1, "Значение должно быть больше либо равно 1")
    .test("placeTo > number of cols", "Номер конечного места превышает количество мест в ряду", function (placeTo) {
        return !checkIsSectorValid(this.parent.sector, this.options.context.sectorSizes) ||
            placeTo <= this.options.context.sectorSizes[this.parent.sector - 1].cols;
    })