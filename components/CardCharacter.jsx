import { Card, CardHeader, CardBody, Image, CardFooter } from '@nextui-org/react'

const CardCharacter = ({
  id,
  name,
  thumbnail,
  variants=null
}) => {
  return (
    <div>
      <Card className='m-2 py-2 w-60 h-68 md:w-64 lg:w-72 bg-black dark:bg-white'>
        <CardHeader className='pb-0 pt-2 px-4 flex-col items-center' key={id}>
          <h4 className='font-bold text-large text-white dark:text-black'>{name}</h4>
        </CardHeader>
        <CardBody className='overflow-visible py-2'>
          <Image
            alt='Card background'
            className='object-cover w-[248] h-60 rounded-xl'
            src={thumbnail}
            width={248}
            height={210}
            layout='responsive'
          />
        </CardBody>
        {variants &&
          <CardFooter className='text-white dark:text-black text-sm flex flex-col justify-start'>
            {variants.length > 0 ? (
              <p className='w-full'>{variants[0].name}</p>
            ) : <p>This comic has no variants.</p>}
          </CardFooter>
        }
      </Card>
    </div>
  )
}

export default CardCharacter