(function () {
  const projects = [
    {
      title: '三人協作 Twitter 社群媒體平台 ',
      image: './img/projects/TWITTER.JPG',
      imageAlt: '2penn',
      description: '以三人協作的方式，實做一個類似Twitter的社群媒體網站，使用者可以留言發文follow其他使用者',
      badgeCaption: 'Nextmeal',
      links: {
        github: 'https://github.com/michaelnctu/Restaurant-Forum-vue',
        githubpages: 'https://michaelnctu.github.io/Restaurant-Forum-vue/#/signin',
      },
      accomplishments: [
        'Built with Vue, Vuex, Vue Router',
        'Create maps using Google Maps API',
        'Chart.js for data visualization',
        'Using Axios, RESTful API',
        'Connect to third party payment APIs',
        'Node, Express, MySQL',
      ]
    },
    {
      title: '2Penn Plaza',
      image: './img/projects/2penn.JPG',
      imageAlt: '2penn',
      description: '負責facade外牆更新之應力設計與分析 重建 ',
      badgeCaption: 'Nextmeal',
      links: {
        github: 'https://github.com/michaelnctu/Restaurant-Forum-vue',
        githubpages: 'https://michaelnctu.github.io/Restaurant-Forum-vue/#/signin',
      },
      accomplishments: [
        'Built with Vue, Vuex, Vue Router',
        'Create maps using Google Maps API',
        'Chart.js for data visualization',
        'Using Axios, RESTful API',
        'Connect to third party payment APIs',
        'Node, Express, MySQL',
      ]
    },
    {
      title: 'W 135 50th street',
      image: './img/projects/135-50.JPG',
      imageAlt: 'Chrome Extension Project Cover Photo',
      description: '負責頂樓鋼結構活動空間設計，與一樓lobby擴高設計',
      links: {
        github: '',
        chrome: 'https://bit.ly/306Wp7b',
        medium: 'https://bit.ly/2GN6q1F'
      },
      accomplishments: [
        'Chrome Extension form scratch',
        'Published to Chrome Web Store',
        'Built with Bootstrap 4.3',
        'Using Javascript ES6'
      ]
    },
    {
      title: '空軍司令部福興營區興建案',
      image: './img/projects/BIM.jpg',
      imageAlt: 'Expense Tracker Project Cover Photo',
      description: '負責建築模型之建立與動畫建立，管線衝突分析',
      badgeCaption: 'Node.js & Express',
      links: {
        github: 'https://github.com/smallpaes/expense-tracker',
        heroku: 'https://boiling-beach-19178.herokuapp.com/',
        medium: 'https://bit.ly/2M679Q3'
      },
      accomplishments: [
        'Express Handlebars & Bootstrap',
        'MongoDB & Mongoose',
        'Passport Authentication',
        'Front-end & Back-end validation',
        'CSRF Protection',
        'Password reset & Mailing feature'
      ]
    },

  ]

  const blogPosts = [
    {
      name: '台灣學生會會長',
      link: 'https://www.roc-taiwan.org/usatl/post/7698.html',
      image: './img/about-me/20180908-GATech11.jpg'
    },
    {
      name: '交大校友會成員',
      link: '',
      image: './img/about-me/IMG_0556.JPG'
    },
    {
      name: '替代役管理幹部',
      link: '',
      image: './img/about-me/IMG_6234.JPG'
    },
    {
      name: 'Runner',
      link: '',
      image: './img/about-me/IMG_2863.JPG'
    }
  ]

  const nav = document.querySelector('nav')
  const navHeight = nav.offsetHeight
  const skillOffsetHeight = document.getElementById('skill').offsetTop
  const projectOffsetHeight = document.getElementById('project').offsetTop
  const actionBtn = document.querySelector('.fixed-action-btn a:first-of-type')
  let skillsAnimated = false
  let aboutCardPlaced = false
  let projectPlaced = false
  let learnMoreAnimated = false

  // Handle animation end
  function handleAnimationEnd(element, animations) {
    element.classList.remove(...animations)
  }

  // Handle navbar animation
  function animateNav() {
    if (window.pageYOffset > navHeight) { return nav.classList.add('blue-grey', 'lighten-3', 'shadow') }
    nav.classList.remove('blue-grey', 'lighten-3', 'shadow')
  }

  // Handle floating action button
  function showFloatingActionButton() {
    if (window.pageYOffset > navHeight) { return actionBtn.classList.remove('scale-out') }
    actionBtn.classList.add('scale-out')
  }

  // Handle about cards animation
  function animateAboutCards() {
    if (window.pageYOffset <= navHeight) { return }
    // switch status to placed
    aboutCardPlaced = true
    // get about section
    const aboutSection = document.querySelector('.section-about .row')
    // generate html for each blog post
    blogPosts.forEach(post => {
      // place post
      aboutSection.innerHTML += `
        <div class="col s12 m6 xl3">
          <div class="card animated jackInTheBox slow">
            <a href="${post.link}" target="_blank">
              <div class="card-image" style="background-image: url(${post.image});">
                <div class="overlay"></div>
                <span class="card-title">
                  ${post.name}
                </span>
              </div>
            </a>
          </div>
        </div>
      `
    })
  }

  // Handle skill section animation
  function animateSkills() {
    if (window.pageYOffset + window.innerHeight <= skillOffsetHeight) { return }
    const firstSkillSection = document.getElementById('front-end-carousel-item')
    const animations = ['animated', 'slideInRight']
    skillsAnimated = true
    firstSkillSection.classList.add(...animations)
    firstSkillSection.addEventListener('animationend', () => handleAnimationEnd(event.target, animations))
  }

  // Handle learn more section animation
  function animateLearnMore() {
    const learnMoreOffsetHeight = document.getElementById('more-info').offsetTop
    if (window.pageYOffset + window.innerHeight <= learnMoreOffsetHeight) { return }
    const buttons = document.querySelectorAll('.learn-more-link a')
    const animations = ['animated', 'bounceIn', 'slow']
    learnMoreAnimated = true
    buttons.forEach(button => button.classList.add(...animations))
  }

  // Generate icons of link
  function getIconLinks(links) {
    let icons = ``
    if (links.github) {
      icons += `<a href=${links.github} class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fab fa-github"></i></a>`
    }
    if (links.medium) {
      icons += `<a href=${links.medium} class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i
                  class="fab fa-medium-m"></i></a>`
    }
    if (links.chrome) {
      icons += `<a href=${links.chrome}
                class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fab fa-chrome"></i></a>`
    }
    if (links.heroku) {
      icons += `<a href=${links.heroku}
                class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fas fa-home"></i></a>`
    }
    return icons
  }

  function getAccomplishments(accomplishments) {
    return accomplishments.map(point => `<li><i class="fas fa-caret-right"></i>${point}</li>`).join('')
  }

  // Place all projects into project section
  function placeProjects() {
    // place projects when scroll to project section
    if (window.pageYOffset + window.innerHeight <= projectOffsetHeight) { return }
    // get elements
    const projectSection = document.querySelector('.section-project .row')
    // switch status to placed
    projectPlaced = true
    // generate html for each project
    projects.forEach(project => {
      // Get all icon links
      const icons = getIconLinks(project.links)
      // Gather all accomplishments
      const accomplishments = getAccomplishments(project.accomplishments)

      projectSection.innerHTML += `
        <div class="col s12 m6 animated flipInX">
          <div class="card sticky-action hoverable">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="responsive-img activator" src=${project.image}
                alt="${project.image} Project Cover Photo">
              <div class="overlay"></div>
         
            </div>
    
            </div>
          </div>
        </div>
        <div class="col m5 hide-on-med-and-down offset-m1 valign-wrapper">
          <h5 class="blue-grey-text text-darken-1">${project.title}</h5>
          <span class="blue-grey-text text-lighten-1">${project.description}</span>
        </div>
      `
    })
  }

  window.addEventListener('scroll', () => {
    animateNav()
    showFloatingActionButton()
    if (!aboutCardPlaced) { animateAboutCards() }
    if (!skillsAnimated) { animateSkills() }
    if (!projectPlaced) { placeProjects() }
    if (!learnMoreAnimated && projectPlaced) { animateLearnMore() }
  })
})()