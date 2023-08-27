import style from './form.module.css'
import icon from './camera.svg'
import Image from 'next/image'

export default function Form() {
    return (
        <section className={style.containerForm}>
                <p><span>Highlight your agency on our directory now!</span></p>
                <p>Complete your profile</p>
                <form className={style.form}>
                    <label>What`s the name of your agency?</label>
                    <input type='text' placeholder='e.g., "Digital Marketing Experts"'/>
                    <label>What does your agency specialize in?</label>
                    <select>
                        <option selected>1Pioneer Solutions</option>
                        <option>1Prime Finance</option>
                        <option>1Planet EcoTech</option>
                        <option>1Power Innovations</option>
                        <option>1Petal Floral Design</option>
                    </select>
                    <label>What is the size of your agency?</label>
                    <select>
                        <option selected>1Pioneer Solutions</option>
                        <option>1Prime Finance</option>
                        <option>1Planet EcoTech</option>
                        <option>1Power Innovations</option>
                        <option>1Petal Floral Design</option>
                    </select>
                    <label>Where is it located?</label>
                    <select>
                        <option selected>1Pioneer Solutions</option>
                        <option>1Prime Finance</option>
                        <option>1Planet EcoTech</option>
                        <option>1Power Innovations</option>
                        <option>1Petal Floral Design</option>
                    </select>
                    <label>Tell us about your agency in a few sentences.</label>
                    <textarea></textarea>
                    <label>Upload your logo.</label>
                    <button><Image alt='icon' src={icon} width={18} height={18}/> Upload here</button>
                </form>
        </section>
    )
}