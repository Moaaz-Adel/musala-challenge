<div id="top"></div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#About-the-Challenge">About The Challenge</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#Run-Tests">Run Tests</a></li>
        <li><a href="#Scenarios">Scenarios</a></li>
        <li><a href="#Challenges">Challenges</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Musala Challenge 🤖

![image](https://avatars.githubusercontent.com/u/19668691?s=280&v=4)


### Built With

* [JavaScript](https://www.javascript.com/)
* [Cypress](https://www.cypress.io/)
* [Mocha](https://mochajs.org/)
* [Chai Assertions](https://chaijs.org/)
* [Allure Reports](https://docs.qameta.io/)
* [Sorry Sypress](https://docs.sorry-cypress.dev)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites


1. Clone this repo inside any directory
   ```sh
   git clone https://github.com/Moaz-Adel/musala-challenge.git
   ```
2. Change current directory to be inside the cloned repo
   ```sh
   cd musala-challenge
   ```
3. Install 
    ```sh
   npm i
   ```

## Run-Tests

### Run Tests Sequentailly
* After installing Prerequisites, just run the follwoing command inside the directory

#### Run in Chrome (Headless)
   ```sh
   npm run test:chrome
   ```
OR
#### Run in Firefox (Headless)
   ```sh
   npm run test:firefox
   ```
### Run Tests in Parallel
That require some dependencies as follwoing:
1. run this command to up the dashboard which is required to activate parallization feature:
   ```sh
   sudo docker-compose.minio.yml
   ```
2. run this in multiple terminal windows at the same time (Whichever the number of paralled session needed)
```sh
   # run in each terminal
    CYPRESS_API_URL="http://localhost:1234/" npx cy2 run --parallel --record --key musala --ci-build-id same-id --env allure=true
   ```

   Note: configure the "same-id" and put it the same at all termianal windows
   -----------------
   
### After testing finishes, a report will be opened automatically like the following

![image](https://user-images.githubusercontent.com/66737098/162593109-5992053f-14af-4bb1-bcda-3500526876ad.png)

Note: Two Reports will be generated:
1. First one is Allure-Report and can be generated using this command 
  ```sh
   sudo docker-compose.minio.yml up
   ```
2. Mocha Awesome Report: found at /cypress/reports/html

And All reports includes videos and screenshots

Note: You can generate an HTML report using the following Command:
```sh
   allure serve
   ```

-----------------

### Pages found at:

```
/cypress/pages/
```

### UI Test found at:

```
/cypress/tests
```

### Configurations found at:

```
cypress.json
```


## Challenges

### Challenge #1 

Verify that error message ‘The e-mail address entered is invalid.’ appears


### Challenge #2
Verify that the correct URL (https://www.facebook.com/MusalaSoft?fref=ts) loads and verify
if the Musala Soft profile picture appears on the new page

Note: This inclues using Visual Validation for the image


### Challenge #3
Upload a CV document, and click ‘Send’ button
Verify shown error messages (e.g. The field is required, The e-mail address entered is invalid
etc.)

### Challenge #3
Print in the console the list with available positions by city

  
-------------------
## Notes:

> All interactions are configured refactored to include

> "Retries" to decrease Flakeness

> The refactored methods are documented for ease of use 

> Following Page Object Model Design Pattern

> Following Coding Standards and Best Practices
--------------------------------
  


<p align="right">(<a href="#top">back to top</a>)</p>


## 🤖 Thanks and Happy Testing 🐞

