import Navitem from './navitem'

const items = [
  {
    text: 'Posts',
    link: '#posts'
  },
  {
    text: 'Me',
    link: '#me'
  }
]

function Navbar() {
  return (
    <div className="flex justify-around">
      {items.map((v, i) => {
        return <Navitem key={i} {...v} />
      })}
    </div>
  )
}

export default Navbar
