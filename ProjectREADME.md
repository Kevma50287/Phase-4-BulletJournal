# BulletJournal: Reach

Reach is bullet journal designed so that you can quickly and easily record activities, journal entries, and moods throughout the day. 

BONUS: User's will get a random motivational message/video to jumpstart their day or soothing music for those calm evning while writing

---
## Features

The follow lists the features user's of this web app will have access to:

### Essentials
1. On page load, user will be directed to a login and signup page where they will be authenticated and authorized
2. The user will be able to submit journal entries that track their mood, activities, and any other info they want to include for that day
3. There will be a calendar with icons on each day that vary depending on what the user has inputted. The user can navigate their posts through the calendar view or through the searc icon in the header


### Non-Essentials
1. Users can change the theme of their journal, their password, and other settings/personal info
2. A Stats page to keep track of useful trends and stats of the user (average mood for example)
3. Users can change the icons, shape of the pages, and the acitvity icons. Personalization of the application

---

## Libraries/Tools

This project is bootstrapped using the following technologies

### Front End
1. React.js w/ Redux and Native
2. TypeScript
3. SCSS

### Back End
1. Ruby on Rails 
2. BCrypt/Devise for User Auth
3. PostGreSQL

### Bonus
1. Node.js w/ Next & Express & Nest

---
# PLANNING: -- TO DELETE BEFORE FINALIZATION --

## DO KNOW
1. React
2. RoR
3. BCrypt


## DON'T KNOW

1. Redux
2. Native
3. Typescript
4. SCSS
5. PostgreSQL
6. Devise

---

# Database Diagram and Relationships

## MVP
---
<br>
<br>

# ROUTES

## USERS

<br>

### POST 'users#create'
Send this:

>{  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user: {  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;username:"",  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;password:"",  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;password_confirmation:"",  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email:"",  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;phone_number:"",  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;first_name:"",  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;last_name:"",  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}  
}

Returns this:

>{  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user: {  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;userObj...  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;jwt: 'string'  
}

<br>

### GET 'users#profile'

Returns this:
>{  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user:  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;userObj...  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;journal_entries: {all entries}
      }  
}

<br>

## Journal_Entries

GET '/journal_entries#index'

Returns this:
>{  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;journal_entries: [{  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;date:"",  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;emotion:"",  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;entry:"",  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;activities: ["", ""]
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}]  
}

POST  '/journal_entries'

DELETE '/journal_entries/:id'

PATCH '/journal_entries/:id'

<br>

## Journals

GET '/journal#index'

Returns this:
>{  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;journal: [{  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name:""  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  }]  
}

POST '/journal'

DELETE '/journal/:id'











