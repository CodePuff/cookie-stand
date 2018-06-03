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

### Assignment Overview: Lab 9

Continue working on the functionality of your **sales.html** page if you do not have it working 100% yet, including the row of totals across the bottom.

Here's your other tasks for this lab:

- Style up the public facing page (**index.html**) to make it appealing to customers. NOTE: You **must** use all of the images in the adjacent asset directory. Your client insists that you use Every. Single. One.
- Your public-facing **index.html** page should have all of the things you'd expect such a page to have for such a business: locations with addresses, hours open, contact information, and so us. Just do mockups of these things since this is not a real business, of course.
- You can also mock up references (either links or little sections on the **index.html** page) for things like About Us (company history and mission), Merchandise (sales of t-shirts, mugs, stickers, etc.), links to salmon events like the Salmon Days in Issaquah, etc.

- Apply a similar style to the **sales.html** page.

	### Stretch Goals (Not required! Do any one of them, as many as you want, or none)

- Add the ability for your users to choose among multiple display or color profiles for the page. Clicking a button should allow them to choose (for instance) whether the text is dark on a light background, or the text is light on a dark background. You can also experiment with changing up the style: make a version of your display that mimics a newspaper, or an Excel spreadsheet, or Roman chiseling in stone. (But make sure the user can choose a more normal style, too!) You can also experiment with using a `select` input to choose the style.

- Give your input form functionality to update the data for a location that is already in the table. This is going to require some additional pieces, such as:
	- Some kind of `if` statement to test whether the inputted cookie stand location name matches one that is already in the table (or other mechanism to indicate which location to update)
	- The new input numbers need to be run through the calculation methods as with the original creation of the instances

- Make a style guide, using [this one that a team Brian was on made for Everlast](http://everlast.com/style-guide) as a model.

- Make two additional pages:
	- Mock up an order form that would be public facing (**store.html**) so that visitors to the website can order salmon cookies and swag. That form would need to receive all of the things you'd expect on an order form: name, address, payment info, products to order, quantities, special instructions, and so on.
	- A second 'private' page (**order-processing.html**) that shows a list of pending orders and the individual order details. The business owner can then process the orders by clicking a button next to the order that then moves that list item to a 'Filled Orders' list at the bottom of the page.