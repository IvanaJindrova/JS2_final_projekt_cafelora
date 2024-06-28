import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/banner';
import { Menu } from '../components/Menu/menu';
import { Gallery } from '../components/Gallery/gallery';
import { Contact } from '../components/Contact/contact';
import { Footer } from '../components/Footer/footer';



document.addEventListener('click', () => {
  const navBtn = document.querySelector('.nav-btn')
  const rolloutNav = document.querySelector('.rollout-nav')
      
    navBtn.addEventListener('click', () => {
      if (rolloutNav.classList.contains('nav-closed')) {
          rolloutNav.classList.remove('nav-closed')
      } else {
          rolloutNav.classList.add('nav-closed')
      }
  })
    rolloutNav.addEventListener('click', () => {
        rolloutNav.classList.add('nav-closed')
      })
  })


document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />

  </div>
);
