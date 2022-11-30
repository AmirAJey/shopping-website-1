import { Card, SectionBox } from '../../components'
import { cards } from '../../data/dummy'

const Box = ({children, title}: {children: React.ReactNode, title: string}) => (
  <div className="flex flex-col gap-10">
    <h1 className="font-extrabold text-2xl poppins-font relative z-0 max-w-max">
      {title}
      <img src="assets/vector.png" alt="vector" className="w-20 absolute -z-10 right-0 bottom-0" />
    </h1>
    {children}
  </div>
)

const NewArrivalsSection = () => {
  return (
    <SectionBox title='NEW ARRIVALS'>
      <div className="grid grid-cols-3 grid-rows-1 gap-x-14">
            {
              cards.map(card => (
                <Card key={card.title} {...card} />
              ))
            }
          </div>
    </SectionBox>
  )
}

export default NewArrivalsSection