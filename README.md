<h1 align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png" alt="PhpNuxBill" width="150">
  <br>Api Whatsapp Gateway - Para enviar notificaciones a clientes<br>
</h1>

<h4 align="center">Pasarela no oficial de WhatsApp que utiliza NodeJs</h4>

<p align="center">
  <a href="https://github.com/freedarwuin/ApiWhatsapp-Gateway/releases">
    <img alt="GitHub release (with filter)" src="https://img.shields.io/github/v/release/rtaserver/ApiWhatsapp-Gateway?label=Latest%20Release&labelColor=CE5A67">
  </a>
  <a href="https://github.com/freedarwuin/ApiWhatsapp-Gateway/blob/main/LICENSE">
   <img alt="GitHub" src="https://img.shields.io/github/license/freedarwuin/ApiWhatsapp-Gateway">
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

global.kontakadmin = ["1234567890"]; // admin whatsapp number
global.kirimkontak_admin = false; // true = automatically send admin contact

//========================================================

global.sessionName = "session"; // session name

//========================================================

```

### Instalación y funcionamiento

Clonar el proyecto

```bash
git clone https://github.com/freedarwuin/ApiWhatsapp-Gateway.git
```

Ir al directorio del proyecto

```bash
cd ApiWhatsapp-Gateway
```

Instalar dependencias

```bash
npm install
```

Iniciar el servidor

```bash
npm run start
```

Abrir en el navegador e iniciar una nueva sesión para obtener el código QR si el código de emparejamiento es falso

```bash
http://localhost:80/scan
```

## Referencia API

#### Enviar mensaje de texto

```
POST /send-message
GET /send-message?message=Text&number=08123456789
```

| Cuerpo      | Tipo     | Descripción                                                         |
| :-------- | :------- | :------------------------------------------------------------------ |
| `message` | `string` | **Requerido**. Mensaje de texto                                          |
| `number`  | `string` | **Requerido**. Número de teléfono del receptor (p. ej.: 62812345678 / 0812345678) |

## Registro de cambios

#### [CHANGELOG.md](CHANGELOG.md)
