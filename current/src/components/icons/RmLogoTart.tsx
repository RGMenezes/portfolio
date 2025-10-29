import SvgLogoTart from "@pub/icons/LogoTart.svg";
import { IconType } from "react-icons";

const RmLogoTart: IconType = (props) => {
    const { color, size, className, ...rest } = props;

    return (
        <SvgLogoTart
            {...rest}
            fill={color || "currentColor"}
            width={size} 
            height={size} 
            className={className}
        />
    );
};
export default RmLogoTart;