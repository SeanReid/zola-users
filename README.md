Part 1: Grid of Users Page
Create a page that displays a grid of information about a group of people. Please use an established front­end JS framework like React or Angular. There isn’t a requirement for any particular styling besides those mentioned below, but make it easy to follow. Please treat this as production level code by using best practices, comments, and documentation.
By default, the grid should display the data in the order that is is received. Each person must be displayed in a rectangle with a black border of 2px and display 3 per row on desktop (no need to make responsive). The name will be an h2 of size 16px and bold, the age will be 12px and italic, and the category will be 12 px and regular. The priority will be displayed as a background color:
● 1 ­ Orange
● 2 ­ Green
● 3­Blue
● 4 ­ Purple
You will then create the following sorts and filters:
● Sorts ­ chosen from a select.
○ Featured ­ the default sort (no sort)
○ A­Z: Alphabetically ascending by name ○ Priority: Listed in ascending order
● Filters ­ chosen by radio buttons for each type of filter. When a filter is selected, only the matching people are displayed. The non­matching should not be rendered.
○ Category ­ show the unique categories present in the initial set of data. Do not hardcode this.
If you are looking for inspiration or clarification, this is a very simplified version of Zola’s product listing pages: https://www.zola.com/shop/category/decor