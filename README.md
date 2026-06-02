# KODA B7 GIN
[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/license/mit)
<br>
Frontend Project for E-wallet exercise by Akmal Oktarian Koda batch 7

## TECH USED
- [![React](https://img.shields.io/badge/React-19.2.4-blue?logo=React&logoColor=white)](https://react.dev/)
- [![Redux](https://img.shields.io/badge/Redux-6.0.0-purple?logo=Redux&logoColor=white)](https://redux-toolkit.js.org/)
- [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.2-blue?logo=TailwindCSS&logoColor=white)](https://tailwindcss.com/)
- [![Docker](https://img.shields.io/badge/Docker-29.5.2-blue?logo=Docker&logoColor=white)](https://www.docker.com/)
- [![Nginx](https://img.shields.io/badge/Nginx-Stable_Alpine-green?logo=Nginx&logoColor=white)](https://nginx.org/)

## FEATURES
- Authentication (Login, Register, Logout)
- Enter PIN
- Dashboard (Balance, Income, Expense, Chart)
- Top Up dengan berbagai metode pembayaran
- Transfer dengan verifikasi PIN
- History Transaksi dengan pagination
- Edit Profile dengan upload foto
- Change password & Change pin


## USAGE INSTRUCTION
### Environment Setup
1. Create your environment on the root directory named
```.env```
```
# Gunakan relative path jika menggunakan Nginx Reverse Proxy
VITE_API_URL=/ewallet
```

### Running the Application (Local Development)
1. Clone the App
```bash
$ git clone https://github.com/Akmalrian/E-Wallet-Frontend.git
```
2. Install dependency
```bash
$ npm install
```
2. Run the development server
```bash
$ npm run dev
```


## ROUTES
### Features
| Path | Description |
| ------------| ------------ |
| /login | Login |
| /register | Register | 

### Documentation
For complete documentation, visit ``/swagger/index.html``

## Changelog
| Version | Description |
| ---------- | ------------|
| latest | add feature by [akmalrian](https://github.com/Akmalrian)|

## HOW TO CONTRIBUTE (optional)
- Fork this repository
- Create your changes
- Commit your changes (Please strictly follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard: `feat:`, `fix:`, `chore:`, `docs:`)
- Push to the branch
- Open a Pull Request

## LICENSE
this project is licensed under the MIT License

## RELATED PROJECT
[Backend](https://github.com/Akmalrian/E-Wallet-Backend.git)