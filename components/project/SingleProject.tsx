import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
type prop = {
  link: string
  skill: string[]
  detail: string
  img: string
}
export function SingleProject({ link, skill, detail, img }: prop) {
  return (
    <Card className="w-11/12 mb-5 shadow-3xl rounded-3xl mt-5 max-lg:w-full">
      <CardHeader className="overflow-hidden p-0 h-[200px]">
        <Image className="object-contain" radius="none" isZoomed src={img} alt="diamond" />
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-3 mt-3 px-1 max-lg:grid-cols-2">
          {
            skill.map((data, index) => (
              <Button disabled className="mx-1 my-1" size="sm" key={index} variant="flat" color="primary">{data}</Button>
            ))
          }
        </div>
        <div className="flex flex-col mt-3 ps-3 text-sm font-semibold text-[#767676]">
          <p>{detail}</p>
          <Link className="text-sm font-semibold my-3" isExternal showAnchorIcon href={link}>Live Demo</Link>
        </div>
      </CardBody>
    </Card>
  )
}
type data = {
  links: string[],
  detail: string[],
  img: string[],
  skill: string[][]
}
export function SingleWrapper({ links, detail, img, skill }: data) {
  return (
    detail.map((d, i) => (
      <SingleProject key={i} link={links[i]} img={img[i]} skill={skill[i]} detail={detail[i]} />
    ))
  )
}