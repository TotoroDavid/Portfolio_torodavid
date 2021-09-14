
import Presentation from '../components/Home/Presentation'
import Menu from '../components/Home/Menu'
//styles
import '../components/Home/styles.css'
import Connection from '../components/Home/Connection'
import Social from '../components/Home/Social'


const Home = () => {
    return (
        <>
            <Menu />
            <Presentation />
            <Connection />
            <Social />
        </>
    )
}

export default Home