import React, { useState } from 'react'
import Card from './Card'
import Card2 from './Card2'
import './form.css'
const Form = () => {

    
    //for Form1
            const [submitting, setSubmitting] = useState(false);
            
            const [data, setData] = useState({
                firstName: "",
                lastName: "",
                email: "",
                deliveryAddress: "",
               phoneNumber: "",
            })

       const [submittedData, setSubmittedData ] = useState(null);

      const onChangeHandler =(event)=> {
          const {value, name} = event.target
          
          setData({
             ...data,
             [name]: value
          })

        }

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true)
                   setSubmittedData(data)
console.log(submittedData);  setTimeout(() => {
            setSubmitting(false);
        }, 3000)
    }

    //for Form2

    const [submittingData, setSubmittingData] = useState(false);

    const [menu, setMenu] = useState({
        meal: "",
        topping: "",
        quantity: "",
       smeal: "",
       drinks: "",
    })

    const [submitData, setSubmitData] = useState(null);

    const onChangeHandle =(event)=> {
        const {value, name} = event.target
        
        setMenu({
           ...menu,
           [name]: value
        })

      }

    const SubmitHandler = event => {
        event.preventDefault();
        setSubmittingData(true)
                   setSubmitData(menu)
console.log(submitData);  setTimeout(() => {
            setSubmittingData(false);
        }, 3000)
    }

    return (
        
         <div>
      <div className="container">
          <div className="row">
          <div className="col-lg-6 md-6 sm-3">

              <div className="px-4 py-5 my-5 text-center">
                  <h1 className="display-5 fw-bold header">CUSTOMER INFO</h1>
                  <p></p>
                  
                  {submitting &&
                      <p className="lead mb-4">
                          <span className="spinner-border" role="status">
                              <span className="visually-hidden">Loading...</span>
                          </span>
                          <span className="mx-1">Submitting form...</span>
                      </p>
                      }
                        
                  <form onSubmit={handleSubmit} className=" row g-3 shadow-sm p-3 mb-5 bg-body rounded form">
                      
                      <div className="col-md-6 col">
                          <label htmlFor='fullname' className="form-label">First name</label>
                          <input type="text" className="form-control" id="firstname" placeholder='First name' name="firstName" value={data.firstName} onChange={onChangeHandler}/>
                      </div>
                      <div className="col-md-6 ">
                          <label htmlFor='fullname' className="form-label">Last name</label>
                          <input type="text" className="form-control" id="firstname" placeholder='Last name' name="lastName" value={data.lastName} onChange={onChangeHandler}/>
                      </div>
                      <div className="col-md-6 ">
                          <label htmlFor='fullname' className="form-label">Email</label>
                          <input type="text" className="form-control" id="firstname" placeholder='Email' name="email" value={data.email} onChange={onChangeHandler}/>
                      </div>
                      <div className="col-md-6">
                          <label htmlFor='valid' className="form-label">Valid Till</label>
                          <input type="text" className="form-control" id="email" placeholder='+44 798 6738' name="phone" value={data.phone} onChange={onChangeHandler}/>
                      </div>

                      <div className="col-md-12">
                      <label htmlFor='cardNumber' className="form-label">Delivery Address</label>
                     <input type="text" className="form-control" id="lastname" placeholder='34 Lincoln Avenue' name="deliveryAddress" value={data.deliveryAddress} onChange={onChangeHandler}/>
                      </div>

                      <div className="col-12" >
                          <button type="submit" className=" btn btn-primary button">SUBMIT</button>
                      </div>
                  </form>
                  </div>
                
                  
                  {submittedData !== null && <Card data={submittedData}/> }
             
             </div>
            
          <div className="col-lg-6 md-6 sm-3">
              <div className="px-4 py-5 my-5 text-center">
                  <h1 className="display-5 fw-bold header">YOUR ORDER</h1>
                  <p></p>
                  
                  {submittingData &&
                      <p className="lead mb-4">
                          <span className="spinner-border" role="status">
                              <span className="visually-hidden">Loading...</span>
                          </span>
                          <span className="mx-1">Submitting form...</span>
                      </p>
                      }
                        
                  <form onSubmit={SubmitHandler} className="row g-3 shadow-sm p-3 mb-5 bg-body rounded">
                      
                      <div className="col-md-6 ">
                          <label htmlFor='fullname' className="form-label">Meal</label>
                          <input type="text" className="form-control" id="firstname" placeholder='Fried Chicken' name="meal" value={menu.meal} onChange={onChangeHandle}/>
                      </div>
                      <div className="col-md-6 ">
                          <label htmlFor='fullname' className="form-label">Topping</label>
                          <input type="text" className="form-control" id="firstname" placeholder='Cheese or vegetables' name="topping" value={menu.topping} onChange={onChangeHandle}/>
                      </div>
                      <div className="col-md-6 ">
                          <label htmlFor='fullname' className="form-label">Quantity</label>
                          <input type="text" className="form-control" id="firstname" placeholder='3' name="quantity" value={menu.quantity} onChange={onChangeHandle}/>
                      </div>

                      <div className="col-md-6">
                          <label htmlFor='valid' className="form-label">Side meal</label>
                          <input type="text" className="form-control" id="email" placeholder='Salad' name="smeal" value={menu.smeal} onChange={onChangeHandle}/>
                      </div>

                      <div className="col-md-12">
                          <label htmlFor='valid' className="form-label">Drinks</label>
                          <input type="text" className="form-control" id="email" placeholder='Coke or Pepsi' name="drinks" value={menu.drinks} onChange={onChangeHandle}/>
                      </div>

                      <div className="col-12" >
                          <button type="submit" className=" btn btn-primary button">PLACE ORDER</button>
                      </div>
                  </form>
                  </div>
                
                  {submitData !== null && <Card2 menu={submitData}/> }
             
             </div>
             </div>
             </div>
             </div>  
         
    )
}

export default Form