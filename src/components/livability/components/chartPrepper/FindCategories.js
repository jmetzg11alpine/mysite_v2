const get_city_stats = (city, data) => {
  for (let i in data) {
    if (data[i]['Name'] === city) {
      return data[i]
    }
  }
}

const get_categories = (city_info, stats, data) => {
  let fit = { category: [], score: [], direction: [] }
  let no_fit = { category: [], score: [], direction: [] }
  for (let i in stats) {
    let category = stats[i]['category']
    let mean = stats[i]['mean']
    let std = stats[i]['std']
    let city_value = city_info[category]

    let [score, direction] = get_score(city_value, mean, std)

    fill_fit(fit, score, category, direction)
    fill_no_fit(no_fit, score, category, direction)
  }
  return [fit, no_fit, city_info, data]
}

const get_score = (city_value, mean, std) => {
  let raw_score = Math.abs(mean - city_value)
  let score = raw_score / std
  let direction = 0
  if (city_value > mean) {
    direction = 1
  }
  return [score, direction]
}

const fill_fit = (fit, score, category, direction) => {
  if (fit.category.length < 3) {
    fit.category.push(category)
    fit.score.push(score)
    fit.direction.push(direction)
  } else {
    let max_index = find_max(fit.score)
    if (fit.score[max_index] > score) {
      fit.score[max_index] = score
      fit.category[max_index] = category
      fit.direction[max_index] = direction
    }
  }
}

const find_max = (array) => {
  let max_value = array[0]
  let max_index = 0
  for (let i = 1; i < 3; i++) {
    if (array[i] > max_value) {
      max_value = array[i]
      max_index = i
    }
  }
  return max_index
}

const fill_no_fit = (no_fit, score, category, direction) => {
  if (no_fit.category.length < 3) {
    no_fit.category.push(category)
    no_fit.score.push(score)
    no_fit.direction.push(direction)
  } else {
    let min_index = find_min(no_fit.score)
    if (no_fit.score[min_index] < score) {
      no_fit.score[min_index] = score
      no_fit.category[min_index] = category
      no_fit.direction[min_index] = direction
    }
  }
}

const find_min = (array) => {
  let min_value = array[0]
  let min_index = 0
  for (let i = 1; i < 3; i++) {
    if (array[i] < min_value) {
      min_value = array[i]
      min_index = i
    }
  }
  return min_index
}

const FindCategories = (city, data, stats) => {
  let city_info = get_city_stats(city, data)
  // return fit no_fit city_info data
  return get_categories(city_info, stats, data)
}

export default FindCategories
