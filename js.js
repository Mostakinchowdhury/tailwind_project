const name = document.getElementById('name'),
  head = document.querySelector('header'),
  ctrl = document.querySelector('.ctrl'),
  progressContainer = document.getElementById('progresscontainer'),
  loader = document.getElementById('loader')

window.onload = () => {
  loader.classList.remove('fixed')
  loader.classList.add('hidden')
}
// Header scroll effect
window.addEventListener('scroll', () => {
  let { top } = ctrl.getBoundingClientRect()
  if (top < 0) {
    name.classList.remove('invisible')
    head.classList.add('header-bg')
  } else {
    head.classList.remove('header-bg')
    name.classList.add('invisible')
  }
})

// Progress bar animation when in view

document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress')
  const progressContainer = document.getElementById('progresscontainer')

  // Scroll observer
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressBars.forEach((bar) => {
            bar.style.width = '0%'
            setTimeout(() => {
              bar.style.display = 'block'
              bar.style.width = bar.dataset.label + '%'
            }, 100)
          })
          obs.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 }
  )

  if (progressContainer) observer.observe(progressContainer)
})
