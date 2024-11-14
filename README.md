# HEART HAVEN

This project is a React application designed for a children adoption center . It provides an interactive interface for users interested in adopting children, with details on available children, the services offered, contact information, and more.

### About

Display Children Available for adoption
Each Child's Details eg: Name,Age,Height,County,Hobbies and Image
A Sign Up Form For The user
A Form that fills Data for Housing The Lost child
The Heart Haven's Abouts And Location



## Table of Contents

Project Structure
Components
Details Component
Footer Component
ChildCard Component
ChildList Component
Navbar Component
AddNewChild Component
App Component
Installation
Usage
API Requirements(db.json)

## Details Component

File: Details.js

The Details component provides information about the services offered by the adoption center. It includes a title, a list of services, and an image.

CSS File: Details.css
Image File: motherchild.jpg , image2.jpg

### Footer Component

The Footer component displays contact information, operating hours, and a note for adopters. It organizes information in a structured layout for easy access.

CSS File: Footer.css


### ChildCard Component

File: ChildCard.js

The ChildCard component displays detailed information about each child available for adoption. Each card includes the child’s name, age, height, county, hobbies, and an "Adopt" button.

CSS File: ChildCard.css
Props:
name - The name of the child.
age - The age of the child.
height - Height of the child.
county - County of residence.
hobbies - List of hobbies.
image - Profile picture of the child.


### ChildList Component

File: ChildList.js

The ChildList component fetches a list of children from a backend API (JSON server) and renders each child’s details using the ChildCard component. It handles loading and error states as well.


Displays: List of children available for adoption.


### Navbar Component

File : Navbar.js

The Navbar component contains links of:
Home
About us
Adopt a Child
Add New Child
Contacts
Sign in


### AddNewChild Component

File : AddNewChild.js

This component it is used for filling up the form for Adding a new child for catering home to the Homeless Souls


### App Component

This is the Main Component that Houses he other components

### Json data

File : db.json

It houses the local Api used 

### Technologies used
React , Bootstrap

### Acknowledgements

First: Project Backend that provides the kid's endpoint data.
Secondly : The Three GitHub collaborators
        Kibuchi : https://github.com/Kibuchi3560 
        Ian : https://github.com/Skian9299
        Kevin : https://github.com/bogeylab99
