# PUI_A8

## A.  IMPORTANT LINKS
Walkthrough Video: 
Link to YOUTUBE

Figma Prototypes: https://www.figma.com/file/m6y2yiFAOZpL1PMILn5926/PUI_jgarwood_final?node-id=2%3A7 

Hosted Prototype: https://jasontgarwood.github.io/PUI_A8/index.html 

Github: https://github.com/jasontgarwood/PUI_A8 

## B. DESCRIPTION
This website is an online, visual-arts gallery that gives a quick sample of work and an overview of the artist. As such, the emphasis is on showing the work in a simple and engaging manner. The gallery features images from several different projects in tandem with an interactive, animated background.

For this project, It is key to be work-focused. As a visual arts gallery, the images are the first introduction to the project. After clicking the project image, a new page displays the work larger and provided details such as the title of the piece and a brief description of the work. Additionally, the website provides insight about the artist with an about page that provides a short bio with personal resources such as contact information and a link to a larger portfolio sample.

To have the experience of this gallery be engaging, the background becomes an interactive animation using the fluid.js library. Swirling with colors when the user clicks (or presses SPACE), the user can make their own dynamic art while viewing the work.

The target audience is fellow visual artists who are looking to see different types of work and learn from one another. This includes students and art aficionados. As a tool for showing off work, this project could be expanded to show more projects and different creations.

## C. USING THE WEBSITE

Switching between the gallery and about pages
-Fixed location menu, click.
-On the stationary navigation bar (lefthand side of the screen) click on “about” to see the about page and “gallery” to see the gallery page. The text style on the navigation bar will update to show what page the user currently has selected and which is clickable.

Viewing a project detail page
-Button/image, click.
-On the gallery page, hover over an image to see it with full opacity, click it to open its respective detail page
Closing a project detail page
Button/image, click.
On the detail page, click the “X” button on the top right of the screen to return to the gallery page. The “X” button will turn red while hovering to let the user know it is clickable.
Interacting with the animated canvas
Canvas, space bar, click and drag.
On the gallery or about page, press the space bar to generate a red blob on the canvas. Additionally, the user can click and drag anywhere on the empty canvas space to generate an interactive fluid animation.

## D. EXTERNAL LIBRARIES
Bootstrap
https://getbootstrap.com/ 

Fluid.JS
https://github.com/malik-tillman/Fluid-JS 

I chose the Fluid.JS ibrary because it can be both subtle and extremely interactive. This gives users the ability to focus on the work and playfully engage with the website. The fluid simulations also carry the themes of computational logic and abstract design shared by the work itself.

Using the library, this design applies the fluid simulation to a canvas element with the id renderSurface on both the gallery (index) and about page. Using this ID allows the code to call style and js functions to render the animation. On the gallery page the animation serves as the background and on the about page it becomes a more focal play space.

Together with bootstrap the animation adds responsive interactivity that layers a clean organization strategy with a free flowing animation. These libraries add personality, tone, and experiential value to the design. 

## E. ITERATION FROM A7
Many of the iterations made during implementation were minor style and organizational changes. For example, the gallery images were resized so the interactive background could play a larger role in the user experience. Additionally, the about page now includes more information such as the link to a larger collection of work for those interested. 


## F. MAJOR CHALLENGES
A few major challenges during the creation of this prototype are as follows:
Keeping the interactive background responsive within the bootstrap grid system
Solved with z-index and responsive style units. 
Creating a detail page for each artwork without needing to mass-produce HTML files
Solved with a JS object array.
Keeping the animated canvas interactive while underneath other HTML elements
Solved with careful element positioning and responsive design.

## G. CITATIONS AND THANK YOU
Completed as part of 05-430, Programming User Interfaces at CMU Special thanks to the peer reviewers, Julia Cambre and Vikram Kamath (TA) for all the help! This was my first experience using JS libraries, Bootstrap, and more.
