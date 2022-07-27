import React from 'react';
import './footer.css'

function Footer() {
  return (
    <div className='footer__container'>
      <footer className="ph3 ph4-ns pv6 bt b--black-10 black-70">
        <a href="mailto:" className="link b f3 f2-ns dim white-70 lh-solid">rajeev@email.com</a>
        <p className="f6 db b ttu lh-solid white">© 2018 Vkedu.</p>
        <div className="mt5">
          <a href="/language/" title="Language" className="f6 dib pr2 mid-gray dim">Language</a>
          <a href="/terms/"    title="Terms" className="f6 dib ph2 mid-gray dim">Terms of Use</a>
          <a href="/privacy/"  title="Privacy" className="f6 dib pl2 mid-gray dim">Privacy</a>
        </div>
      </footer>
    </div>
  )
}

export default Footer