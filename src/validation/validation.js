import { ResponseError } from "../error/response-error.js";

const validate = (schema, request) => {
  const result = schema.validate(request, {
    abortEarly: false, // Menginstruksikan agar proses validasi tidak berhenti pada kesalahan pertama
    allowUnknow: false, // menjaga supaya tidak field tambahan yang dimasukan
  });

  if (result.error) {
    throw new ResponseError(400, result.error.message);
  } else {
    return result.value;
  }
};

export { validate };
