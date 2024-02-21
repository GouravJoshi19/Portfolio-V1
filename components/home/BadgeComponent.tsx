import Image from "next/image";

interface BadgeProp {
  src: string,
  alt: string,
  width: number,
  height: number
}
export default function BadgeComponent(args: BadgeProp) {
  return (
    <div className="ps-1 pe-2">
      <Image src={args.src} alt={args.alt} width={args.width} height={args.height} />
    </div>
  )
}