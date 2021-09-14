
import Presentation from '../components/Home/Presentation'
import Menu from '../components/Home/Menu'
//styles
import '../components/Home/styles.css'
import Connection from '../components/Home/Connection'
import Social from '../components/Home/Social'
import Footer from '../components/Home/Footer'


const Home = () => {
    return (
        <>
            <Menu />
            <Presentation />
            <Connection />
            <Social />
            <Footer />
        </>
    )
}

export default Home