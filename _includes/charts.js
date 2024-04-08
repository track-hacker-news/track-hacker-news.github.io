const data = await (await fetch("data/stories.json")).json()

data.stories.forEach((story, i) => {
  const divId = `sample-story-chart-${i}`
  const chart = echarts.init(document.getElementById(divId))
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
})
