import './App.scss'
import Header from './app/components/layout/Header/Header'
import Bestseller from './app/components/screens/Bestseller/Bestseller'
import Intro from './app/components/screens/Intro/Intro'
import Popular from './app/components/screens/Popular/Popular'

function App() {
	return (
		<div className='App'>
			<Header />
			<Intro />
			<Popular />
            <Bestseller/>
		</div>
	)
}

export default App
