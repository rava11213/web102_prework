# WEB102 Prework - *Sea Monster Crowdfunding*

Submitted by: **Tong Wu**

**Sea Monster Crowdfunding** is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed:

* [ ] The introduction section explains the background of the company and how many games remain unfunded.
* [ ] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [ ] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [ ] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

* [ ] List anything else that you can get done to improve the app functionality!

## Video Walkthrough

Here's a walkthrough of implemented features:
https://drive.google.com/file/d/13h1qTEsb9DcNqAh-ERaGuq7piqXUcZcy/view?usp=sharing

## Notes

Describe any challenges encountered while building the app.

One of the main challenges was dynamically filtering and updating the list of games without reloading the page. Initially, I forgot to clear out the previously displayed game elements before adding new ones, which caused the games to keep stacking up each time a filter button was clicked. I resolved this by implementing a deleteChildElements function to clear the container before adding new content.

Another challenge was working with ES6 features like the spread operator and destructuring. I had to carefully test and debug to ensure the top-funded and runner-up games were being accurately identified and displayed. Finally, integrating and testing event listeners for all buttons took some trial and error, especially making sure each one responded correctly and updated the DOM without breaking the layout.
## License

    Copyright [Tong Wu]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
