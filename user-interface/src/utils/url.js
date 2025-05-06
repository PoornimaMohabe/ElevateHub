
// const BASEURL_LOCAL =  "http://localhost:4500"
const BASEURL_LOCAL = "https://elevatehub-yz2n.onrender.com"

// login and register URL
export const registerURL = `${BASEURL_LOCAL}/register`
export const loginUrl = `${BASEURL_LOCAL}/login`

//
export const allJobs = `${BASEURL_LOCAL}/all_jobs`

// mentor crud URL
export const addMentor = `${BASEURL_LOCAL}/addmentor`
export const getAllMentor = `${BASEURL_LOCAL}/getallmentor`              
export const updateMentor = `${BASEURL_LOCAL}//updatementor/:id`
export const deleteMentor = `${BASEURL_LOCAL}/deletementor/:id`
export const getSingleMentor = `${BASEURL_LOCAL}/mentor`
export const mentorLogin = `${BASEURL_LOCAL}/register-mentor`

// jobs crud URL
export const addJob = `${BASEURL_LOCAL}/postJobs`
export const getAllJob = `${BASEURL_LOCAL}/allJobs`               
export const updateJob = `${BASEURL_LOCAL}/updateJobs/:id`
export const deleteJob = `${BASEURL_LOCAL}/deleteJobs/:id`
export const getSingleJob = `${BASEURL_LOCAL}/jobdetails`

// book mentor URL
export const bookMentor = `${BASEURL_LOCAL}/bookmentor`




//mentorshibooking url
export const StudentBookMentorship = `${BASEURL_LOCAL}/student-bookings`
export const getStudentIndividualBooking = `${BASEURL_LOCAL}/individual-student-bookings` // Get all bookings
export const getMentorRequest = `${BASEURL_LOCAL}/mentor-reuqest` // Get all bookings by s