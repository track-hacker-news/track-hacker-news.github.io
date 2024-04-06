---
layout: default
---

# Track HN

## about

Track HN ([track-hacker-news.com](https://track-hacker-news.com)) is a project to track, archive, visualize and analyze data from [Hacker News](https://news.ycombinator.com/).

Maintained by [Nami W](https://nami.land/). Database sponsored by [Retool](https://retool.com/).

## features

- complete and up-to-date dataset
- additional fields like URL HTTP status
- score, rank and comments count history
- interactive dashboard

## sample live data - score/rank/comments history for current top stories

{% for story in site.data.stories.stories %}
  {% include story.md story_index=forloop.index0 story_data=story %}
{% endfor %}

<script type="module">
  {% include charts.js %}
</script>

## dashboard

TODO

## components

This projects consists of several components. I'm working on open sourcing most of them.

- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg" width="16" style="display: inline-block" /> a service to track and archive data
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" width="16" style="display: inline-block" /> a database to store and search data
- <img src="assets/retool.svg" width="16" style="display: inline-block" /> a dashboard build with retool
- <img src="assets/chrome-web-store.svg" width="16" style="display: inline-block" /> a chrome extension to add score/rank history chart to HN website
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" width="16" style="display: inline-block" /> an automate twitter/x bot

## posts/reports

- [Track HN: analyze the survival rate of 120,396 Show HN stories (June 2023)](https://nami.land/2023/06/11/track-hn-analyze-survival-rate-of-120-396-show-hn-posts-june-2023.html)

## help needed

Retool kindly sponsors a postgres instance. I'm still looking for sponsors for the computing resources. If you are interested, please [contact me](mailto:me@nami.land).

## feedbacks

TODO feedbacks -> github discussions
