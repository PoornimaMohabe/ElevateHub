# ElevateHub
A Bridge Between Mentors and Mentees — sharing wisdom, experiences, and career opportunities.

# Project Structure

ElevateHub/
├── backend/                  # Node.js + Express.js backend server
│   ├── config/                # Configuration files 
│   ├── controller/            # All route controller logic (handling requests)
│   ├── middleware/            # Custom middlewares 
│   ├── model/                 # Mongoose models for MongoDB collections
│   ├── routes/                # API route definitions
│   └── index.js               # Main server file
│
├── user-interface/            # Frontend React Application
│   ├── public/                # Public assets like favicon etc.
│   └── src/
│       ├── assets/            # Images, icons, logos
│       ├── components/        # All reusable components
│       │   └── homepageComponents/ 
│       │       ├── MentorCarousel.jsx         # Carousel displaying suggested mentors
│       │       ├── RequestConfirmation.jsx    # Mentor request confirmation UI
│       │       ├── WelcomeScreen.jsx          # Welcome hero section
│       │       ├── Footer.jsx                  # Website Footer
│       │       ├── MentorDashboard.jsx        # Dashboard for mentors
│       │       ├── Navbar.jsx                  # Website Navigation bar
│       │
│       ├── pages/             # Main pages of application
│       │   ├── Home.jsx                      # Landing page
│       │   ├── AboutUs.jsx                    # About ElevateHub page
│       │   ├── ContactUs.jsx                  # Contact form page
│       │   ├── login.jsx                      # Login screen
│       │   ├── JobListing.jsx                 # Job listings
│       │   ├── PostJob.jsx                    # Job posting page
│       │   ├── SingleJobDetails.jsx           # Single job detailed view
│       │   ├── Mentor/
│       │   │   ├── AllMentors.jsx             # List of all mentors
│       │   │   ├── MentorProfile.jsx          # Detailed mentor profile page
│       │   │   └── MentorCard.jsx             # Mentor card design
│       │   ├── MentorRegistration.jsx         # Mentor signup/registration page
│       │   ├── RequestManagment.jsx           # Manage incoming requests
│       │   ├── SignUp.jsx                     # Mentee signup
│       │   ├── SignUpAs.jsx                   # Signup as Mentor or Mentee
│       │
│       ├── redux/              # State Management
│       │   ├── actionCreator.js
│       │   ├── actionType.js
│       │   ├── reducer.js
│       │
│       ├── utils/              # Utilities
│       │   ├── SpinerForButton.jsx          # Loading spinner for buttons
│       │   ├── Toastnotification.jsx        # Toast notifications
│       │   ├── url.js                       # API endpoints config
│       │
│       ├── App.css             # Main CSS
│       ├── App.jsx             # Root component
│       ├── AllRouter.jsx       # Application routes
│       ├── index.css           # Additional global CSS
│       ├── main.jsx            # Application entry point
│       └── store.js            # Redux store setup
│
├── .env                        # Environment variables
├── .gitignore                  # Git ignore file
├── package.json                # Backend dependencies
└── README.md                   # (To take overview of project)


Live Demo
🌐 View ElevateHub Live
 # https://elevate-hub-tan.vercel.app/

 *  Aim of the Project *
ElevateHub connects aspiring mentees with experienced mentors to provide mentorship, career advice, job opportunities, and real-world insights — all in a modern, friendly platform.
We believe knowledge grows when shared, and ElevateHub builds that bridge.

## Tech Stack
. Frontend: React.js, Tailwind CSS

. Backend: Node.js, Express.js

. Database: MongoDB (Mongoose)

. State Management: Redux

. Hosting: (Vercel / Render)


## Project Screenshots
Home Page	Mentor Profile Page	Dashboard

## Available Scripts
In the backend folder:

* npm install
* npm start

In the user-interface folder:

* npm install
* npm run dev

### Contributing
Pull requests are welcome.
# For major changes, please open an issue first to discuss what you would like to change.

* Acknowledgments
Special thanks to the open-source community. 

