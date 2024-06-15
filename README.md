<div align="center">
<img src="./public/opengraph-image.png" alt="icon" style="border-radius: 15px;"/>

<h3 align="center">Trip Teasers (travel web app)</h3>

</div>

## 🛠️ Tech Stack

<img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logo=typescript&logoColor=white&color=2F74C0" alt="typescript" />
<img src="https://img.shields.io/badge/-Next_Js-black?style=for-the-badge&logo=nextdotjs&logoColor=white&color=000000" alt="nextjs" />
<img src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logo=PostgreSQL&logoColor=white&color=336791" alt="postgresql" />
<img src="https://img.shields.io/badge/-Prisma-black?style=for-the-badge&logo=prisma&logoColor=white&color=5A67D8" alt="prisma" />
<img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white&color=38BDF8" alt="tailwind" />
<img src="https://img.shields.io/badge/-Resend-black?style=for-the-badge&logo=resend&logoColor=white&color=000000" alt="resend" />
<img src="https://img.shields.io/badge/-Zod-black?style=for-the-badge&logo=zod&logoColor=white&color=3068B7" alt="zod" />
<img src="https://img.shields.io/badge/-Leaflet-black?style=for-the-badge&logo=leaflet&logoColor=white&color=%2393cc28" alt="leaflet" />
<img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcnui" />
<img src="https://img.shields.io/badge/-Uploadthing-black?style=for-the-badge&logo=uploadthing&logoColor=white&color=EE4444" alt="uploadthing" />

## 🧩 Features

- **Authentication**: User authentication is implemented using **Next-auth v5** with Next.js server actions. It includes token generation for verification and 2FA login options. Emails are sent via the **Resend** service.
- **User Profile**: Users can add/edit profile and cover images, as well as other profile details such as biography, social media links, date of birth, and more.
- **Other Profiles**: View other users' profiles, including their reviews of various locations, added locations, and favorite locations.
- **Adding new locations**: Users can add their favorite locations by filling out a multistep form. Up to 8 photos can be uploaded, each with a maximum size of 4MB, using the **uploadthing** service.
- **Form Validation**: Secure validation for all forms is implemented using **zod**.
- **Adding Reviews and Favorites Locations**: Users can add one review per location, which can later be edited or deleted. Locations can also be added to favorites.
- **Light and Dark mode**: Designed to support both light and dark modes based on user preferences.
- **Different Filter/Search variants**: Users can search for locations by country, city, or name and filter by category.
- **Location of place on Map**: The map displays all locations based on country, city filters, or specific searches, and also shows details of each location.
- **Responsive design**: The entire site is responsive for all devices using **Tailwind CSS** with **shadcn/UI**.

## 💾 Start Guide

**Cloning Repository**

```bash
git clone https://github.com/Bozos2/tourist-app.git
```

**Installation**

Install project dependencies:

```bash
 npm install
```

**Environment Variables**

```env
DATABASE_URL=

AUTH_SECRET=

# OAuth keys
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

TWITTER_CLIENT_ID=
TWITTER_CLIENT_SECRET=

DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=

RESEND_API_KEY=

NEXT_PUBLIC_APP_URL=

# For resend service
EMAIL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

## 🖼️ Images

**Light mode**

![Lightmode](./public/light-mode.png)

**Dark mode**

![Darkmode](./public/dark-mode.png)
