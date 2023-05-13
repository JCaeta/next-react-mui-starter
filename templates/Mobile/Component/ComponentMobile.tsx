import PropTypes from 'prop-types';
import stylesPortrait from "./ComponentMobilePortrait.module.scss";
import stylesLandscape from "./ComponentMobileLandscape.module.scss";

export const ComponentMobile = (props: any) => {
    var styles: any = null;

    const setMode = () => {
        if(props.mode === "portrait"){
            styles = stylesPortrait;
        } else{
            styles = stylesLandscape;
        }
    }


    setMode();

    return (<>

    </>);
};

ComponentMobile.defaultProps =
{
    mode: "portrait",
}

ComponentMobile.propTypes = 
{
    mode: PropTypes.oneOf(["portrait", "landscape"]),
}