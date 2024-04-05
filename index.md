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

## live data - score/rank/comments history for current top stories

{% for story in site.data.stories_top.stories %}
  {% include chart.md story_index=forloop.index story_data=story %}
{% endfor %}

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
