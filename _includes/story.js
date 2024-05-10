// https://www.joshwcomeau.com/snippets/javascript/debounce/
const debounce = (callback, wait) => {
  let timeoutId = null
  return (...args) => {
    window.clearTimeout(timeoutId)
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args)
    }, wait)
  }
}

const renderChart = (element, data) => {
  const story = data
  const chart = echarts.init(element)
  const option = {
    dataset: [
      // 0 - scores
      {
        dimensions: ['tracked_at', 'score'],
        source: story.scorestamps,
      },
      // 1 - scores, sorted
      {
        fromDatasetIndex: 0,
        transform: {
          type: 'sort',
          config: { dimension: 'tracked_at', order: 'asc' }
        },
      },

      // 2 - comments count
      {
        dimensions: ['tracked_at', 'count'],
        source: story.descendants_count_stamps,
      },
      // 3 - comments count, sorted
      {
        fromDatasetIndex: 2,
        transform: {
          type: 'sort',
          config: { dimension: 'tracked_at', order: 'asc' }
        },
      },

      // 4 - rank
      {
        dimensions: ['tracked_at', 'rank'],
        source: story.rankstamps,
      },
      // 5 - rank, sorted
      {
        fromDatasetIndex: 4,
        transform: {
          type: 'sort',
          config: { dimension: 'tracked_at', order: 'asc' }
        },
      },
    ],
    // title: {
    //   text: ''
    // },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['score', 'comments count', 'rank']
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'time',
    },
    yAxis: [
      {
        type: 'value'
      },
      {
        type: 'value',
        splitLine: {
          show: false
        },
        inverse: true,
      }
    ],
    series: [
      {
        name: 'score',
        type: 'line',
        datasetIndex: 1,
      },
      {
        name: 'comments count',
        type: 'line',
        stack: 'Total',
        datasetIndex: 3,
      },
      {
        name: 'rank',
        type: 'line',
        datasetIndex: 5,
        yAxisIndex: 1
      }
    ]
  }
  chart.setOption(option)

  // responsive chart size
  // https://echarts.apache.org/handbook/en/concepts/chart-size#reactive-of-the-container-size
  window.addEventListener('resize', function() {
    chart.resize()
  })
}

const applyStoryId = async (storyId) => {
  // const story = await (await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)).json()
  const storyData = await (await fetch(`https://worker.track-hacker-news.com/?story=${storyId}`)).json()

  // get components
  const title = document.querySelector("section#story a#title")
  const chart = document.querySelector("section#story #chart")

  title.href = `https://namiw.retool.com/p/track_hn-story#story_id=${storyId}`
  title.textContent = `${storyId} - ${storyData.title}`

  renderChart(chart, storyData)
}

const init = async () => {
  // fetch a trending story
  const topStoryIds = (await (await fetch("https://hacker-news.firebaseio.com/v0/topstories.json")).json()).slice(0, 30)
  const storyId = topStoryIds[Math.floor(Math.random() * topStoryIds.length)]

  applyStoryId(storyId)

  const input = document.querySelector("section#story input#chart-story-id")
  input.value = `${storyId}`

  const handleStoryIdInputChange = debounce(async (event) => {
    const storyId = event.target.value
    if (!storyId) { return }
    await applyStoryId(storyId)
  }, 500)
  input.addEventListener("change", handleStoryIdInputChange)
}

init()
