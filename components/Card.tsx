import Image from "next/image";
import Modal from "./Modal";

interface CardProps {
  job: string;
  btn: string;
  content: string[];
  title: string;
  src: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <>
      <div className="shadow-xl lg:w-[14rem] lg:h-[16rem] max-[600px]:h-[16rem] px-10 rounded-lg bg-gray text-blue-90 dark:bg-gray-10">
        <div className="mt-10">
          <div>
            <div>
              <div className="ml-3">
                <Image
                  src={props.src}
                  alt={props.title}
                  width={35}
                  height={35}
                  className="w-[35px] h-[35px]"
                />
              </div>
              <h3 className="text-2xl max-[600px]:text-lg font-semibold my-5 text-blue-90">
                {props.job}
              </h3>
            </div>
          </div>
          <div>
            {" "}
            <Modal
              buttonLabel={props.btn}
              content={props.content}
              title={props.title}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
