const name = document.getElementById('name'),
  head = document.querySelector('header'),
  ctrl = document.querySelector('.ctrl'),
  progressContainer = document.getElementById('progresscontainer')

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
const progressBars = document.querySelectorAll('.progress')

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        progressBars.forEach((bar) => {
          bar.style.width = '0%'
          setTimeout(() => {
            const level = bar.dataset.label
            bar.style.display = 'block'
            bar.style.width = level + '%'
          }, 300)
        })
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.5 }
)

observer.observe(progressContainer)
