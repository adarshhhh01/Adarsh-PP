import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  Home,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Send,
  Sparkles,
  Sun,
  UserRound,
  X
} from 'lucide-react'
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa6'


const whatsappUrl =
  'https://wa.me/917974278003?text=Hi%20Adarsh%2C%20I%20would%20love%20to%20talk%20about%20a%20project.'

const technologies = [
  { name: 'React.js', icon: SiReact, color: '#61dafb' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#78b42b' },
  { name: 'MongoDB', icon: SiMongodb, color: '#4db33d' },
  { name: 'Express.js', icon: SiExpress, color: '#d1defa' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'Vite', icon: SiVite, color: '#a78bfa' },
  { name: 'Java', icon: FaJava, color: '#f89820' },
  { name: 'Python', icon: SiPython, color: '#ffd343' },
  { name: 'Data Structures & Algorithms', icon: Code2, color: '#c9f075' },
  { name: 'Object-Oriented Programming', icon: Code2, color: '#a3bdf5' },
  { name: 'AI Agents & Tools', icon: Sparkles, color: '#d9a7ff' },
  { name: 'ChatGPT', icon: Sparkles, color: '#74aa9c' },
  { name: 'Claude', icon: Sparkles, color: '#d69b76' }
]

const projects = [
  {
    tag: 'SALON & BEAUTY ACADEMY',
    title: 'Muskan Salon & Academy',
    type: 'salon',
    desc: 'A polished salon and beauty academy experience showcasing professional services, elegant visual branding, and a welcoming client-focused presentation.',
    stack: ['React', 'Tailwind CSS', 'JavaScript'],
    url: 'https://muskan-salon-delta.vercel.app?_vercel_share=s4GzDCNn8a14jBUigMwH0AhpspoNHvu1'
  },
  {
    tag: 'CAFE WEBSITE',
    title: 'Highbrooks Cafe',
    type: 'cafe',
    desc: 'A responsive cafe website featuring an interactive menu, sample cart and order flow, outlet discovery, and table enquiry experience.',
    stack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    url: 'https://highbrookcafe.vercel.app?_vercel_share=FJc5pWy8KXX26qhRAruFFDqpr8j8dOBB',
    github: 'https://github.com/adarshhhh01/highbrookcafe'
  },
  {
    tag: 'HOTEL BOOKING WEBSITE',
    title: 'Stayora',
    type: 'stayora',
    desc: 'A premium hotel booking enquiry experience with room details, date and guest selection, enquiry validation, and WhatsApp handoff.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'GSAP'],
    url: 'https://stayora-ashy.vercel.app?_vercel_share=iF85i2FYCPomWVgfPR5FqGrCNgwOxQ8a',
    github: 'https://github.com/adarshhhh01/stayora'
  },
  {
    tag: 'MERN STACK',
    title: 'Uber Clone UI',
    type: 'ride',
    desc: 'A full-stack ride-booking experience with passenger and captain flows, real-time ride updates, location-based pickup and drop selection, and a responsive interface.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    url: 'https://uberclone1adarshnamdeo73-3672s.vercel.app?_vercel_share=OiaDeUqpfZuBARISf2Z6CgdZaZBCA6Ox'
  }
]

const faqs = [
  [
    'What kind of projects do you take on?',
    'I build responsive websites, dashboard experiences, real-time apps, and tailored MERN products for founders, teams, and growing brands.'
  ],
  [
    'How do we begin a project?',
    'Send a short brief on WhatsApp. I will reply with questions, a suggested approach, timeline, and clear next steps.'
  ],
  [
    'Can you work with an existing design?',
    'Yes. I can turn a Figma design or an existing product into an accessible, polished front end and connect it to a backend when needed.'
  ],
  [
    'Do you offer ongoing support?',
    'Absolutely. I can help with iterations, new features, performance tuning, and handover after the initial launch.'
  ]
]

function Loader ({ done }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const timer = window.setInterval(
      () =>
        setValue(current => {
          if (current >= 100) {
            window.clearInterval(timer)
            window.setTimeout(done, 260)
            return 100
          }
          return Math.min(
            100,
            current + Math.max(1, Math.round((100 - current) / 9))
          )
        }),
      54
    )
    return () => window.clearInterval(timer)
  }, [done])
  return (
    <motion.div
      className='loader'
      exit={{
        y: '-105%',
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      <div className='loader-grid' />
      <div className='loader-content'>
        <span className='eyebrow text-accent'>BOOTING A NEW DIMENSION</span>
        <div className='loader-count'>
          <span>{String(value).padStart(3, '0')}</span>
          <small>%</small>
        </div>
        <div className='loader-line'>
          <motion.div animate={{ width: `${value}%` }} />
        </div>
      </div>
      <p className='loader-credit'>ADARSH NAMDEO / PORTFOLIO 2025</p>
    </motion.div>
  )
}

function Reveal ({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32, scale: 0.97, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function RotatingWord () {
  const words = ['web products.', 'real-time apps.', 'digital stories.']
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const timer = setInterval(
      () => setIndex(value => (value + 1) % words.length),
      2600
    )
    return () => clearInterval(timer)
  }, [])
  return (
    <span className='word-window'>
      <AnimatePresence mode='wait'>
        <motion.span
          key={words[index]}
          initial={{ y: 22, rotateX: -80, opacity: 0, filter: 'blur(5px)' }}
          animate={{ y: 0, rotateX: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -22, rotateX: 80, opacity: 0, filter: 'blur(5px)' }}
          transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function HeroOrb () {
  const x = useMotionValue(0),
    y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 110, damping: 20 })
  const springY = useSpring(y, { stiffness: 110, damping: 20 })
  const rotateY = useTransform(springX, [-0.5, 0.5], [-80, 80])
  const rotateX = useTransform(springY, [-0.5, 0.5], [80, -80])
  function move (event) {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left) / rect.width - 0.5)
    y.set((event.clientY - rect.top) / rect.height - 0.5)
  }
  return (
    <motion.div
      className='orb-scene'
      onPointerMove={move}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{ rotateX, rotateY }}
    >
      <div className='orbit orbit-a' />
      <div className='orbit orbit-b' />
      <div className='orbit orbit-c' />
      <div className='orb'>
        <i />
        <i />
        <b>01</b>
      </div>
      <div className='orb-card orb-card-top'>
        <Code2 size={15} /> BUILD
      </div>
      <div className='orb-card orb-card-bottom'>
        <Sparkles size={15} /> SHIP
      </div>
      <div className='orb-shine' />
    </motion.div>
  )
}

function ProjectVisual ({ type }) {
  return (
    <div className={`project-visual visual-${type}`} aria-hidden='true'>
      {type === 'tracker' && (
        <>
          <div className='map-grid' />
          <span className='map-path' />
          <span className='map-pin' />
        </>
      )}
      {type === 'salon' && (
        <div className='browser-preview salon-preview'>
          <div className='preview-browserbar'><i /><i /><i /><span>muskan-salon-delta.vercel.app</span></div>
          <div className='salon-preview-hero'>
            <small>MUSKAN SALON & ACADEMY</small>
            <b>Beauty, care<br />& confidence.</b>
            <span>DISCOVER OUR SERVICES　 ↗</span>
          </div>
          <div className='salon-preview-bottom'>
            <div><b>01</b><span>HAIR & STYLING</span></div>
            <div><b>02</b><span>SKIN CARE</span></div>
            <div><b>03</b><span>BEAUTY ACADEMY</span></div>
          </div>
        </div>
      )}
      {type === 'cafe' && (
        <div className='browser-preview cafe-preview'>
          <div className='preview-browserbar'><i /><i /><i /><span>thehighbrookscafe.com</span></div>
          <div className='cafe-preview-hero'>
            <small>THE HIGHBROOKS · CAFE</small>
            <b>Coffee, food<br />& conversations.</b>
            <span>DISCOVER THE MENU　 ↗</span>
          </div>
          <div className='cafe-preview-bottom'>
            <div><small>OUR MENU</small><b>Good things<br />on the table.</b></div>
            <div className='cafe-food-photo' />
            <div className='cafe-preview-menu'><span>☕ COFFEE</span><span>✦ FOOD</span><span>✧ SOMETHING SWEET</span></div>
          </div>
        </div>
      )}
      {type === 'stayora' && (
        <div className='browser-preview stayora-preview'>
          <div className='preview-browserbar'><i /><i /><i /><span>stayora-ashy.vercel.app</span></div>
          <div className='stayora-nav'><b>stayora<span>.</span></b><small>STAYS　 ROOMS　 EXPERIENCES</small><em>ENQUIRE ↗</em></div>
          <div className='stayora-hero'>
            <small>A BOUTIQUE STAY EXPERIENCE</small>
            <b>Stay somewhere<br /><i>extraordinary.</i></b>
            <span>Thoughtful details. Unhurried moments.</span>
          </div>
          <div className='stayora-booking'><span>CHECK IN　 12 NOV</span><span>CHECK OUT　 14 NOV</span><b>FIND YOUR STAY　↗</b></div>
        </div>
      )}
      {type === 'finance' && (
        <>
          <div className='finance-ring' />
          <div className='finance-panel'><span>Budget</span><b>+24.8%</b><i /></div>
        </>
      )}
      {type === 'ride' && (
        <div className='browser-preview ride-preview'>
          <div className='preview-browserbar'><i /><i /><i /><span>uber · ride booking</span></div>
          <div className='ride-screen'>
            <div className='ride-screen-nav'><b>Uber<span>●</span></b><small>RIDE　 EARN　 HELP</small></div>
            <div className='ride-screen-content'><div><small>YOUR RIDE, ON DEMAND</small><b>Go anywhere.<br/>Get there.</b><span>Pickup　　Destination</span><em>FIND A RIDE　↗</em></div><div className='ride-map'><i/><i/><i/><b>●</b></div></div>
          </div>
        </div>
      )}
      {type === 'reviews' && (
        <div className='review-window'><span /><span /><span /><div className='stars'>★ ★ ★ ★ ★</div><b>4.9</b></div>
      )}
    </div>
  )
}

function SiteCursor () {
  const [active, setActive] = useState(false)
  const [label, setLabel] = useState('')
  const x = useMotionValue(-100),
    y = useMotionValue(-100)
  const smoothX = useSpring(x, { stiffness: 500, damping: 35 }),
    smoothY = useSpring(y, { stiffness: 500, damping: 35 })
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const move = event => {
      x.set(event.clientX)
      y.set(event.clientY)
      const project = event.target.closest('.project-card')
      const interactive = event.target.closest(
        'a, button, .project-card, .tech-chip, .faq-item'
      )
      setActive(Boolean(interactive))
      setLabel(project ? 'Explore' : interactive ? 'Open' : '')
    }
    const leave = () => setActive(false)
    window.addEventListener('pointermove', move)
    document.documentElement.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [x, y])
  return (
    <motion.div
      className='site-cursor'
      style={{ x: smoothX, y: smoothY }}
      animate={{ opacity: 1, scale: active ? 1 : 0.55 }}
    >
      <i />
      <motion.span
        animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.7 }}
      >
        {label}
        {label && <ArrowUpRight size={14} />}
      </motion.span>
    </motion.div>
  )
}

function TechRail ({ direction = 'left', offset = 0 }) {
  const list = useMemo(
    () => [...technologies.slice(offset), ...technologies.slice(0, offset)],
    [offset]
  )
  return (
    <div className={`tech-rail ${direction === 'right' ? 'rail-right' : ''}`}>
      <div className='tech-track'>
        {[...list, ...list].map(({ name, icon: Icon, color }, i) => (
          <div className='tech-chip' key={`${name}-${i}`}>
            <Icon style={{ color }} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Faq ({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'is-open' : ''}`}>
      <button aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <span className='faq-plus'>{open ? '−' : '+'}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24 }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Dock ({ dark, toggleTheme }) {
  const nav = [
    ['Home', '#home', Home],
    ['About', '#about', UserRound],
    ['Skills', '#skills', Layers3],
    ['Work', '#work', BriefcaseBusiness],
    ['Contact', '#contact', Mail]
  ]
  return (
    <nav className='dock' aria-label='Quick navigation'>
      {nav.map(([label, href, Icon]) => (
        <a href={href} key={label} data-label={label}>
          <Icon size={19} />
        </a>
      ))}
      <button
        onClick={toggleTheme}
        data-label={dark ? 'Light mode' : 'Dark mode'}
        aria-label='Toggle colour theme'
      >
        {dark ? <Sun size={19} /> : <Moon size={19} />}
      </button>
    </nav>
  )
}

function App () {
  const [loading, setLoading] = useState(true)
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [formState, setFormState] = useState({ kind: '', text: '' })
  const workRef = useRef(null)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])
  const closeMenu = () => setMenuOpen(false)
  async function sendMessage (event) {
    event.preventDefault()
    setFormState({ kind: 'loading', text: 'Sending…' })
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_URL || 'http://localhost:5000'
        }/api/contact`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
        }
      )
      const body = await response.json()
      if (!response.ok) throw new Error(body.message)
      setForm({ name: '', email: '', message: '' })
      setFormState({ kind: 'success', text: body.message })
    } catch (error) {
      setFormState({
        kind: 'error',
        text: error.message || 'Could not send — please use WhatsApp.'
      })
    }
  }
  return (
    <>
      <AnimatePresence>
        {loading && <Loader done={() => setLoading(false)} />}
      </AnimatePresence>
      <main>
        <header className='site-header'>
          <a className='brand' href='#home' aria-label='Adarsh Namdeo home'>
            ADARSH NAMDEO<span>°</span>
          </a>
          <nav className='desktop-nav' aria-label='Main navigation'>
            <a href='#about'>About</a>
            <a href='#skills'>Tech</a>
            <a href='#work'>Work</a>
            <a href='#contact'>Contact</a>
          </nav>
          <div className='header-actions'>
            <a
              className='header-talk'
              href={whatsappUrl}
              target='_blank'
              rel='noreferrer'
            >
              Let's talk <ArrowUpRight size={16} />
            </a>
            <button
              className='menu-button'
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label='Open navigation'
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className='mobile-menu'
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
              >
                {['About', 'Skills', 'Work', 'Contact'].map(label => (
                  <a
                    key={label}
                    href={`#${
                      label === 'Skills' ? 'skills' : label.toLowerCase()
                    }`}
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <section id='home' className='hero section-shell'>
          <div className='hero-copy'>
            <motion.p
              className='availability'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              <i /> AVAILABLE FOR SELECT FREELANCE WORK
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              I build
              <br />
              <em>digital depth.</em>
            </motion.h1>
            <motion.p
              className='hero-intro'
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.6 }}
            >
              I’m <strong>ADARSH NAMDEO</strong>, a full-stack freelancer
              designing memorable <RotatingWord />
            </motion.p>
            <motion.div
              className='hero-actions'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <a className='button button-primary' href='#work'>
                Explore my work <ArrowDownRight size={18} />
              </a>
              <a
                className='text-link'
                href='/resume_adarsh_namdeo_26-11-26.docx'
                target='_blank'
                rel='noreferrer'
                >
                View resume <Download size={15} />
              </a>
            </motion.div>
          </div>
          <HeroOrb />
          <div className='hero-side-note'>
            <span>SCROLL TO EXPLORE</span>
            <i />
          </div>
          <div className='hero-index'>
            01 <span>/ 05</span>
          </div>
        </section>

        <section id='about' className='about'>
          <div className='section-shell'>
            <Reveal>
              <p className='section-kicker'>
                <span>01</span> HELLO, I’M ADARSH NAMDEO
              </p>
            </Reveal>
          </div>
          <div className='profile-stage section-shell'>
            <div className='profile-word' aria-hidden='true'>
              WEB
              <br />
              DEVELOPER
            </div>
            <Reveal className='portrait-wrap'>
              <div className='portrait-card'>
                <img
                  src='/adarsh-portrait.png'
                  alt='ADARSH NAMDEO overlooking the coast'
                />
                <div className='portrait-shine' />
                <p>ADARSH NAMDEO · FULL-STACK FREELANCER</p>
              </div>
            </Reveal>
            <Reveal className='profile-copy' delay={0.16}>
              <h2>
                Code with
                <br />
                <em>character.</em>
              </h2>
              <p>
                A passionate full-stack developer from Jabalpur, Madhya Pradesh.
                I turn ambitious ideas into intuitive, polished websites and
                products people want to use.
              </p>
              <p>
                My sweet spot is sharp visual systems, practical engineering,
                and thoughtful interaction design.
              </p>
              <div className='stat-row'>
                <div>
                  <b>
                    10<span>+</span>
                  </b>
                  <small>skills mastered</small>
                </div>
                <div>
                  <b>
                    05<span>+</span>
                  </b>
                  <small>projects shipped</small>
                </div>
                <div>
                  <b>
                    100<span>%</span>
                  </b>
                  <small>curious learner</small>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id='skills' className='tech-section'>
          <div className='section-shell tech-heading'>
            <Reveal>
              <p className='section-kicker'>
                <span>02</span> MY TOOLKIT
              </p>
              <h2>
                Technology,
                <br />
                <em>with depth.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                I use the right tools for the job — with a special love for the
                MERN stack, clean interfaces, and fast feedback loops.
              </p>
            </Reveal>
          </div>
          <div className='rails' aria-label='Technology list'>
            <TechRail offset={0} />
            <TechRail direction='right' offset={3} />
            <TechRail offset={6} />
          </div>
          <div className='section-shell knowledge-grid'>
            <Reveal>
              <div className='knowledge-card accent-card'>
                <span>MERN STACK</span>
                <b>
                  MongoDB
                  <br />
                  Express.js
                  <br />
                  React.js
                  <br />
                  Node.js
                </b>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className='knowledge-card'>
                <span>FOUNDATIONS</span>
                <b>
                  Java · Python · OOP
                  <br />
                  DSA · REST APIs
                  <br />
                  Git · GitHub
                </b>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className='knowledge-card code-card'>
                <span>AI AGENT TOOLS</span>
                <b>
                  ChatGPT
                  <br />
                  Claude
                  <br />
                  AI-assisted workflows
                </b>
              </div>
            </Reveal>
          </div>
        </section>

        <section id='work' className='work section-shell'>
          <Reveal>
            <div className='work-heading'>
              <div>
                <p className='section-kicker'>
                  <span>03</span> SELECTED WORK
                </p>
                <h2>
                  Built to be
                  <br />
                  <em>remembered.</em>
                </h2>
              </div>
              <a
                href={whatsappUrl}
                target='_blank'
                rel='noreferrer'
                className='round-link'
                aria-label='Start a project'
              >
                <ArrowUpRight />
              </a>
            </div>
          </Reveal>
          <div className='projects-grid' ref={workRef}>
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.08}>
                <div className='project-card-wrap'>
                <a
                  className='project-card'
                  href={project.url || '#contact'}
                  target={project.url ? '_blank' : undefined}
                  rel={project.url ? 'noreferrer' : undefined}
                  aria-label={`Open ${project.title}`}
                >
                  <ProjectVisual type={project.type} />
                  <div className='project-content'>
                    <span>{project.tag}</span>
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <div>
                      {project.stack.map(item => (
                        <small key={item}>{item}</small>
                      ))}
                    </div>
                    {project.url && (
                      <strong className='project-open'>
                        VIEW LIVE SITE <ArrowUpRight size={14} />
                      </strong>
                    )}
                  </div>
                </a>
                {project.github && (
                  <a className='project-source-link' href={project.github} target='_blank' rel='noreferrer'>
                    <Github size={13} /> SOURCE CODE
                  </a>
                )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className='services section-shell'>
          <Reveal>
            <p className='section-kicker'>
              <span>04</span> WHAT I DO
            </p>
          </Reveal>
          <div className='service-list'>
            {[
              [
                '01',
                'Web experiences',
                'Fast, responsive websites that make the first impression count.'
              ],
              [
                '02',
                'MERN development',
                'End-to-end products from database design to refined user flows.'
              ],
              [
                '03',
                'Real-time systems',
                'Live, connected experiences powered by modern web technologies.'
              ]
            ].map(([n, title, copy], index) => (
              <Reveal key={n} delay={index * 0.1}>
                <article>
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <ArrowUpRight />
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className='faq section-shell'>
          <Reveal>
            <p className='section-kicker'>
              <span>05</span> FAQ
            </p>
            <h2>
              A few good
              <br />
              <em>questions.</em>
            </h2>
          </Reveal>
          <div className='faq-list'>
            {faqs.map(([question, answer], i) => (
              <Reveal key={question} delay={i * 0.05}>
                <Faq question={question} answer={answer} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id='contact' className='contact'>
          <div className='contact-orb' />
          <div className='section-shell contact-layout'>
            <Reveal>
              <div className='contact-copy'>
                <p className='section-kicker'>
                  <span>06</span> START A CONVERSATION
                </p>
                <h2>
                  Let’s make
                  <br />
                  <em>something real.</em>
                </h2>
                <p>
                  Have a project in mind, a problem to solve, or an idea worth
                  exploring? I’d love to hear it.
                </p>
                <a
                  className='whatsapp-link'
                  href={whatsappUrl}
                  target='_blank'
                  rel='noreferrer'
                >
                  <MessageCircle /> Chat on WhatsApp <ArrowUpRight size={18} />
                </a>
                <div className='socials'>
                  <a href='mailto:adarshnamdeo76@gmail.com'>
                    <Mail /> Email
                  </a>
                  <a
                    href='https://github.com/adarshhhh01'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Github /> GitHub
                  </a>
                  <a
                    href='https://www.linkedin.com/in/adarsh-namdeo-390700251/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Linkedin /> LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <form className='contact-form' onSubmit={sendMessage}>
                <label>
                  YOUR NAME
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder='What should I call you?'
                  />
                </label>
                <label>
                  EMAIL ADDRESS
                  <input
                    required
                    type='email'
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder='you@company.com'
                  />
                </label>
                <label>
                  TELL ME A LITTLE
                  <textarea
                    required
                    rows='4'
                    value={form.message}
                    onChange={e =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder='A few words about your project…'
                  />
                </label>
                <button
                  className='button button-primary'
                  disabled={formState.kind === 'loading'}
                >
                  {formState.text || 'Send message'} <Send size={16} />
                </button>
                {formState.kind === 'error' && (
                  <p className='form-error'>{formState.text}</p>
                )}
                {formState.kind === 'success' && (
                  <p className='form-success'>{formState.text}</p>
                )}
              </form>
            </Reveal>
          </div>
        </section>
        <footer className='footer'>
          <div className='section-shell footer-inner'>
            <a className='footer-name' href='#home'>
              <span>ADARSH</span>
              <span>NAMDEO</span>
            </a>
            <div className='footer-orbit'>
              <i />
              <i />
              <b>✦</b>
            </div>
            <div className='footer-meta'>
              <p>
                © {new Date().getFullYear()} ADARSH NAMDEO
                <br />
                DESIGNED & DEVELOPED WITH INTENT.
              </p>
              <a href='#home'>
                BACK TO TOP <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </footer>
      </main>
      <Dock dark={dark} toggleTheme={() => setDark(!dark)} />
      <SiteCursor />
    </>
  )
}

export default App
