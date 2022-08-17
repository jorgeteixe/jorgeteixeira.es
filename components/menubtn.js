import Image from 'next/image'

function MenuBtn() {
  return (
    <div className="cursor-pointer">
      <Image src="/menu-icon.svg" height={40} width={40} alt="Menu icon." />
    </div>
  )
}

export default MenuBtn
