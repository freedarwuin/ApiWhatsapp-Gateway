const fs = require("fs");

// ============= GLOBAL SETTING ============ //
global.port = "5001"; // Port Api / Browser
global.countrycode = "ID"; // Country Code - https://countrycode.org/ (ISO CODES)
global.countrycodephone = "58"; // Country Phone - https://countrycode.org/ (COUNTRY CODE)
global.timezone = "America/Caracas"; // Time Zone
global.usePairingNumber = false; // true = Emparejamiento Code / false = QRCode
global.pairingNumber = "4129056224"; // Número de WhatsApp utilizado como bot para emparejar números.
//========================================================

global.pp_bot = fs.readFileSync("./image/logo.png"); // Ubicación y nombre del logotipo
global.use_pp = true; // use a logo?

//========================================================

global.kontakadmin = ["4129056224"]; // Número de WhatsApp del administrador
global.kirimkontak_admin = false; // true = Enviar automáticamente el contacto del administrador

//========================================================

global.sessionName = "session"; // nombre de la sesión
//========================================================
