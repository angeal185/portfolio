
const xdata = {
  default:{
    title: 'Portfolio',
    version: '1.0.0', // don't delete me
    origin: 'http://localhost:8000',
    params: true,
    error: '/error',
    base_path: '/dashboard',
    delete_meta: 10000,
    webmanifest: './manifest.webmanifest',
    base_script_name: 'main',
    styles:[{
      href: './app/css/bootstrap.min.css',
      rel: 'stylesheet'
    },{
      href: './app/css/main.css',
      rel: 'stylesheet'
    }],
    js_head:[],
    js_body:[],
    storage: {
      max_age: 9999999999,
      prefix: 'rt'
    },
    stream: {
      download: {
        type: 'text/plain',
        charset: 'utf-8'
      },
      fetch: {
        method: 'GET',
        mode: 'no-cors',
        redirect: 'error',
        referrer: 'no-referrer',
        //integrity: 'sha384-'
        headers: {
          'Content-Type': 'application/json',
          'Sec-Fetch-Dest': 'object'
        }
      }
    }
  },
  base:{
    nav:[{
      name: 'contact',
      ico: 'envelope'
    }],
    nav_sb: ['dashboard', 'works', 'skills', 'about', 'resume', 'blog', 'links'],
    animations: 'https://angeal185.github.io/animated-ajax-carosel-portfolio'
  },
  dashboard: {
    msg: 'dashboard page',
    url: "./api/dashboard.json"
  },
  about: {
    msg: 'About',
    url: "./api/about.json"
  },
  works: {
    msg: 'works page',
    url: "./api/works.json"
  },
  skills: {
    msg: 'skills page',
    url: "./api/skills.json"
  },
  blog: {
    msg: 'silence is golden'
  },
  resume: {
    msg: 'Resume',
    url: "./api/resume.json"
  },
  links: {
    msg: 'links page',
    url: "./api/links.json"
  }
}

export { xdata }