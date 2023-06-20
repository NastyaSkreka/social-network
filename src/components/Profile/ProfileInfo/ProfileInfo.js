import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div className = { classes.mainImg}>
                <img src="https://kipmu.ru/wp-content/uploads/prrda2-scaled.jpg" alt="background" />
            </div>
            <div className = {classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;