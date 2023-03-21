let otherList = [];

const htmlElement = document.getElementById("projects")

async function getGitHubRepos () {
    let value = await fetch("https://api.github.com/users/kswelder/repos",{
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
    .then(response => response.json())
    console.log(value)
    otherList = value;

    if (otherList !== null && otherList.length > 1) {
	document.getElementById('loader').style.display = 'none'
        otherList.map(value => {
            let element = document.createElement('li')
            let div = document.createElement('div')
            let child_p = document.createElement('p')
            let child_a = document.createElement('a')

            child_a.innerHTML = value.name
            child_a.href = value.html_url
            child_a.target = '_blank'

            if(value.language == "CSS") {
              child_p.innerHTML = 'Language: Typescript'
            }
            else {
              child_p.innerHTML = 'Language: ' + value.language
            }
            div.appendChild(child_p)
            div.appendChild(child_a)
            element.appendChild(div)

            htmlElement.appendChild(element)
        })
    }
    else {
	document.getElementById('loader').style.display = block
    }
}

getGitHubRepos()
