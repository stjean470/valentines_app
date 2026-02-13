import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import Tom from '../assets/tom.jpg'
import Yay from '../assets/kids-saying-yay-sound-effect.mp3'
const AcceptModal = (props) => {
    const { showModal, setShowModal } = props;
      const [isLoaded, setIsLoaded] = useState(false);
      const audioRef = useRef(null);
    
      useEffect(() =>  {
        audioRef.current = new Audio(Yay);
        if (showModal && audioRef.current) {
            console.log("Playing audio...");
          audioRef.current.play().catch((error) => {
            console.error("Error playing audio:", error);
          });
        }
      }, [showModal])
  return (
    <>
        <Modal className="transition-all duration-500 ease-in-out" show={showModal} onClose={() => setShowModal(false)} dismissible popup>
            <div className='animate-fadeIn'>
                <ModalHeader className='text-center'>YES!!!</ModalHeader>
                <ModalBody>
                    <div className="space-y-6">
                        <img 
                            className='rounded-lg' 
                            src={Tom} 
                            alt="Tom from Tom and Jerry with heart eyes" 
                            style={{
                                width: '100%',
                                height: '60%'
                            }}
                                
                        />
                        <audio ref={audioRef} src={Yay}/>
                        <p className='text-center'>Thank you for saying yes baby! I love you so much!</p>
                    </div>
                </ModalBody>
                    
                <ModalFooter className='flex justify-center'>
                    <Button color="pink" onClick={() => setShowModal(false)}>Love You!</Button>   
                </ModalFooter>
            </div>
        </Modal>
    </>
  )
}

export default AcceptModal