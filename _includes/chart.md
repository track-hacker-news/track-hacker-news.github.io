<!-- {{include.story_index}}
{{include.story_data | jsonify}}
 -->

### {{include.story_data.id}} - {{include.story_data.title}}

<div id="sample-score-chart-{{include.story_index}}"></div>

<!-- TODO async data loading -->
<script type="text/javascript">
  const spec{{include.story_index}} = {
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
          values: {{ include.story_data.scorestamps | jsonify }}
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
          ]
        }
      },
      {
        data: {
          name: "comments_count_stamps",
          values: {{ include.story_data.descendants_count_stamps | jsonify }}
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
          ]
        }
      },
      {
        data: {
          name: "rankstamps",
          values: {{ include.story_data.rankstamps | jsonify }}
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

  vegaEmbed('#sample-score-chart-{{include.story_index}}', spec{{include.story_index}}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

  console.log("chart{{include.story_index}}", spec{{include.story_index}})
  console.log({{include.story_data | jsonify }})
</script>
