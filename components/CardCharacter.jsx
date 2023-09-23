import { Card, CardHeader, CardBody, Image } from '@nextui-org/react'

const CardCharacter = ({
  id,
  name,
  thumbnail
}) => {
  return (
    <div>
      <Card className='m-2 py-2 w-60 h-68 md:w-64 lg:w-72 lg:h-80'>
        <CardHeader className='pb-0 pt-2 px-4 flex-col items-center' key={id}>
          <h4 className='font-bold text-large'>{name}</h4>
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
      </Card>
    </div>
  )
}

export default CardCharacter