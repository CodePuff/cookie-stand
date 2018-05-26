# cookie-stand
201n11 Salmon Cookie Project Lab6

# Assignment Overview: Lab 6

In class, we learned how to model an entity in JavaScript using objects. Now, it's your turn to start building an application that models the problem domain in the support doc linked in *Helpful Resources*.

You will also simultaneously be working with more specific style and design concepts through this assignment.

*Before writing a single line of code, be sure that you have a new repository (with a README!) called cookie-stand, and do your work in that directory. Each day you'll be working in separate branches. Once the repo is initialized and set up today, switch to a new branch for your work. Branch names can be whatever you want; it is suggested that you use some sort of standard organization such as `day-feature` for the branch name, such as `tue-models`.*

Include in your repository a `.eslintrc.json` file whose contents are copied from the `eslintrc.json` file in the class repository.

---

### User Stories (MVP)
 - As a user, I want a webpage that displays individual store data for my Salmon Cookie Shops, so that I can be informed about how to run my business
 - As a developer, I want to represent the store data in a list format on the webpage, so my client can view the information
 - As a developer, I want to use object-oriented programming to build this site, so that the site will be more effective and the code will be easier to read and understand

### Technical Requirements
 - New repository properly set up with a license and README, and cloned to local machine
 - Working on a non-master branch, with regular commit history
 - Good use of Object Literals **(no constructors allowed today)**; one for each store model; properties/values and methods are correctly constructed and given meaningful names
 - Main page meets requirements of the problem domain
 - Stores are correctly rendering as lists to the main page

### User Stories (Stretch... only after completing everything above)
 - As a developer, I want to make some headway on the public-facing page for the business

------------------------------

201n11 Salmon Cookie Project Lab7

# Assignment Overview: Lab 7

## Implement a Constructor Function

In class, we learned how to refactor a group of object literals by using a constructor function and creating instances.

Let's replace your object literals for the salmon cookie stands with a single constructor function that, when called with 'new', creates new instances.

Your code will end up with probably 1/4 the number of lines it had before refactoring, and every line of code you don't have is one you don't need to debug!

See pages 106-109 in your textbook for a constructor example... and especially focus on 108 and 109. Also refer to the demo code from class that showed how we can view a constructor function as a translation of an object literal.

## Replace the Lists with a Table

We will also be replacing the lists of data for each store, and building a **single table of data** instead! Tables are much easier to read than lists, and presenting data in a table makes analysis more intuitive and comprehensive.

What numbers should go into a table? Your client, Pat, has reviewed the lists of data you dutifully provided in the previous assignment, and has decided that's actually not the best way to view the information. Here's what Jo wants:

- A table to show the total amount of projected cookie needs at each location, with the table displaying the cookie stand location, the total number of cookies needed for each location, an hourly breakdown of total cookies sales for each location, and [STRETCH GOAL] a row of totals for each column.
- Here's what it should look like, in general (this example is for structural and layout purposes only, since you can style the table however you want):

### Cookies Needed By Location Each Day

|                | 6:00am | 7:00am | 8:00am | 9:00am | 10:00am | 11:00am | 12:00pm | 1:00pm | 2:00pm | 3:00pm | 4:00pm | 5:00pm | 6:00pm | 7:00pm | Daily Location Total
|------------------------|-------|--------|--------|--------|--------|---------|---------|---------|--------|--------|--------|--------|--------|--------|--------|
| 1st and Pike      |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| SeaTac Airport           |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Seattle Center |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Capitol Hill       |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Alki        |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Totals                 |       |        |        |        |        |         |         |         |        |        |        |        |        |        |


## User Stories (MVP)
- As a developer, I want to implement a constructor function, so that I can reuse code and eliminate much of the duplication in my JavaScript
- As a user, I want cookie sales data represented in tables rather than lists

## Technical Requirements
- Good use of a constructor function; style and syntax are correctly implemented
- Each cookie stand location should have a separate render() method that creates and appends its row to the table
- The header row and footer row are each created in their own stand-alone function
- Duplicate code has been removed and DRY principles are evident
- Working on a non-master branch for the day, with regular commit history. Basically, every time you get something to work, you should do a commit. But you only need to push every couple of hours or so, tops.

## User Stories (Stretch... NOT REQUIRED)
- As a developer, I will continue to work on design aspects of the public-facing page.
- As a developer, to facilitate design work, I will build a style guide.
- As a developer, to demonstrate to my client my ability to add value, I will create a second table that will help Jo manage staffing. Using the basic rubric that single Salmon Cookie Tosser can serve 20 customers per hour, and that each location should have a minimum of two Salmon Cookie Tossers on shift at all times, calculate how many Salmon Cookie Tossers are needed at each location each hour.