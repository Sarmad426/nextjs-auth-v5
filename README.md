# Authentication in Next.js

Authenticate **Next.js** app using `next-auth`.

## This Repository Covers

- Authentication
- Next.js Middleware
- User Management
- Role Management
- Sessions
- Credential Providers (Google, Github)
- Email Verification
- 2 Factor Authentication
- Forgot Password

## Tech Stack

- Next.js 14 (Server Actions)
- Typescript
- Shadcn-ui
- Tailwind CSS
- Prisma
- PostgreSQL
- **Auth v5**

### Other Packages

**Auth js:**

```npm install next-auth@beta```

This is the version '^5.0.0-beta.5'. It's currently in beta. Check out the
officical docs. <https://authjs.dev/guides/>

- Adopt Prisma with Auth.js

   ```npm i @auth/prisma-adapter```

- Bcrypt for Password Hashing

    ```npm i bcryptjs @types/bcryptjs```

- Initialize `shadcn-ui`
    ```npx shadcn-ui@latest init```

- Add the following components
    ```npx shadcn-ui@latest add form input button```

> This will automatically add the required npm packages to use forms.
> If you want to checkout implementation of forms using shadcn-ui, checkout the
> [documentation](https://github.com/Sarmad426/Documentation/tree/master/Shadcn-zod-forms).
> if you want to install manually.

```npm i zod react-hook-form@latest```

- For other Next-js installations

Check out the following resource.

[Documentation](https://github.com/Sarmad426/Documentation/tree/master/Nextjs-project-installations)

- For `Prisma`

[Documentation](https://github.com/sarmad426/Documentation/tree/master/prisma)
