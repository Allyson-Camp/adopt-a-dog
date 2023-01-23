# Supabase Dog Adoption App

Use [this template](https://github.com/alchemycodelab/half-baked-web-01-adopt-a-dog) for this deliverable.

## Learning Objectives

-   Draw a simple architecture diagram describing the relationship between a user's computer and a single RESTful API.
-   On load, use fetch and async/await to hit a GET endpoint, get all items, and set state and update the view using the response.
-   In front end apps with asynchronous behavior, use the network tab to examine (and debug) the request being sent to a server and the response received from a server.

Here is the model for the `dogs` table

![model of dogs table](./data-model.png)

## Joining Tables

Note that the `breeds` for all dogs live in a `breeds` table, joined using `breed_id` on the dog.

```js
// here's an example using tabletop games instead of dogs
export async function getGameById(id) {
    const { data, error } = await client
        .from('tabletop_games')
        .select(`
            *,
            designers (name)
          `)
        .eq('id', id)
        .single();

    if (error) console.error(error);

    return data;
}
```

### Live Example:

https://alchemycodelab.github.io/web-01-adopt-a-dog/

### Description

For this deliverable you have been given a supabase database and some render functions. Your job is to add the code in `fetch-utils.js`, `render-utils.js`, `app.js` and `detail.js` to render the list of animals and the details page.

## Rubric

The following is required for your assignment to be graded:

-   PR open from `dev` to `main`
-   PR Passes CI (lint + tests)
-   PR preview on netlify
-   At least 4 commits, for each working feature

| Tasks...                                                                                       | **10** |
| ---------------------------------------------------------------------------------------------- | ------ |
| ASYNC: `getDogs()` : return array of dogs from supabase                                        | 1      |
| On load on the home page, see a list of dogs (names and breed image), fetched from supabase    | 2      |
| On clicking a dog, user should be taken to that dog's detail page.                             | 2      |
| ASYNC: `getDog(id)` : return single dog from supabase                                          | 1      |
| Detail page should get the id from the URL and use that id to fetch that dog from supabase.    | 2      |
| Detail page should show the user details about the dog (including age, breed, and description) | 2      |

## notes
- linked table is dog_breeds and correlates to breed_id in the main table


## slices to work on
- main page on load:
    - list of all dogs 

-detail page on load:
    - details about 1 dog

## events
- main page load window.eventlistener('load')
    - get all data from supabase
    - put it into state
    - loop through names in state (refactor into render function)
        - render each game as a div and append them to html skeleton (section it is in that we appended ot the dom)
    - refactor into display function

- dog detail page
    - anchor tag w/ href takes to the new page on load
    - select a specific id from supabase
    - put the data into state
    Const data - new URLSearchParams(window.location.search);
    - Const id = data.get(‘id’) //we need to add id to the url in our anchor te=ag on the list page <a href=`..detail/?id=${idInSupabase}`>
    - Use fetched data to display text on detail page
