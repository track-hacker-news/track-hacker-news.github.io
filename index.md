---
layout: default
---

# Track HN

## about

Track HN ([track-hacker-news.com](https://track-hacker-news.com)) is a project to track, archive, visualize and analyze data from [Hacker News](https://news.ycombinator.com/).

TODO

## features

- all data from epoch to current
- score, rank and comments count history

### sample live data

#### score/rank/comments history for current top stories

<div id="sample-score-history-chart"></div>

<!-- TODO async data loading -->
<script type="text/javascript">
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
          values: {{ site.data.stories_top.stories[0].scorestamps | jsonify }}
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
        }
      },
      {
        data: {
          name: "comments_count_stamps",
          values: {{ site.data.stories_top.stories[0].descendants_count_stamps | jsonify }}
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
          color: { field: "layer", type: "nominal", scheme: "category10" }
        }
      },
      {
        data: {
          name: "rankstamps",
          values: {{ site.data.stories_top.stories[0].rankstamps | jsonify }}
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
          },
          color: { field: "layer", type: "nominal", scheme: "category10" }
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

  vegaEmbed('#sample-score-history-chart', spec).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
</script>

## dashboard

## components

The projects consists of different parts

- a server to track and archive data
- a database to store data
- a dashboard build with retool
- a chrome extension to add score/rank history to HN website
- an automate twitter/x bot

## posts/reports

I've posted posts/reports:

- [TODO](TODO)

## help needed

Retool kindly sponsors a postgres instance. I'm still looking for sponsors for the computing resources.

## feedbacks

TODO feedbacks -> github discussions
