/* Sample usage do not modify */

class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint)
            .then(response => response.json());
    }

    put(endpoint, body) {
        return this._send("put", endpoint, body);
    }

    post(endpoint, body) {
        return this._send("post", endpoint, body);
    }

    delete(endpoint, body) {
        return this._send("delete", endpoint, body);
    }

    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}

const startLoader = element => {
    element.innerHTML = `<div class="loading-spinner"></div>`;
}

const stopLoader = (element, value) => {
    element.textContent = value;
}


/* In this mini-project, you will build a page that uses the GitHub API to list the repositories of a GitHub user.
This project does not require you to log in and authenticate with the GitHub API.
However, the API has a limit of 60 requests per minute.
So, if you get an error saying: You have triggered an abuse detection mechanism.
Please wait a few minutes before you try again., then you should wait about one minute before trying again.

The goal of this project is to allow the user to enter a GitHub username (for example,
kalwar or yourgithubusername), and then when the user submits the form,
the app will show the list of GitHub repositories for that user using the GitHub API. */

/* Write your code here... */

/* 
1. click btn, goes to github api, and gives the repos of the user
2. there should be a link in the repos which would take it there
"https://api.github.com/users/{user}/repos"
 */
const submitBtn = document.querySelector('#get-repos');
const ul = document.querySelector('#repos-list')

const listMaker = (data)=> {
const list = `<li><a href="${data.svn_url}" target="_blank">${data.name}</a></li>`;
ul.insertAdjacentHTML('beforeend', list);
}

/* const getData = async() => {
    const userId = document.querySelector('#github-username').value
    let baseURL = (`https://api.github.com/users/${userId}/repos`);
    const res = await fetch(baseURL)
    const data =  res.json()
    console.log(data);
    data.forEach(item => {
        listMaker(item);
    })
} */

const getData = () => {
    const userId = document.querySelector('#github-username').value;
    let baseURL = (`https://api.github.com/users/${userId}/repos`);
    fetch(baseURL).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
        data.forEach(item => {
            listMaker(item);
        })
    })
}
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getData();
})