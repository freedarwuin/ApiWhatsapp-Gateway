exports.responseSuccessWithData = (data) => ({ data: data });
exports.responseSuccessWithMessage = (
  message = "Yeyy... Solicitud enviada con éxito"
) => ({
  message: message,
});
exports.responseErrorWithMessage = (
  message = "Upsss... Algo salió mal en el servidor"
) => ({
  message: message,
});
