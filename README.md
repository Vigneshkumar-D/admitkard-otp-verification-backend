# AdmitKard OTP Verification Backend

This server is designed to handle OTP (One-Time Password) verification using Twilio, a popular cloud communications platform. It provides RESTful API endpoints to send OTPs and verify OTP codes.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Description

The Twilio OTP Verification Server is built using Express.js and integrates with the Twilio API to send and verify OTPs. It exposes two main endpoints: one for sending OTPs and another for verifying OTPs.

## Features

- Integration with the Twilio API for OTP generation and verification.
- Secure handling of OTPs and user phone numbers.
- Simple RESTful API for OTP-related operations.
- Error handling for failed OTP sending and verification.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed.
- A Twilio account with the following credentials:
  - Account SID (`accountSid`)
  - Auth Token (`authToken`)
  - Verify Service SID (`verifySid`)
- A code editor (e.g., [Visual Studio Code](https://code.visualstudio.com/)).

## Installation

To install and run this server, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Vigneshkumar-D/admitkard-otp-verification-backend.git
   ```

2. Navigate to the project folder:

   ```bash
   cd admitkard-otp-verification-backend
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Update the Twilio credentials in the `server.js` file:

   ```javascript
   const accountSid = "YOUR_TWILIO_ACCOUNT_SID";
   const authToken = "YOUR_TWILIO_AUTH_TOKEN";
   const verifySid = "YOUR_TWILIO_VERIFY_SERVICE_SID";
   ```

5. Start the server:

   ```bash
   npm start
   ```

## Usage

The server exposes two main endpoints for OTP-related operations:

1. **Send OTP**: To send an OTP to a specified phone number.

   - Endpoint: `POST /send-otp`
   - Request Body:
     ```json
     {
       "phoneNumber": "PHONE_NUMBER_TO_RECEIVE_OTP"
     }
     ```
   - Response:
     - Success: Status code `200 OK`, JSON response: `{ "message": "OTP sent successfully" }`
     - Failure: Status code `500 Internal Server Error`, JSON response: `{ "message": "Failed to send OTP" }`

2. **Verify OTP**: To verify an OTP code for a specified phone number.

   - Endpoint: `POST /verify-otp`
   - Request Body:
     ```json
     {
       "phoneNumber": "PHONE_NUMBER_TO_VERIFY",
       "otpCode": "OTP_CODE_TO_VERIFY"
     }
     ```
   - Response:
     - Success: Status code `200 OK`, JSON response: `{ "message": "OTP verification successful" }`
     - Failure: Status code `400 Bad Request`, JSON response: `{ "message": "OTP verification failed" }`
     - Error: Status code `500 Internal Server Error`, JSON response: `{ "message": "Failed to verify OTP" }`

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork.
5. Create a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy using the Twilio OTP Verification Server! If you have any questions or suggestions, feel free to [contact us](mailto:your-email@example.com).
