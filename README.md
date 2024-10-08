# Welcome to Advanced Role-Based Access Control (RBAC)!

![Placeholder Image](https://raw.githubusercontent.com/vivekkv178/cdn/main/rbac/Thumbnail.png)

Looking to manage user roles and permissions with precision and control? Our Role-Based Access Control (RBAC) system is designed to give you powerful management over user access in your applications. With modern technology and a user-friendly interface, we offer a comprehensive set of features to handle user authentication and authorization.

---

**Key Features:**

1. **Sign Up:** Easily onboard new users with a secure registration process. Manage role assignment from the start.

2. **Sign In:** Authenticate users through a robust, secure login system to ensure access only to authorized individuals.

3. **Manage Users - List, Add, Read, Update, Delete:**
   - **List:** View all users in the system.
   - **Add:** Add new users with specific role assignments.
   - **Read:** Retrieve detailed information about individual users, including their permissions and roles.
   - **Update:** Modify user roles or permissions to reflect changes in access levels.
   - **Delete:** Remove users and revoke access efficiently.

---

This platform is built for flexibility, scalability, and security, ensuring that your applications have the right access control mechanism in place to grow as your user base and complexity increase.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (version 20 or higher)
- npm (Node package manager)
- Git

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/vivekkv178/rbac-fe.git
   cd rbac-fe
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **.npmrc File (Only if Step 2 fails)**

   To install the component library, create a `.npmrc` file in the root of your project with the following content:

   > **Important:** The component library is private for now. To access it, you will need a temporary token. Please contact me to obtain the temporary token.

   ```plaintext
   registry=https://registry.npmjs.org/
   @vivekkv178:registry=https://npm.pkg.github.com/
   //npm.pkg.github.com/:_authToken=YOUR_TEMPORARY_TOKEN
   ```

### Configuration

Make sure to set up your environment variables. Create a `.env` file in the root of your project and add the necessary configurations.

#### Frontend Environment Variables

> **Note:** The Firebase environment variables are not actually used in this application but are required for the component library to start, so some dummy values for it will suffice.

```plaintext
NEXT_PUBLIC_STORYBOOK_URL=https://main--<projectid>.chromatic.com/
NEXT_PUBLIC_CDN_PATH=https://raw.githubusercontent.com/vivekkv178/cdn/main
NEXT_PUBLIC_RBAC_BE_URL=http://localhost:3001
NEXT_PUBLIC_FIREBASE_API_KEY=test
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=test
NEXT_PUBLIC_FIREBASE_PROJECT_ID=test
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=test
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=test
NEXT_PUBLIC_FIREBASE_APP_ID=test
```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view your application.
