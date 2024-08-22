const fs = require("fs");

// ============= CONFIGURACIÓN GLOBAL ============ //
global.port = "5001"; // Puerto API / Navegador
global.countrycode = "ID"; // Código de país - https://countrycode.org/ (CÓDIGOS ISO)
global.countrycodephone = "58"; // Teléfono del país - https://countrycode.org/ (CÓDIGO DEL PAÍS)
global.timezone = "America/Caracas"; // Huso horario
global.usePairingNumber = false; // true = Emparejamiento Code / false = QRCode
global.pairingNumber = "1234567890"; // Número de WhatsApp utilizado como bot para emparejar números.
//========================================================

global.pp_bot = fs.readFileSync("./image/logo.png"); // Ubicación y nombre del logotipo
global.use_pp = true; // use a logo?

//========================================================

global.kontakadmin = ["1234567890"]; // Número de WhatsApp del administrador
global.kirimkontak_admin = false; // true = Enviar automáticamente el contacto del administrador

//========================================================

global.sessionName = "session"; // nombre de la sesión
//========================================================
