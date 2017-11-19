import React from 'react'
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

class Test extends React.Component {
  render() {
		return (
			<main>
      
        <Helmet>
          <meta charSet="utf-8" />
          <title>TEST</title>
        </Helmet>

				<h1 className="title">TEST</h1>

				<Link to='/'>
					<button>Home</button>
				</Link>

			</main>
		);
  }
}

export default Test;
