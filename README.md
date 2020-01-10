# Feature Checker

#### To run this app, type

```javascript
npm start
```

or

```javascript
yarn start
```

#### DEMO

PROD [https://dev-release.com](https://dev-release.com)

#### LINK TO MANUAL REBUILD

[https://dev-release.herokuapp.com/plans/rebuildprod](https://dev-release.herokuapp.com/plans/rebuildprod)

#### LINK TO MANUAL RUN TESTS

[https://dev-release.herokuapp.com/plans/runtests](https://dev-release.herokuapp.com/plans/runtests)

#### TO UPDATE TEST ENVIRONMENT

```javascript
push to test branch
```

#### TO UPDATE PROD ENVIRONMENT

```
push to master branch
```

#### SECRETS

| SECRET          | DESCRIPTION                                                       |
| --------------- | ----------------------------------------------------------------- |
| GH_PAT          | Github Access Token - using in actions to get an access to GitHub |
| GIPHY_API_KEY   | Giphy Api Key - using to get GIF in LGTM                          |
| HAYUNA_HOST     | IP to server                                                      |
| HAYUNA_USERNAME | Username to server                                                |
| HAYUNA_PASSWORD | Password to server                                                |
| HAYUNA_PORT     | Server port                                                       |
| API_KEY_GOOGLE  |                                                                   |
| CSE_ID_GOOGLE   |                                                                   |

#### ENDPOINT'S

| ENDPOINT                      | METHOD    | CONSTRUCTION              | DESCRIPTION                            |
|  ---------------------------- | --------- | ------------------------- | -------------------------------------- |
| /repositories                 | POST      | BODY: NAME, BODY: ICON    | Using to save new repository in database; 'name' is a name of repository and 'icon' is a url to repository icon |
| /repositories                 | GET       | NONE                      | Using to get all saved repositories in database |
| /repositories/:repository_id  | GET       | PARAMS: TEST_ID           | Get one record from database by ID |
| /repositories/:repository_id  | PUT       | PARAMS: TEST_ID           | Get one record from database by ID and update it |
| /repositories/:repository_id  | DELETE    | PARAMS: TEST_ID           | Get one record from database by ID and delete it |
| /image                        | GET       | QUERY: SEARCH             | Send request to Google API's Search to get images from repository |
| /image                        | POST      | QUERY: URL; QUERY: NAME   | Save repository icon on server in ROOT/logos directory using url and name |

