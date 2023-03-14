import * as yup from "yup";

const messages = {
  requiredField: "Campo obrigatório",
  number: "Utilize apenas números",
  positiveNumber: "Utilize apenas número positivos",
  licensePlate: "Placa inválida",
};

const regexes = {
  brazilianLicensePlate: /^[A-Z]{3}[0-9][0-9A-Z][0-9]{2}$/,
};

export const validators = {
  requiredPositiveNumber: yup
    .number()
    .required(messages.requiredField)
    .test("is-positive-number", messages.positiveNumber, (value) => value > 0),
  requiredString: yup.string().required(messages.requiredField),
  licensePlate: yup
    .string()
    .required(messages.requiredField)
    .test("is-valid-license-plate", messages.licensePlate, (value) =>
      Boolean(value.match(regexes.brazilianLicensePlate)),
    ),
};
