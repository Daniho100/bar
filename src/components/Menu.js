import React from 'react'
import asia1 from '../img/asia1.jpg'
import asia2 from '../img/asia2.jpg'
import asia3 from '../img/asia3.jpg'
import con1 from '../img/con1.jpg'
import con2 from '../img/con2.jpg'
import con3 from '../img/con3.jpg'
import okra from '../img/okra.jpg'
import egu from '../img/egu.jpg'
import './menu.css'

const Form = () => {
    return (
        <div>
            <p></p>
        <h1 className='head' align='center '>Meals Menu</h1>
        <div className='container header' align='center'>
           <div className='row'>

                 <div className='col-lg-3 form-group'>
                     <label for="image" className="form-label">Meat soup</label>
                     <img src={asia1} height={300} width={400} alt="" className="form-control" id='image' />
                 </div>

                  <div className='col-lg-3'>
                  <label for="image" className="form-label">Spaghetti</label>
                     <img src={asia2} height={300} width={400} alt="" className="form-control" id='image' />
                  </div>
        
                  <div className='col-lg-3'>
                  <label for="image" className="form-label">Spaghetti with cheese</label>
                     <img src={asia3} height={300} width={400} alt="" className="form-control" id='image' />
                   </div>
                
                   <div className='col-lg-3'>
                   <label for="image" className="form-label">Confetti</label>
                     <img src={con1} height={300} width={400} alt="" className="form-control" id='image' />
                   </div>
                   
                   <div className='col-lg-3 form-group'>
                     <label for="image" className="form-label">Chicken and vegetable salad</label>
                     <img src={con2} height={300} width={400} alt="" className="form-control" id='image' />
                 </div>

                  <div className='col-lg-3'>
                  <label for="image" className="form-label">Chicken and sauce</label>
                     <img src={con3} height={300} width={400} alt="" className="form-control" id='image' />
                  </div>
        
                  <div className='col-lg-3'>
                  <label for="image" className="form-label">Okra soup</label>
                     <img src={okra} height={300} width={400} alt="" className="form-control" id='image' />
                   </div>
                
                   <div className='col-lg-3'>
                   <label for="image" className="form-label">Egusi and Fufu</label>
                     <img src={egu} height={300} width={400} alt="" className="form-control" id='image' />
                   </div>
                   
            </div>
        </div>
        </div>
    )
}

export default Form
