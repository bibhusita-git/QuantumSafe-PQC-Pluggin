# QuantumSafe-PQC-Plugin

**QuantumSafe-PQC-Plugin** is a client-server model with a quantum-safe browser plugin designed to provide secure communication using post-quantum cryptography (PQC). The project aims to safeguard browser communications against quantum threats by implementing the Crystals-Kyber PQC algorithm.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [References](#references)
- [Work in Progress](#work-in-progress)

## Introduction

In the face of quantum computing advancements, traditional cryptographic systems are vulnerable to quantum attacks. QuantumSafePQCPlugin takes a proactive approach to mitigate these risks by providing quantum-safe encryption in the form of a browser plugin. It follows a client-server model, with the browser plugin acting as the client and an HTTPS server securely handling incoming requests.

## Features

- Quantum-Safe Encryption: Utilizes the Crystal-Kyber PQC algorithm to provide robust security against quantum attacks.
- Seamless HTTPS Integration: Works seamlessly with the HTTPS protocol for secure and authenticated data transmission.
- Asymmetric Key Exchange: Implements secure key exchange mechanisms to establish a shared secret between the browser plugin and the HTTPS server.
- Low Overhead: Designed with minimal computational overhead to ensure efficient communication while maintaining quantum resistance.

## Getting Started

### Prerequisites

- Modern Web Browser (e.g., Google Chrome, Mozilla Firefox)
- Node.js (v12 or above)
- npm (Node Package Manager)

### Installation

1. Clone this repository to your local machine:
    ```bash
   git clone https://github.com/bibhusita-git/QuantumSafePQCPlugin.git
   cd QuantumSafePQCPlugin

2. Install the required packages
    ```bash
    cd client
    npm install
    cd server
    npm install

## Usage
1. Browser Plugin Setup:
  - Open your web browser and navigate to chrome://extensions
  - Enable Developer Mode.
  - Click "Load unpacked" and select the QuantumSafe-PQC-Plugin/Client directory.

2. Https Server Setup:
  - Configure your HTTPS server to support the Crystals-Kyber PQC algorithm. Refer to the HTTPS server documentation for detailed instructions.

3. Establishing Secure Communication:
  - In your web application code, import the QuantumSafe-PQC-Plugin library.
  - Use the library to establish a secure connection with the HTTPS server, encrypt data, and handle responses.

## License

This project is licensed under [MIT License](https://choosealicense.com/licenses/mit/)

## Acknowledgements
I extend my heartfelt gratitude to QNU Labs for providing the opportunity to work on this project during our internship. Their guidance and support have been invaluable in shaping QuantumSafe-PQC-Plugin into what it is today.

Special thanks to Ayan Chattopadhyay sir for his mentorship, feedback, and valuable insights throughout the development process.

## References
1. [CRYSTALS-KYBER JavaScript](https://github.com/antontutoveanu/crystals-kyber-javascript): This Github Repository offers insights on the JavaScript implementation for client-side web browser applications and server-side backends in Node.js frameworks. 

2. [Active Implementation of End-to-End Post-Quantum Encryption](chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://eprint.iacr.org/2021/356.pdf): This paper paper provides in-depth information about the tried and tested construction for a quantum-resistant, end-to-endencryption scheme which has been implemented in a real-life online web application. 

## Work in Progress
⚠️ **Please Note:** QuantumSafe-PQC-Plugin is currently under active development and is not yet ready for production use. It is in the early stages of development, and significant changes may occur as we work towards its completion.

**Current Status: Pre-Alpha**

- The project is not fully functional, and core features are still being implemented.
- The codebase is actively evolving, and we are regularly refining the architecture and design.
