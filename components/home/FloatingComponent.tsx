import { Git, Github, Jupyter, Kaggle } from "@/public/assets/user/jupyter";
import { Numpy } from "@/public/assets/user/numpy";
import { Pandas } from "@/public/assets/user/pandas";
import { Python } from "@/public/assets/user/python";
import { Sk } from "@/public/assets/user/sk";
import { Button } from "@nextui-org/button";
import "@/app/globals.css"

export function FloatingComponent() {
  return (
    <div className="grid grid-cols-4 max-lg:grid-cols-2">
      <div className="transition-all delay-100 ease-in-out p-2 hover:-translate-y-6 cursor-pointer">
        <Button disabled className="ms-2" size="lg" radius="sm" isIconOnly aria-label="scikit learn">
          <Sk />
        </Button>
        <Button disabled className="ms-2" size="lg" radius="sm" isIconOnly aria-label="pandas">
          <Pandas />
        </Button>
      </div>
      <div className="transition-all delay-100 ease-in-out p-2 hover:-translate-y-6 cursor-pointer">
        <Button disabled className="ms-2" size="lg" radius="sm" isIconOnly aria-label="numpy">
          <Numpy />
        </Button>
        <Button disabled className="ms-2" size="lg" radius="sm" isIconOnly aria-label="jupyter">
          <Jupyter />
        </Button>
      </div>
      <div className="transition-all delay-100 ease-in-out p-2 hover:-translate-y-6 cursor-pointer">
        <Button disabled className="ms-2" size="lg" radius="sm" isIconOnly aria-label="python">
          <Python />
        </Button>
        <Button disabled className="ms-2" size="lg" radius="sm" isIconOnly aria-label="kaggle">
          <Kaggle />
        </Button>
      </div>
      <div className="transition-all delay-100 ease-in-out p-2 hover:-translate-y-6 cursor-pointer">
        <Button disabled className="ms-2" size="lg" radius="sm" isIconOnly aria-label="github">
          <Github />
        </Button>
        <Button disabled className="ms-2" size="lg" radius="sm" isIconOnly aria-label="git">
          <Git />
        </Button>
      </div>
    </div>
  )
}