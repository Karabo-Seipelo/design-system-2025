import { FooterCopyrightProps } from "./interfaces";

const FooterCopyright: React.FC<FooterCopyrightProps> = ({ copyright }) => (
  <div
    className="font-normal text-sm text-center text-normal-900"
    dangerouslySetInnerHTML={{ __html: copyright }}
  />
);

export default FooterCopyright;
