import SvgLogo from "@pub/icons/Logo.svg";
import { IconType } from "react-icons";

const RmLogo: IconType = (props) => {
    const { color, size, className, ...rest } = props;

    return (
        <SvgLogo
            {...rest}
            fill={color || "currentColor"}
            width={size} 
            height={size} 
            className={className}
        />
    );
};
export default RmLogo;