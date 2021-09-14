import { skills } from '../Home/homeData'

const SkillsDescription = () => {
    return (
        <>
            {skills.map((data) => (
                <div className='container'>
                    <div className='cont_all_skills'>
                        <div className='container cont_skills'>
                            <div className='skills_icon'>
                                <img key={data.id} src={data.img} alt="" />
                            </div>
                            <div className='cont_desc'>
                                <p key={data.id} >{data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default SkillsDescription
