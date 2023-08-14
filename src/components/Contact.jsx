import React from 'react'
const Contact = () => {
  return (
    <>
        <div className='contacts'>
            <form>
                <div className='innerdiv'>
                    <div>
                        <label>Name</label>
                        <input type="text" placeholder='Your Name' />
                    </div>
                    <div>
                        <label>Contact</label>
                        <input type="text" placeholder='Your Email' />
                    </div>
                    <div>
                        <label>Message</label>
                        <input type="text" placeholder='What do you want to tell us?' />
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default Contact