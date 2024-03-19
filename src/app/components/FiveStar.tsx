import Image from 'next/image'

export default function FiveStar() {
    return (
        <>
        <div className="flex mt-5">
            <div className='w-6 h-6 relative bottom-1 ml-0'>
              <Image
                  src="/newstar.png"
                  alt="Sushi Store"
                  width={60} // Specify width
                  height={60} // Specify height
                  objectFit="contain" // Adjust based on preference
                  priority
              />
            </div>
            <div className='w-6 h-6 relative bottom-1 ml-3'>
              <Image
                  src="/newstar.png"
                  alt="Sushi Store"
                  width={60} // Specify width
                  height={60} // Specify height
                  objectFit="contain" // Adjust based on preference
                  priority
              />
            </div>
            <div className='w-6 h-6 relative bottom-1 ml-3'>
              <Image
                  src="/newstar.png"
                  alt="Sushi Store"
                  width={60} // Specify width
                  height={60} // Specify height
                  objectFit="contain" // Adjust based on preference
                  priority
              />
            </div>
            <div className='w-6 h-6 relative bottom-1 ml-3'>
              <Image
                  src="/newstar.png"
                  alt="Sushi Store"
                  width={60} // Specify width
                  height={60} // Specify height
                  objectFit="contain" // Adjust based on preference
                  priority
              />
            </div>
            <div className='w-6 h-6 relative bottom-1 ml-3'>
              <Image
                  src="/newstar.png"
                  alt="Sushi Store"
                  width={60} // Specify width
                  height={60} // Specify height
                  objectFit="contain" // Adjust based on preference
                  priority
              />
            </div>
          </div>
        </>
    )
}