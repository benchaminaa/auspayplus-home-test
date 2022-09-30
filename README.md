<p align="left">
 A <a href="https://cypress.io">Cypress</a> testing framework to perform <b>UI</b> and <b>API</b> automated testing
</p>

### Prerequisites

The only requirement for this project is to have [Node.js](https://nodejs.org/en/) **version 12 or 14 and above** installed on your machine.

### Installation

```shell
npm install
```
### Start Cypress to run test manually from test runner UI.

```shell
npm run cypress open
```
### Run tests in headless mode on default browser bundled with cypress.  Create new command or use commandline options to run on different browsers using --browser parameter to the run command

```shell
npm run cypress:run:chrome
```
## UI Tests automated for url shortener
Scenario: Use default shortened url `https://bit.ly` to load the site in a browser and validates https://bitly.com/ is loaded by verifying href of loaded page's window.location object.

### Other scenarios to consider for testing
Positive Tests
1. Generate shortened url for https://bitly.com/ multiple times. Use them to verify page loaded is https://bitly.com/
2. Test with shortened urls for urls having one or multiple paths in it
3. Test with shortened urls for urls which can have parameter in it.

Negative Tests.
1. Tamper shortened url. This can include changing charaters(test with some special characters as well) in domain, path.
2. Add exta parameters to generated shortend url.

## API test automated for Cat Fact REST API https://catfact.ninja/facts
Snenario: Validates status code 200 and some response data for the GET request

### Other scenarios 
Swagger documentation for the api endpoint /facts was not working so below scenarios are based on response and general practise while testing REST api's

1. Test response /for other expected objects in response of /facts GET request.
    Expected number of default items in data object, pagination links, current pagination based on default limit of per_page 10
2. Verify type of expected attributes.
3. Verify links object data.
4. Verify with possible parameters, headers that is accepted by endpoint.
5. Verify response code for error scenarios(bad request, 0 for limit parameter, unexpected value for type of parameters etc). Error messages are clear and correct response codes retured.
6. Verify boudary conditions for parameters that takes number.
7. Verify response for diffent parameters. Say for limit(page size), max_length(number of character in facts to filter for)
8. Verify api is not throwing back any db or confidential  info in error for security related checks.
9. Verify api implements expected restriction with content type
10. Verify http verbs that can be served by an endpoint.
11. Test with unsupported methods and verify response having userfriendly error message and status code
12. Possible performance validations when large number of requests are served by api.
