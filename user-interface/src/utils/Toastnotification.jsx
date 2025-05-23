import React from 'react'
import { Toast, useToast } from '@chakra-ui/react'

function Toastnotification() {
    const toast = useToast()

    const showToast = (title, description, status = 'success') => {
        Toast({
            title,
            description,
            status,
            duration: 3000,
            isClosable: true,
            position: 'top-right',
        })
    }
    return {showToast}

}

export default Toastnotification






















