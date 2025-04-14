# Shrug Man
A simple tool to copy the shrug emoji ¯\\\_(ツ)\_/¯ to your clipboard.

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](/LICENSE)

## Overview

Shrug Man is an open-source static web application that allows you to easily copy the shrug emoji ¯\_(ツ)_/¯ to your clipboard. It is designed to be simple and lightweight, making it easy to use and deploy. The mission of this project is to:

🤷‍♂️ Be fun

🤷‍♀️ Be simple

🤷 Shrug

## Table of Contents

- [Overview](#overview)
- [Table of Contents](#table-of-contents)
- [Contributing](#contributing)
- [Get Started](#get-started)
  - [Prerequisites](#prerequisites)
  - [.NET Aspire](#net-aspire)
  - [Clone the repo](#clone-the-repo)
  - [Run the app](#run-the-app)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

## Contributing

Contributions are welcome and key to maintaining this project! Please read the [contributing guide](/.github/CONTRIBUTING.md) for opening issues or pull requests.

## Get Started

### Prerequisites

To run this project, you will need to have the following software installed on your machine:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/)
- An IDE or text editor of your choice
  - [e.g., Visual Studio Code](https://code.visualstudio.com/download)

Optionally, you can also use the .NET Aspire application host to run the project. This is not required but does add additional local development features. For these optional features, you will need the following additional software installed:

- [.NET 9 SDK](https://dotnet.microsoft.com/en-us/download)
- An OCI compliant container runtime
  - [e.g., Docker Desktop](https://www.docker.com/get-started/)

### .NET Aspire

This project optionally uses .NET Aspire to orchestrate the local development environment. This will be expanded upon in the future to add additional features include OpenTelemetry and other backing cloud services.

For more information on or troubleshooting .NET Aspire, see the [Aspire documentation](https://learn.microsoft.com/en-us/dotnet/aspire/get-started/aspire-overview).

### Clone the repo

To clone the repository, run the following command in your terminal:

```pwsh
git clone https://github.com/victorfrye/microsoftgraveyard.git
```

### Run the app

To run the application, simply run the following commands in the root of the project:

```pwsh
Set-Location ./src/WebClient && npm install && npm run dev
```

OR if you have .NET installed and want to use Aspire app host:

```pwsh
dotnet run --project ./src/AppHost/AppHost.csproj
```

## Code of Conduct

Microsoft Graveyard has adopted the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/), and we expect project participants to adhere to it. Please read [the full text](/.github/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## License

Copyright (c) Victor Frye. All rights reserved.

Licensed under the [MIT](/LICENSE) license.
