import { ChatIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/image';

function Post({ name, message, email, postImage, image, timestamp }) {
    return (
        <div className='flex flex-col'>
            <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-md'>
                <div className='flex items-center space-x-2'>
                    <img
                        className="rounded-full"
                        src={image}
                        width={40}
                        height={40}
                        alt=""
                    />
                    <div>
                        <p className='font-medium'>{name}</p>
                        <p className='text-xs text-gray-400'>
                            {new Date(timestamp?.toDate()).toLocaleDateString()}
                        </p>
                    </div>
                </div>
                <p className='p-4'>{message}</p>
            </div>
            {postImage && (
                <div className='relative h-56 md:h-96 bg-white'>
                    <Image src={postImage} objectFit='cover' layout='fill' />
                </div>
            )}
            <div className='flex 
            justify-between 
            items-center 
            rounded-b-2xl
             bg-white 
             shadow-md 
             text-gray-400 border-t'>
                <div className='inputIcon  rounded-bl-2x-l'>
                    <ThumbUpIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Like</p>
                </div>
                <div className='inputIcon rounded-bl-2x-1'>
                    <ChatIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Comment</p>
                </div>
                <div className='inputIcon  rounded-br-xl'>
                    <ShareIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post
