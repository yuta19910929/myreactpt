import pic from'./img/logo512.png';
import Topimg from './components/Topimg';

function Topimage() {
  return (
		<div>
			<Topimg
				img={pic}
        alt={'MyReactPortfolio'}
			/>
		</div>
	);
}

export default Topimage;
