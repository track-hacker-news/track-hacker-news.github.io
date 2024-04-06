const data = await (await fetch("data/stories.json")).json()
data.stories.forEach((story, i) => {
  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    description: "track-hacker-news.com",
    width: 400,
    height: 200,
    padding: 5,

    // TODO full date time and tilt?
    encoding: {
      x: {
        field: "tracked_at", type: "temporal", title: "time"
      },
    },

    layer: [
      {
        data: {
          name: "scorestamps",
          values: story.scorestamps
        },
        transform: [
          { calculate: "'score'", as: "layer" }
        ],
        mark: "line",
        encoding: {
          y: {
            field: "score",
            type: "quantitative",
            title: "score & comments count",
          },
          color: { field: "layer", type: "nominal", scheme: "category10" },
          tooltip: [
            { field: "score", type: "quantitative", title: "score" },
            { field: "tracked_at", type: "temporal", title: "time", timeUnit: "yearmonthdatehoursminutes"}
          ]
        }
      },
      {
        data: {
          name: "comments_count_stamps",
          values: story.descendants_count_stamps
        },
        transform: [
          { calculate: "'comments'", as: "layer" }
        ],
        mark: "line",
        encoding: {
          y: {
            field: "count",
            type: "quantitative",
            title: "",
            axis: {
              orient: "left",
            },
          },
          color: { field: "layer", type: "nominal", scheme: "category10" },
          tooltip: [
            { field: "count", type: "quantitative", title: "comments" },
            { field: "tracked_at", type: "temporal", title: "time", timeUnit: "yearmonthdatehoursminutes"}
          ]
        }
      },
      {
        data: {
          name: "rankstamps",
          values: story.rankstamps
        },
        transform: [
          { calculate: "'ranks'", as: "layer" }
        ],
        mark: {
          type: "line",
          point: true,
        },
        encoding: {
          y: {
            field: "rank",
            type: "quantitative",
            scale: {
              reverse: true,
              // domainMin: 1,
            },
            tickMinStep: 1
          },
          color: { field: "layer", type: "nominal", scheme: "category10" },
          tooltip: [
            { field: "rank", type: "quantitative", title: "rank" },
            { field: "tracked_at", type: "temporal", title: "time", timeUnit: "yearmonthdatehoursminutes"}
          ]
        },
        resolve: {
          scale: {
            y: "independent"
          },
          axis: {
            y: "right",
          }
        }
      },
    ],
  }

  vegaEmbed(`#sample-story-chart-${i}`, spec).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
})
