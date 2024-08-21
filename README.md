<h1 align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png" alt="PhpNuxBill" width="150">
  <br>Api Whatsapp Gateway - Para enviar notificaciones a clientes<br>
</h1>

<h4 align="center">Pasarela no oficial de WhatsApp que utiliza NodeJs</h4>

<p align="center">
  <a href="https://github.com/rtaserver/ApiWhatsapp-Gateway/releases">
    <img alt="GitHub release (with filter)" src="https://img.shields.io/github/v/release/rtaserver/ApiWhatsapp-Gateway?label=Latest%20Release&labelColor=CE5A67">
  </a>
  <a href="https://github.com/rtaserver/ApiWhatsapp-Gateway/blob/main/LICENSE">
   <img alt="GitHub" src="https://img.shields.io/github/license/rtaserver/ApiWhatsapp-Gateway">
  </a>
  
</p>

## Características

Fácil configuración de una pasarela de WhatsApp multisesión sin interfaz gráfica con NodeJS.

- Admite varios dispositivos
- Admite código de emparejamiento
- Mensaje sin demora

<p>

#### Residencia en [WhiskeySockets-Baileys](https://github.com/WhiskeySockets/Baileys)

#### Pasarela gratuita de WhatsApp de IbnuX [https://wa.nux.my.id/](https://wa.nux.my.id/)

<p>

## Documentación

### Variables de configuración

Para ejecutar este proyecto, necesitará editar las variables en el archivo `settings.js`

```
// ============= CONFIGURACIÓN GLOBAL ============ //
global.port = "5001"; // Puerto API / Navegador
global.countrycode = "ID"; // Código de país - https://countrycode.org/ (CÓDIGOS ISO)
global.countrycodephone = "58"; // Teléfono del país - https://countrycode.org/ (CÓDIGO DEL PAÍS)
global.timezone = "America/Caracas"; // Huso horario
global.usePairingNumber = false; // true = Pairing Code / false = QRCode
global.pairingNumber = ""; // whatsapp number used as a bot, for pairing number
//========================================================

global.pp_bot = fs.readFileSync("./image/logo.png"); // location and name of the logo
global.use_pp = true; // use a logo?

//========================================================

global.kontakadmin = ["6281287123512"]; // admin whatsapp number
global.kirimkontak_admin = false; // true = automatically send admin contact

//========================================================

global.sessionName = "session"; // session name

//========================================================

```

### Install and Running

Clone the project

```bash
  git clone https://github.com/freedarwuin/ApiWhatsapp-Gateway.git
```

Go to the project directory

```bash
  cd ApiWhatsapp-Gateway
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Open On Browser & Start New Session to Get QRCode if PairingCode False

```bash
  http://localhost:5001/scan
```

## API Reference

#### Send Text Message

```
  POST /send-message
  GET /send-message?message=Text&number=08123456789
```

| Body      | Type     | Description                                                         |
| :-------- | :------- | :------------------------------------------------------------------ |
| `message` | `string` | **Required**. Text Message                                          |
| `number`  | `string` | **Required**. Receiver Phone Number (e.g: 62812345678 / 0812345678) |

## Changelog

#### [CHANGELOG.md](CHANGELOG.md)
