'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import type { RootState } from './redux/store'
import { useSelector ,useDispatch} from 'react-redux'
import { increment,decrement,incrementByAmount } from './redux/features/counterSlice'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main>

        {count}
      <button className='bg-blue-400 px-3 py-2 mx-2' onClick={()=>dispatch(increment)}>inc</button>

        <button className='bg-blue-400 px-3 py-2 mx-2' onClick={()=>dispatch(decrement)}>inc</button>
        <button className='bg-blue-400 px-3 py-2 mx-2'    onClick={() => dispatch(incrementByAmount(2))}>inc by n   </button>

    </main>
  )
}
