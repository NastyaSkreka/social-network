import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div className = { classes.mainImg}>
                <img src="https://kipmu.ru/wp-content/uploads/prrda2-scaled.jpg" alt="background" />
            </div>
            <div className = {classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;