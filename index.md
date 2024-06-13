---
layout: default
---

# Track HN

## about

Track HN ([track-hacker-news.com](https://track-hacker-news.com)) is a project to track, archive, visualize and analyze data from [Hacker News](https://news.ycombinator.com/).

Created by [Nami W](https://nami.land/).

## features

- complete and up-to-date dataset
- score, rank and comments count history
- additional data like URL HTTP status
- API service
- interactive dashboard

## live data demo - story score and rank history

{% include story.html %}

<script type="module">
  {% include story.js %}
</script>

## browser extension

<a href="https://chromewebstore.google.com/detail/track-hn/mkckmjhojegdmnplcjpndnjmcncfbdpg" target="_blank">
  <img src="https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/tbyBjqi7Zu733AAKA5n4.png" style="margin:unset">
</a>

I've created a browser extension to add score/rank history chart to HN website.

{% include figure.html
  src="ext screenshot.png"
  alt="Track HN Browser Extension"
  caption="Track HN Browser Extension"
  maxwidth="640px"
  url="https://chromewebstore.google.com/detail/track-hn/mkckmjhojegdmnplcjpndnjmcncfbdpg"
%}

## dashboards

I've publicized several dashboards to help analyze the data, here are some of them:

### [Stories Data Overview](https://namiw.retool.com/p/track_hn-stories)

{% include figure.html
  src="track_hn_retool_stories_screenshot.opt.png"
  alt="Stories Data Overview"
  caption="Single Stories Data Overview"
  maxwidth="640px"
  url="https://namiw.retool.com/p/track_hn-stories"
%}

### [Single Story Analysis](https://namiw.retool.com/p/track_hn-story)

{% include figure.html
  src="track_hn_retool_story_screenshot.opt.png"
  alt="Single Story Analysis"
  caption="Single Story Analysis"
  maxwidth="640px"
  url="https://namiw.retool.com/p/track_hn-story"
%}

## components & stacks

This projects consists of several components, some are WIP. I'm working on publishing and open sourcing most of them.

- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg" width="16" style="display: inline-block" /> a service to track data and provide API
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" width="16" style="display: inline-block" /> a database to store and search data
- <img src="assets/retool.svg" width="16" style="display: inline-block" /> [dashboards built with Retool](https://namiw.retool.com/p/track_hn-stories)
- <img src="assets/chrome-web-store.svg" width="16" style="display: inline-block" /> [a browser extension](https://chromewebstore.google.com/detail/track-hn/mkckmjhojegdmnplcjpndnjmcncfbdpg) to add score/rank history chart to HN website
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" width="16" style="display: inline-block" /> an automate twitter/x bot to tweet about latest top stories

## posts/reports

- [Track HN: analyze the survival rate of 120,396 Show HN stories (June 2023)](https://nami.land/2023/06/11/track-hn-analyze-survival-rate-of-120-396-show-hn-posts-june-2023.html)
- [Track HN: Score and Rank History (plus My Nocode Experiences)](https://nami.land/2024/05/10/track-hn-rank-history.html)

## help needed

I'm inviting sponsorship for computing and database resources to host a medium-load web application. I'm also open to explore other data analysis/visualization solutions. If you are interested, please [contact me](mailto:me@nami.land).

## feedbacks

[Github Discussions](https://github.com/orgs/track-hacker-news/discussions)

## gratitude

- [Retool](https://retool.com/) for sponsoring a database instance.
- [RoRvsWild](https://www.rorvswild.com/) for APM [dashboard](https://www.rorvswild.com/applications/136236/requests).

<script >
  {% include umami.js %}
</script>
