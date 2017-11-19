import React from 'react'
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

class Home extends React.Component {
  render() {
		return (
			<main>

        <Helmet>
          <meta charSet="utf-8" />
          <title>HOME</title>
        </Helmet>

				<h1 className="title">HOME</h1>

				<Link to='/test'>
					<button>Test</button>
				</Link>

			</main>
		);
  }
}

export default Home;
