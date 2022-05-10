# Plan your day with a virtual day planner!

This simple calendar application allows you schedule and save events throughout your day.

View the deployed webpage here: https://sophia4422.github.io/day-planner/

View the github repository here: https://github.com/sophia4422/day-planner/tree/dev

# Description

This planner displays the live date and a series of time blocks to represent each hour of the working day. The text field allows the user to input a reminder for the event that will take place at each hour. When the 'save' button is pressed, this information is set to the computer's Local Storage. Refreshing the page will not remove any messages - they will stay there until they are over-written.

[Screenshot of deployed page with messages](./assets/images/messages-in-local-storage.png)

The time blocks are colour coded, with grey representing the past, red for the present and green for the future. This allows the user to determine upcoming events at a glance.

[Screenshot of deployed page](./assets/images/work-day-screenshot.png)

The page is also mobile responsive, allowing the time blocks to be viewed on any size screen.

# Technologies Used

- HTML, CSS and JavaScript
- jQuery
- Moment.js to render the date
- Bootstrap

# Future Improvements

I would like to spend more time on the design and utilize the features offered by Bootstrap. The webpage is very plain and simple.

A button to clear the current text field would be useful, rather than deleting the current message / overriding it with new text and pressing save.
