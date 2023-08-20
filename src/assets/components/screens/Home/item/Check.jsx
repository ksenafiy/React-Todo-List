import {BsCheck} from 'react-icons/bs'
import cn from 'classnames'

const Check = ({isCompleted}) => {
    return(
        <div className={cn(`border-2 rounded-lg border-red-700 w-6 h-6 mr-3 flex items-center justify-center`, 
        {
            'bg-red-700': isCompleted
        })}>
            {isCompleted && <BsCheck size={24} className='text-gray-900' />}
        </div>
    )
}

export default Check