# API Documentation

## Routes Available: 
- `/api/users`
- `/api/student`
- `/api/room`
- `/api/staff`

### Endpoints for `/api/users`:

1. `/api/users/test` - To test current Route
```
Request Type: GET
Response: { msg: "It works!!" }
```
2. `/api/users/register` - To Register new User
```
Request Type: POST
Request Body: {name: 'Type String', email: 'Type String', password: 'Type String'}
Response: {name: 'String', email: 'String', password: 'Hash of Original String', avatar: 'fetched from gravatar'}
```

3. `/api/users/login` - To login and return Auth Token
```
Request Type: POST
Request Body: {email: 'Type String', password: 'Type String'}
Response: {success: true, token: "Bearer "+ token}
```

4. `/api/users/current` - To fecth current login user details
```
Request Type: GET
Response: {id: 'Type String', name: 'Type String', email: 'Type String'}
```

### Endpoints for `/api/student`:

1. `/api/student/` - To add a new Student
```
Request Type: POST
Reuqest Body: {name:'Type String', email:'Type String', batch:'Type String', id:'Type String', block:'Type String', room:'Type String', gender: 'MALE or FEMALE'}
Response: {name:'Type String', email:'Type String', batch:'Type String', id:'Type String', block:'Type String', room:'Type String', gender: 'MALE or FEMALE'}
```

2. `/api/student/batch/:batch` - To get the students of given `:batch`
```
Request Type: GET
Response: [{name:'Type String', email:'Type String', batch:'Type String', id:'Type String', block:'Type String', room:'Type String', gender: 'MALE or FEMALE'}, ...]
```

3. `/api/student/room/:room` - To get the students of given `:room`
```
Request Type: GET
Response: [{name:'Type String', email:'Type String', batch:'Type String', id:'Type String', block:'Type String', room:'Type String', gender: 'MALE or FEMALE'}, ...]
```

4. `/api/student/id/:id` - To get the student with given `:id`
```
Request Type: GET
Response: [{name:'Type String', email:'Type String', batch:'Type String', id:'Type String', block:'Type String', room:'Type String', gender: 'MALE or FEMALE'}]
```

5. `/api/student/all` - To get the details of all the students
```
Request Type: GET
Response: [{name:'Type String', email:'Type String', batch:'Type String', id:'Type String', block:'Type String', room:'Type String', gender: 'MALE or FEMALE'}, ...]
```

6. `/api/student/availability` To update the student availability
```
Request Type: PUT
Request Body: {id: 'Type String', isAvailable: 'true or false'}
Response: { message: 'Student availability has been updated.', success: true }
```

7. `/api/student/` - To delete the a student details
```
Request Type: DELETE
Request Body: {id: 'Type String'}
Response: { message: `Student with ID ${id} has been deleted`, success: true }
```

### Endpoints for `/api/room`:

1. `/api/room/block/:block` - To get the room of a given `:block`
```
Request Type: GET
Response: [{id:'Type String', type:'CLEANING or REPAIR', block:'A or B or C or D', incharge:, time:'Type String', gender:'BOY or GIRL'}, ...]
```

2. `/api/room/all` - To Get all the rooms
```
Request Type: GET
Response: [{id:'Type String', type:'CLEANING or REPAIR', block:'A or B or C or D', incharge:, time:'Type String', gender:'BOY or GIRL'}, ...]
```

3. `/api/room/` - To add new room
```
Request Type: POST
Request Body: {id:'Type String', type:'CLEANING or REPAIR', block:'A or B or C or D', incharge:, time:'Type String', gender:'BOY or GIRL'}
Response: { success: true, message: 'Room has been created.' }
```

4. `/api/room/:_id` - To delete a room with ID `:_id`
```
Request Type: DELETE
Response: { succes: true, message: 'Room has been deleted.' }
```

### Endpoints for `/api/staff`:

1. `/api/staff/` -  To get all the staff details
```
Request Type: GET
Response: [{name: 'Type String', occupation: 'Type String', mobile: 'type String', isAvailable: 'true or false'}]
```

2. `/api/staff/` - To add the staff details
```
Request Type: POST
Request Body: {name: 'Type String', occupation: 'Type String', mobile: 'type String', isAvailable: 'true or false'}
Response: { success: true, message: 'Staff has been saved.' }
```

3. `/api/staff/:_id` - To delete a staff with ID `:_id`
```
Request Type: DELETE
Response: { success: true, message: 'Staff has been deleted.' }
```

4. `/api/staff/availability/:id` - To Change Staff's availability with ID `:id`
```
Request Type: PUT
Request Body: { isAvailable: 'true or false'}
Response: { message: 'Staff availability has been updated.', success: true }
```

### Note: By default the mongo id for records is also being sent in GET requests.
