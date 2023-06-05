# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: I think you would have to generate a migration and change the controller?

Researched answer: You would definitley need to create a migration, you would use cohort:references, and add cohort_id as a foreign key to the column. cohort_id would be on the student model to establish connection with the Student model.

2. Which RESTful routes must always be passed params? Why?

Your answer: POST, PUT, DELETE because each one modifies or destroys data.

Researched answer:  The above is correct, however i did not know that GET could also use parameters to filter results. 

3. Name three rails generator commands. What is created by each?

Your answer: rails g model (creates a model), rails g cntroller (creates a controller for the model) and rails g migration (generates a migration to modify the database schema)

Researched answer: there are a TON of different generator commands.  I found rails g helper to be pretty useful because it creates a helper file which allows you to create helper methods.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Method - Index
Action - would get a list of all the students 

action: "POST" location: /students
Method - Create
Action - would create a new student based on data entered

action: "GET" location: /students/new
Method - New
Action - would render a new form to create a new student 

action: "GET" location: /students/2
Method - show
Action - would display all the data related to the student with the id of 2

action: "GET" location: /students/2/edit
Method - edit
Action - render a form to edit the data of the student with the id of 2

action: "PATCH" location: /students/2
Method - update
Action - allows the data of student with the id of 2 to be updated

action: "DELETE" location: /students/2
Method - destroy
Action - deletes student with a id of 2 from the database.  

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

1. As a user, I want to add a new task to my to-do list by entering a title and description.

2. As a user, I want to see a list of all my tasks displayed on the screen.

3. As a user, I want to be able to mark a task as completed when I have finished it.

4. As a user, I want to be able to edit the details of a task, such as the title or description.

5. As a user, I want to be able to delete a task from my to-do list when I no longer need it.

6. As a user, I want to be able to prioritize tasks by setting due dates or assigning levels of importance.

7. As a user, I want to be able to group tasks into different categories or lists for better organization.

8. As a user, I want to be able to search for specific tasks by their title or description.

9. As a user, I want to receive reminders or notifications for important tasks at specified times.

10. As a user, I want to be able to track my progress by seeing the number of completed tasks compared to total tasks.

STRETCH: Dress it up with some nice tailwind CSS or bootstrap.  