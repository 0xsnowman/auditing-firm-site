import React from "react";
// import { Text } from "ui/atoms";

interface IAddressLabelProps {
    shortened: boolean;
    address: string;
};

const AddressLabel:React.FC<IAddressLabelProps> = ({ shortened, address }) => {
    if (shortened) {
        return <>{address.substr(0, 5) + "..." + address.substr(address.length - 4, 4)}</>
    }

    return (
        <>{address}</>
    );
};

export default AddressLabel;