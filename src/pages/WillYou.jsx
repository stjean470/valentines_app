import React, { useState } from 'react'
import Lollipop from '../assets/valentineLollipops.jpg'
import { Button, Card, Label, Radio } from 'flowbite-react'
import DenialModal from '../components/DenialModal'
import AcceptModal from '../components/AcceptModal'
const WillYou = () => {
    const [isValentine, setIsValentine] = useState(null)
    const [showDenialModal, setShowDenialModal] = useState(false)
    const [showAcceptModal, setShowAcceptModal] = useState(false)
    const toggleValentine = () => { 
        console.log(isValentine)
        if(isValentine === 'yes') {
            setShowAcceptModal(true)
        } else if (isValentine === 'no') {
            setShowDenialModal(true)
        }else {
            alert('So you not gonna pick an option?')
        }
    }
  return (
    <>
        <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${showDenialModal || showAcceptModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {showDenialModal && <DenialModal showModal={showDenialModal} setShowModal={setShowDenialModal}/>}
            {showAcceptModal && <AcceptModal showModal={showAcceptModal} setShowModal={setShowAcceptModal}/>}
        </div>
        <div className='w-full flex flex-col justify-center items-center'
            style={{
                backgroundImage: `url(${Lollipop})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh'
            }}>
            
            <Card className='bg-pink-200/80 border-2 border-red-400 flex flex-col justify-center items-center'>
                <h2 className='md:text-3xl sm:text-2xl text-xl font-bold mb-4 text-center'>Will You Be My Valentine?</h2>
                <form className='flex justify-around'>
                    <div>
                        <Label htmlFor="yes">Yes</Label>
                        <Radio id="yes" name="valentine" value="yes" onChange={(e) => setIsValentine(e.target.value)}/>
                    </div>
                    <div>
                        <Label htmlFor="no">No</Label>
                        <Radio id="no" name="valentine" value="no" onChange={(e) => setIsValentine(e.target.value)}/>
                    </div>
                </form>
                <Button onClick={toggleValentine} className='mt-4' color='pink'>Submit</Button>
            </Card>  
        </div>
    </>
  )
}

export default WillYou