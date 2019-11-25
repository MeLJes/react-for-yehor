class Person {
  constructor (name, age = 25) {
    this.name = name
    this.age = age
  }

  say () {
    console.log(`Hello, my name is ${this.name} and my age is ${this.age}`)
  }
}

class Employee extends Person {
  constructor (name, age, profession) {
    super(name, age)
    this.profession = profession
  }

  say () {
    console.log(`Employeeeeee! Age: ${this.age}, profession: ${this.profession}`)

    return this.name
  }
}

let y = new Employee('Yurii', 27, 'teacher')

console.log('=====', y.say())



class Jira {
  constructor (user) {
    this.user = user
  }

  async getProjects () {
    return this._fetch('/api/projects')
  }

  async getIssue (id) {
    return this._fetch(`/api/issue/${id}`)
  }

  async _fetch (pathname) {
    try {
      let response = await fetch(`${this.user.site}/${pathname}`, {
        headers: { Authorization: this.user.accessToken }
      })
      let data = await response.json()

      return data
    } catch (error) {
      console.error(`Something went wrong when calling Jira ${pathname}`, error)
    }
  }
}


let jira = new Jira({ accessToken: 'shhh-secret', site: 'https://test.com'})

let projects = await jira.getProjects()
