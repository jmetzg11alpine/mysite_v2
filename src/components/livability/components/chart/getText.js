const getFitText = (category, city) => {
  if (category === 'income') {
    return (
      city +
      "'s wealth is nothing special. It's not a rich city like San Jose, but it's not poor like Detroit"
    )
  } else if (category === 'ufo') {
    return (
      "Aliens don't love " +
      city +
      ' like they love New York, but they like ' +
      city +
      ' more than Oakland'
    )
  } else if (category === 'temperature') {
    return (
      'Normal temperatures in ' +
      city +
      '. Not hot like Houston nor cold like Milwaukee'
    )
  } else if (category === 'crime') {
    return city + ' is more dangerous than Arlington, but safer than Oakland'
  } else if (category === 'population') {
    return (
      city +
      " isn't a rat next like New York, and isn't a yuppie village like Arlington"
    )
  } else if (category === 'air') {
    return (
      'Fresno has worse air than ' + city + ' ,but Colorado Springs has better'
    )
  } else if (category === 'parking') {
    return (
      'You can find quicker parking in Omaha, but ' +
      city +
      ' is still quicker than New York'
    )
  } else if (category === 'size') {
    return city + ' is bigger than Miami, but smaller than Jacksonville'
  } else {
    return (
      city +
      " doesn't have as many electric car stations as Los Angeles, but has more than Wichita"
    )
  }
}

const getNoFitText = (category, city, direction) => {
  if (direction === 1) {
    if (category === 'income') {
      return 'The jerks in ' + city + ' should pay more taxes'
    } else if (category === 'ufo') {
      return 'Aliens like ' + city
    } else if (category === 'temperature') {
      return city + ' is really feeling global warming'
    } else if (category === 'crime') {
      return "Don't let your children play unsupervised in " + city
    } else if (category === 'population') {
      return (
        'The school district of ' +
        city +
        ' needs to introduce a class on sex education'
      )
    } else if (category === 'air') {
      return "It's healthier to smoke cigarettes than to live in " + city
    } else if (category === 'parking') {
      return 'Lots of time is spent trying to find parking in ' + city
    } else if (category === 'size') {
      return city + ' has lots of extra land for big Americans'
    } else {
      return city + ' has lots places to charge your electric car'
    }
  } else {
    if (category === 'income') {
      return 'The poor citizens of' + city + ' struggle to pay bills'
    } else if (category === 'ufo') {
      return "Aliens don't like " + city
    } else if (category === 'temperature') {
      return city + ' can look forward to global warming'
    } else if (category === 'crime') {
      return "You don't have to lock your doors in " + city
    } else if (category === 'population') {
      return (
        'The mayor of ' +
        city +
        ' should consider programs to encourage more romance'
      )
    } else if (category === 'air') {
      return city + ' is a breath of fresh air'
    } else if (category === 'parking') {
      return 'Always good parking in ' + city
    } else if (category === 'size') {
      return 'Not much room to build houses in ' + city
    } else {
      return (
        city + " doesn't support electric cars. Not many places to charge them"
      )
    }
  }
}

const getText = (category, city, fit, direction) => {
  if (fit === 1) {
    return getFitText(category, city)
  } else {
    return getNoFitText(category, city, direction)
  }
}

export default getText
