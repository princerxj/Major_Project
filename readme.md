# WanderLust

WanderLust is a Node.js web application for listing, reviewing, and managing travel accommodations. Users can register, log in, create property listings, upload images, and leave reviews.

## Features

- User authentication (register, login, logout) with Passport.js
- Create, edit, and delete property listings
- Upload images for listings (Cloudinary integration)
- Leave reviews and ratings on listings
- Flash messages for user feedback
- Server-side validation with Joi
- Responsive UI with EJS and Bootstrap
- MongoDB Atlas for data storage

## Project Structure

```
.
├── app.js
├── cloudConfig.js
├── middleware.js
├── package.json
├── schema.js
├── controllers/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── init/
│   ├── data.js
│   └── index.js
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── public/
│   ├── CSS/
│   └── js/
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── uploads/
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
└── views/
    ├── error.ejs
    ├── includes/
    ├── layouts/
    ├── listings/
    └── users/
```

## Getting Started

### Prerequisites

- Node.js (v20.x recommended)
- MongoDB Atlas account
- Cloudinary account

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd Major_Project
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory with the following content:

   ```
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ATLASDB_URL=your_mongodb_atlas_connection_string
   SECRET=your_session_secret
   ```

4. **Initialize the database with sample data (optional):**
   ```sh
   node init/index.js
   ```

### Running the App

Start the development server:

```sh
node app.js
```

Visit [http://localhost:8080](http://localhost:8080) in your browser.

## Main Files

- `app.js`: Main application entry point
- `cloudConfig.js`: Cloudinary configuration for image uploads
- `models/user.js`: User schema and authentication
- `models/listing.js`: Listing schema
- `models/review.js`: Review schema
- `routes/listing.js`: Listing routes
- `routes/review.js`: Review routes
- `routes/user.js`: User authentication routes
- `controllers/`: Route controllers
- `views/`: EJS templates

## License

This project is licensed under the ISC License.

---

**Note:** Replace placeholder values in `.env` with your actual credentials. For any issues, please open an issue on the repository.