import {useOddelki} from "../../App";
import {Oddelek} from "../../Modules/Oddelek";

interface OddelekOptionProps {
    id?: number;
}

export const OddelekOption = (props: OddelekOptionProps): JSX.Element => {
    const { oddelki } = useOddelki();
    return (
        <>
            <option value={0}>-- Izberi oddelek --</option>
            {oddelki.map((oddelek: Oddelek) => (
                <option key={oddelek.id} value={oddelek.id} selected={props.id === oddelek.id}>
                    {oddelek.ime}
                </option>
            ))}
        </>
    );
}