document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {
    var target = event.target

    if (!target) { return }
    if (target.href === undefined) { return }

    const data = {
      href: target.href,
    }

    umami.track('click', data)
  }, false)
})
