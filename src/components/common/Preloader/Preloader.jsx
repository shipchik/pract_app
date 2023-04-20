import preloader from './../../../img/preloader.svg'
import style from './Preloader.module.css'

let Preloader = (props) => {
    return <div> < img className={style.fetchingIMG} alt="nothing" src={preloader} /> </div>
}

export default Preloader;