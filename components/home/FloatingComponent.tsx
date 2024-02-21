import { Git, Github, Jupyter, Kaggle } from "@/public/assets/user/jupyter";
import { Numpy } from "@/public/assets/user/numpy";
import { Pandas } from "@/public/assets/user/pandas";
import { Python } from "@/public/assets/user/python";
import { Sk } from "@/public/assets/user/sk";
import { Button } from "@nextui-org/button";

export function FloatingComponent() {
  return (
    <div>
      <Button className="ms-2" size="lg" radius="sm" isIconOnly aria-label="scikit learn">
        <Sk />
      </Button>
      <Button className="ms-2" size="lg" radius="sm" isIconOnly aria-label="pandas">
        <Pandas />
      </Button>
      <Button className="ms-2" size="lg" radius="sm" isIconOnly aria-label="numpy">
        <Numpy />
      </Button>
      <Button className="ms-2" size="lg" radius="sm" isIconOnly aria-label="jupyter">
        <Jupyter />
      </Button>
      <Button className="ms-2" size="lg" radius="sm" isIconOnly aria-label="python">
        <Python />
      </Button>
      <Button className="ms-2" size="lg" radius="sm" isIconOnly aria-label="kaggle">
        <Kaggle />
      </Button>
      <Button className="ms-2" size="lg" radius="sm" isIconOnly aria-label="github">
        <Github />
      </Button>
      <Button className="ms-2" size="lg" radius="sm" isIconOnly aria-label="git">
        <Git />
      </Button>
    </div>
  )
}