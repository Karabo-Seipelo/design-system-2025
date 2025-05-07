import SubscribeNewsletter from "$/molecules/Form/SubscribeNewsletter";
import FooterColumns from "./FooterColumns";
import { FooterMultiColumnProps } from "./interfaces";
import Icon from "./Icon";

const FooterMultiColumn: React.FC<FooterMultiColumnProps> = ({
  form,
  columns,
}) => {
  return (
    <div className="flex flex-col gap-12 px-[16px]">
      <SubscribeNewsletter {...form} />
      <FooterColumns columns={columns} />
      <div className="flex flex-col gap-8">
        <div className="font-normal text-base text-neutral-500">
          &copy; 2024 StyleNest, Inc. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="">
            <Icon name="youtube" size="large" color="neutral" />
          </a>
          <a href="">
            <Icon name="instagram" size="large" color="neutral" />
          </a>
          <a href="">
            <Icon name="facebook" size="large" color="neutral" />
          </a>
          <a href="">
            <Icon name="github" size="large" color="neutral" />
          </a>
          <a href="">
            <Icon name="twitter" size="large" color="neutral" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterMultiColumn;
