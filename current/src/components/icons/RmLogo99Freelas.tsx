import { IconType } from "react-icons";
import SvgLogo99Freelas from "@pub/icons/Logo99freela.svg";

const RmLogo99Freelas: IconType = (props) => {
  const { color, size, className, ...rest } = props;

  return (
    <SvgLogo99Freelas
      {...rest}
      fill={color || "currentColor"}
      width={size} 
      height={size} 
      className={className}
    />
  );
};
export default RmLogo99Freelas;