import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import SideEye from '../assets/flightSideEye.jpg'
import Fah from '../assets/fahhhhh-3.mp3'
const DenialModal = (props) => {
  const { showModal, setShowModal } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef(null);

  useEffect(() =>  {
    audioRef.current = new Audio(Fah);
    if (showModal && audioRef.current) {
        console.log("Playing audio...");
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  }, [showModal])

  return (
    <>
        <Modal className="transition-all duration-300 ease-in-out" show={showModal} onClose={() => setShowModal(false)} dismissible popup>
            <ModalHeader className='text-center'>NO???!!!</ModalHeader>
            <ModalBody>
                <div className="space-y-6">
                    <img 
                        className='rounded-lg' 
                        src={SideEye} 
                        alt="Youtuber Flight Reacts side eyeing" 
                        style={{
                            width: '100%',
                            height: '60%'
                        }}
                        
                    />
                    <audio ref={audioRef} src={Fah}/>
                    <p className='text-center'>Go back and say Yes!</p>
                </div>
            </ModalBody>
            
            <ModalFooter className='flex justify-center'>
                <Button color="pink" onClick={() => setShowModal(false)}>Okay I Will!</Button>   
            </ModalFooter>
        </Modal>
    </>
  )
}

export default DenialModal