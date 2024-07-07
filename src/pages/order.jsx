import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Footer } from '../components/Footer/footer';
import { Header } from '../components/Header/Header';
import { Order } from '../components/Order/order';

const objednaneNapoje = async () => {
  const response = await fetch('http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image');
  const data = await response.json();
  const items = data.data
  console.log(items)
}

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false}/>
      <main className="order">
          <Order items={objednaneNapoje}/>
      </main>
    <Footer />
    </div>
  </div>
);



