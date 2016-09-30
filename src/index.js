const inquirer = require('inquirer')
const Rx = require('rxjs/Rx')

const log = function (answers) {
  console.log(answers)
}

const complete = function () {
  console.log('complete')
}

const prompts = Rx.Observable.create(function (obs) {
  log(obs)
  obs.next(
    {
      type: 'input',
      name: 'howdy',
      message: 'howdy'
    }
  )

  obs.next(
    {
      type: 'input',
      name: 'okee',
      message: 'okee'
    }
  )

  obs.complete()
})

prompts.subscribe(log, log, complete)
inquirer.prompt(prompts)
inquirer.run()

/*
const questions = [
  {
    type: 'editor',
    name: 'bio',
    message: 'Please write a short bio of at least 3 lines.',
    validate: function (text) {
      if (text.split('\n').length < 3) {
        return 'Must be at least 3 lines.'
      }

      return true
    }
  }
]

const password = [
  {
    type: 'password',
    message: 'Enter your git password',
    name: 'password'
  }
]

const ask = (obs) => {
  console.log(obs)
  console.log(questions)
  console.log(password)
  // At some point in the future, push new questions
  obs.onNext(questions)
  obs.onNext(password)

  // When you're done
  obs.onCompleted()
}

const prompts = new Rx.Observable(ask)

const log = (where, object) => {
  console.log(where + ': ' + object)
}

inquirer.prompt(prompts).process.subscribe(
  (object) => log('Answer', object),
  (object) => log('Error', object),
  (object) => log('Complete', object)
)
*/
