# Hostel-Management
Manage Your Hostel 

## Topics Covered
- MERN Stack
- Hostel Management
- Bootstrap
- Reactstrap
- Redux
- JWT Authentication

## Development and Installation

### Install Backend Dependencies
- npm install

### Install Frontend Dependencies
- npm run client-install

### Setup up dev_keys for database
- Either run local MongoServer or,
- Setup Mongo Server at online platform like mlab and Create a keys_dev.js file in [config](https://github.com/starkblaze01/Hostel-Management/tree/master/config) folder and set up:-
``` 
module.exports = {
  mongoURI: YOUR_LOCAL_MONGO_SERVER_URI,
	secretOrKey: YOUR_SECRET
}; 
```
### Run the application
- npm run dev

### Screenshots

![Home Page](https://github.com/starkblaze01/Hostel-Management/blob/Docs/home.png)

![Dashboard](https://github.com/starkblaze01/Hostel-Management/blob/Docs/dashboard.png)

![Room Cleaning](https://github.com/starkblaze01/Hostel-Management/blob/Docs/room%20cleaning.png)

## Note
- You can set up the database on your local server of your college and create multiple ids to access that data. The Link mentioned in the Description https://hostel-management01.herokuapp.com/ has a common database instance created on [mlab](https://mlab.com/). It is just to show the working of the project in the deployed state. Feel free to test it out. But make sure to delete your entries after creating and testing it. Also, **don't save any personal information** over this deployed link because anyone can acces it. If amount of data exceeds the our storage at mlab, then it will be deleted.
- The application model is based on our [Institute](iiitvadodara.ac.in) Hostel. There are four blocks A, B, C, D. And four batches(B.Tech 2016, B.Tech 2017, B.Tech 2018, and B.Tech 2019) having occupancy in hostel rooms. These thing may differ for many Institute. You can easily change the structure of these components from [here](https://github.com/starkblaze01/Hostel-Management/tree/master/client/src/components/pages) according to your need.

## Team Members
- [Aman Yadav](https://github.com/amany9000)
- [Avdhesh Yadav](https://github.com/avi-spc)
- [Anshuman Verma](https://github.com/anshumanv)
- ,and [Me](https://github.com/starkblaze01/) 😎

## Found an Issue or any suggestions
Make an issue [here](https://github.com/starkblaze01/Hostel-Management/issues/new).
