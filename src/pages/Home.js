
import Presentation from '../components/Home/Presentation'
import Menu from '../components/Home/Menu'
//styles
import '../components/Home/styles.css'
import Connection from '../components/Home/Connection'

const Home = () => {
    return (
        <>
            <Menu />
            <Presentation />
            <Connection />
        </>
    )
}

export default Home