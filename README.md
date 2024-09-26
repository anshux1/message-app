# Anonymous Message Sender

A website where users can send anonymous messages to others using just their username and receive anonymous messages in return.

## Tech Stack

- **Frontend**: Next.js
- **Backend**: Prisma, NextAuth
- **Database**: MongoDB
- **UI Components**: shadcn

## Features

- Send anonymous messages to any user by their username.
- Receive anonymous messages from others.
- Simple and user-friendly UI.

## Getting Started

Follow these instructions to get a copy of the project running on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) (or npm if preferred)
- A MongoDB instance (you can use MongoDB Atlas for cloud hosting)

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:anshux1/message-app.git
   
2. Navigate to the project directory:
    
   ```bash
   cd message-app
   
3. Set up your environment variables:
   
   Create a .env file in the root of the project with the following variables:
   ```bash 
   DATABASE_URL=mongodb+srv://example-url
   NEXTAUTH_SECRET=your-secret-key

4. Install the dependencies:
    ```bash
    yarn

5. Running the App

   To start the app locally, run the following command:
    ```bash
    yarn dev

This will start the development server on http://localhost:3000.
